const models = require('../Models/models');

const product = {
  getProduct: (req, res) => {
    const { id } = req.query;

    models.product.getSingleProduct(id)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  },
};

module.exports = product;
