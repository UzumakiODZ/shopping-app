import React, { forwardRef } from 'react';
import Header from './Header';
import Items from './Item';
import '/src/styles/HomePage.css';

const HomePage = forwardRef(({ productData, updateAmt, removeFromCart }, ref) => {
  const cartItemCount = productData.reduce((acc, product) => acc + product.amt, 0);

  return (
    <div ref={ref}>
      <Header cartItemCount={cartItemCount} />
      <div className='title-parent'>
        <div className='title-child'>
          <h2>The Pokemon Mart</h2>
        </div>
        <div className='items'>
          <Items 
            productData={productData} 
            updateAmt={updateAmt} 
            removeFromCart={removeFromCart} 
          />
        </div>
      </div>
    </div>
  );
});

export default HomePage;
