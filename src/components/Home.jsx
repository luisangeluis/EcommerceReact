import React, { useEffect } from 'react';
import ProductsList from './products/ProductsList';
//Redux
import { useDispatch } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-9">
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
