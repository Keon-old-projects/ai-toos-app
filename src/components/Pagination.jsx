import React from 'react';

const Pagination = () => {
  return (
    <nav aria-label="navigation ">
      <ul className="pagination d-flex ms-auto">
        <li className="page-item">
          <button className="page-link text-black border p-6 mx-small">&laquo;</button>
        </li>
        <li className="page-item">
          <button className="page-link text-black border p-6 mx-small">1</button>
        </li>
        <li className="page-item">
          <button className="page-link text-black border p-6 mx-small">2</button>
        </li>
        <li className="page-item">
          <button className="page-link text-black border p-6 mx-small">3</button>
        </li>
        <li className="page-item">
          <button className="page-link text-black border p-6 mx-small">&raquo;</button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
