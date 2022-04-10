import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AddToCartBtn = styled.button`
color: white;
border-radius: 10px;
background-color: #3C3C3C;
margin-bottom: 40px;
font-size: 14px;
border-style: none;
height: 50px;
width: 100%;
&:hover {
  background-color: black;
  cursor: pointer;
  };
`;

const SizeBtn = styled.div`
display: flex;
width: 45px;
height: 45px;
margin-right: 10px;
color: #747571;
background: #F3F4F3;
font-weight: 300;
justify-content: center;
align-items: center;
border: 1.5px solid transparent;

&:hover {
  border: 1.5px solid #dcdddb
}
`;

const Sizes = styled.div`
width: 100%;
display: grid;
margin-bottom: 50px;
grid-template-columns: repeat(7, 1fr);
grid-auto-rows: auto;
justify-content: space-between;
row-gap: 12px;
margin-top: 50px;
`;

const Quantity = styled.select`
width: 100%;
height: 30px;
margin-bottom: 10px;
`;

function Cart({ styles, currentStyleIndex }) {
  const [cart, setCart] = useState({ sku: '', quantity: 0 });

  if (!styles?.length) return null;

  function selectSku(Sku) {
    setCart({
      sku: Sku, quantity: styles?.[currentStyleIndex]?.skus[Sku].quantity,
    });
  }

  function handleQuantityChange(e) {
    setCart({ sku: cart.sku, quantity: e.target.value });
  }

  function addToCart() {
    axios.post('/cart', { sku_id: cart.sku, count: cart.quantity })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Sizes>
        {Object.keys(styles?.[currentStyleIndex]?.skus).map((sku, i) => (
          <SizeBtn
            onClick={() => selectSku(sku)}
            key={i}
            // style={i == currentStyleIndex{}}
          >
            {styles?.[currentStyleIndex]?.skus[sku].size}
          </SizeBtn>
        ))}
      </Sizes>
      <Quantity onChange={(e) => handleQuantityChange(e)}>
        {[...Array(Math.min(cart.quantity, 15)).keys()].map((i) => <option value={i + 1} key={i}>{i + 1}</option>)}
      </Quantity>
      <AddToCartBtn onClick={addToCart}>Add to Cart</AddToCartBtn>

    </div>
  );
}

export default Cart;
