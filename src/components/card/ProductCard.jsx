import React from 'react';

import './card.scss';
import icon from '../../assets/icons/share.png';
import TextTag from '../TextTag';

const ProductCard = ({ title, imgUrl, name, share, content }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <div className="card-body">
        <TextTag tag="h4" inStyle="fs-6 card-title fw-bold" inArr={[title]} />
        <p className="card-text">{content}</p>
      </div>
      <ul className="list-group border-top">
        <li className="list-group-item ">
          <span className="fw-bold">AI 模型</span>
          <span>{name} </span>
        </li>
        <li className="list-group-item border-top p-0">
          <a
            href="https://chat.openai.com/chat"
            className="d-flex justify-content-between text-black py-6 px-3"
            style={{ flex: 1 }}
          >
            <span>{share}</span>
            <span>
              <img src={icon} alt="share" />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
