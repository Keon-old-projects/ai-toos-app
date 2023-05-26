import React from 'react';

// import CardList from '../components/card/CardList';
// import ReviewCard from '../components/card/ReviewCard';
import PricingCard from '../components/card/PricingCard';
import Container from '../components/Container';
import Deco from '../components/Deco';
import TextTag from '../components/TextTag';
import AiMain from '../Layout/AiMain';
import FooterMenu from '../Layout/FooterMenu';

const Shop = () => {
  const cardArr = [
    {
      name: '琪琪',
      list: ['初級', '速度最快'],
      price: `NT$5`
    },
    {
      name: '昊昊',
      list: ['中級'],
      price: `NT$5`
    },
    {
      name: '卡卡',
      list: ['高級'],
      price: `NT$5`
    },
    {
      name: '杰杰',
      list: ['最高級', '資訊最完善'],
      price: `NT$5`
    }
  ];
  const norm = [
    {
      title: `守法`,
      text: `請遵守相關的法規和政策，不得進行任何違法違規的活動。`
    },
    {
      title: `資訊安全`,
      text: `請務必保護好自己的帳號和密碼，不得將其透露給他人。`
    },
    {
      title: `守密`,
      text: `需對使用過程中產生的數據負責，不得擅自泄露數據。`
    }
  ];

  return (
    <>
      <article className="content">
        <Container mt="1">
          <TextTag
            tag="h2"
            inStyle="display-2 display-lg-3 fs-sm-1 fw-bold pointer-none"
            inArr={[`用多少，`, `付多少。`]}
          />

          <TextTag
            tag="h2"
            inStyle="fs-1 fs-sm-4 fw-bold pointer-none mt-d3 mt-1 ms-auto w-50"
            inArr={[`我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。`]}
          />
          <Deco inStyle="mt-d3 " />
        </Container>
        <Container mt="d1" inStyle="px-6">
          <TextTag tag="h3" inStyle="fw-bold" inArr={[`定價`]} />
          <div className="d-flex flex-wrap mt-d3" style={{ gap: `1.5rem` }}>
            {cardArr.map((item) => (
              <PricingCard name={item.name} listArr={item.list} price={item.price} />
            ))}
          </div>
        </Container>
        <Container mt="d1" inStyle="d-flex flex-pad-column">
          <div className="flex-1">
            <h3 className="fs-3 fs-sm-6 fw-bold">使用規範</h3>
          </div>
          <main className="flex-2 mt-pad-1">
            {norm.map((item) => (
              <div className="mb-2 pb-2 border-dark-bottom ">
                <TextTag tag="h4" inStyle="fs-1 fs-sm-3 fw-bold" inArr={[item.title]} />
                <TextTag tag="p" inStyle="mt-5 fs-3 fs-sm-root pointer-none" inArr={[item.text]} />
              </div>
            ))}
          </main>
        </Container>
      </article>
      <AiMain />
      <FooterMenu />
    </>
  );
};

export default Shop;
