import React from 'react';

import { Link } from 'react-router-dom';

const Menu = ({ instyle }) => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: `instant`
    });
  return (
    <section className={`${instyle ?? ''}`}>
      <h2 className="d-flex flex-column align-items-center display-3 fw-bold ">
        <Link to="/" className="d-block text-white" onClick={scrollToTop}>
          首頁
        </Link>
        <Link to="/shop" className="d-block text-white mt-8" onClick={scrollToTop}>
          定價
        </Link>
      </h2>
    </section>
  );
};

export default Menu;
