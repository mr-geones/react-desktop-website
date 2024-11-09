import React from "react";
import logo from "../assets/logo-dark.svg";

const Header = () => {
  return (
    <header>
      <div id='header'>
        <nav>
          <a href='index.html' aria-label='Go to start page'>
            <img src={logo} alt='Silicon logotype' />
          </a>
          <a href=''>Features</a>
        </nav>
        <div className='wrapper__toggle_signin'>
          <span id='toggle'>
            <span className='wrapper__darkmode'>Dark Mode</span>
            <input id='switch' type='checkbox' />
            <label for='switch' className='switch'>
              toggle
            </label>
          </span>
          <a href='' className='button button__signin'>
            <span>Sign in / up</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
