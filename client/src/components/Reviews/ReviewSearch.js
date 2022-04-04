import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Searchinput = styled.input`
width: 800px
`;

function searchQuery(query, setData) {
  if (query.length >= 3) {
    setData(function(prev) {
      return prev.filter(item => item.body.includes(query) || item.summary.includes(query))
    })
  }
};

const ReviewSearch = ( { setData } ) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    searchQuery(query, setData);
  }, [query]);
  return (
    <Searchinput onChange={(e) => { setQuery(e.target.value); }} >
    </Searchinput>
  );
}

export default ReviewSearch;
