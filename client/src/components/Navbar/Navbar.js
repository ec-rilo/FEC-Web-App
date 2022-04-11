import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globalStyles.js';
import { lightTheme, darkTheme } from '../Themes';
import Account from '../../assets/account.js';
import Cart from '../../assets/cart.js';
import Search from '../../assets/search.js';

function Navbar(props) {
  const [theme, setTheme] = useState('light');

  function themeToggler() {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="navbar">
          <h1 className="brand">Threads</h1>
          <div className="nav-side-btns">
            <Search />
            <Account />
            <Cart />
            <div className="dark-mode-btn" onClick={themeToggler}>
              <div className="dark-mode-toggle" />
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
