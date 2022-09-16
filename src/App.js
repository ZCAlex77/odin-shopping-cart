import React, { useState } from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    let index = cart.findIndex((el) => el.name === item);

    if (index === -1) setCart([...cart, { name: item, quantity: quantity }]);
    else
      setCart([
        ...cart.slice(0, index),
        { name: item, quantity: quantity },
        ...cart.slice(index + 1),
      ]);
  };

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
