import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';
import Header from './shared/Header';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer>soy footer</footer>
    </>
  );
};

export default MainLayout;
