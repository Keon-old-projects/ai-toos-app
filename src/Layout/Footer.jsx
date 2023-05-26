import React from 'react';

import upArrow from '../assets/icons/arrow upward.png';

const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  return (
    <footer className="border-top">
      <section className="d-flex justify-content-between align-items-center flex-sm-wrap py-6 px-sm-small border-top">
        <p className="order-sm-1 fw-bold ">AI工具王 © 2023</p>
        <ul className="order-sm-3 d-flex justify-content-between">
          <li className="py-7 py-6">
            <a
              href="https://www.facebook.com/hexschool/?locale=zh_TW"
              className="text-white fw-bold"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="py-7 mx-6 py-6">
            <a href="https://twitter.com/" className="text-white fw-bold" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li className="py-7 py-6">
            <a href="https://www.instagram.com/" className="text-white fw-bold" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <button
          onClick={scrollToTop}
          className="order-sm-2 d-flex align-items-center text-white fw-bold border-none "
          style={{ gap: `4px` }}
        >
          Back to top <img src={upArrow} alt="" className="h-root" />
        </button>
      </section>
    </footer>
  );
};

export default Footer;
