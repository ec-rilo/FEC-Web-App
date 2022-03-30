require('dotenv').config();

const axios = require('axios');

let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

var reviewData;
var config = {
  headers: {
    Authorization: process.env.GIT_TOKEN
  }
}
fetchProductsData = (productID, callback) => {
  console.log(productID)
  if (productID) {
    axios.get(`${url}/products/${productID}`, config)
    .then(res => {
      callback(null, res.data)
    })
    .catch(err => {
      console.log(err)
   })
  } else {
    axios.get(`${url}/products`, config)
    .then(res => {
      callback(null, res.data)
    })
    .catch(err => {
      console.log(err)
   })
  }
}

fetchReviewsData = (productID = '65632', callback) => {
  axios.get(`${url}/reviews?product_id=${productID}`, config)
  .then(res => {
    callback(null, res.data)
  })
  .catch(err => {
    console.error(err)
  })
}

fetchQuestionsData = (productID = '65632', callback) => {
  axios.get(`${url}/qa/questions?product_id=${productID}`, config)
  .then(res => {
    callback(null, res.data)
  })
  .catch(err=> {
    console.error(err)
  })
}

fetchCartData = (callback) => {
  axios.get(`${url}/cart`, config)
  .then(res => {
    callback(null, res.data)
  })
  .catch(err => {
    console.error(err)
  })
}

module.exports = {
  fetchProductsData,
  fetchReviewsData,
  fetchQuestionsData,
  fetchCartData
}