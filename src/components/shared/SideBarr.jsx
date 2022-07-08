import React, { useEffect, useRef, useState } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCart } from '../../store/slices/cart.slice';
import CardResume from '../cart/CardResume';

const SideBarr = ({ showCart }) => {
  const sidebar = useRef();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  console.log(cart);

  useEffect(() => {}, [cart]);
  return (
    <section className={`sidebar ${showCart ? 'open-side' : ''}`} ref={sidebar}>
      <div className="container d-flex flex-column justify-content-between align-items-center p-3 p-md-4">
        <button className="btn text-end align-self-end">
          <b>
            <i className="fa-solid fa-circle-xmark"></i>
          </b>
        </button>
        <h2>Shopping cart</h2>
        <div className="row ">
          {cart &&
            cart.map((product) => (
              <CardResume product={product} key={product.id} />
            ))}
        </div>
        <div className="row w-100">
          <div className="col-12">
            <button className="btn bg-orange w-100">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBarr;
