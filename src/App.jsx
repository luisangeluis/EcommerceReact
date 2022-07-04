import { useEffect, useState } from 'react';
import './App.css';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './store/slices/products.slice';
//React router
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';
import Purchases from './components/Purchases';
import Login from './components/login/Login';

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<h2>raiz</h2>} />
          <Route path="/products/:id" element={<h2>Product con id</h2>} />
          <Route element={<ProtectedRoutes isLogged={false} />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
