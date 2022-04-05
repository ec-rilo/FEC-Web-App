import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import Overview from './Overview/Overview.js';
import Reviews from './Reviews.js';
import Questions from './QandA/Questions';
import RelatedItems from './RelatedItems.js';
import Navbar from './Navbar/Navbar.js';

import { GlobalStyles } from './globalStyles.js';
import { lightTheme, darkTheme } from './Themes';

function App() {
  // light theme
  const [theme, setTheme] = useState('light');
  const [cart, setCart] = useState({ items: 0, products: [{}] });

  function incrementCart() {
    setCart((prevCart) => ({ items: prevCart.items + 1 }));
  }

  function decrementCart() {
    cart.items > 0 ? setCart((prevCart) => ({ items: prevCart.items - 1 })) : null;
  }

  return (
    <div>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Navbar cart={cart} decrementCart={decrementCart}>Threads</Navbar>
        <Overview incrementCart={incrementCart} />
        <RelatedItems />
        <Questions />
        <Reviews />
      </ThemeProvider>
    </div>
  );
}

export default App;
