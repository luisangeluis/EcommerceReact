import axios from 'axios';
import React from 'react';
import getConfigPurchases from '../../utils/getConfigPurchases';

const CardResume = ({ product }) => {
  console.log(product);

  const removeToCart = () => {
    axios
      .delete(
        `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`,
        getConfigPurchases()
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="card my-2 my-md-3 p-2 p-md-3">
      <div className="card-body">
        <div className="product-resume d-flex justify-content-between align-items-start">
          <div>
            <p className="card-title m-0">{product.brand}</p>
            <p className="card-title m-0">{product.title}</p>
            <p className="card-title m-0 border border-1 text-center card-resume_quantity m-1 m-md-2">
              {product.productsInCart.quantity}
            </p>
          </div>
          <button onClick={removeToCart} className="btn">
            <i className="fa-solid fa-trash-can color-orange"></i>
          </button>
        </div>
        <p className="text-end">
          Total{' '}
          {`\$ ${(product.productsInCart.quantity * product.price).toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};

export default CardResume;
