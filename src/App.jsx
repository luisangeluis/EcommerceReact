import { useEffect, useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from './store/slices/products.slice';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ProtectedRoutes from './components/ProtectedRoutes';
import Purchases from './components/Purchases';

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Lo gin />} />
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
