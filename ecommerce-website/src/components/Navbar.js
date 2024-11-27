import React from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>E-Shop</h2>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/checkout">Checkout</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
        <a href="/profile"><i className="fas fa-user"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
