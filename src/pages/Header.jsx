import React from 'react';

import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <header>
      <Navbar>
        <h1 className="px-7">
          <img src={logo} alt="logo.png" className="h-1" />
        </h1>
        <ul className="d-flex">
          <li className="px-7">
            <a className="text-white fw-bold" href="/">
              首頁
            </a>
          </li>
          <li className="px-7">
            <a className="text-white fw-bold" href="/shop">
              定價
            </a>
          </li>
        </ul>
      </Navbar>
    </header>
  );
};

export default Header;
