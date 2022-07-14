import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Home />
    </div>
  );
}

export default App;
