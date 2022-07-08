import './App.css';
//React router
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './components/MainLayout';
import Purchases from './components/purchases/Purchases';
import Login from './components/login/Login';
import Home from './components/home/Home';
import ProductDetail from './components/products/ProductDetail';
import { useEffect } from 'react';
//Redux
import { useDispatch } from 'react-redux';
import { getProducts } from './store/slices/products.slice';

function App() {

  // useEffect(() => {
  //   createUser()
  // }, [])
  
  // const createUser = () => {
  //   const user = {
  //     firstName: "luis",
  //     lastName: "zepeda",
  //     email: "luisangeluis@gmail.com",
  //     password: "pass12345",
  //     phone: "1234567891",
  //     role: "admin"
  //   }
  //   axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users',user)
  //     .then(res => {
  //       console.log(res);
  //     })
  //     .catch(error => console.log(error));
  // }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

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
