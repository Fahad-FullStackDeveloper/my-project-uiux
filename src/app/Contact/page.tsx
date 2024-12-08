"use client";
import React from "react";
import Navbar from "../components/Navbar";

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
          <span style={{ color: "#FF9F0D" }}>Contact</span>
          <span className="text-white"> Us</span>
        </h1>

        {/* Page Route */}
        <p className="text-lg">
          Home <span className="mx-2">/</span>
          <span className="text-[#FF9F0D]">Contact</span>{" "}
          {/* Changed color to #FF9F0D */}
        </p>
      </div>
    </header>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <Header2 />
      <div>
        <h1>Contact Page</h1>
      </div>
    </>
  );
};

export default Contact;
