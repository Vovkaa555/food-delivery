import React, { useState } from 'react';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { GiShoppingCart } from 'react-icons/gi';

function FoodBlock({ ...obj }) {
  const [cartCounter, setCount] = useState(0);
  return (
    <div className="food-block">
      <div className="food-photo">
        <div className="hidden-info">
          <span className="description">Склад: {obj.description}</span>
          <span className="weight">Вага: {obj.weight} гр.</span>
        </div>
        <img className="photo" alt="food" src={obj.image}></img>
        <div className="food-name">
          {obj.type} {obj.title}
        </div>
        <div className="price">{obj.price}₴</div>
        <div className="buttons-block">
          <button className="add-to-cart" onClick={() => setCount(cartCounter + 1)}>
            <span className="add-to-cart-icon">
              <AiOutlinePlusCircle />
            </span>
            <span className="add-to-cart-text">Додати</span>
            <span className="in-cart">
              <GiShoppingCart />
            </span>
            <span className="add-to-cart-counter">{cartCounter}</span>
          </button>
          <button className="remove-from-cart" onClick={() => setCount(cartCounter - 1)}>
            <span className="remove-from-cart-icon">
              <AiOutlineMinusCircle />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodBlock;
