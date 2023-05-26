import React from 'react';

import call from '../assets/icons/call made.png';

const StarBtn = ({ inStyle }) => {
  return (
    <button type="button" className={inStyle}>
      開始使用 <img src={call} alt="" />
    </button>
  );
};

export default StarBtn;
