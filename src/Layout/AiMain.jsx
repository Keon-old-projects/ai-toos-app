import React from 'react';

import Btn from '../components/Btn';
import ProductCard from '../components/card/ProductCard';
import Container from '../components/Container';
import Navbar from '../components/Navbar';
import TextTag from '../components/TextTag';
import cardsData from '../js/cardsData.json';

const AiMain = () => {
  const btnArr = ['全部', '聊天', '影像辨識', '翻譯', '行銷', '客服', '生產力'];
  return (
    <main className="mt-d1 py-d1 bg-white round-max">
      <Container inStyle="py-1 text-black">
        <TextTag tag="h2" inStyle="display-3 fw-bold text-center" inArr={[`這些超酷的應用，都來自 AI工具王`]} />
        <Navbar>
          {btnArr.map((text) => (
            <Btn btnType="button" btnText={text} btnStyle="py-8 text-black fw-normal" />
          ))}
          <select name="" id="">
            由新到舊
          </select>
        </Navbar>
        <article className="mt-2 d-flex flex-wrap justify-content-center" style={{ gap: `1.5rem` }}>
          {cardsData.map((item) => (
            <ProductCard
              imgUrl={item.imgurl}
              title={item.title}
              name={item.name}
              share={item.share}
              content={item.content}
            />
          ))}
        </article>
      </Container>
    </main>
  );
};

export default AiMain;
