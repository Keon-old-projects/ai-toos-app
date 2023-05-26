import React from 'react';

import './PricingCard.scss';
import call from '../../assets/icons/call made.png';

const PricingCard = ({ name, listArr, price }) => {
  return (
    <div className="pricing-card">
      <main className="pricing-card-body">
        <h3 className="fw-bold">{name}</h3>
        <ul className="ps-5 list-type-disc">
          {listArr.map((item) => (
            <li className="pt-small">{item}</li>
          ))}
        </ul>
      </main>
      <div className="pricing-card-bottom">
        <p>
          <span className="fw-bold">{price}</span>／<span className="text-gray">1k tokens</span>
        </p>
        <button type="button" className="border-none">
          開始使用
          <img src={call} alt="" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
