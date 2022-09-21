import React from 'react';
import orderItemStyles from '../styles/orderItem.module.css';

const OrderItem = ({ index, item, updateCart, deleteFromCart }) => {
  const handleChange = (ev) => {
    if (ev.target.valueAsNumber > 0 && ev.target.valueAsNumber < 1000) {
      updateCart(index, item.name, item.price, ev.target.valueAsNumber);
    }
  };

  return (
    <div className={orderItemStyles.orderItem}>
      <input
        style={{ width: `${String(item.quantity).length + 3}ch` }}
        className={orderItemStyles.quantity}
        type="number"
        min="1"
        max="999"
        value={item.quantity}
        onChange={handleChange}
      />
      <p>{item.name}</p>
      <p>
        {item.price * item.quantity}
        {'\u20ac'}
      </p>
      <button
        onClick={() => deleteFromCart(index)}
        className={orderItemStyles.delete}
      >
        X
      </button>
    </div>
  );
};

export default OrderItem;
