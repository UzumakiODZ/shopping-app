import React, { useState } from 'react';
import "/src/styles/Header.css";
import { Link } from 'react-router-dom';
import SearchImage from '/src/assets/Gemini_Generated_Image_5useh95useh95use.png'
import CartImage from '/src/assets/shopping-cart-outline.svg';

const Header = ({ cartItemCount }) => {
  const [search, setSearch] = useState("");
  const [searchEn, setSearchEn] = useState(false);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setSearchEn(event.target.value.length > 0);
  };

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">The Pokemon Mart</div>
        <div className='relative'>
          <div className='flex flex-row items-center gap-2'>
            <input 
              onChange={handleSearchChange}
              value={search}
              type="text" 
              placeholder="Search products..." 
              className="search-bar px-3 py-2 border border-gray-300 rounded-lg"
            />
            <img 
              className='h-[40px] w-auto cursor-pointer hover:opacity-80 transition-opacity' 
              src={SearchImage} 
              alt="Search"
              onClick={() => setSearchEn(!searchEn)}
            />
          </div>
          {searchEn && search.length > 0 && (
            <div className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-2 p-4 shadow-lg w-full">
              <p className="text-gray-600">Search results for: <strong>{search}</strong></p>
            </div>
          )}
        </div>
        <div className='nav-pages'>
          <Link className='nav-links' to="/">Home</Link>
          <Link className='nav-links' to="/profile">Profile</Link>
          <Link to="/cart" className='relative inline-block'>
            <img className='w-8 h-8' src={CartImage} alt="Cart"/>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
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