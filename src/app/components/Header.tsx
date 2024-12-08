"use client";
import React from "react";

// Header1 Component
export const Header1 = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-center items-center mt-10">
        <a href="#" className="text-2xl font-bold">
          <span style={{ color: "#FF9F0D" }}>Food</span>
          <span className="text-white">tuck</span>
        </a>
      </div>
    </header>
  );
};

// Header2 Component
export const Header2 = () => {
  return (
    <header
      className="bg-black text-white py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('/images/HeaderBG.png')` }} // Change the path to your image
    >
      <div className="container mx-auto px-4 flex flex-col justify-center items-center text-center">
        {/* Main Heading */}
        <h1 className="text-5xl font-bold mb-4">
          <span style={{ color: "#FF9F0D" }}>Our</span>
          <span className="text-white"> Menu</span>
        </h1>

        {/* Page Route */}
        <p className="text-lg">
          Home <span className="mx-2">/</span>
          <span className="text-[#FF9F0D]">Menu</span>{" "}
          {/* Changed color to #FF9F0D */}
        </p>
      </div>
    </header>
  );
};
