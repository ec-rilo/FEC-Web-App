import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import StyleSelector from './components/StyleSelector.js';
import Cart from './components/Cart.js';
import ImageGallery from './components/ImageGallery.js';

const ProductHeader = styled.div`
font-size: 24px;
font-weight: 400;
margin-bottom: 50px;
/* justify-content: space-between; */
`;

const ProductCategory = styled.div`
font-size: 12px;
width: auto;
color: #747571;

&:hover {
  color: black;
  cursor: pointer;
  };
`;

function Overview({ product }) {
  const [styles, setStyles] = useState({});
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  useEffect(() => {
    if (product == null) {
      return;
    }
    axios.get(`/products/${product.id}/styles`)
      .then((res) => {
        setStyles(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [product]);

  function selectStyle(newStyleIndex) {
    setCurrentStyleIndex(newStyleIndex);
  }

  return (
    <div className="overview-body">
      <ImageGallery styles={styles} currentStyleIndex={currentStyleIndex} />

      <div className="right-div">
        <ProductCategory>{product?.category}</ProductCategory>
        <ProductHeader>
          {product?.name}
          {' '}
          {!styles?.[currentStyleIndex]?.sale_price
            ? `$${styles?.[currentStyleIndex]?.original_price}`
            : <strike>{`$${styles?.[currentStyleIndex]?.original_price}`}</strike>}
          {' '}
          {styles?.[currentStyleIndex]?.sale_price
            ? `$${styles?.[currentStyleIndex]?.sale_price}`
            : null}
        </ProductHeader>

        <StyleSelector styles={styles} currentStyleIndex={currentStyleIndex} selectStyle={selectStyle} />

        <Cart styles={styles} currentStyleIndex={currentStyleIndex} />
        {product?.description}
      </div>
    </div>
  );
}

export default Overview;
