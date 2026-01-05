import React from 'react';
import "/src/styles/Header.css";
import { Link } from 'react-router-dom';
import CartImage from '/src/assets/shopping-cart-outline.svg';

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">The Pokemon Mart</div>
        <div className='nav-pages'>
          <Link className='nav-links' to="/">Home</Link>
          <Link to="/cart" className='relative inline-block  '>
            <img className='w-8 h-8' src={CartImage} alt="Cart"/>
            {cartItemCount > 0 && (
              <span className="absolute -bottom-2 -right-2 text-black text-xs rounded-full w-5 h-5 flex ">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;