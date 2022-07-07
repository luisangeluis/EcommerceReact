import React, { useEffect, useRef } from 'react';

const SideBarr = ({ showCart }) => {
  const sidebar = useRef();

  return (
    <div
      className={`sidebar bg-dark text-white ${showCart ? 'open-side' : ''}`}
      ref={sidebar}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">SIDEBAR</div>
        </div>
      </div>
    </div>
  );
};

export default SideBarr;
