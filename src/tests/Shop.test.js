import React from 'react';
import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';
import testItems from './testItems';

describe('Shop', () => {
  render(<Shop addToCart={() => {}} items={testItems} />);

  it('renders correct number of cards', () => {
    expect(screen.getAllByText('Add to cart').length).toBe(4);
  });
});
