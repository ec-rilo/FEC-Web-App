import React from 'react';
import styled from 'styled-components';

const AddToCartBtn = styled.button`
background: transparent;
color: white;
border-radius: 3px;
background-color: #112D4E;
margin: 0 1em;
padding: 0.25em 1em;
`;

function StyleSelector() {
  return (
    <div>
      <AddToCartBtn>Add to Cart</AddToCartBtn>
    </div>
  );
}

export default StyleSelector;
