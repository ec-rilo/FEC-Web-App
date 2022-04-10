import React from 'react';
import styled from 'styled-components';

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

function ProductInformation({ styles, product, currentStyleIndex }) {
  if (!styles?.length) return null;
  // console.log(styles[currentStyleIndex]);
  return (
    <>
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
    </>
  );
}

export default ProductInformation;
