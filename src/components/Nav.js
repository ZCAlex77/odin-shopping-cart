import React from 'react';
import { Link } from 'react-router-dom';
import navStyles from '../styles/nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div className={navStyles.logo}>Logo</div>
      <div className={navStyles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <button className={navStyles.cart}>Cart</button>
    </nav>
  );
};

export default Nav;
