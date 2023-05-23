import React from 'react';

const Navbar = ({ children }) => {
  return (
    <nav className="d-flex">
      {children}
    </nav>
  );
};

export default Navbar;
