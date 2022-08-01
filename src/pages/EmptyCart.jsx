import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1>Порожньо:(</h1>
      <Link to="/">
        <button>Повернутись назад</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
