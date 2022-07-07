import React, { useEffect, useRef } from 'react';

const SideBarr = ({ showCart }) => {
  const sidebar = useRef();

  return (
    <div className={`sidebar ${showCart ? 'open-side' : ''}`} ref={sidebar}>
      <div className="container">
        <div className="row">
          <div className="col-12">fafafafafafafaljdsfñlajsfdñljsañlfdk</div>
        </div>
      </div>
    </div>
  );
};

export default SideBarr;
