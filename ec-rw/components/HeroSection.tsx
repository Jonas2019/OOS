import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="relative w-full h-full">
        {/* Apply filter here */}
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <Image
          src="/FUZHOU_ALL.jpg" // Update with the path to your image
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          alt="Delicious Food Background"
          className="filter brightness-50" // Adjust brightness to 50%
        />
      </div>
      {/* Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Taste that brings you <span className="text-rose-900">home</span>
        </h1>
        <p className="text-xl md:text-2xl">
          Discover the essence of authentic Fuzhou cuisine
        </p>
        <p className="text-md md:text-lg mt-2 mb-4">
          Skip the line and order online, we will deliver the fresh-made dishes
          for free
        </p>

        <Button
          className="bg-emerald-500 hover:bg-emerald-700 text-white text-lg px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          variant="secondary"
        >
          Start Order
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
