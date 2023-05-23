import React from 'react';

import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar>
        <h1 className="d-flex justify-content-between">
          <img src={logo} alt="logo.png" />
        </h1>
        <ul>
          <li>
            <a href="/">首頁</a>
          </li>
          <li>
            <a href="/shop">定價</a>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};

export default Header;
