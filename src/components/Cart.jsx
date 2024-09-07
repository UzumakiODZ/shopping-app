import React from 'react';
import Header from './Header';
import ProductList from './CheckoutItem'; 
import "/src/styles/Cart.css";


const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    const price = parseFloat(product.price) || 0;
    const amt = parseInt(product.amt, 10) || 0;
    return total + (price * amt);
  }, 0);
};

const Cart = ({ productData, updateAmt, removeFromCart }) => {
  
  const totalPrice = calculateTotalPrice(productData);

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
                <div className='total-price'>
                  Total Price: ${totalPrice } 
                </div>
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
