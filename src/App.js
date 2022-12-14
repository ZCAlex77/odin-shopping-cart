import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import items from './items';

function App() {
  const [cart, setCart] = useState([]);
  const [numOfItems, setNumOfItems] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item, price, quantity) => {
    let index = cart.findIndex((el) => el.name === item);

    if (index === -1) {
      setCart([...cart, { name: item, price: price, quantity: quantity }]);
    } else updateCart(index, item, price, quantity);
  };

  const updateCart = (index, item, price, newQuantity) => {
    setCart([
      ...cart.slice(0, index),
      { name: item, price: price, quantity: newQuantity },
      ...cart.slice(index + 1),
    ]);
  };

  const deleteFromCart = (index) => {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1)]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  useEffect(() => setNumOfItems(cart.length), [cart.length]);

  return (
    <>
      <BrowserRouter>
        <Nav toggleCart={toggleCart} numOfItems={numOfItems} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop addToCart={addToCart} items={items} />}
            />
          </Routes>
        </main>
        <Cart
          isOpen={isCartOpen}
          order={cart}
          updateCart={updateCart}
          deleteFromCart={deleteFromCart}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
