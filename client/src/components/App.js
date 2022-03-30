import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/solid'
import Navbar from './Navbar.js';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalStyles.js";
import { lightTheme, darkTheme } from "./Themes"


const AddToCartBtn = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  background-color: #112D4E;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const ProductName = styled.h1`
  font-family:500;
  font-size: 20px; 'Poppins', sans-serif;
  font-weight:
`



function App() {
  // light theme
  const [theme, setTheme] = useState('light');

  // Declare a new state variable, which we'll call "count"
  const [cart, setCart] = useState({items: 0, products: [{}]})
  const [product, setProduct] = useState([])
  const [style, setStyle] = useState({});
  const [price, setPrice] = useState(40);

  function decrementCount() {
    cart.items > 0 ? setCart(prevCart => ({items: prevCart.items -1})) : null
  }

  return (
    <div>
      <Navbar>Threads</Navbar>
      <div className="container">
        <ProductName>Morning Joggers</ProductName>
        <StarIcon className="star"></StarIcon>
        <div className="price">$ {price}</div>

        <div>Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.</div>
        <p className="cart">Cart: {cart.items}<button onClick={decrementCount}>-</button></p>
        <AddToCartBtn onClick={() => setCart({items: cart.items + 1})}>Add to Cart</AddToCartBtn>
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
  );
}

export default App;