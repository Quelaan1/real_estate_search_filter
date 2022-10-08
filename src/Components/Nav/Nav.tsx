import React from 'react';
import './Nav.css';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';

export const Nav: React.FC = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav__left-items">
          <Link to="/" className="nav__logo">
            <img
              className="nav__logo-image"
              src={logo}
              alt="logo"
            />
            <h1 className="nav__logo-name">Estatery</h1>
          </Link>

          <div className="nav__links">
            <NavLink className='nav__links-item' to="rent">Rent</NavLink>
            <NavLink className='nav__links-item' to="buy">Buy</NavLink>
            <NavLink className='nav__links-item' to="sell">Sell</NavLink>
            <NavLink className='nav__links-item' to="manage">ManageProperty</NavLink>
            <NavLink className='nav__links-item' to="resource">Resources</NavLink>
            <NavLink className='nav__links-item' to="favourites">Favourites</NavLink>

          </div>
        </div>

        <div className="nav__buttons">
          <a className="nav__buttons-login" href="/">
            Login
          </a>
          <a className="nav__buttons-signup" href="/">
            Sign Up
          </a>
        </div>
      </div>

      <hr />
    </div>

  );
};
