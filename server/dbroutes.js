const dbRouter = require('express').Router();
const controllers = require('./Controllers/controllers');

/* --------------------------- Products ---------------------------*/
dbRouter.get('/product', (req, res) => controllers.product.getProduct(req, res));

module.exports = dbRouter;
