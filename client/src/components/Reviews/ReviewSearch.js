import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Searchinput = styled.input`
  width: 100%
`;

const ReviewSearch = ({ data, setReviewsData }) => {
  const [searchdata, setData] = useState(data);
  const [key, setKey] = useState('');
  useEffect(() => {
    setData(data);
    if (key.length >= 3) {
      const searchedData = data.filter((item) => item.body.toLowerCase().includes(key.toLowerCase())
        || item.summary.toLowerCase().includes(key.toLowerCase()));
      setReviewsData(searchedData);
    } else {
      setReviewsData(data);
    }
  }, [data, searchdata, key]);
  return (
    <Searchinput onChange={(e) => { setKey(e.target.value); }} />
  );
};

export default ReviewSearch;
