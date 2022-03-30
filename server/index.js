require('dotenv').config()

const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;
const fetchData = require('./dataParser.js')


app.use(express.static('client/dist')); // serve up the static files like index.html
app.use(express.json());

// products
app.get('/products', (req, res) => {
  let productID = null
  fetchData.fetchProductsData(productID, (err, result) => {
    if(!err) {
      res.send(result)
    }
  })
})
app.get('/products/:product_id', (req, res) => {
  let productID = req.params.product_id;
  fetchData.fetchProductsData(productID, (err, result) => {
    if(!err) {
      res.send(result)
    }
  })
})


// reviews
app.get('/reviews', (req, res) => {
  let productID = req.query.product_id;
  fetchData.fetchReviewsData(productID, (err, result) => {
      if(!err) {
        console.log(result)
        res.send(result)
      }
    })
})

// Questions and Answers
app.get('/qa/questions', (req, res) => {
  let productID = req.query.product_id;
  fetchData.fetchQuestionsData(productID, (err, result) => {
    if(!err) {
      res.send(result)
    }
  })
})

// Cart
app.get('/cart', (req, res) => {
  fetchData.fetchCartData((err, result) => {
    if(!err) {
      res.send(result)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
