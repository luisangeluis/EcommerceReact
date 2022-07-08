import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import SideBarr from './shared/SideBarr';

const MainLayout = () => {
  const showCart = () => {
    if (localStorage.getItem('token')) {
    }
  };
  return (
    <>
      <Header />
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center position-relative">
        <div className="container py-3 py-md-4 flex-grow-1 d-flex flex-column">
          <Outlet />
        </div>
      </main>
      <footer>soy footer</footer>
    </>
  );
};

export default MainLayout;
