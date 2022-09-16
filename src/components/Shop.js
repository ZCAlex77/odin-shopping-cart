import React from 'react';
import Card from './Card';
import items from '../items';
import shopStyles from '../styles/shop.module.css';

const Shop = () => {
  return (
    <section className={shopStyles.shop}>
      {items.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.color}
        />
      ))}
    </section>
  );
};

export default Shop;
