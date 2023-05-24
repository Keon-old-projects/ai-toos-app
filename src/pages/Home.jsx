import React from 'react';

import Btn from '../components/Btn';
import CardList from '../components/card/CardList';
import Card from '../components/card/ProductCard';
import Deco from '../components/Deco';
import Enterprise from '../components/Enterprise';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {
  star,
  flash,
  library,
  logo,
} from '../js/firm';

const Home = () => {
  const cardArr = [
    { img: flash, title: '快速', directions: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。' },
    { img: star, title: '靈活', directions: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。' },
    { img: library, title: '靈活', directions: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。' },
  ];

  return (
    <>
      <Header />
      <section className="container mt-1">
        <h2 className="display-2 fw-bold pointer-none">
          透過<br />
          AI工具王的<br />
          強大模型<br />
          讓您的業務更聰明
        </h2>
        <Btn btnType="button" btnText="開始使用" btnStyle="mt-1" />
        <Deco inStyle="mt-d3 justify-content-end" />
      </section>
      <section className="container mt-d1">
        <div className="d-flex " style={{ gap: '24px' }}>
          <h2 className="fs-3 fw-bold" style={{ flex: '1' }}>我們的服務</h2>
          <h3 className="fs-1 fw-bold" style={{ flex: '2' }}>我們相信透過 AI 技術，<br />
            包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
          </h3>
        </div>
        <main className="d-flex mt-d3" style={{ gap: '1.5rem' }}>
          {
            cardArr.map((item) => (
              <CardList imgSrc={item.img} title={item.title} directions={item.directions} />
            ))
          }
        </main>
      </section>
      <section className="container mt-d1">
        <h3 className="fw-bold mb-d3">來自合作夥伴</h3>
        <Enterprise />
        <Enterprise inStyle="mt-6" />
      </section>
      <section className="mt-d1 py-d1 bg-white round-max">
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
