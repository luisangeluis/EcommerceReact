import './App.css';
//React router
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';
import Purchases from './components/Purchases';
import Login from './components/login/Login';
//redux
import { useSelector } from 'react-redux';

function App() {
  const userName = useSelector((state) => state.userName);

  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<h2>raiz</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<h2>Product con id</h2>} />
          <Route
            element={<ProtectedRoutes isLogged={userName ? true : false} />}
          >
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/cart" element={<h2>Cart</h2>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
