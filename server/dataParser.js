require('dotenv').config();

const axios = require('axios');
const Promise = require('bluebird');
let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

var reviewData;
var config = {
  headers: {
    Authorization: process.env.GIT_TOKEN
  }
}

fetchProductsData = (productID, styled, related) => {
  return new Promise ((resolve, reject)=> {
    if (related) {
      axios.get(`${url}/products/${productID}/related`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
    } else if (styled) {
      axios.get(`${url}/products/${productID}/styles`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
    }
    else if (productID) {
      axios.get(`${url}/products/${productID}`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
    } else {
      axios.get(`${url}/products`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
    }
  })
}

fetchReviewsData = (productID = '65632') => {
  return new Promise ((resolve, reject) => {
    axios.get(`${url}/reviews?product_id=${productID}`, config)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  })
}

fetchQuestionsData = (productID = '65632') => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/qa/questions?product_id=${productID}`, config)
    .then(res => resolve(res.data))
    .catch(err=> reject(err))
  })
}

fetchAnswerData = (questionID = '573876') => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/qa/questions/${questionID}/answers`, config)
    .then(res => resolve(res.data))
    .catch(err=> reject(err))
  })
}

fetchCartData = () => {
  return new Promise((resolve, reject )=> {
    axios.get(`${url}/cart`, config)
    .then(res => resolve(res.data))
    .catch(err => reject(err))
  })
}

module.exports = {
  fetchProductsData,
  fetchReviewsData,
  fetchQuestionsData,
  fetchAnswerData,
  fetchCartData,
}