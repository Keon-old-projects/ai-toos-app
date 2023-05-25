import React from "react";

const Btn = ({ btnType, btnText, btnStyle }) => {
  return (
    <button type={btnType} className={btnStyle}>
      {btnText}
    </button>
  );
};

export default Btn;
