import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';
import ReviewPhotoEntry from './ReviewPhotoEntry';
import {
  CheckIcon,
} from '@heroicons/react/solid';
import StarBar from '../StarBar';

const RatingUser = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Response = styled.div`
  color: black;
  background-color: #F9F7F7;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;
const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const ReviewListEntry = ({ review, setDataUpdate }) => {
  const [showMoreonClick, setShowMoreonClick] = useState(false);

  const reviewReport = (reviewID) => {
    axios.put(`/reviews/${reviewID}/report`)
      .then((res) => setDataUpdate(res))
      .catch();
  };
  const reviewHelpful = (reviewID) => {
    axios.put(`/reviews/${reviewID}/helpful`)
      .then((res) => setDataUpdate(res))
      .catch();
  };
  return (
    <div>
      <RatingUser>
        <div>
          <StarBar rate={review.rating} />
        </div>
        <div>
          { review.reviewer_name }
          ,
          {' '}
          {(moment(review.date).format('MMM DD, YYYY'))}
        </div>
      </RatingUser>
      <h2 className="title">{review.summary}</h2>
      <Photos>
      {review.photos.map((photo) => (
    <ReviewPhotoEntry key={photo.id} photo={photo} />))}
  </Photos>
      <a className={(showMoreonClick) ? 'hidden' : ''}>{review.body.substring(0, 2)}</a>
      <a className={(!showMoreonClick) ? 'hidden' : ''}>{review.body.substring(0, 250)}</a>
      <br />
      <button className={(review.body.length <= 2) ? 'hidden' : ''} className={(showMoreonClick) ? 'hidden' : ''} style={{ backgroundColor: '#112D41', color: '#F9F7F7' }} onClick={() => setShowMoreonClick(true)}>SHOW MORE</button>
      <div className={(!review.recommend) ? 'hidden' : ''} style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <CheckIcon style={{ height: '20px' }} />
        I recommend this product
      </div>

      <Response className={(!review.response) ? 'hidden' : ''}>
        Response:
        {' '}
        { review.response }
      </Response>
      <div style={{ padding: '15px' }}>
        Helpful?
        <u onClick={() => { reviewHelpful(review.review_id); }}>
          Yes
        </u>
        (
        {review.helpfulness}
        ) |
        {' '}
        <u onClick={() => { reviewReport(review.review_id); }}>
          Report
        </u>
        <hr />
      </div>
    </div>
  );
};

export default ReviewListEntry;
