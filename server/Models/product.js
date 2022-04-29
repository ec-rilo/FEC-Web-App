const { Pool } = require('pg');

const credentials = {
  user: process.env.pg_user,
  database: 'products',
  password: process.env.pg_pass,
};

const pool = new Pool(credentials);

pool.connect()
  .then(() => console.log('connected to postgres!'))
  .catch((err) => console.log('failed to connect: ', err));

const createUnionQueryStr = (arr, tableName) => {
  let combinedQuery = '';

  arr.forEach((style, index) => {
    const photosQuery = `(SELECT * FROM ${tableName} WHERE ${tableName}.style_id = $${index + 1})`;
    if (index !== arr.length - 1) {
      combinedQuery = `${combinedQuery + photosQuery}\nUNION ALL\n`;
    } else {
      combinedQuery = `${combinedQuery + photosQuery};`;
    }
  });

  return combinedQuery;
};

const filterIntoArr = (oldArr, oldDataArr) => {
  const arr = [];

  oldArr.forEach((style) => {
    let sliceLength = 0;

    for (let i = 0; i < oldDataArr.length; i++) {
      if (oldDataArr[i].style_id === style.style_id) {
        sliceLength = i + 1;
      } else {
        break;
      }
    }

    const newArr = oldDataArr.splice(0, sliceLength);
    arr.push(newArr);
  });

  return arr;
};

const getIdArr = (arr) => {
  const idArr = [];

  arr.forEach((style) => {
    idArr.push(style.style_id);
  });

  return idArr;
};

function SkuNode(obj) {
  this.style_id = obj.style_id;
  this.quantity = obj.quantity;
  this.size = obj.size;
}

const makeSkusObj = (arr) => {
  const skus = {};

  arr.forEach((obj) => {
    const SkuObj = new SkuNode(obj);
    skus[obj.id] = SkuObj;
  });

  return skus;
};

const convertToSkuObjs = (arr) => {
  let newArr = arr.slice();

  newArr = newArr.map((subArr) => {
    const skusObj = makeSkusObj(subArr);
    return skusObj;
  });

  return newArr;
};

module.exports = {
  getSingleProduct: (id) => new Promise((resolve, reject) => {
    const query = `
    SELECT json_build_object(
      'id', data.id,
      'name', data.name,
      'slogan', data.slogan,
      'description', data.description,
      'category', data.category,
      'default_price', data.default_price,
      'features', (SELECT json_agg(row_to_json(Features)) FROM Features WHERE Features.product_id = $1)
    )
    FROM
      Products AS data WHERE data.id = $2;
      `;
    const value = [id, id];

    pool.query(query, value)
      .then((data) => resolve(data.rows[0].json_build_object))
      .catch((err) => reject(err));
  }),
  getAllStyles: (productId) => new Promise((resolve, reject) => {
    const stylesQuery = 'SELECT * FROM Styles WHERE Styles.product_id = $1';
    const stylesObj = {};

    pool.query(stylesQuery, [productId])
      .then((styles) => {
        stylesObj.results = styles.rows;

        const photosQuery = createUnionQueryStr(stylesObj.results, 'Photos');
        const idArr = getIdArr(stylesObj.results);
        return pool.query(photosQuery, idArr);
      })
      .then((data) => {
        const photosArr = data.rows;
        const arrOfPhotos = filterIntoArr(stylesObj.results, photosArr);

        arrOfPhotos.forEach((arr, index) => {
          stylesObj.results[index].photos = arr;
        });

        const skusQuery = createUnionQueryStr(stylesObj.results, 'Skus');
        const idArr = getIdArr(stylesObj.results);
        return pool.query(skusQuery, idArr);
      })
      .then((data) => {
        const skusArr = data.rows;
        let arrOfSkus = filterIntoArr(stylesObj.results, skusArr);
        arrOfSkus = convertToSkuObjs(arrOfSkus);

        arrOfSkus.forEach((skusObj, index) => {
          stylesObj.results[index].skus = skusObj;
        });

        resolve(stylesObj);
      })
      .catch((err) => reject(err));
  }),
};
