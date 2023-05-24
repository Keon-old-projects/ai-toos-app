import React from 'react';

const CardList = ({ imgSrc, title, directions }) => {
  return (
    <div className="py-d3 px-1 border round-3" style={{ flex: '1', cursor: 'default' }}>
      <img src={imgSrc} alt={title} />
      <h3 className="fw-bold my-6">{title}</h3>
      <p>{directions}</p>
    </div>
  );
};

export default CardList;
