import React, { useState } from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/solid'


const Button = styled.button`
  background: transparent;
  color: white;
  border-radius: 3px;
  background-color: #112D4E;
  margin: 0 1em;
  padding: 0.25em 1em;
`




function App() {
  // Declare a new state variable, which we'll call "count"
  const [cart, setCart] = useState({items: 0, products: [{}]})
  const [product, setProduct] = useState([])
  const [style, setStyle] = useState({});
  const [price, setPrice] = useState(40)

  return (
    <div>
      <h2>Morning Joggers</h2>
      <StarIcon className="star"></StarIcon>
      <div className="price">$ {price}</div>

      <div>Whether you're a morning person or not. Whether you're gym bound or not. Everyone looks good in joggers.</div>
      <p className="cart">Cart: {cart.items}</p>
      <Button onClick={() => setCart({items: cart.items + 1})}>Add to Cart</Button>
      Quantity:
      <button>+</button>
      0
      <button>-</button>
      <select>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
    </div>
  );
}

export default App;