import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import SideBar from './shared/Sidebar';

const MainLayout = () => {
  const showCart = () => {
    if (localStorage.getItem('token')) {
    }
  };
  return (
    <>
      <Header />
      <SideBar />
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-center">
        <div className="container my-3 my-md-4 flex-grow-1 d-flex flex-column">
          <Outlet />
        </div>
      </main>
      <footer>soy footer</footer>
    </>
  );
};

export default MainLayout;
