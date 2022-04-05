import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/solid';

import StyleData from '../../../../stylesData.js';
import ProductData from '../../../../productData.js';
import StyleSelector from './components/StyleSelector.js';

const ProductHeader = styled.div`
font-size: 24px;
font-weight: 400;
margin-bottom: 50px;
/* justify-content: space-between; */
`;

const AddToCartBtn = styled.button`
background: transparent;
color: white;
border-radius: 3px;
background-color: #112D4E;
margin: 0 1em;
padding: 0.25em 1em;
`;

const ProductImage = styled.div`
width: 50vw;
height: 80vh;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 80px;
margin-bottom: 50px;
background-image: ${(props) => `url(${props.image})`};
background-size: cover;
background-position: 0% 30%;
`;

const ProductCategory = styled.div`
font-size: 12px;
`;

function Overview({ incrementCart }) {
  const [product, setProduct] = useState({
    product: ProductData, styles: StyleData, style: StyleData.results[0],
  });
  // const [style, setStyle]

  function selectStyle(newStyle) {
    setProduct({
      product: ProductData, styles: StyleData, style: newStyle,
    });
  }

  return (
    <div>
      <div className="container">
        <div className="overview-body">
          <ProductImage image={product.style.photos[0].url} />

          <div className="right-div">
            <ProductCategory>{product.product.category}</ProductCategory>
            <ProductHeader>
              {product.product.name}
              {' '}
              {!product.style.sale_price ? `$${product.style.original_price}` : <strike>{`$${product.style.original_price}`}</strike>}
              {' '}
              {product.style.sale_price ? `$${product.style.sale_price}` : null}
            </ProductHeader>

            {/* <StarIcon className="star" /> */}

            <StyleSelector styles={product} selectStyle={selectStyle} />

            {/* <div>Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.</div>
            <AddToCartBtn onClick={incrementCart}>Add to Cart</AddToCartBtn>
            Quantity
            <button>+</button>
            0
            <button>-</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

{ /* <div className="img-row">
<div className="img">image 1</div>
<div className="img">image 2</div>
</div>
<div className="img-row">
<div className="img">image 3</div>
<div className="img">image 4</div>
</div> */ }
