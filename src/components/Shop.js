import React from 'react';
import Card from './Card';
import shopStyles from '../styles/shop.module.css';

const Shop = ({ addToCart, items }) => {
  return (
    <section className={shopStyles.shop}>
      {items.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.color}
          addToCart={addToCart}
        />
      ))}
    </section>
  );
};

export default Shop;
