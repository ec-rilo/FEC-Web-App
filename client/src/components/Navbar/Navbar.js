import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../globalStyles.js';
import { lightTheme, darkTheme } from '../Themes';
// import cart from '../../assets/cart.svg';

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
            {/* <img src="" alt="Search" />
            <img src={cart} alt="Account" />
            <img src="" alt="Cart" /> */}
            <div className="dark-mode-btn" onClick={themeToggler}>
              <div className="dark-mode-toggle" />
            </div>
            {/* <span className="sign-in">Sign In</span> */}
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default Navbar;
