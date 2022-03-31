import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
        <div className="overview-body">
        {/* lines 29-36 will map out image gallery of SKU */}
        <div className="left-div">
          <div className="img-row">
            <div className="img">image 1</div>
            <div className="img">image 2</div>
          </div>
          <div className="img-row">
            <div className="img">image 3</div>
            <div className="img">image 4</div>
          </div>
        </div>

        <div className="right-div">
          <ProductName>Morning Joggers</ProductName>
          <StarIcon className="star" />
          <div className="price">$ {price}</div>

          {/* line 45- will map out all the product styles */}
          <div className="style-btn"></div><div className="style-btn"></div><div className="style-btn"></div>


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
      </div>
    </div>
  )
};

export default Overview;
