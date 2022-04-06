import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import {
  CheckIcon, PlusIcon,
} from '@heroicons/react/solid';
import ReviewForm from './Reviews/ReviewForm';
import ReviewSearch from './Reviews/ReviewSearch';
import ReviewSort from './Reviews/ReviewSort';
import ReviewPhotoEntry from './Reviews/ReviewPhotoEntry';
import RatingBreakdown from './Reviews/RatingBreakdown';
import StarBar from './StarBar';

const RatingAndReview = styled.section`
  padding: 4em;
  display: flex;
  justify-content: flex-start;
`;

const RatingUser = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  height: 60px;
  padding: 20px;
  background-color: #112D4E;
  color: #F9F7F7;
  margin: 10px;
`;

const Photos = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const Response = styled.div`
  color: black;
  background-color: #F9F7F7;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
`;

const ReviewDiv = styled.div`
  height: 100vh;
  overflow: auto;
`;

const Reviews = () => {
  const productID = 65634;
  // 65635 meta and reviews count are not the same
  // 65632 for testing the response
  // 65640 for testing the add reviews button
  // 65634 for testing photos
  const [data, setData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState('');
  const [sort, setSort] = useState('relevant');
  const [totalCount, setTotalCount] = useState(0);
  const [aveRate, setAveRate] = useState(0);
  const [recomPer, setRecomPer] = useState(0);
  const [char, setChar] = useState({});
  const [star5, setStar5] = useState(0);
  const [star4, setStar4] = useState(0);
  const [star3, setStar3] = useState(0);
  const [star2, setStar2] = useState(0);
  const [star1, setStar1] = useState(0);
  const [count, setCount] = useState(2);
  const [isWritable, setisWritable] = useState(false);
  useEffect(() => {
    axios.get(`/reviews?product_id=${productID}&count=${count}&sort=${sort}`)
      .then((res) => {
        setData(res.data.results);
        setReviewsData(res.data.results);
      });
  }, [productID, count, sort, dataUpdate]);
  useEffect(() => {
    axios.get(`/reviews/meta?product_id=${productID}`)
      .then((res) => {
        const ratingArray = Object.keys(res.data.ratings);
        let rateSum = 0;
        let rateUnit = 0;
        const star5 = res.data.ratings['5'];
        const star4 = res.data.ratings['4'];
        const star3 = res.data.ratings['3'];
        const star2 = res.data.ratings['2'];
        const star1 = res.data.ratings['1'];
        setChar(res.data.characteristics);

        ratingArray.forEach((item) => {
          rateUnit += Number(res.data.ratings[item]);
          rateSum += item * res.data.ratings[item];
        });
        const recomNum = Number(res.data.recommended.true);
        const recomPer = (Math.round((recomNum / rateUnit) * 100));
        setRecomPer(recomPer);

        let rate = (Math.round((rateSum / rateUnit) * 10));
        rate *= 0.1;
        rate = rate.toFixed(1);
        setTotalCount(rateUnit);
        setStar5(`${Math.round((star5 / rateUnit) * 100)}%`);
        setStar4(`${Math.round((star4 / rateUnit) * 100)}%`);
        setStar3(`${Math.round((star3 / rateUnit) * 100)}%`);
        setStar2(`${Math.round((star2 / rateUnit) * 100)}%`);
        setStar1(`${Math.round((star1 / rateUnit) * 100)}%`);

        setAveRate(rate);
      });
  }, [productID, dataUpdate]);

  const writable = (!isWritable) ? 'hidden' : '';
  const size = (char.Size === undefined) ? '' : Math.round(char.Size.value);
  const width = (char.Width === undefined) ? '' : Math.round(char.Width.value);
  const comfort = (char.Comfort === undefined) ? '' : Math.round(char.Comfort.value);
  const quality = (char.Quality === undefined) ? '' : Math.round(char.Quality.value);
  const length = (char.Length === undefined) ? '' : Math.round(char.Length.value);
  const fit = (char.Fit === undefined) ? '' : Math.round(char.Fit.value);

  const filterStar = (number) => {
    const rateData = data.filter((review) => review.rating === number);
    setReviewsData(rateData);
  };

  const fetchMoreData = () => {
    setCount((prevCount) => (prevCount + 2));
  };

  const changeSort = (newSort) => {
    setSort(newSort);
  };

  const reviewHelpful = (reviewID) => {
    axios.put(`/reviews/${reviewID}/helpful`)
      .then((res) => setDataUpdate(res))
      .catch();
  };

  const reviewReport = (reviewID) => {
    axios.put(`/reviews/${reviewID}/report`)
      .then((res) => setDataUpdate(res))
      .catch();
  };

  const collapseStyle = { position: 'absolute', top: '157%', right: '15%' };

  const reviews = reviewsData.map((review) => (
    <div className="review" key={review.review_id} style={{ width: '60vw' }}>
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
      {/* <Photos>
        <ReviewPhotoEntry review={review} />
      </Photos> */}
      {review.body}
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
  ));
  return (
    <div>
      Ratings and Reviews
      <RatingAndReview>
        <RatingBreakdown
          aveRate={aveRate}
          filterStar={filterStar}
          recomPer={recomPer}
          star={{
            star1,
            star2,
            star3,
            star4,
            star5,
          }}
          char={{
            size,
            width,
            comfort,
            quality,
            length,
            fit,
          }}
        />
        <div style={{ width: '100%' }}>
          <ReviewSearch data={data} setReviewsData={setReviewsData} />
          <ReviewSort changeSort={changeSort} totalCount={totalCount} />
          <div>
            <ReviewForm
              productID={productID}
              setisWritable={setisWritable}
              writable={writable}
              char={char}
              setDataUpdate={setDataUpdate}
              setSort={setSort}
            />
          </div>
          <ReviewDiv>
            <table style={{ height: '100vh' }}>
              <tbody>
                <tr>
                  <td colSpan="2">
                    {reviews}
                  </td>
                </tr>
              </tbody>
            </table>
          </ReviewDiv>
          <Button className={((data.length === totalCount) ? 'hidden' : '')} onClick={() => { fetchMoreData(); }}>
            MORE REVIEWS
          </Button>
          <Button
            style={(data.length === totalCount) ? collapseStyle : { }}
            onClick={() => setisWritable(true)}
          >
            ADD A REVIEW
            {' '}
            <PlusIcon style={{ height: '13px' }} />
          </Button>
        </div>
      </RatingAndReview>
    </div>
  );
};

export default Reviews;
