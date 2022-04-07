import React from 'react';
import styled from 'styled-components';
import StarBar from '../StarBar';

const RateNum = styled.h1`
  font-size: 60px
`;

const RatingDiv = styled.div`
  padding-right: 100px
`;

const RatingUser = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScaleDiv = styled.div`
  &:hover .starScale {
    background-color: black;
    color: white
    }
  width: 100px
`;

const Bar = styled.div`
  background-color: #F9F7F7;
  height: 15px;
  width: 100%;

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

const StarButton = styled.button`

  width: 100%;
  heigth: 100%;
  background-color: Transparent;
  border: none;
`;

const Triangle = () => (
  <svg height="19" width="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.42477 18.9998L0.444603 0.94311L18.6308 1.0572L9.42477 18.9998Z" fill="black" />
  </svg>
);

const RatingBreakdown = ({
  aveRate, filterStar, recomPer, star,
  char,
}) => (
  <RatingDiv>
    <RateNum>{aveRate}</RateNum>
    <StarBar rate={aveRate} />
    <h4>
      {recomPer}
      % of reviews recommend this product
    </h4>
    <br />
    <RatingUser>
      <ScaleDiv><StarButton className="starScale" onClick={() => { filterStar(5); }}><u>5 stars</u></StarButton></ScaleDiv>
      <Bar><InsideBar style={{ width: star.star5 }} /></Bar>
    </RatingUser>
    <br />
    <RatingUser>
      <ScaleDiv><StarButton className="starScale" onClick={() => { filterStar(4); }}><u>4 stars</u></StarButton></ScaleDiv>
      <Bar><InsideBar style={{ width: star.star4 }} /></Bar>
    </RatingUser>
    <br />
    <RatingUser>
      <ScaleDiv><StarButton className="starScale" onClick={() => { filterStar(3); }}><u>3 stars</u></StarButton></ScaleDiv>
      <Bar><InsideBar style={{ width: star.star3 }} /></Bar>
    </RatingUser>
    <br />
    <RatingUser>
      <ScaleDiv><StarButton className="starScale" onClick={() => { filterStar(2); }}><u>2 stars</u></StarButton></ScaleDiv>
      <Bar><InsideBar style={{ width: star.star2 }} /></Bar>
    </RatingUser>
    <br />
    <RatingUser>
      <ScaleDiv><StarButton className="starScale" onClick={() => { filterStar(1); }}><u>1 stars</u></StarButton></ScaleDiv>
      <Bar><InsideBar style={{ width: star.star1 }} /></Bar>
    </RatingUser>

    <br />
    <div>
      <div className={(!char.size) ? 'hidden' : ''}>
        Size
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.size / 5 * 100}%`,
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
      <div className={(!char.width) ? 'hidden' : ''}>
        Width
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.width / 5 * 100}%`,
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
      <div className={(!char.comfort) ? 'hidden' : ''}>
        Comfort
        <br />
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.comfort / 5 * 100}%`,
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
          <CharForthScaleDiv style={{ textAlign: 'right' }}>
            <CharInsideBar />
            Prefect
          </CharForthScaleDiv>
        </CharBar>
      </div>
      <br />
      <div className={(!char.quality) ? 'hidden' : ''}>
        Quality
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.quality / 5 * 100}%`,
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
          <CharForthScaleDiv style={{ textAlign: 'right' }}>
            <CharInsideBar />
            Prefect
          </CharForthScaleDiv>
        </CharBar>
      </div>
      <br />
      <div className={(!char.length) ? 'hidden' : ''}>
        Length
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.quality / 5 * 100}%`,
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
      <div className={(!char.fit) ? 'hidden' : ''}>
        Fit
        <CharBar>
          <div style={{
            transform: 'translate(-50%, -5%)', width: '30px', position: 'absolute', left: `${char.fit / 5 * 100}%`,
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
);

export default RatingBreakdown;
