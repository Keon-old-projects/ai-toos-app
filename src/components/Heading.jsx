import React from 'react';

const Heading = ({ tag, inStyle, inArr }) => {
  const inTest = inArr.map((str) => (
    <>
      {str}
      <br />
    </>
  ));
  console.log(`inTest----`, inTest);
  return React.createElement(`h${tag}`, { className: `${inStyle}` }, inTest);
};

export default Heading;
