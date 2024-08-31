import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cart from './components/Cart';

function App() {
  
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

  
  useEffect(() => {
    try {
      const dataToSave = JSON.stringify(productData);
      sessionStorage.setItem('productData', dataToSave);
      console.log('Successfully saved to session storage:', dataToSave);
    } catch (error) {
      console.error('Failed to save to session storage:', error);
    }
  }, [productData]);

  
  const updateAmt = (id) => {
    setProductData(prevData =>
      prevData.map(product => 
        product.id === id ? { ...product, amt: product.amt + 1 } : product
      )
    );
  };

  
  const removeFromCart = (id) => {
    setProductData(prevData =>
      prevData.map(product =>
        product.id === id ? { ...product, amt: product.amt - 1 } : product
      )
    );
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          
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
