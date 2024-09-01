import React from 'react';
import Header from './Header';
import ProductList from './CheckoutItem'; 
import "/src/styles/Cart.css";

const Cart = ({ productData, updateAmt, removeFromCart }) => {

  return (
    <div>
      <Header />
      <div className='cart'>
      <div className='itemlistparent'>
        <div className='itemlistchild'>
          {productData && productData.length > 0 ? (
            <>
              <ProductList 
                productData={productData} 
                updateAmt={updateAmt} 
                removeFromCart={removeFromCart} 
              />
              <button>Checkout</button>
            </>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
