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

fetchReviewMeta = (productID = '65632') => {
  return new Promise((resolve, reject) => {
    axios.get(`${url}/rereviews/meta/product_id=${productID}`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

addReview = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/reviews`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

markReviewAsHelpful = (reviewID = '1136190') => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/reviews/${reviewID}/helpful`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

reportReview = (reviewID = '1136190') => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/reviews/${reviewID}/report`)
  }, config)
    .then(res => resolve(res))
    .catch(err => reject(err))
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

addQuestion = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/qa/questions`, data, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

addAnswer = (questionID, data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/qa/questions/${questionID}/answers
    `, data, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

makeQuestionAsHelpful = (questionID) => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/qa/questions/${questionID}/helpful
  `, config)
    .then(res => resolve(res))
    .catch(err => reject(err))
  })
}

reportQuestion = (questionID) => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/qa/questions/${questionID}/report`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}
makeAnswerAsHelpful = (answerID) => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/qa/answers/${answerID}/helpful`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

reportAnswer = (answerID) => {
  return new Promise((resolve, reject) => {
    axios.put(`${url}/qa/answers/${answerID}/report`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

fetchCartData = () => {
  return new Promise((resolve, reject )=> {
    axios.get(`${url}/cart`, config)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}
addCart = (id) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}/cart`, config)
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

module.exports = {
  fetchProductsData,
  fetchReviewsData,
  fetchReviewMeta,
  markReviewAsHelpful,
  reportReview,
  fetchQuestionsData,
  fetchAnswerData,
  addQuestion,
  addAnswer,
  makeQuestionAsHelpful,
  reportQuestion,
  makeAnswerAsHelpful,
  reportAnswer,
  fetchCartData,
  addCart
}