import React from 'react';

const Text = ({ tag, inStyle, inArr }) => {
  const inTest = inArr.map((str) => (
    <>
      {str}
      <br />
    </>
  ));
  return React.createElement(tag, { className: `${inStyle}` }, inTest);
};

export default Text;
