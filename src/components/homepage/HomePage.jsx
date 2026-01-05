import React,{ forwardRef } from 'react';
import Banner from '../banner/Banner';
import Items from './Item';
import '/src/styles/HomePage.css';

const HomePage = forwardRef(({ productData, updateAmt, removeFromCart }, ref) => {
  const cartItemCount = productData.reduce((acc, product) => acc + product.amt, 0);

  return (
    <div ref={ref}>
      <div className='title-parent'>
        <div className='title-child'>
          <h5>The Pokemon Mart</h5>
        </div>
        <Banner />
        <div className='flex justify-center'>
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
