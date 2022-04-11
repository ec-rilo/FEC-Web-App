import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProductHeader = styled.div`
font-size: 24px;
font-weight: 400;
margin-bottom: 50px;
display: flex;
justify-content: space-between;
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
  return (
    <>
      <ProductCategory>{product?.category}</ProductCategory>
      <ProductHeader>
        <span>{product?.name}</span>
        {!styles?.[currentStyleIndex]?.sale_price
          ? `$${styles?.[currentStyleIndex]?.original_price}`
          : (
            <div style={{
              transform: 'translateX(35px)',
            }}
            >
              <strike>{`$${styles?.[currentStyleIndex]?.original_price}`}</strike>
            </div>
          )}
        {' '}
        {styles?.[currentStyleIndex]?.sale_price
          ? `$${styles?.[currentStyleIndex]?.sale_price}`
          : null}
      </ProductHeader>
    </>
  );
}

ProductInformation.propTypes = {
  styles: PropTypes.instanceOf(Object).isRequired,
  currentStyleIndex: PropTypes.number.isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
};

export default ProductInformation;
