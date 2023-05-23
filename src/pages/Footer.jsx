import React from 'react';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="container border-top">
      <section className="d-flex justify-content-between" style={{ padding: `80px 0` }}>
        <h2 className="display-3 fw-bold">
          首頁 <br />
          定價
        </h2>
        <img src={logo} alt="logo.png" className="h-1" />
      </section>
      <section className="d-flex justify-content-between align-items-center py-6 border-top">
        <p className="fw-bold">AI工具王 © 2023</p>
        <ul className="d-flex">
          <li className="py-small py-6">
            <a href="https://www.facebook.com/hexschool/?locale=zh_TW" className="text-white fw-bold" target="_blank">
              Facebook
            </a>
          </li>
          <li className="py-small mx-6 py-6">
            <a href="https://twitter.com/" className="text-white fw-bold" target="_blank">
              Twitter
            </a>
          </li>
          <li className="py-small py-6">
            <a href="https://www.instagram.com/" className="text-white fw-bold" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
        <a href="#" className="text-white fw-bold">
          Back to top
        </a>
      </section>
    </footer>
  );
};

export default Footer;
