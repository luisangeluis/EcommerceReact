import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/slices/products.slice';

const MainLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      <header>soy header</header>
      <main>
        <Outlet />
      </main>
      <footer>soy footer</footer>
    </>
  );
};

export default MainLayout;
