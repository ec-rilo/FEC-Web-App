import React from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/outline';

const Bar = styled.div`
  height: 100%;
  width: 100%
`;

const InsideBar = styled.div`
height: 60px;
background-color: black;
`;

const StarBar = ({ rate }) => {
  let percentage = `${(rate / 5) * 100}%`;
  return(
    <div>
      {console.log(percentage)}
      this is starrate
    <Bar>
    <InsideBar style={{ width: `100%` }}>

      <img className="star-scale" src='https://upload.cc/i1/2022/04/05/pgZqAw.png' style={{width: `111%`, height: `100%`}}/>
    </InsideBar>

    </Bar>
    </div>
  )

}

export default StarBar;
