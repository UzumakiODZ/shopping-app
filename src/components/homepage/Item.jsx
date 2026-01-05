import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Items = ({ productData, updateAmt, removeFromCart }) => {
  if (!productData || !Array.isArray(productData)) {
    return <div>No products available.</div>; 
  }
  
  return (
    <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {productData.map((product) => (
        <Product
          key={product.id}
          product={product}
          updateAmt={updateAmt}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

Items.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      amt: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateAmt: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Items;