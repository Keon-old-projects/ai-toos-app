import React from 'react';

import { StarBtn, CardList, ReviewCard, Container, Deco, Marquee, TextTag } from '../components';
import { userImg1, userImg2, userImg3, star, flash, library } from '../js/firm';
import AiMain from '../Layout/AiMain';
import FooterMenu from '../Layout/FooterMenu';

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
  const review = [
    {
      star: 5,
      text: `非常喜歡 AI工具王 提供的 AI 模型租賃服務，使用起來非常方便，而且效果非常好。對於我們公司的業務來說，這個服務非常重要，因為我們需要大量的數據進行分析和預測，AI工具王 提供的 AI 模型能夠幫助我們節省大量時間和成本，實在是太棒了！`,
      userImg: userImg1,
      userName: '陳小姐',
      userCompany: `ABC科技有限公司`
    },
    {
      star: 5,
      text: `作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王 提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王 的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝 AI工具王 團隊的辛勤工作！`,
      userImg: userImg2,
      userName: '劉小姐',
      userCompany: `XYZ 醫療器材有限公司`
    },
    {
      star: 5,
      text: `我們銀行一直在尋找能夠幫助我們提高風險控制和客戶服務的解決方案，而 AI工具王 提供的 AI 模型租賃服務正好滿足了我們的需求。我們使用 AI工具王 的模型進行客戶信用評估和詐騙檢測等任務，這些模型非常準確，能夠幫助我們更好地控制風險，提高客戶滿意度。非常感謝 AI工具王 團隊的支持！`,
      userImg: userImg3,
      userName: '黃先生',
      userCompany: `EFG 銀行`
    }
  ];
  return (
    <>
      <article className="content">
        <Container mt="d1">
          <TextTag
            tag="h2"
            inStyle="display-2 display-lg-3 fs-sm-1 fw-bold pointer-none"
            inArr={[`透過`, `AI工具王的`, `強大模型`, `讓您的業務更聰明`]}
          />
          <StarBtn inStyle="mt-1" />
          <Deco inStyle="mt-d3 justify-content-end" />
        </Container>
        <Container mt="d1">
          <div className="d-flex flex-pad-column" style={{ gap: '24px' }}>
            <TextTag tag="h2" inStyle="flex-1 fs-3 fw-bold" inArr={[`我們的服務`]} />
            <TextTag
              tag="p"
              inStyle="flex-2 fs-1 fs-pad-3 fw-bold"
              inArr={[`我們相信透過 AI 技術，`, `包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。`]}
            />
          </div>
          <main className="card-list mt-d3 " style={{ gap: '1.5rem' }}>
            {cardArr.map((item) => (
              <CardList inStyle="ani-float" imgSrc={item.img} title={item.title} directions={item.directions} />
            ))}
          </main>
        </Container>

        <Container mt="d1">
          <TextTag tag="h3" inStyle="fw-bold mb-d3" inArr={['來自合作夥伴']} />
          <Marquee />
          <main className="card-list mt-d3" style={{ gap: '1.5rem' }}>
            {review.map((item) => (
              <ReviewCard
                starLength={item.star}
                text={item.text}
                userImg={item.userImg}
                userName={item.userName}
                userCompany={item.userCompany}
              />
            ))}
          </main>
        </Container>
      </article>
      <AiMain />

      <Container mt="d3" inStyle="d-flex flex-column align-items-center py-d3">
        <TextTag tag="h2" inStyle="fw-bold fs-1 text-center" inArr={['現在就來建立屬於你的服務吧']} />
        <StarBtn inStyle="mt-1" />
      </Container>
      <FooterMenu />
    </>
  );
};

export default Home;
