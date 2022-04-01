import React, {useState} from 'react';

const ReviewSort = ({changeSort, setSort}) => {
  return(
  <div>
    221 reviews sorted by
    <select name="sort" onChange={(e) => { changeSort(setSort, e.target.value)}}>
      <option value='newest'>Newest</option>
      <option value='helpful'>Helpful</option>
      <option value='relevant'>Relevant</option>
    </select>
  </div>
  )
}

export default ReviewSort;