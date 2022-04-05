import React from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/outline';

const Bar = styled.div`
  background-color: #F9F7F7;
  width: auto;
  height: auto;
`;

const InsideBar = styled.div`
background-color: black;
height: 20px;
`;

const StarBar = ({ rate }) => {
  const percentage = `${(rate / 5) * 100}%`;
  return (
    <div>
      this is starrate
      <Bar style={{ position: 'relative', width: '100px' }}>

        <InsideBar style={{ width: percentage }} />
        <img className="star-scale" src="https://upload.cc/i1/2022/04/05/pgZqAw.png" style={{ width: '100%', position: 'absolute', top: '0' }} />
      </Bar>
    </div>
  );
};

export default StarBar;
