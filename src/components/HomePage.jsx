import React, { forwardRef } from 'react';
import Header from './Header';
import Items from './Item';
import '/src/styles/HomePage.css'; // Adjust path if needed

const HomePage = forwardRef(({ productData, updateAmt, removeFromCart }, ref) => {
  // Calculate total cart items count
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
            removeFromCart={removeFromCart} // Pass removeFromCart prop
          />
        </div>
      </div>
    </div>
  );
});

export default HomePage;
