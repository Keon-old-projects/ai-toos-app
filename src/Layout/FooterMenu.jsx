import React from 'react';

import logo from '../assets/logo.png';
import { Menu } from '../components';

const FooterMenu = () => {
  return (
    <section className="d-flex justify-content-between flex-sm-column-reverse  align-items-sm-start flex-wrap mt-d3 px-7 py-d3 border-top">
      <Menu />
      <img src={logo} alt="logo.png" className="h-1 mb-sm-2" />
    </section>
  );
};

export default FooterMenu;
