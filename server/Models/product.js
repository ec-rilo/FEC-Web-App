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
    const query = `
    SELECT json_build_object(
      'product_id', style.product_id,
      'results', (SELECT
        json_agg(
          json_build_object(
            'style_id', Styles.style_id,
            'product_id', Styles.product_id,
            'name', Styles.name,
            'original_price', Styles.original_price,
            'default?', Styles.default_style,
            'photos', (SELECT
              json_agg(
                json_build_object(
                  'url', Photos.url,
                  'thumbnail_url', Photos.thumbnail_url
                )
              )
              FROM Photos WHERE Styles.product_id = $1 AND Photos.style_id = Styles.style_id
            )
          )
        )
        FROM Styles WHERE Styles.product_id = $2
      )
    )
    FROM Styles AS style
      WHERE style.product_id = $3 LIMIT 1
    `;

    pool.query(query, [productId, productId, productId])
      .then((data) => {
        resolve(data.rows[0].json_build_object);
      })
      .catch((err) => reject(err));
  }),
};
