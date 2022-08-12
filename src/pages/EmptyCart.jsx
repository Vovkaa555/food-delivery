import React from 'react';
import ButtonBack from '../components/ButtonBack/ButtonBack.jsx';

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <h1>Порожньо:(</h1>
      <ButtonBack />
    </div>
  );
};

export default EmptyCart;
