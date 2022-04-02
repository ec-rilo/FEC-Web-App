import React from 'react';
import styled from 'styled-components';

const Sort = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Select = styled.select`
  border: none;
`

const ReviewSort = ({ changeSort, setSort}) => (
  <div>
    <Sort>
      <h4>221 reviews, sorted by</h4>
      <Select onChange={(e) => { changeSort(setSort, e.target.value); }}>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
        <option value="relevant">Relevant</option>
      </Select>
    </Sort>
  </div>
);

export default ReviewSort;
