import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux/slices/cartSlice';

function Header() {
  const { totalPrice } = useSelector(selectCart);
  return (
    <div className="header">
      <nav className="navigation">
        <Link to="/" className="logo">
          Food Delivery
        </Link>
        <Link to="/About">
          <div>Контакти</div>
        </Link>
      </nav>
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
