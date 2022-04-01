import React, { useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { StarIcon } from '@heroicons/react/solid';
import ReviewForm from './ReviewForm.js'
import ReviewSearch from './ReviewSearch.js'


const RatingAndReview = styled.section`
padding: 4em;
display: flex;
justify-content: flex-start;
`;

const RatingDiv = styled.div`
padding-right: 50px
`

const Button = styled.button`
background-color: #112D4E;
color: #F9F7F7
`;
const Photos = styled.div`
display: flex;
display: -webkit-flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: flex-start;
`
const Response = styled.div`
background-color: transparent
`

const ReviewDiv = styled.div`
height: 400px;
width: 800px;
overflow: auto;
`
const ratingUserContainer = styled.div`
display: inline-block;
`

function fetchData(setData, count) {
  axios.get(`/reviews?count=${count}`)
  .then(res=> {
    setData(res.data.results)
  })
}

function fetchMoreData(setData, setCount, count) {
  setCount(prevCount => (prevCount + 2))
  fetchData(setData, count)
}


const Reviews = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(2);
  const [isWritable, setisWritable] = useState(false)
  useEffect(() => {
    fetchData(setData, count)
  }, [])
  let writable = (!isWritable) ? 'hidden' : ''
  let reviews = data.map(review => (
    <div className='review' key={review.id}>
      <div><h3>rating: {review.rating}</h3>by {review.reviewer_name}</div>
      <h2 className='title'>{review.summary}</h2>
      <h3>recommend: {review.recommend.toString()}</h3>
      <Photos>
      {review.photos.map(photo => (
      <div id={photo.id}><img src={photo.url} width='150' /></div>
      ))}
      </Photos>

      {/* <h3>{moment().format({review.date}).fromNow()}</h3> */}
      <a>{review.body}</a>
      <Response>Response: {review.response}</Response>

      <a>Helpful? Yes(5) | Report</a>
      <hr />
    </div>
  ))
  return (
    <div>Ratings and Reviews

    <RatingAndReview>
        <RatingDiv>Rate
          <h1>4.0</h1>
          <h4>100% of reviews recommend this product</h4>
          <StarIcon className='star'/>
          <StarIcon className='star'/>
          <StarIcon className='star'/>
          <StarIcon className='star'/>
          <StarIcon className='star'/>
          <h3>5 star</h3>
          <h3>4 star</h3>
          <h3>3 star</h3>
          <h3>2 star</h3>
          <h3>1 star</h3>
        </RatingDiv>

        <div>
        <ReviewSearch />
         <div className={writable}>
         <ReviewForm setisWritable={setisWritable}/>
         </div>
        <ReviewDiv>
          {reviews}
        </ReviewDiv>
        <Button onClick={() => {fetchMoreData(setData, setCount, count)} }>More Reviews</Button>
        <Button onClick={() => setisWritable(true)}>Write a Review</Button>
        </div>
    </RatingAndReview>
    </div>
  )
}

export default Reviews;