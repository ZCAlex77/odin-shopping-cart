import React from 'react';
import { Link } from 'react-router-dom';
import shoppingCart from '../assets/shopping-cart.png';
import homeStyles from '../styles/home.module.css';

const Home = () => {
  return (
    <section className={homeStyles.home}>
      <div className={homeStyles.logoContainer}>
        <img src={shoppingCart} alt="logo" />
      </div>
      <div className={homeStyles.desc}>
        <h1>Fake Shop</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vitae illum sunt, ipsum accusantium quae ipsa distinctio et! Vel,
          reiciendis.
        </p>
        <Link to="/shop" className={homeStyles.shopBtn}>
          Shop now!
        </Link>
      </div>
    </section>
  );
};

export default Home;
