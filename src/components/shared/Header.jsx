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
            E-commerce
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/purchases">
                  Purchases
                </NavLink>
              </li>
              <li className="nav-item">
                {/* <button className="btn nav-link">Cart</button> */}
                <button className="btn nav-link" onClick={getSideBar}>
                  Cart
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
