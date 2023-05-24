import React from 'react';

import deco from '../assets/deco.png';

const Deco = ({ inStyle }) => {
  return (
    <div className={`d-flex ${inStyle}`}>
      <img src={deco} alt="deco" />
      <img src={deco} alt="deco" />
      <img src={deco} alt="deco" />
    </div>
  );
};

export default Deco;
