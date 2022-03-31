require('dotenv').config();

const axios = require('axios');
const Promise = require('bluebird');
let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

var config = {
  headers: {
    Authorization: process.env.GIT_TOKEN
  }
}
const products = require('./products.js');
const reviews = require('./reviews.js');
const cart = require('./cart.js');
const questions = require('./questions.js')


module.exports = {
  products,
  reviews,
  questions,
  cart
}