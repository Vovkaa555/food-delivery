import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({ id, type, image, title, price, count }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="items-in-busket">
      <div className="item-description">
        <img alt="food" src={image} />
        <span>
          {type} {title}
        </span>
      </div>
      <span>{price}₴</span>
      <div className="counter">
        <span onClick={onClickMinus}>
          <AiFillMinusCircle />
        </span>
        <span>{count}</span>
        <span onClick={onClickPlus}>
          <AiFillPlusCircle />
        </span>
      </div>
      <div className="total">
        <span>{count * price}₴</span>
        <span onClick={onClickRemove}>
          <AiFillCloseCircle />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
