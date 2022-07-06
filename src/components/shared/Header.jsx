import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom';
import SideBar from './Sidebar';
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    if (token) {
      console.log('is loged');
      setIsLogged(true);
    } else {
      console.log('no is loged');

      setIsLogged(false);
    }
  }, [localStorage.getItem('token')]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                <button
                  className="btn nav-link"
                  data-bs-toggle={isLogged ? 'offcanvas' : ''}
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  aria-controls="offcanvasWithBackdrop"
                >
                  Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
