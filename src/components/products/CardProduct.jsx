import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const goToDetail = (e) => {
    navigate(`/products/${e}`);
  };

  // console.log(product);
  return (
    <div className="col-md-6 col-lg-4 my-2 my-md-3">
      <div className="card products-list_card d-flex justify-content-center align-items-center flex-column py-2 py-md-3">
        <button
          className="btn h-100 w-100"
          onClick={() => goToDetail(product.id)}
        >
          <img src={product.productImgs[0]} className="img-fluid" alt="" />
          <hr />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <div className="d-flex justify-content-around align-items-end">
              <div>
                <p className="card-text m-0">Price</p>
                <p className="card-text m-0">Price</p>
              </div>
              <div>
                <p>hola</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
