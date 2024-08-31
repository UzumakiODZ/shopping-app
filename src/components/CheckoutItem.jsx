import React from 'react';
import "/src/styles/CheckOutItem.css";

const ProductList = ({ productData }) => {

  if (!Array.isArray(productData) || productData.length === 0) {
    return <p>No products available.</p>;
  }

  // Filter products to only include those with amt > 0
  const filteredProducts = productData.filter(product => product.amt > 0);

  return (
    <div className='CheckOutProductList'>
      <h2>Cart</h2>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card-cart">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className='product-name'>{product.name}</h3>
            <p>Amount: {product.amt}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No item added yet!</p>
      )}
    </div>
  );
};

export default ProductList;
