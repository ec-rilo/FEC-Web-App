import React from 'react';



function Navbar(props) {
  return(
    <div className="navbar">
      <h1 className="brand">Threads</h1>
      <div className="nav-side-btns">
      <div className="dark-mode-btn">
        <div className="dark-mode-toggle"></div>
      </div>
        {/* <span className="sign-in">Sign In</span> */}
        <span className="cart">Cart</span>
      </div>
    </div>
  )
}

export default Navbar;