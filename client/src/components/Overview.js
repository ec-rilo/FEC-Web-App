import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/solid'

const AddToCartBtn = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  background-color: #112D4E;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const ProductName = styled.h1`
  font-size: 20px;
  font-weight: 500;
`;

function Overview({incrementCart}) {
  const [product, setProduct] = useState({})
  const [style, setStyle] = useState({});
  const [price, setPrice] = useState(40);
  return (
    <div>
      <div className="container">
          <ProductName>Morning Joggers</ProductName>
          <StarIcon className="star" />
          <div className="price">$ {price}</div>

          <div>Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.</div>
          <AddToCartBtn onClick={incrementCart}>Add to Cart</AddToCartBtn>
          Quantity
          <button>+</button>
          0
          <button>-</button>
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
    </div>
  )
};

export default Overview;
