import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CartItem from '../components/CartItem';
import { clearItems } from '../redux/slices/cartSlice';

import { useSelector } from 'react-redux';

import { AiOutlineDelete } from 'react-icons/ai';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector((state) => state.cart);
  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <EmptyCart />;
  }
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="clients-info">
          <span>Введіть контактні дані:</span>
          <div className="clients-data">
            <div className="contacts">
              <div className="form-field">
                <label htmlFor="username">Ім'я:</label>
                <input type="text" id="username" placeholder="Введіть Ваше ім'я."></input>
              </div>
              <div className="form-field">
                <label htmlFor="telephone">Телефон:</label>
                <input type="text" id="telephone" placeholder="Введіть номер телефону."></input>
              </div>
              <div className="form-field">
                <label htmlFor="date">Дата доставки:</label>
                <input type="date" id="date" placeholder="Оберіть дату доставки."></input>
              </div>
              <div className="form-field">
                <label htmlFor="time">Час доставки:</label>
                <input type="time" id="time" placeholder="Введіть час доставки."></input>
              </div>
              <div className="form-field">
                <label htmlFor="payment">Форма оплати:</label>
                <select name="select" id="payment">
                  <option value="Карткою">Карткою</option>
                  <option value="Готівкою">Готівкою</option>
                </select>
              </div>
            </div>
            <div className="contacts">
              <div className="form-field">
                <label htmlFor="town">Місто:</label>
                <input type="text" id="town" placeholder="Оберіть місто"></input>
              </div>
              <div className="form-field">
                <label htmlFor="street">Вулиця:</label>
                <input type="text" id="street" placeholder="Введіть назву вулиці."></input>
              </div>
              <div className="form-field">
                <label htmlFor="house">Будинок:</label>
                <input type="text" id="house" placeholder="Введіть номер будинку."></input>
              </div>
              <div className="form-field">
                <label htmlFor="entrance">Під'їзд:</label>
                <input type="text" id="entrance" placeholder="Введіть номер під'їзду."></input>
              </div>
              <div className="form-field">
                <label htmlFor="apartment">Квартира:</label>
                <input type="text" id="apartment" placeholder="Введіть номер квартири."></input>
              </div>
            </div>
          </div>
        </div>
        <div className="selected-foods">
          <span>Ваше замовлення:</span>
          <div className="list-header">
            <span>Назва</span>
            <span>Ціна</span>
            <span>Кількість</span>
            <span>Всього</span>
          </div>
          {items.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="remove-items">
            <div>
              <span>Сума замовлення: </span>
              {totalPrice > 0 && <span>{totalPrice}₴</span>}
            </div>
            <button onClick={onClickClear}>
              <span>Очистити кошик</span>
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
      <div className="buttons-block">
        <Link to="/">
          <button>Повернутись назад</button>
        </Link>
        <button>Оформити замовлення</button>
      </div>
    </div>
  );
};

export default Cart;
