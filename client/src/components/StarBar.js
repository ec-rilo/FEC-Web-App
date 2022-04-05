import React from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/outline';

const Bar = styled.div`
  background-color: #F9F7F7;
  height: 15px;
  width: 100%
`;

const InsideBar = styled.div`
background-color: black;
height: 15px;
`;

const StarBar = ({ rate }) => {
  let percentage = `${(rate / 5) * 100}%`;
  return(
    <div>
      this is starrate
    <Bar>
    <InsideBar style={{ width: percentage }}>
      {/* <img className="star-scale" src='https://upload.cc/i1/2022/04/05/pgZqAw.png' style={{width: `111%`, height: `100%`}}/> */}
    </InsideBar>
    </Bar>
    </div>
  )

}

export default StarBar;
