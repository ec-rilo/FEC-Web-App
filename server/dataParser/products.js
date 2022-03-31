const axios = require('axios');
const Promise = require('bluebird');
let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp';

var config = {
  headers: {
    Authorization: process.env.GIT_TOKEN
  }
}

module.exports = {
  fetchProductsData (productID, styled, related) {
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
}