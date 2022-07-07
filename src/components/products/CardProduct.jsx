import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState();

  useEffect(() => {
    setCurrentProduct(product);
  }, [product]);

  const goToDetail = (e) => {
    navigate(`/products/${e}`);
  };

  // console.log(product);
  return (
    <div className="col-md-6 col-lg-4 my-2 my-md-3">
      <div className="card products-list_card d-flex justify-content-center align-items-center flex-column py-2 py-md-3">
        <button
          className="btn h-100 w-100 d-flex flex-column"
          onClick={() => goToDetail(currentProduct.id)}
        >
          <img
            src={currentProduct?.productImgs[0]}
            className="img-fluid mx-auto p-2 p-md-3"
            alt=""
          />
          <hr className="bg-dark w-100" />
          <div className="card-body d-flex flex-column justify-content-between align-items-stretch w-75 mx-auto">
            <h5 className="card-title">{currentProduct?.title}</h5>
            <div className="d-flex justify-content-between align-items-end">
              <div>
                <p className="card-text m-0">Price</p>
                <p className="card-text m-0">${currentProduct?.price}</p>
              </div>
              <div>
                <i className="btn btn-add-cart rounded-circle bg-orange">
                  <i className="fa-solid fa-cart-shopping text-white"></i>
                </i>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
