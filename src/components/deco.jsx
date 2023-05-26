import React from 'react';

import deco from '../assets/deco.png';

const Deco = ({ inStyle }) => {
  return (
    <div className={`d-flex w-sm-100 ${inStyle}`}>
      <div className="flex-sm-1">
        <img src={deco} alt="deco" className="" />
      </div>
      <div className="flex-sm-1">
        <img src={deco} alt="deco" className="" />
      </div>
      <div className="flex-sm-1">
        <img src={deco} alt="deco" className="" />
      </div>
    </div>
  );
};

export default Deco;
