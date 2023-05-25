import React from 'react';

import logo from '../assets/logo.png';
import Container from '../components/Container';

const Footer = () => {
  return (
    <footer className="mt-d3 border-top">
      <Container inStyle="d-flex justify-content-between flex-wrap px-7 py-d3">
        <h2 className="display-3 fw-bold ">
          <a href="/" className="d-block text-white">
            首頁
          </a>

          <a href="/shop" className="text-white mt-8">
            定價
          </a>
        </h2>

        <img src={logo} alt="logo.png" className="h-1" />
      </Container>
      <section className="d-flex justify-content-between align-items-center py-6 border-top">
        <p className="fw-bold">AI工具王 © 2023</p>
        <ul className="d-flex">
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
        <a href="/" className="text-white fw-bold">
          Back to top
        </a>
      </section>
    </footer>
  );
};

export default Footer;
