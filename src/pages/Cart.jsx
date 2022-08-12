import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import CartItem from '../components/CartItem';
import ButtonBack from '../components/ButtonBack/ButtonBack.jsx';
import { clearItems } from '../redux/slices/cartSlice';

import { useSelector } from 'react-redux';

import { AiOutlineDelete } from 'react-icons/ai';
import EmptyCart from './EmptyCart';
import { selectCart } from '../redux/slices/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, items } = useSelector(selectCart);
  const onClickClear = () => {
    dispatch(clearItems());
  };
  const cartItem = items.map((item) => <CartItem key={item.id} {...item} />);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const switcher = Object.keys(errors).length;
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const navigate = useNavigate();
  const success = () => navigate('/Success');
  const onSubmit = async (data) => {
    await sleep(50);
    if (switcher) {
      console.log(data);
    } else {
      onClickClear();
      success();
    }
  };

  const date = new Date();
  const currentDate = date.toISOString().slice(0, 10);
  if (!totalPrice) {
    return <EmptyCart />;
  }
  return (
    <form className="cart" onSubmit={handleSubmit(onSubmit)}>
      <div className="cart-container">
        <div className="clients-info">
          <span>Введіть контактні дані:</span>
          <div className="clients-data">
            <div className="contacts">
              <div className="form-field">
                <label htmlFor="username">Ім'я:</label>
                <input
                  placeholder="Введіть Ваше ім'я"
                  type="text"
                  {...register('username', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      value: /^[a-zA-Zа-яіїА-ЯІЇ]{3,15}$/,
                      message: "Введіть ім'я (3-15 символів)",
                    },
                  })}
                />
                {errors.username && <b>{errors.username.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="phone">Телефон:</label>
                <input
                  placeholder="Введіть номер телефону"
                  type="text"
                  {...register('phone', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      value: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
                      message: 'Номер у форматі +380',
                    },
                  })}
                />
                {errors.phone && <b>{errors.phone.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="date">Дата доставки:</label>
                <input
                  placeholder="Оберіть дату доставки."
                  type="date"
                  min={currentDate}
                  {...register('date', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      message: 'Оберіть дату доставки.',
                    },
                  })}
                />
                {errors.date && <b>{errors.date.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="time">Час доставки:</label>
                <input
                  placeholder="Введіть час доставки."
                  type="time"
                  min="09:00"
                  max="23:00"
                  {...register('time', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      message: 'Оберіть час доставки.',
                    },
                  })}
                />
                {errors.time && <b>{errors.time.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="payment">Форма оплати:</label>
                <select {...register('payment')}>
                  <option value="Карткою">Карткою</option>
                  <option value="Готівкою">Готівкою</option>
                </select>
              </div>
            </div>
            <div className="contacts">
              <div className="form-field">
                <label htmlFor="town">Місто:</label>
                <select placeholder="Оберіть місто." {...register('town')}>
                  <option value="Київ">Київ</option>
                  <option value="Харків">Харків</option>
                  <option value="Львів">Львів</option>
                  <option value="Одеса">Одеса</option>
                  <option value="Дніпро">Дніпро</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="street">Вулиця:</label>
                <input
                  placeholder="Введіть назву вулиці."
                  type="text"
                  {...register('street', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      value: /^[a-zA-Zа-яіїА-ЯІЇ]{3,20}$/,
                      message: 'Введіть назву вулиці (3-20 символів)',
                    },
                  })}
                />
                {errors.street && <b>{errors.street.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="house">Будинок:</label>
                <input
                  placeholder="Введіть номер будинку."
                  type="text"
                  {...register('house', {
                    required: "*поле обов'язкове до заповнення",
                    pattern: {
                      value: /^[0-9]{1,3}$/,
                      message: 'Введіть номер будинку (1-3 цифри).',
                    },
                  })}
                />
                {errors.house && <b>{errors.house.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="entrance">Під'їзд:</label>
                <input
                  type="text"
                  id="entrance"
                  placeholder="Введіть номер під'їзду."
                  {...register('entrance', {
                    pattern: {
                      value: /^[0-9]{1,2}$/,
                      message: "Введіть номер під'їзду (1-2 цифри).",
                    },
                  })}
                />
                {errors.entrance && <b>{errors.entrance.message}</b>}
              </div>
              <div className="form-field">
                <label htmlFor="apartment">Квартира:</label>
                <input
                  type="text"
                  id="apartment"
                  placeholder="Введіть номер квартири."
                  {...register('apartment', {
                    pattern: {
                      value: /^[0-9]{1,3}$/,
                      message: 'Введіть номер квартири (1-3 цифри).',
                    },
                  })}
                />
                {errors.apartment && <b>{errors.apartment.message}</b>}
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

          {cartItem}
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
        <ButtonBack />
        <button type="submit" disabled={switcher}>
          Оформити замовлення
        </button>
      </div>
    </form>
  );
};

export default Cart;
