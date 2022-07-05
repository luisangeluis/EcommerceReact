import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <div className="container my-3 my-md-4">
          <Outlet />
        </div>
      </main>
      <footer>soy footer</footer>
    </>
  );
};

export default MainLayout;
