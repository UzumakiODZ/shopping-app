import React, { useEffect, useState } from "react";

import img1 from "/src/assets/Gemini_Generated_Image_z9kb12z9kb12z9kb.png";
import img2 from "/src/assets/Gemini_Generated_Image_nitu3enitu3enitu.png";
import img3 from "/src/assets/Gemini_Generated_Image_qpz39pqpz39pqpz3.png";
import img4 from "/src/assets/Gemini_Generated_Image_bjwg5tbjwg5tbjwg.png";

const bannerContent = [
  {
    title: "Welcome to the PokéMart!",
    subtitle: "Your one-stop shop for all your Pokémon needs.",
    imageUrl: img1,
    color: "#f9f9f9",
    altText: "PokéMart Banner",
  },
  {
    title: "Exclusive Deals!",
    subtitle: "Get the best prices on Potions, Pokéballs, and more.",
    imageUrl: img2,
    color: "#9892h2",
    altText: "Exclusive Deals",
  },
  {
    title: "New Items in Stock!",
    subtitle: "Check out the latest additions to our inventory.",
    imageUrl: img3,
    color: "#f90009",
    altText: "New Items",
  },
  {
    title: "Power Up Your Journey!",
    subtitle: "Essential items to help you on your Pokémon adventure.",
    imageUrl: img4,
    color: "#c9c9c9",
    altText: "Power Up",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerContent.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

  const currentBanner = bannerContent[currentIndex];

  return (
    <div className="flex justify-center w-full bg-gray-800">
        <div className="flex flex-row justify-between lg:w-[70%] max-h-[150px] sd:max-h-[400px]" style={{textAlign: "center", color: "black", backgroundColor: currentBanner.color, padding: "10px"}}>
            <img
                src={currentBanner.imageUrl}
                alt={currentBanner.altText}
                className= "h-full w-[100px] sm:w-[250px] md:w-[400px] object-contain"
            />
            <div className="flex flex-col items-center justify-center mx-5">
                <div style={{fontFamily: "Pokemon Solid"}} className="text-sm md:text-2xl p-5">{currentBanner.title}</div>
                <div style={{fontFamily: "Pokemon Solid"}} className="text-xs md:text-lg">{currentBanner.subtitle}</div>
            </div>
        </div>
    </div>
    );
};

export default Banner;
