import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-dard p-3 p-md-4 bg-dark">
      <div className="container-fluid d-flex flex-column justify-content-evenly align-items-center text-white">
        <h3>Academlo 2022</h3>
        <section>
          <ul className="d-flex">
            <li>
              <NavLink to="/" className="">
                <i className="fa-brands fa-instagram"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="">
                <i className="fa-brands fa-linkedin-in"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="">
                <i className="fa-brands fa-youtube"></i>
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
