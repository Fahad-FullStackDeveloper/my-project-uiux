"use client";
import Image from "next/image";
import React from "react";


const WhyChooseUs = () => {
  return (
    <>
      {/* 1ST SECTION */}
      <section className="py-12 bg-black mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center ">
            {/* Left Side: Grid Layout with Images */}
            <div className="w-full md:w-1/2 lg:w-1/2 grid grid-cols-10 grid-rows-10 gap-4">
              {/* First Image (Spanning Larger Area) */}
              <div className="col-span-5 row-span-4">
                <Image
                  src="/images/dish9.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Second Image (Placed Beside First Image) */}
              <div className="col-span-4 row-span-3">
                <Image
                  src="/images/dish6.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Third Image (Aligned Below Second Image) */}
              <div className="col-span-3 row-span-3">
                <Image
                  src="/images/dish11.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Fourth Image (Small and Compact) */}
              <div className="col-span-4 row-span-3">
                <Image
                  src="/images/dish10.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Fifth Image (Small and Compact) */}
              <div className="col-span-2 row-span-2">
                <Image
                  src="/images/dish12.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Sixth Image (Small and Compact) */}
              <div className="col-span-2 row-span-2">
                <Image
                  src="/images/dish13.png" // Replace with your image URL
                  alt="Recipe"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full md:w-1/2 lg:w-1/2 text-center md:text-left pl-28">
              {/* "It's Quick & Amusing!" */}
              <h2 className="text-3xl text-[#FF9F0D] mb-4 font-[Great vibes]">
                Why Choose Us
              </h2>

              {/* "The Art of Speed Food" */}
              <h3 className="text-5xl font-semibold text-white mb-10">
                <span className="text-[#FF9F0D]">Ex</span>traordinary Taste and
                Experience
              </h3>

              {/* Description */}
              <p className="text-lg text-white mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                et minima saepe dolorum consequatur sunt dicta ab provident,
                assumenda at quas deserunt omnis voluptates praesentium
                voluptatum sit tempore ratione. Quisquam nisi ipsa dolorum.
                Velit, asperiores. Dignissimos aliquam quae excepturi. Dolorum.
              </p>

              {/* Grid Layout for Additional Content */}
              <div className="grid grid-rows-1 grid-cols-3 gap-10 w-200 pr-36 pb-10">
                {/* First Div with Icon */}
                <div className="bg-[#FF9F0D] rounded-md shadow-lg flex justify-center items-center text-center h-32">
                  <a
                    href="https://example.com/icon1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/Hamburger.png" // Replace with your icon image URL
                      alt="Icon 1"
                      className="w-20 h-20"
                    />
                    Fast Food
                  </a>
                </div>

                {/* Second Div with Icon */}
                <div className="bg-[#FF9F0D] rounded-md shadow-lg flex justify-center items-center text-center h-32">
                  <a
                    href="https://example.com/icon2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/Cookie.png" // Replace with your icon image URL
                      alt="Icon 2"
                      className="w-20 h-20"
                    />
                    Lunch
                  </a>
                </div>

                {/* Third Div with Icon */}
                <div className="bg-[#FF9F0D] rounded-md shadow-lg flex justify-center items-center text-center h-32">
                  <a
                    href="https://example.com/icon3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/icons/Wine.png" // Replace with your icon image URL
                      alt="Icon 3"
                      className="w-20 h-20"
                    />
                    Dinner
                  </a>
                </div>
              </div>
              {/* First Image in Grid */}
              <div className="grid grid-cols-1 grid-rows-1 gap-4 pr-36">
                <Image
                  src="/images/30+ Years experienced.png" // Replace with your image URL
                  alt="30+ Years experienced"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2ND SECTION */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          {/* Rectangular Background */}
          <div
            className="relative bg-cover bg-center rounded-lg shadow-lg w-full h-[400px]"
            style={{
              backgroundImage: `url('/images/Rectangle background.png')`, // Correct syntax for backgroundImage
            }}
          >
            {/* Icons Row */}
            <div className="absolute inset-0 flex justify-evenly items-center gap-10">
              {/* Icon 1 */}
              <div className="w-72 h-72 rounded-full flex justify-center items-center shadow-md">
                <Image
                  src="/icons/Chef.png" // Replace with your icon URL
                  alt="Professional Chef"
                  className="w-40 h-48"
                />
              </div>

              {/* Icon 2 */}
              <div className="w-72 h-72 rounded-full flex justify-center items-center shadow-md">
                <Image
                  src="/icons/Items of food.png" // Replace with your icon URL
                  alt="Items of food"
                  className="w-40 h-48"
                />
              </div>

              {/* Icon 3 */}
              <div className="w-72 h-72 rounded-full flex justify-center items-center shadow-md">
                <Image
                  src="/icons/Years of Experienced.png" // Replace with your icon URL
                  alt="Years of Experienced"
                  className="w-40 h-48"
                />
              </div>

              {/* Icon 4 */}
              <div className="w-72 h-72 rounded-full flex justify-center items-center shadow-md">
                <Image
                  src="/icons/Happy customers.png" // Replace with your icon URL
                  alt="Happy Customers"
                  className="w-40 h-48"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
