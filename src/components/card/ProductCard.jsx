import React from 'react';
import './card.scss';

const ProductCard = ({ imgUrl, name, icon }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <div className="card-body">
        <h6 className="card-title fw-bold">title</h6>
        <p className="card-text">
          {/* eslint-disable-next-line max-len */}
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </p>
      </div>
      <ul className="list-group border-top">
        <li className="list-group-item ">
          <span>AI 模型</span>
          <span>{name} </span>
        </li>
        <li className="list-group-item border-top">
          <span># 聊天</span>
          <span>123{ icon }</span>
        </li>
      </ul>
    </div>
  );
};

export default ProductCard;
