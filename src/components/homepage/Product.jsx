import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '/src/styles/Product.css'; 

const Product = ({ product, updateAmt, removeFromCart }) => {
  const { name, image, price, description, id, amt } = product;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product?id=${id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); 
    updateAmt(id);
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation(); 
    removeFromCart(id);
  };

  return (
    <div 
      onClick={handleNavigate} 
      className="cursor-pointer flex sm:w-[150px] flex-col justify-between border p-4 rounded-lg shadow-md text-black text-center hover:shadow-lg transition-shadow" 
      style={{fontFamily: "Pixelify Sans"}}
    >
      <img src={image} alt={name} className="product-image" />
      <div className="product-title">{name}</div>
      <p>{description}</p>
      <p>${price}</p>
      <div className="button-container">
        {amt > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleRemoveFromCart}>-</button>
            <span style={{ margin: '0 10px' }}>{amt}</span>
            <button onClick={handleAddToCart}>+</button>
          </div>
        ) : (
          <button onClick={handleAddToCart}>Add to Cart</button>
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