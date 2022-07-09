import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getCart, resetCart } from '../../store/slices/cart.slice';
import getConfigPurchases from '../../utils/getConfigPurchases';
import CardResume from '../cart/CardResume';

const SideBarr = ({ showCart, setShowCart }) => {
  const sidebar = useRef();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total,setTotal] =useState(0);

  useEffect(()=>{
    let suma=0;
    if(cart){
      console.log('hola')
      suma = cart.reduce((accum,current)=>{
        return accum +(current.price*current.productsInCart.quantity);
      },0);

    }
    console.log(suma);
    setTotal(suma)

  },[cart])

  console.log(cart);

  const closeCart = () => {
    setShowCart(false);
  };

  const makePurchase = () => {
    const purchaseData = {
      street: 'Green St. 1456',
      colony: 'Southwest',
      zipCode: 12345,
      city: 'USA',
      references: 'Some references',
    };

    axios
      .post(
        'https://ecommerce-api-react.herokuapp.com/api/v1/purchases',
        purchaseData,
        getConfigPurchases()
      )
      .then((res) => {
        console.log(res);
        dispatch(resetCart());
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className={`sidebar ${showCart ? 'open-side' : ''}`} ref={sidebar}>
      <div className="container d-flex flex-column justify-content-between align-items-center p-3 p-md-4">
        <button className="btn text-end align-self-end" onClick={closeCart}>
          <b>
            <i className="fa-solid fa-circle-xmark"></i>
          </b>
        </button>
        <div className="flex-grow-1">
          <h2>Shopping cart</h2>
          <div className="row">
            {cart &&
              cart.map((product) => (
                <CardResume product={product} key={product.id} />
              ))}
          </div>
        </div>
        <h3>{total>0 ? `Total: ${total}`:''}</h3>
        <div className="row w-100">
          <div className="col-12">
            <button className="btn bg-orange w-100 text-white" onClick={makePurchase}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBarr;
