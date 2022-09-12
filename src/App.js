import React from 'react';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
