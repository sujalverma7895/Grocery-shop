import React from 'react';
import './Header.css';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="your-logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products, brands and more" />
        <button><FaSearch /></button>
      </div>
      <div className="header-icons">
        <div className="icon">
          <FaUser />
          <span>Login</span>
        </div>
        <div className="icon">
          <FaHeart />
          <span>Wishlist</span>
        </div>
        <div className="icon">
          <FaShoppingCart />
          <span>Cart</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
