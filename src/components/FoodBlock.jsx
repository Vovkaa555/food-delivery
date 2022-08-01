import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, minusItem } from '../redux/slices/cartSlice';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { GiShoppingCart } from 'react-icons/gi';

function FoodBlock({ id, type, image, title, price, description, weight }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items.find((obj) => obj.id === id));
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      type,
      title,
      price,
      image,
    };

    dispatch(addItem(item));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className="food-block">
      <div className="food-photo">
        <div className="hidden-info">
          <span className="description">Склад: {description}</span>
          <span className="weight">Вага: {weight} гр.</span>
        </div>
        <img className="photo" alt="food" src={image}></img>
        <div className="food-name">
          {type} {title}
        </div>
        <div className="price">{price}₴</div>
        <div className="buttons-block">
          <button className="add-to-cart" onClick={onClickAdd}>
            <span className="add-to-cart-icon">
              <AiOutlinePlusCircle />
            </span>
            <span className="add-to-cart-text">Додати</span>
            <span className="in-cart">
              <GiShoppingCart />
            </span>
            {addedCount > 0 && <i className="add-to-cart-counter">{addedCount}</i>}
          </button>
          <button className="remove-from-cart" onClick={onClickMinus}>
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
