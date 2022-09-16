import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import navStyles from '../styles/nav.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Nav = ({ toggleCart, numOfItems }) => {
  return (
    <nav>
      <div className={navStyles.logo}>Fake Shop</div>
      <div className={navStyles.links}>
        <NavLink
          className={useLocation().pathname === '/' ? navStyles.activeLink : ''}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={
            useLocation().pathname === '/shop' ? navStyles.activeLink : ''
          }
          to="/shop"
        >
          Shop
        </NavLink>
      </div>
      <span>{numOfItems}</span>
      <button onClick={toggleCart} className={navStyles.cart}>
        <ShoppingBasketIcon />
      </button>
    </nav>
  );
};

export default Nav;
