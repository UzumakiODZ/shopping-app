import React from 'react';
import PropTypes from 'prop-types';
import "/src/styles/CheckOutItem.css";

const ProductList = ({ productData, updateAmt, removeFromCart }) => {

  if (!Array.isArray(productData) || productData.length === 0) {
    return <p>No products available.</p>;
  }

  const filteredProducts = productData.filter(product => product.amt > 0);

  const handleAddToCart = (id) => {
    updateAmt(id);
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  return (
    <div className='CheckOutProductList'>
      <h2>Cart</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card-cart">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className='product-name'>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product.id)}>+</button>
            <p>{product.amt}</p>
            <button onClick={() => handleRemoveFromCart(product.id)}>-</button>
          </div>
        ))
      ) : (
        <p>No items added yet!</p>
      )}
    </div>
  );
};

ProductList.propTypes = {
  productData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amt: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateAmt: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default ProductList;
