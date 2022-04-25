const { Pool } = require('pg');

const pool = new Pool({
  user: 'ecarrillo046',
  password: '12345',
  database: 'products',
});

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
      if (oldDataArr[i].style_id === style.id) {
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
    idArr.push(style.id);
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
    const productsQuery = 'SELECT * FROM Products WHERE Products.id = $1';
    const featuresQuery = 'SELECT * FROM Features WHERE Features.product_id = $1';
    const value = [id];

    const productsPromise = pool.query(productsQuery, value);
    const featuresPromise = pool.query(featuresQuery, value);

    Promise.all([productsPromise, featuresPromise])
      .then((values) => {
        const [data, features] = values;
        const newData = data.rows[0];
        newData.features = features.rows;

        resolve(newData);
      })
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
