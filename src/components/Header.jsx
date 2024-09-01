import React from 'react';
import "./styles/Header.css"; // Adjusted import path
import { Link } from 'react-router-dom';
import cartpic from "./assets/shopping-cart-outline.svg"; // Adjusted import path

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">The Pokemon Store</div>
        <div className='nav-pages'>
          <Link className='nav-links' to="/">Home</Link>
          <Link className='nav-links' to="/cart">
            <img src={cartpic} alt="Cart" height="50px"/>
             <span className="cart-count">{cartItemCount}</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
