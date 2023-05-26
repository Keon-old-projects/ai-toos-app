import React from 'react';

const CardList = ({ imgSrc, title, directions, inStyle }) => {
  return (
    <div className={`card-list-item border round-3 pointer-none ${inStyle ?? ''}`}>
      <img src={imgSrc} alt={title} />

      <h3 className="fw-bold my-6">{title}</h3>
      <p>{directions}</p>
    </div>
  );
};

export default CardList;
