"use client";
import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left pr-20">
            {/* "It's Quick & Amusing!" */}
            <h2 className="text-3xl text-[#FF9F0D] mb-4 font-[Great vibes]">
              About us
            </h2>

            {/* "The Art of Speed Food" */}
            <h3 className="text-5xl font-semibold text-white mb-10">
              <span className="text-[#FF9F0D]">We</span> Create the best foody
              product
            </h3>

            {/* Lorem Ipsum Text */}
            <p className="text-lg text-white mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum et
              minima saepe dolorum consequatur sunt dicta ab provident,
              assumenda at quas deserunt omnis voluptates praesentium voluptatum
              sit tempore ratione. Quisquam nisi ipsa dolorum. Velit,
              asperiores. Dignissimos aliquam quae excepturi. Dolorum.
            </p>

            {/* Key Points */}
            <ul className="list-none pl-0 text-white my-8">
              <li className="relative pl- mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Illum et minima saepe dolorum consequatur sunt dicta ab
                provident.
              </li>
              <li className="relative pl-5 mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Deserunt omnis voluptates praesentium voluptatum sit tempore
                ratione.
              </li>
              <li className="relative pl-5 mb-2">
                <span className="absolute left-0 top-0 text-2xl text-white">
                  &#10003;
                </span>
                Velit, asperiores. Dignissimos aliquam quae excepturi.
              </li>
            </ul>

            {/* Button */}
            <button className="bg-[#FF9F0D] text-white text-lg rounded-full px-14 py-4 mt-8 hover:bg-[#e68900] transition duration-300">
              Read More
            </button>
          </div>

          {/* Right Side: Grid Layout with Images */}
          <div className="w-full md:w-1/2 lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
            {/* First Image */}
            <div className="col-span-2 row-span-4">
              <img
                src="/images/dish2.png" // Replace with your image URL
                alt="Recipe"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Second Image (Half of the First Image) */}
            <div className="col-span-1 row-span-2">
              <img
                src="/images/dish3.png" // Replace with your image URL
                alt="Recipe"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Third Image (Same Size as Second Image) */}
            <div className="col-span-1 row-span-2">
              <img
                src="/images/dish4.png" // Replace with your image URL
                alt="Recipe"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
