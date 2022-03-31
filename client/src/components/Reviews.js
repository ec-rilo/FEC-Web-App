import React, { useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { StarIcon } from '@heroicons/react/solid';
import ReviewForm from './ReviewForm.js'
import ReviewSearch from './ReviewSearch.js'


const RatingAndReview = styled.section`
padding: 4em;
`;
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

const ReviewDiv = styled.div`
height: 400px;
overflow: auto;
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
     <h3>rating: {review.rating}</h3>
      <h2 className='title'>Summary: {review.summary}</h2>
      <h3>recommend: {review.recommend.toString()}</h3>
      <Photos>
      {review.photos.map(photo => (
        <div id={photo.id}><img src={photo.url} width='150' /></div>
      ))}
      </Photos>
      <h4>Reviewer: {review.reviewer_name}</h4>

      {/* <h3>{moment().format({review.date}).fromNow()}</h3> */}
      <h3>{review.body}</h3>
      <h3>Response: {review.response}</h3>
    </div>
  ))
  return (
    <RatingAndReview>
        <div><h2>Reviews</h2></div>
        <div>Rank</div><StarIcon className='star'/>
        <ReviewSearch />
        <Button onClick={() => setisWritable(true)}>Write a Review</Button>
         <div className={writable}>
         <ReviewForm setisWritable={setisWritable}/>
         </div>
        <ReviewDiv>
          {reviews}
        </ReviewDiv>
        <Button onClick={() => {fetchMoreData(setData, setCount, count)} }>More Reviews</Button>

    </RatingAndReview>
  )
}

export default Reviews;