import React from 'react';

const Navbar = ({ children, instyle }) => {
  return <nav className={`navbar py-6 flex-wrap ${instyle ?? ''}`}>{children}</nav>;
};

export default Navbar;
