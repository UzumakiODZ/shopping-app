import React from 'react';
import Header from './Header';
import ProductList from './CheckoutItem'; 
import "/src/styles/Cart.css";

const Cart = ({ productData }) => {

  console.log('Current productData in Cart:', productData);

  return (
    <div>
      <Header />
      <div className='itemlistparent'>
        <div className='itemlistchild'>
          {productData && productData.length > 0 ? (
            <>
              <ProductList productData={productData} />
              <button>Checkout</button>
            </>
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
