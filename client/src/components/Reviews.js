import React, { useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';
import styled, { css } from 'styled-components';


const RatingAndReview = styled.section`
padding: 4em;
background: #F9F7F7;
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

function fetchData(setData) {
  axios.get('/reviews')
  .then(res=> {
    console.log(res)
    setData(res.data.results)
  })
}

// function renderReview(setData) {

// }

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData(setData)
  }, [])

  const [render, setRender] = useState([])
  // useEffect(() => {
  //   setRender(data.slice(0, 2))
  // })
  console.log(data)
  console.log(render)

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
        <div>Rank</div>
        <Button>Write a Review</Button>
        <div className='review'>
          {reviews}
        </div>
        <Button onClick={() => { console.log('click')} }>More Reviews</Button>

    </RatingAndReview>
  )
}

export default Reviews;