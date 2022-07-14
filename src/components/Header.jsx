function Header() {
  return (
    <div className="header">
      <nav>
        <span className="logo">Food Delivery</span>
        <span>Home</span>
        <span>Clients</span>
      </nav>
      <button className="cart">
        <span className="cash">Кошик</span>
      </button>
    </div>
  );
}

export default Header;
