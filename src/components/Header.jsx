import { Link } from 'react-router-dom';

import Search from '../components/Search/Search.jsx';

function Header() {
  return (
    <div className="header">
      <nav className="navigation">
        <span className="logo">Food Delivery</span>
        <Link to="/">Home</Link>
        <Search />
      </nav>
      <button className="cart">
        <Link to="/EmptyCart" className="cash">
          Кошик
        </Link>
      </button>
    </div>
  );
}

export default Header;
