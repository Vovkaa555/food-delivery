import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About/About';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import SuccessOrder from './pages/SuccessOrder';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Success" element={<SuccessOrder />} />
      </Routes>
    </div>
  );
}

export default App;
