import React from "react";

const ProductImages = {
    images : [
        "https://via.placeholder.com/300x300?text=Image+1",
        "https://via.placeholder.com/300x300?text=Image+2",
        "https://via.placeholder.com/300x300?text=Image+3",
        "https://via.placeholder.com/300x300?text=Image+4"
    ]
}

const ImageGallery = () => {
    return (
        <div className="flex flex-row justify-between items-center w-[100%] gap-4 mb-6 ">
            <img src={ProductImages.images[0]} alt="Product Image 1"></img>
            <div>
                <img src={ProductImages.images[1]} alt="Product Image 2"></img>
                <img src={ProductImages.images[2]} alt="Product Image 3"></img>
            </div>
            <img src={ProductImages.images[3]} alt="Product Image 4"></img>
        </div>
    )
};

export default ImageGallery;