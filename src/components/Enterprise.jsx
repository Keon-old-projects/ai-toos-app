import React from 'react';

import { enterpriseArr } from '../js/firm';

const Enterprise = ({ inStyle }) => {
  return (
    <div className={`d-flex overflow-hidden ${inStyle}`}>
      {
        enterpriseArr.map((item, index) => <img src={item} alt={`廠商${index + 1}`} className="h-1" />)
      }
    </div>
  );
};

export default Enterprise;
