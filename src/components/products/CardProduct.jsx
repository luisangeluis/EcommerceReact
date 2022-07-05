import React from 'react';

const CardProduct = ({ product }) => {
  console.log(product);
  return (
    <div className="col-md-6 col-lg-4 my-2 my-md-3">
      <div className="card">
        <img src="" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
