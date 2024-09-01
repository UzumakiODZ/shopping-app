import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ product, updateAmt, removeFromCart }) => {
  const { name, image, price, description, id, amt } = product;

  const handleAddToCart = () => {
    updateAmt(id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-title">{name}</div>
      <p>{description}</p>
      <p>${price}</p>
      <div className="button-container">
        <button onClick={handleAddToCart}>Add to Cart</button>
        {amt > 0 && (
          <button onClick={handleRemoveFromCart}>Remove from Cart</button>
        )}
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    amt: PropTypes.number.isRequired,
  }).isRequired,
  updateAmt: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Product;
