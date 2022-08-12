import React from 'react';
import { Link } from 'react-router-dom';

const SuccessOrder = () => {
  return (
    <div className="empty-cart">
      <h1>Дякуємо за замовлення!</h1>
      <Link to="/">
        <button>Повернутись назад</button>
      </Link>
    </div>
  );
};

export default SuccessOrder;
