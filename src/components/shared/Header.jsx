import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SideBarr from './SideBarr';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  let isLogged = false;

  if (localStorage.getItem('token')) {
    isLogged = true;
  } else {
    isLogged = false;
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setShowCart(false);
    }
  }, [localStorage.getItem('token')]);

  const getSideBar = () => {
    if (isLogged) {
      setShowCart(!showCart);
    } else {
      setShowCart(false);
      navigate('/login');
    }
  };
  // console.log(isLogged);
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <p className='color-one'>E-commerce</p> 
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item px-2 px-md-3">
                <NavLink className={({isActive})=>isActive?`nav-link active`:`nav-link`} to="/login">
                  <i className="fa-solid fa-user"></i>
                  <p>Login</p>
                </NavLink>
              </li>
              <li className="nav-item px-2 px-md-3">
                <NavLink className={`nav-link ${({isActive})=>isActive?"nav-link active":"nav-link"}`} to="/purchases">
                  <i className="fa-solid fa-bag-shopping"></i>
                  <p>Purchases</p>
                </NavLink>
              </li>
              <li className="nav-item px-2 px-md-3">
                {/* <button className="btn nav-link">Cart</button> */}
                <button className="btn nav-link mx-auto" onClick={getSideBar}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SideBarr showCart={showCart} setShowCart={setShowCart} />
    </header>
  );
};
export default Header;
