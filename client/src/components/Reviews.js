import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import styled from 'styled-components';
import {
  StarIcon, CheckIcon, PlusIcon,
} from '@heroicons/react/solid';
import ReviewForm from './Reviews/ReviewForm';
import ReviewSearch from './Reviews/ReviewSearch';
import ReviewSort from './Reviews/ReviewSort';
import StarBar from './StarBar';

const RateNum = styled.h1`
  font-size: 60px
`;

const RatingAndReview = styled.section`
  padding: 4em;
  display: flex;
  justify-content: flex-start;
`;

const RatingDiv = styled.div`
  padding-right: 100px
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

const ReviewDiv = styled.td`
  height: 600px;
  width: 1000px;
  overflow: auto;
`;

const ScaleDiv = styled.div`
  width: 100px
`;

const Bar = styled.div`
  background-color: #F9F7F7;
  height: 15px;
  width: 100%
`;

const InsideBar = styled.div`
  background-color: green;
  height: 15px;
`;

const CharBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 50%;
`;

const CharInsideBar = styled.div`
  background-color: #F9F7F7;
  height: 15px;
`;

const CharScaleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
`;

const CharForthScaleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
`;

const Triangle = () => (
  <svg height="19" width="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.42477 18.9998L0.444603 0.94311L18.6308 1.0572L9.42477 18.9998Z" fill="black" />
  </svg>
);

function fetchData(setData, id, count, sort) {
  axios.get(`/reviews?product_id=${id}&count=${count}&sort=${sort}`)
    .then((res) => {
      setData(res.data.results);
    });
}

function fetchMoreData(setData, setCount) {
  setCount((prevCount) => (prevCount + 2));
}

function fetchMetaData(
  id,
  setAveRate,
  setRecomPer,
  setStar5,
  setStar4,
  setStar3,
  setStar2,
  setStar1,
  setChar,
  setTotalCount,
) {
  axios.get(`/reviews/meta?product_id=${id}`)
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
      const recomPer = (Math.round((recomNum / rateSum) * 100));
      setRecomPer(recomPer);

      let rate = (Math.round((rateSum / rateUnit) * 10));
      rate *= 0.1;
      rate = rate.toFixed(1);
      setTotalCount(rateSum);
      setStar5(`${Math.round((star5 / rateUnit) * 100)}%`);
      setStar4(`${Math.round((star4 / rateUnit) * 100)}%`);
      setStar3(`${Math.round((star3 / rateUnit) * 100)}%`);
      setStar2(`${Math.round((star2 / rateUnit) * 100)}%`);
      setStar1(`${Math.round((star1 / rateUnit) * 100)}%`);
      setAveRate(rate);
    });
}

function changeSort(setSort, newSort) {
  setSort(newSort);
}

function reviewHelpful(reviewID) {
  axios.put(`/reviews/${reviewID}/helpful`)
    .then()
    .catch();
}

function reviewReport(reviewID) {
  axios.put(`/reviews/${reviewID}/report`)
    .then()
    .catch();
}

function filterStar(number, setData) {
  setData((prev) => prev.filter((review) => review.rating === number));
}

const Reviews = () => {
  const productID = 65632;
  // 65635 meta and reviews count are not the same
  // 65632 for testing the response
  // 65640 for testing the add reviews button
  const [data, setData] = useState([]);
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
    fetchData(setData, productID, count, sort);
    return () => {
      fetchData(setData, productID, count, sort);
    };
  }, [productID, count, sort]);
  useEffect(() => {
    fetchMetaData(
      productID,
      setAveRate,
      setRecomPer,
      setStar5,
      setStar4,
      setStar3,
      setStar2,
      setStar1,
      setChar,
      setTotalCount,
    );
  }, [productID]);

  const writable = (!isWritable) ? 'hidden' : '';
  const size = (char.Size === undefined) ? '' : Math.round(char.Size.value);
  const width = (char.Width === undefined) ? '' : Math.round(char.Width.value);
  const comfort = (char.Comfort === undefined) ? '' : Math.round(char.Comfort.value);
  const quality = (char.Quality === undefined) ? '' : Math.round(char.Quality.value);
  const length = (char.Length === undefined) ? '' : Math.round(char.Length.value);
  const fit = (char.Fit === undefined) ? '' : Math.round(char.Fit.value);

  const reviews = data.map((review) => (
    <div className="review" key={review.review_id}>
      <RatingUser>
        <div>
          rating:
          { review.rating }
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
          <div key={photo.id}>
            <img
              src={photo.url}
              width="150"
              alt="productPhoto"
            />
          </div>
        ))}
      </Photos>
      {review.body}
      <div className={`${review.recommend.toString()}`}>
        <CheckIcon className="check" />
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
        <RatingDiv>
          <RateNum>{aveRate}</RateNum>
          <StarBar rate={aveRate} />
          <h4>
            {recomPer}
            % of reviews recommend this product
          </h4>
          <br />
          <RatingUser>
            <ScaleDiv><u onClick={() => { filterStar(5, setData); }}>5 stars</u></ScaleDiv>
            <Bar><InsideBar style={{ width: star5 }} /></Bar>
          </RatingUser>
          <br />
          <RatingUser>
            <ScaleDiv><u onClick={() => { filterStar(4, setData); }}>4 stars</u></ScaleDiv>
            <Bar><InsideBar style={{ width: star4 }} /></Bar>
          </RatingUser>
          <br />
          <RatingUser>
            <ScaleDiv><u onClick={() => { filterStar(3, setData); }}>3 stars</u></ScaleDiv>
            <Bar><InsideBar style={{ width: star3 }} /></Bar>
          </RatingUser>
          <br />
          <RatingUser>
            <ScaleDiv><u onClick={() => { filterStar(2, setData); }}>2 stars</u></ScaleDiv>
            <Bar><InsideBar style={{ width: star2 }} /></Bar>
          </RatingUser>
          <br />
          <RatingUser>
            <ScaleDiv><u onClick={() => { filterStar(1, setData); }}>1 stars</u></ScaleDiv>
            <Bar><InsideBar style={{ width: star1 }} /></Bar>
          </RatingUser>

          <br />
          <div>
            <div className={(size.length === 0) ? 'hidden' : ''}>
              Size
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${size / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharScaleDiv>
                  <CharInsideBar />
                  Too small
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'center' }}>
                  <CharInsideBar />
                  Prefect
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'right' }}>
                  <CharInsideBar />
                  Too Large
                </CharScaleDiv>
              </CharBar>
            </div>
            <br />
            <div className={(width.length === 0) ? 'hidden' : ''}>
              Width
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${width / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharScaleDiv>
                  <CharInsideBar />
                  Too tight
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'center' }}>
                  <CharInsideBar />
                  Prefect
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'right' }}>
                  <CharInsideBar />
                  Too wide
                </CharScaleDiv>
              </CharBar>
            </div>
            <br />
            <div className={(comfort.length === 0) ? 'hidden' : ''}>
              Comfort
              <br />
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${comfort / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharForthScaleDiv>
                  <CharInsideBar />
                  Poor
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                  Prefect
                </CharForthScaleDiv>
              </CharBar>
            </div>
            <br />
            <div className={(quality.length === 0) ? 'hidden' : ''}>
              Quality
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${quality / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharForthScaleDiv>
                  <CharInsideBar />
                  Poor
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                </CharForthScaleDiv>
                <CharForthScaleDiv>
                  <CharInsideBar />
                  Prefect
                </CharForthScaleDiv>
              </CharBar>
            </div>
            <br />
            <div className={(length.length === 0) ? 'hidden' : ''}>
              Length
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${quality / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharScaleDiv>
                  <CharInsideBar />
                  Too short
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'center' }}>
                  <CharInsideBar />
                  Prefect
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'right' }}>
                  <CharInsideBar />
                  Too long
                </CharScaleDiv>
              </CharBar>
            </div>
            <br />
            <div className={(fit.length === 0) ? 'hidden' : ''}>
              Fit
              <CharBar>
                <div style={{
                  transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${quality / 5 * 100}%`,
                }}
                >
                  <Triangle />
                </div>
                <CharScaleDiv>
                  <CharInsideBar />
                  Too small
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'center' }}>
                  <CharInsideBar />
                  Prefect
                </CharScaleDiv>
                <CharScaleDiv style={{ textAlign: 'right' }}>
                  <CharInsideBar />
                  Too big
                </CharScaleDiv>
              </CharBar>
            </div>
          </div>
        </RatingDiv>
        <div>
          <ReviewSearch data={data} setData={setData} />
          <ReviewSort changeSort={changeSort} setSort={setSort} totalCount={totalCount} />
          <div className={writable}>
            <ReviewForm setisWritable={setisWritable} writable={writable} />
          </div>
          <table>
            <tbody>
              <tr>
                <ReviewDiv colspan="2">
                  {reviews}
                </ReviewDiv>
              </tr>
            </tbody>

          </table>
          <Button onClick={() => { fetchMoreData(setData, setCount, productID, count, sort); }}>
            MORE REVIEWS
          </Button>
          <Button className={((data.length === totalCount) ? 'hidden' : '')} onClick={() => setisWritable(true)}>
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
