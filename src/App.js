import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import './scss/app.scss';
import EmptyCart from './pages/EmptyCart';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/EmptyCart" element={<EmptyCart />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
