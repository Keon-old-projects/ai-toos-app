import React from 'react';

import star from '../../assets/icons/star.png';

const ReviewCard = ({ starLength, text, userImg, userName, userCompany }) => {
  const starArr = (n) => Array.from(new Array(n), (v, i) => i + 1);
  // style={{ background: `rgba(255, 255, 255, 0.1)` }}
  return (
    <div className="card border-none p-1 bg-dark" style={{ minHeight: '350px' }}>
      <div className="d-flex">
        {starArr(starLength).map(() => (
          <img src={star} alt="star" className="max-w-100" />
        ))}
      </div>
      <p className="flex-1 my-6 text-light">{text}</p>
      <div className="d-flex">
        <img src={userImg} alt=" userImg" />
        <div className="ms-root d-flex flex-column justify-content-between">
          <h5 className="fs-root fw-bold">{userName}</h5>
          <p className="text-light">{userCompany}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
