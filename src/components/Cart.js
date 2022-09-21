import React from 'react';
import cartStyles from '../styles/cart.module.css';
import OrderItem from './OrderItem';

const Cart = ({ isOpen, order, updateCart, deleteFromCart }) => {
  const getTotal = () => {
    let total = 0;
    for (const item of order) total += item.quantity * item.price;
    return total;
  };

  return (
    <div
      className={`${cartStyles.cart} ${
        isOpen ? cartStyles.open : cartStyles.closed
      }`}
    >
      <div className={cartStyles.order}>
        {order.map((item, index) => (
          <OrderItem
            key={item.name}
            index={index}
            item={item}
            updateCart={updateCart}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
      <div className={cartStyles.checkoutContainer}>
        <p data-testid="total">
          Total: {getTotal()}
          {'\u20ac'}
        </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
