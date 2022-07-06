import './App.css';
//React router
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';
import Purchases from './components/purchases/Purchases';
import Login from './components/login/Login';
import Home from './components/home/Home';
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
            {/* <Route path="/cart" element={<h2>Cart</h2>} /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
