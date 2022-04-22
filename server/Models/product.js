const { Pool } = require('pg');

const pool = new Pool({
  user: 'ecarrillo046',
  password: '12345',
  database: 'products',
});

pool.connect()
  .then(() => console.log('connected to postgres!'))
  .catch((err) => console.log('failed to connect: ', err));

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
};
