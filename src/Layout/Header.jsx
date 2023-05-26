import React from 'react';

import { Link } from 'react-router-dom';

import menu from '../assets/icons/menu.png';
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar';

const Header = () => {
  return (
    <header className=" border-bottom w-100">
      <Navbar>
        <h1 className="px-7">
          <img src={logo} alt="logo.png" className="h-1 h-sm-5" />
        </h1>
        <ul className="d-flex d-sm-none">
          <li className="px-7">
            <Link className="text-white fw-bold" to="/">
              首頁
            </Link>
          </li>
          <li className="px-7">
            <Link className="text-white fw-bold" to="/shop">
              定價
            </Link>
          </li>
        </ul>
        <Link className="d-none d-sm-block" to="/menu">
          <img src={menu} alt="menu" />
        </Link>
      </Navbar>
    </header>
  );
};

export default Header;
