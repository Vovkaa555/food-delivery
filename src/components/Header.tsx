import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/cart/selectors';

const Header: React.FC = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if(isMounted.current) {
    const json = JSON.stringify(items);
    localStorage.setItem('cart', json);
  }
  isMounted.current = true;
  }, [items])

  return (
    <div className="header">
      <div className="navigation">
        <div>
        <Link to="/" className="logo">
          Food Delivery
        </Link>
        </div>
        <div>
        <Link to="/About">
          <span>Контакти</span>
        </Link>
        </div>
      </div>
      <button className="cart-button">
        <Link to="/Cart" className="cash">
          <span>Кошик</span>
          {totalPrice > 0 && <i>{totalPrice}₴</i>}
        </Link>
      </button>
    </div>
  );
}

export default Header;
