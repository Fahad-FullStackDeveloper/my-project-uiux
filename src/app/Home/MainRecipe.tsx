'use client';
import React from 'react';
import Image from "next/image";

const MainRecipe = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left pr-20">
            {/* "Its Quick & Amusing!" */}
            <h2 className="text-3xl text-[#FF9F0D] mb-4 font-[Great vibes]">
              Its Quick & Amusing!
            </h2>

            {/* "The Art of Speed Food" */}
            <h3 className="text-6xl font-semibold text-white mb-10">
              <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
            </h3>

            {/* Lorem Ipsum Text */}
            <p className="text-lg text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum lacus felis, id elementum urna
              egestas non.
            </p>

            {/* Button */}
            <button className="bg-[#FF9F0D] text-white text-lg rounded-full px-14 py-4 mt-4 hover:bg-[#e68900] transition duration-300">
              See Menu
            </button>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 lg:w-1/2 relative">
            <Image
              src="/images/dish1.png"
              alt="Recipe"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-transparent"></div> {/* gradient is transparent */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainRecipe;
