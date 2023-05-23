import React from 'react';

import logo from '../assets/logo.png';
import Card from '../components/card/ProductCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <section className="container mt-d3">
        <Card />
      </section>
      <section className="container mt-d3">
        <Card />
      </section>
      <section className="container mt-d3">
        <Card />
      </section>
      <section className="container py-d3">
        <h2 className="fw-bold fs-1">現在就來建立屬於你的服務吧</h2>
        <button type="button" className="py-6 px-2 text-white border">
          開始使用
        </button>
      </section>
      <Footer logo={logo} />
    </>
  );
};

export default Home;
