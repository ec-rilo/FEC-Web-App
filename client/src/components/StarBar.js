import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background-color: #F9F7F7;
  width: 101px;
  height: 25px;
`;

const InsideBar = styled.div`
  background-color: black;
  height: 23px;
`;

// pass in the rate as the prop

const StarBar = ({ rate }) => {
  const percentage = `${(rate / 5) * 100}%`;
  return (
    <div>
      <Bar style={{ position: 'relative', width: '100px' }}>
        <InsideBar style={{ width: percentage }} />
        <img className="star-scale" src="https://upload.cc/i1/2022/04/05/pgZqAw.png" alt="starbar" style={{ width: '100%', position: 'absolute', top: '0' }} />
      </Bar>
    </div>
  );
};
export default StarBar;
