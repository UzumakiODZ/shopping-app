import React from "react";
import { useSearchParams } from "react-router-dom";
import Product from "../homepage/Product";

const ProductSearch = ({ productData, updateAmt, removeFromCart }) => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const filteredProducts = productData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center py-8">
      <div className="w-[80%] max-w-7xl">
        <h2 className="text-2xl font-bold mb-4">
          Search Results for: "<span className="text-blue-600">{searchQuery}</span>"
        </h2>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {filteredProducts.map((product) => (
              <Product
                key={product.id}
                product={product}
                updateAmt={updateAmt}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching "{searchQuery}"</p>
            <p className="text-gray-500 mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSearch;