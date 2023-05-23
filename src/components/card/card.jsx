import React from 'react';
import './card.scss';

const Card = ({ imgUrl, name }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt={name} className="card-img" />
      <div class="card-body">
        <h6 class="card-title fw-bold">title</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
      </div>
      <ul class="list-group border-top">
        <li class="list-group-item ">
          <span>AI 模型</span>
          <span>AI 模型</span>
        </li>
        <li class="list-group-item border-top">
          <span>#聊天</span>
          <span>AI 模型</span>
        </li>
      </ul>
    </div>
  );
};

export default Card;
