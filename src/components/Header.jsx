import React from 'react';

import Navbar from './Navbar';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
      <Navbar>
        <h1 className="px-small">
          <img src={logo} alt="logo.png" className="h-1" />
        </h1>
        <ul className="d-flex">
          <li className="px-small">
            <a href="/">首頁</a>
          </li>
          <li className="px-small">
            <a href="/shop">定價</a>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};

export default Header;
