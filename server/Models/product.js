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
    const query = 'SELECT * FROM Products WHERE Products.id = $1';
    const values = [id];
    pool.query(query, values)
      .then((data) => resolve(data.rows[0]))
      .catch((err) => reject(err));
  }),
};
