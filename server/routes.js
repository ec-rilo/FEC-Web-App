const router = require('express').Router();
const fetchData = require('./dataParser');

router.get('/products', (req, res) => {
  let page = parseInt(req.query.page);
  let count = parseInt(req.query.count);
  fetchData.products.fetchProductsData(page, count)
    .then(result => res.send(result))
})

router.get('/products/:product_id', (req, res) => {
  let productID = req.params.product_id;
  fetchData.products.fetchProductIDData(productID)
    .then(result => res.send(result))
})

router.get('/products/:product_id/styles', (req, res) => {
  let productID = req.params.product_id;
  let style = true;
  fetchData.products.fetchProductIDData(productID, style)
    .then(result => res.send(result))
})

router.get('/products/:product_id/related', (req, res) => {
  let productID = req.params.product_id;
  let related = true;
  let styled = false
  fetchData.products.fetchProductIDData(productID, styled, related)
    .then(result => res.send(result))
})



// reviews
router.get('/reviews', (req, res) => {
  let productID = req.query.product_id;
  let page = req.query.page;
  let count = req.query.count;
  let sort = req.query.sort;
  fetchData.reviews.fetchReviewsData(productID, page, count, sort)
    .then(result => res.send(result))
})

router.get('/reviews/meta', (req, res) => {
  let productID = req.query.product_id;
  fetchData.reviews.fetchReviewMeta(productID)
    .then(result => res.send(result))
})

router.post('/reviews', (req, res) => {
  fetchData.reviews.addReview(req.body)
    .then(result => res.send(201))
})

router.put('/reviews/:review_id/helpful', (req, res) => {
  fetchData.reviews.markReviewAsHelpful(req.params.review_id)
    .then(result => res.send(204))
})

router.put('/reviews/:review_id/report', (req, res) => {
  fetchData.reviews.reportReview(req.params.review_id)
    .then(result => res.send(204))
})

// Questions and Answers
router.get('/qa/questions', (req, res) => {
  let productID = req.query.product_id;
  let page = req.query.page;
  let count = req.query.count;
  fetchData.questions.fetchQuestionsData(productID, page, count)
    .then(result => res.send(result))
})

router.get('/qa/questions/:question_id/answers', (req, res) => {
  let questionID = req.params.question_id;
  let answers = true;
  fetchData.questions.fetchAnswerData(questionID)
    .then(result => res.send(result))
})

router.post('/qa/questions', (req, res) => {
  fetchData.questions.addQuestion(req.body)
    .then(result => res.send(201))
})

router.post('/qa/questions/:question_id/answers', (req, res) => {
  fetchData.questions.addAnswer(req.params.question_id, req.body)
    .then(result => res.send(201))
})

router.put('/qa/questions/:question_id/helpful', (req, res) => {
  fetchData.questions.makeQuestionAsHelpful(req.params.question_id)
    .then(result => res.send(204))
})

router.put('/qa/questions/:question_id/report', (req, res) => {
  fetchData.questions.reportQuestion(req.params.question_id)
    .then(result => res.send(204))
})

router.put('/qa/answers/:answer_id/helpful', (req, res) => {
  fetchData.questions.makeAnswerAsHelpful(req.params.answer_id)
    .then(result => res.send(204))
})

router.put('/qa/answers/:answer_id/report', (req, res) => {
  fetchData.questions.reportAnswer(req.params.answer_id)
    .then(result => res.send(204))
})

// Cart
router.get('/cart', (req, res) => {
  fetchData.cart.fetchCartData()
    .then(result => res.send(result))
})
router.post('/cart', (req, res) => {
  fetchData.cart.addCart(req.body)
    .then(result => res.send(201))
})

module.exports = router;