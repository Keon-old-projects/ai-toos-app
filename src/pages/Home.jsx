import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Btn from '../components/Btn';
import CardList from '../components/card/CardList';
import Container from '../components/Container';
import Deco from '../components/Deco';
import Heading from '../components/Heading';
import Marquee from '../components/Marquee';
import { star, flash, library, logo } from '../js/firm';
import AiMain from '../Layout/AiMain';

const Home = () => {
  const cardArr = [
    {
      img: flash,
      title: '快速',
      directions: '我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。'
    },
    {
      img: star,
      title: '靈活',
      directions: '我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。'
    },
    {
      img: library,
      title: '靈活',
      directions: '我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。'
    }
  ];

  return (
    <>
      <Header />
      <section className="container mt-1">
        <Heading
          tag={2}
          inStyle="display-2 fw-bold pointer-none"
          inArr={[`透過`, `AI工具王的`, `強大模型`, `讓您的業務更聰明`]}
        />

        <Btn btnType="button" btnText="開始使用" btnStyle="mt-1" />
        <Deco inStyle="mt-d3 justify-content-end" />
      </section>

      <section className="container mt-d1">
        <div className="d-flex " style={{ gap: '24px' }}>
          <Heading tag={2} inStyle="flex-1 fs-3 fw-bold" inArr={[`我們的服務`]} />
          <Heading
            tag={3}
            inStyle="flex-2 fs-1 fw-bold"
            inArr={[`我們相信透過 AI 技術，`, `包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。`]}
          />
        </div>
        <main className="card-list d-flex mt-d3 flex-wrap justify-content-center" style={{ gap: '1.5rem' }}>
          {cardArr.map((item) => (
            <CardList imgSrc={item.img} title={item.title} directions={item.directions} />
          ))}
        </main>
      </section>
      <Container mt="d1">
        <Heading tag="3" inStyle="fw-bold mb-d3" inArr={['來自合作夥伴']} />
        <Marquee />
      </Container>

      <AiMain />

      <Container mt="d3" inStyle="d-flex flex-column align-items-center py-d3">
        <Heading tag="2" inStyle="fw-bold fs-1 text-center" inArr={['現在就來建立屬於你的服務吧']} />
        <Btn btnType="button" btnText="開始使用" btnStyle="mt-2" />
      </Container>

      <Footer logo={logo} />
    </>
  );
};

export default Home;
