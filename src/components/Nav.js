import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navStyles from '../styles/nav.module.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <nav>
      <div className={navStyles.logo}>Fake Shop</div>
      <div className={navStyles.links}>
        <NavLink
          onClick={() => setActiveLink(0)}
          className={activeLink === 0 ? navStyles.activeLink : ''}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setActiveLink(1)}
          className={activeLink === 1 ? navStyles.activeLink : ''}
          to="/shop"
        >
          Shop
        </NavLink>
      </div>
      <button className={navStyles.cart}>
        <ShoppingBasketIcon />
      </button>
    </nav>
  );
};

export default Nav;
