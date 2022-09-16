import React, { useState } from 'react';
import cardStyles from '../styles/card.module.css';

const Card = ({ name, price, image }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (ev) => {
    if (ev.target.valueAsNumber > 0 && ev.target.valueAsNumber < 1000)
      setQuantity(ev.target.valueAsNumber);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.image} style={{ background: image }}>
        <p>{`${price} ${'\u20ac'}`}</p>
      </div>
      <p className={cardStyles.productName}>{name}</p>
      <div className={cardStyles.order}>
        <div className={cardStyles.quantity}>
          <span>Quantity:</span>
          <input
            style={{ width: `${String(quantity).length + 2}ch` }}
            type="number"
            min="0"
            max="1000"
            value={quantity}
            onChange={handleChange}
            placeholder="0"
          />
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
