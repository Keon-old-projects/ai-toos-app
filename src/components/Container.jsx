import React from 'react';

const Container = ({ mt, inStyle, children }) => {
  return <section className={`container mt-${mt} ${inStyle ?? ''}`}>{children}</section>;
};

export default Container;
