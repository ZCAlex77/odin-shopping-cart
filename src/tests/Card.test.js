import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../components/Card';

describe('Card', () => {
  const mockAddToCart = jest.fn((name, price, quantity) => {
    return { name, price, quantity };
  });

  it('calls addToCart on button press', () => {
    render(
      <Card name="item" price="20" color="blue" addToCart={mockAddToCart} />
    );
    const btn = screen.getByText('Add to cart');

    userEvent.click(btn);

    expect(mockAddToCart.mock.calls.length).toBe(1);
  });

  it('calls addToCart with correct values', () => {
    render(
      <Card name="item" price="20" color="blue" addToCart={mockAddToCart} />
    );
    const btn = screen.getByText('Add to cart');
    const quantity = screen.getByTestId('quantity');

    userEvent.click(btn);
    expect(mockAddToCart.mock.calls[0]).toEqual(['item', '20', 1]);

    fireEvent.change(quantity, { target: { value: '2' } });
    userEvent.click(btn);
    expect(mockAddToCart.mock.calls[1]).toEqual(['item', '20', 2]);
  });
});
