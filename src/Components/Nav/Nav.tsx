import React from 'react';
import './Nav.css';
import logo from '../../images/icons/logo.svg';

export const Nav: React.FC = () => {
  {
    return (
      <div className="nav">
        <div className="nav__left-items">
          <a
            href="#"
            className="nav__logo"
          >
            <img
              className="nav__logo-image"
              src={logo}
              alt="logo"
            />
            <h1 className="nav__logo-name">Estatery</h1>
          </a>

          <div className="nav__links">
            <a
              className="nav__links-item"
              href="#"
            >
              Rent
            </a>
            <a
              className="nav__links-item"
              href="#"
            >
              Buy
            </a>
            <a
              className="nav__links-item"
              href="#"
            >
              Sell
            </a>
            <a
              className="nav__links-item"
              href="#"
            >
              ManageProperty
            </a>
            <a
              className="nav__links-item"
              href="#"
            >
              Resources
            </a>
          </div>
        </div>

        <div className="nav__buttons">
          <a
            className="nav__buttons-login"
            href="#"
          >
            Login
          </a>
          <a
            className="nav__buttons-signup"
            href="#"
          >
            Sign Up
          </a>
        </div>
      </div>
    );
  }
};
