import React, { useState } from 'react';

import './collapse.scss';
import add from '../assets/icons/add.png';
import remove from '../assets/icons/remove.png';

const Collapse = ({ title }) => {
  const [icon, setIcon] = useState(false);
  return (
    <button className="collapse " type="button" onClick={() => setIcon(!icon)}>
      <div className="collapse-title">
        <img src={icon ? remove : add} alt="" />
        <p>{title}</p>
      </div>
      <main className={`${icon ? `d-block` : `d-none`}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, rerum facere? Quidem accusamus voluptatum
        laudantium magnam suscipit explicabo nostrum quod soluta ullam? Sed quis, corporis vero consequatur blanditiis
        perspiciatis a!
      </main>
    </button>
  );
};

export default Collapse;
