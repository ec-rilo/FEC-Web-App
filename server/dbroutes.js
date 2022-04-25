const dbRouter = require('express').Router();
const controllers = require('./Controllers/controllers');

/* --------------------------- Products ---------------------------*/
dbRouter.get('/products/:product_id', (req, res) => controllers.product.getProduct(req, res));

/* --------------------------- Product Styles ---------------------------*/

dbRouter.get('/products/:product_id/styles', (req, res) => controllers.product.getStyles(req, res));

module.exports = dbRouter;
