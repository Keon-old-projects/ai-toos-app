import React from 'react';

import logo from '../assets/logo.png';
import Btn from '../components/Btn';
import Card from '../components/card/ProductCard';
import Deco from '../components/deco';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  const cardArr = [{ title: '快速', directions: 'directions' }];
  return (
    <>
      <Header />
      <section className="container mt-1">
        <h2 className="display-2 fw-bold">
          透過<br />
          AI工具王的<br />
          強大模型<br />
          讓您的業務更聰明
        </h2>
        <Btn btnType="button" btnText="開始使用" btnStyle="mt-1" />
        <Deco inStyle="mt-d3 justify-content-end" />
      </section>
      <section className="container mt-d3">
        <div className="d-flex " style={{ gap: '24px' }}>
          <h2 className="fs-3 fw-bold" style={{ flex: '1' }}>我們的服務</h2>
          <h3 className="fs-1 fw-bold" style={{ flex: '2' }}>我們相信透過 AI 技術，<br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </h3>
        </div>
        <main>
          {
            cardArr.map((item) => (
              <div className="py-d3 px-1">
                {item.title}
              </div>
            ))
          }
        </main>
      </section>
      <section className="mt-d3 py-d1 bg-white round-max">
        <main className="container py-1 text-black">
          <h1 className="display-3 fw-bold text-center">
            這些超酷的應用，都來自 AI工具王
          </h1>
          <Card />
        </main>
      </section>
      <section className="container d-flex flex-column align-items-center mt-d3 py-d3">
        <h2 className="fw-bold fs-1 text-center">現在就來建立屬於你的服務吧</h2>
        <Btn btnType="button" btnText="開始使用" btnStyle="mt-2" />
      </section>
      <Footer logo={logo} />
    </>
  );
};

export default Home;
