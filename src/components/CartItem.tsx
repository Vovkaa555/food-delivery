import React from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../redux/cart/slice';
import { CartItem } from '../redux/cart/types';

type CartItemProps = {
  id: string;
  type: string; 
  image: string;
  title: string;
  price: number;
  count: number;
}
//@ts-ignore
const CartItemBlock: React.FC<CartItemProps> = ({ id, type, image, title, price, count }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };

  if (count) {
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
  }
};

export default CartItemBlock;
