import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cart from './components/Cart';

function App() {
  // Load initial productData from session storage or set default values
  const [productData, setProductData] = useState(() => {
    const savedData = sessionStorage.getItem('productData');
    return savedData ? JSON.parse(savedData) : [
      {
        id: 1,
        name: 'Potion',
        image: './src/assets/Potion.jpeg',
        price: 200,
        amt: 0,
      },
      {
        id: 2,
        name: 'Pokeball',
        image: './src/assets/pokeball.png',
        price: 200,
        amt: 0,
      },
      {
        id: 3,
        name: 'Revive',
        image: './src/assets/revive.png',
        price: 1500,
        amt: 0,
      },
      {
        id: 4,
        name: 'Repel',
        image: './src/assets/repel.png',
        price: 500,
        amt: 0,
      },
    ];
  });

  // Save productData to session storage whenever it changes
  useEffect(() => {
    try {
      const dataToSave = JSON.stringify(productData);
      sessionStorage.setItem('productData', dataToSave);
      console.log('Successfully saved to session storage:', dataToSave);
    } catch (error) {
      console.error('Failed to save to session storage:', error);
    }
  }, [productData]);

  // Function to update the amt in productData
  const updateAmt = (id) => {
    setProductData(prevData =>
      prevData.map(product => 
        product.id === id ? { ...product, amt: product.amt + 1 } : product
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (id) => {
    setProductData(prevData =>
      prevData.map(product =>
        product.id === id ? { ...product, amt: Math.max(product.amt - 1, 0) } : product
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Pass productData, updateAmt, and removeFromCart as props */}
          <Route 
            path="/" 
            element={<HomePage productData={productData} updateAmt={updateAmt} removeFromCart={removeFromCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart productData={productData} removeFromCart={removeFromCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
