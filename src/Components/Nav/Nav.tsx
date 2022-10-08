import React from 'react';
import './Nav.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';

export const Nav: React.FC = () => {
  {
    return (
      <div className="nav">
        <div className="nav__left-items">
          <Link
            to="/"
            className="nav__logo"
          >
            <img
              className="nav__logo-image"
              src={logo}
              alt="logo"
            />
            <h1 className="nav__logo-name">Estatery</h1>
          </Link>

          <div className="nav__links">
            <Link
              className="nav__links-item"
              to="rent"
            >
              Rent
            </Link>
            <Link
              className="nav__links-item"
              to="buy"
            >
              Buy
            </Link>
            <Link
              className="nav__links-item"
              to="sell"
            >
              Sell
            </Link>
            <Link
              className="nav__links-item"
              to="manage"
            >
              ManageProperty
            </Link>
            <Link
              className="nav__links-item"
              to="resource"
            >
              Resources
            </Link>
            <Link
              className="nav__links-item"
              to="favourites"
            >
              Favourites
            </Link>
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
