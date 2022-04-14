import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Overview from './Overview/Overview';
import Questions from './QandA/Questions';
import Reviews from './Reviews/Reviews';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1280px;
  margin-left: 40px;
  align-items: center;
`;

const ProductPage = () => {
  const [productId] = useState(65635);
  const [product, setProduct] = useState({});
  const [aveRate, setAveRate] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    axios.get(`/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [productId]);

  return (
    <Container>
      <Overview
        product={product}
        aveRate={aveRate}
        totalCount={totalCount}
      />
      <Questions />
      <Reviews
        product={product}
        productID={productId}
        setAveRate={setAveRate}
        setTotalCount={setTotalCount}
        aveRate={aveRate}
        totalCount={totalCount}
      />
    </Container>
  );
};

export default ProductPage;
