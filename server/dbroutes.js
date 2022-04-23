const { Pool } = require('pg');
const dbRouter = require('express').Router();
const controllers = require('./Controllers/controllers');

/* --------------------------- Products ---------------------------*/
dbRouter.get('/product', (req, res) => controllers.product.getProduct(req, res));

/* --------------------------- Product Styles ---------------------------*/

const pool = new Pool({
  user: 'ecarrillo046',
  password: '12345',
  database: 'products',
});

// HELPERS
const createPhotosQueryStr = (obj) => {
  let combinedQuery = '';

  obj.results.forEach((style, index) => {
    const photosQuery = `(SELECT * FROM Photos WHERE Photos.style_id = $${index + 1})`;
    if (index !== obj.results.length - 1) {
      combinedQuery = `${combinedQuery + photosQuery}\nUNION ALL\n`;
    } else {
      combinedQuery = `${combinedQuery + photosQuery};`;
    }
  });

  return combinedQuery;
};

const createArrOfPhotos = (obj, oldPhotosArr) => {
  const arr = [];

  obj.results.forEach((style) => {
    let sliceLength = 0;

    for (let i = 0; i < oldPhotosArr.length; i++) {
      if (oldPhotosArr[i].style_id === style.id) {
        sliceLength = i + 1;
      } else {
        break;
      }
    }

    const newArr = oldPhotosArr.splice(0, sliceLength);
    arr.push(newArr);
  });

  return arr;
};

const getAllStyles = (productId) => new Promise((resolve, reject) => {
  const stylesQuery = 'SELECT * FROM Styles WHERE Styles.product_id = $1';
  const value = [productId];
  const stylesObj = {};

  pool.query(stylesQuery, value)
    .then((styles) => {
      const idArr = [];
      stylesObj.results = styles.rows;

      const photosQuery = createPhotosQueryStr(stylesObj);

      stylesObj.results.forEach((style) => {
        idArr.push(style.id);
      });

      return pool.query(photosQuery, idArr);
    })
    .then((data) => {
      const photosArr = data.rows;
      const arrOfPhotos = createArrOfPhotos(stylesObj, photosArr);

      arrOfPhotos.forEach((arr, index) => {
        stylesObj.results[index].photos = arr;
      });

      resolve(stylesObj);
    })
    .catch((err) => reject(err));
});

const getStyles = (req, res) => {
  const id = req.params.product_id;
  getAllStyles(id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

dbRouter.get('/product/:product_id/styles', (req, res) => getStyles(req, res));

module.exports = dbRouter;
