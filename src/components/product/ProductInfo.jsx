import React from "react";
import ImageGallery from "./ImageGallery";

const defaultItem = {
  id: 0,
  name: "Sample Product",
  description: "This is a sample product description.",
  mrp: 100,
  discountedPrice: 80,
  stock: 50,
};

const ProductInfo = () => {
  return (
    <div className = "flex flex-col justify-center items-center w-[100%] py-10">
        <div className = "w-[80%]" style = {{fontFamily: "Pixelify Sans"}}>
            <ImageGallery />
            <div className="font-bold text-2xl">{defaultItem.name}</div>
            <p className="italic text-gray-500 ">{defaultItem.description}</p>
            <p><span className="line-through text-gray-500">{defaultItem.mrp}</span> {defaultItem.discountedPrice}</p>
            {defaultItem.stock < 10 && defaultItem.stock > 0 && (
                <p>Order fast only {defaultItem.stock} items available</p>
            )}
            {defaultItem.stock === 0 && (
                <div disabled className="bg-gray-400 text-white p-2 rounded">
                Out of Stock
                </div>
            )}
            {defaultItem.stock > 0 && (
                <button className="bg-blue-500 text-white p-2 rounded">
                Add to Cart
                </button>
            )}
        </div>
    </div>
    
  );
};

export default ProductInfo;