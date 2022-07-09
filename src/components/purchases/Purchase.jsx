import React from 'react';

const Purchase = ({ purchase }) => {
  return (
    <div className="purchase card my-3 my-md-4">
      <div className="card-header  bg-one">{purchase.updatedAt}</div>
      <div className="card-body">
        <ul className="d-flex  flex-column justify-content-around align-items-center">
          {purchase.cart.products?.map((product) => (
            <li
              key={product.id}
              className="d-flex w-100 justify-content-between align-items-center p-2 p-md-3"
            >
              <p className="w-50">{product.title}</p>
              <p className="text-center border p-1 p-md-2">
                {product.productsInCart.quantity}
              </p>
              <p className="p-2 p-md-3">{product.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Purchase;
