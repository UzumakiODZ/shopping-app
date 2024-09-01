import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cart from './components/Cart';
import PotionImage from './assets/Potion.jpeg';
import PokeballImage from './assets/pokeball.png';
import ReviveImage from './assets/revive.png';
import RepelImage from './assets/repel.png';

const defaultProductData = [
  {
    id: 1,
    name: 'Potion',
    image: PotionImage,
    price: 200,
    amt: 0,
  },
  {
    id: 2,
    name: 'Pokeball',
    image: PokeballImage,
    price: 200,
    amt: 0,
  },
  {
    id: 3,
    name: 'Revive',
    image: ReviveImage,
    price: 1500,
    amt: 0,
  },
  {
    id: 4,
    name: 'Repel',
    image: RepelImage,
    price: 500,
    amt: 0,
  },
];

function App() {
  const [productData, setProductData] = useState(() => {
    try {
      const savedData = sessionStorage.getItem('productData');
      return savedData ? JSON.parse(savedData) : defaultProductData;
    } catch (error) {
      console.error('Failed to load product data:', error);
      return defaultProductData;
    }
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
        product.id === id ? { ...product, amt: Math.max(product.amt - 1, 0) } : product
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
            element={<Cart productData={productData} updateAmt={updateAmt} removeFromCart={removeFromCart} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
