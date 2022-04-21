const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
});

const featuresSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String,
});

const stylesSchema = new mongoose.Schema({
  id: Number,
  product_id: Number,
  sale_price: String,
  original_price: String,
  default_style: Boolean,
});

const imagesSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String,
});

const skusSchema = new mongoose.Schema({
  id: Number,
  style_id: Number,
  size: String,
  quantity: Number,
});

const relatedProductsSchema = new mongoose.Schema({
  related_products: [Number],
});

const Product = mongoose.model('Product', productSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const RelatedProducts = mongoose.model('RelatedProducts', relatedProductsSchema);
const Images = mongoose.model('Images', imagesSchema);
const Skus = mongoose.model('Skus', skusSchema);
const Features = mongoose.model('Features', featuresSchema);

module.exports = {
  Product, Styles, RelatedProducts, Images, Skus, Features,
};
