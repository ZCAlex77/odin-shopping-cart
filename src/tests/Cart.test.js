import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';
import testItems from './testItems';

describe('Cart', () => {
  const cartItems = testItems.map((item) => {
    return { name: item.name, price: item.price, quantity: 2 };
  });
  render(
    <Cart
      isOpen={false}
      order={cartItems}
      updateCart={() => {}}
      deleteFromCart={() => {}}
    />
  );

  it('shows the correct total', () => {
    expect(screen.getByTestId('total').textContent).toBe(
      `Total: ${20 + 90 + 48 + 110}${'\u20ac'}`
    );
  });
});
