import React from 'react';

const Navbar = ({ children }) => {
  return (
    <nav className="d-flex justify-content-between align-items-center border-bottom py-6 flex-wrap">{children}</nav>
  );
};

export default Navbar;
