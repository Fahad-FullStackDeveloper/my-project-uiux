"use client";
import React from "react";
import Image from "next/image";

const FoodCategory = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        {/* Top Text Section */}
        <div className="text-center mb-8 mt-10">
          {/* "About Us" */}
          <h2 className="text-3xl text-[#FF9F0D] mb-4 font-[Great vibes]">
            Food Category
          </h2>

          {/* "Choose Food Item" */}
          <h3 className="text-5xl font-semibold text-white mb-20">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h3>
        </div>

        {/* Image Grid Section */}
        <div className="grid grid-cols-4 grid-rows-1 gap-10">
          {/* First Image (Spanning Two Columns) */}
          <div className="col-span-1 row-span-1 relative">
            {/* Image */}
            <Image
              src="/images/dish5.png" // Replace with your image URL
              alt="Dish 5"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />

            {/* Sticker: Save 30% */}
            <div className="absolute top-28 left-11 bg-white text-[#FF9F0D] font-bold text-sm px-3 py-1 rounded-md shadow-md">
              Save 30%
            </div>

            {/* Button: Fast Food Dish */}
            <button className="absolute bottom-28 bg-[#FF9F0D] text-white font-semibold text-sm px-4 py-2 rounded-md hover:bg-[#e68900] transition duration-300">
              Fast Food Dish
            </button>
          </div>

          {/* Second Image */}
          <div className="col-span-1 row-span-1">
            <Image
              src="/images/dish6.png" // Replace with your image URL
              alt="Dish 6"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Third Image */}
          <div className="col-span-1 row-span-1">
            <Image
              src="/images/dish7.png" // Replace with your image URL
              alt="Dish 7"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Fourth Image (Spanning Two Columns) */}
          <div className="col-span-1 row-span-1">
            <Image
              src="/images/dish8.png" // Replace with your image URL
              alt="Dish 8"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
