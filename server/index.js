require('dotenv').config()

const express = require('express');

const app = express();

const PORT = 3000 || process.env.PORT;
const fetchData = require('./dataParser.js')


app.use(express.static('client/dist')); // serve up the static files like index.html
app.use(express.json());

// Products
app.get('/products', (req, res) => {
  let productID = null
  fetchData.fetchProductsData(productID)
    .then(result => res.send(result))
})

app.get('/products/:product_id', (req, res) => {
  let productID = req.params.product_id;
  fetchData.fetchProductsData(productID)
    .then(result => res.send(result))
})

app.get('/products/:product_id/styles', (req, res) => {
  let productID = req.params.product_id;
  let style = true;
  fetchData.fetchProductsData(productID, style)
    .then(result => res.send(result))
})

app.get('/products/:product_id/related', (req, res) => {
  let productID = req.params.product_id;
  let related = true;
  let styled = false
  fetchData.fetchProductsData(productID, styled, related)
    .then(result => res.send(result))
})



// reviews
app.get('/reviews', (req, res) => {
  let productID = req.query.product_id;
  fetchData.fetchReviewsData(productID)
    .then(result => res.send(result))
})

app.get('/reviews/meta', (req, res) => {
  let productID = req.query.product_id;
  fetchData.fetchReviewMeta(productID)
    .then(result => res.send(result))
})

app.post('/reviews', (req, res) => {
  fetchData.addReview(req.body)
    .then(result => res.send(201))
})

app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log(req.params.review_id)
  fetchData.markReviewAsHelpful(req.params.review_id)
    .then(result => res.send(204))
})

app.put('/reviews/:review_id/report', (req, res) => {
  fetchData.reportReview(req.params.review_id)
    .then(result => res.send(204))
})

// Questions and Answers
app.get('/qa/questions', (req, res) => {
  let productID = req.query.product_id;
  fetchData.fetchQuestionsData(productID)
    .then(result => res.send(result))
})

app.get('/qa/questions/:question_id/answers', (req, res) => {
  let questionID = req.params.question_id;
  let answers = true;
  fetchData.fetchAnswerData(questionID)
    .then(result => res.send(result))
})

app.post('/qa/questions', (req, res) => {
  fetchData.addQuestion(req.body)
    .then(result => res.send(201))
})

app.post('/qa/questions/:question_id/answers', (req, res) => {
  fetchData.appAnswer(req.params.question_id, req.body)
    .then(result => res.send(201))
})

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  fetchData.makeQuestionAsHelpful(req.params.question_id)
    .then(result => res.send(204))
})

app.put('/qa/questions/:question_id/report', (req, res) => {
  fetchData.reportQuestion(req.params.question_id)
    .then(result => res.send(204))
})

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  fetchData.makeAnswerAsHelpful(req.params.answer_id)
    .then(result => res.send(204))
})

app.put('/qa/answers/:answer_id/report', (req, res) => {
  fetchData.reportAnswer(req.parmas.answer_id)
    .then(result => res.send(204))
})

// Cart
app.get('/cart', (req, res) => {
  fetchData.fetchCartData()
    .then(result => res.send(result))
})
app.post('/cart', (req, res) => {
  fetchData.addCart(req.body)
    .then(result => res.send(201))
})


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
