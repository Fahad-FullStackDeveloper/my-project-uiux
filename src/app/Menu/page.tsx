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

const Menu = () => {
  return (
    <>
      <Navbar />
      <Header2 />
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 space-y-8">
          {/* Menu Item 1 */}
          <div className="flex items-center bg-white shadow-md rounded-lg p-6">
            {/* Dish Picture - Left */}
            <img
              src="/images/Starter Menu1.png"
              alt="Dish 1"
              className="w-50 h-50 object-cover mr-6"
            />

            <div>
              {/* Starter Menu */}
              <h2 className="text-5xl font-bold text-gray-900 mb-4 pl-5">
                Starter Menu
              </h2>

              {/* Menu Items */}
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="pl-5 text-xl font-semibold text-gray-800">
                      Grilled Chicken
                    </h3>
                    <p className="pl-5 text-gray-600">
                      Juicy grilled chicken with a blend of herbs and spices.
                    </p>
                  </div>
                  <p className="w-24 text-right text-2xl font-bold text-[#FF9F0D]">
                    $12.99
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="pl-5 text-xl font-semibold text-gray-800">
                      Caesar Salad
                    </h3>
                    <p className="pl-5 text-gray-600">
                      Fresh romaine lettuce with parmesan cheese and croutons.
                    </p>
                  </div>
                  <p className="w-24 text-right text-2xl font-bold text-[#FF9F0D]">
                    $8.99
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="pl-5 text-xl font-semibold text-gray-800">
                      Garlic Breadsticks
                    </h3>
                    <p className="pl-5 text-gray-600">
                      Warm and crispy breadsticks brushed with garlic butter.
                    </p>
                  </div>
                  <p className="w-24 text-right text-2xl font-bold text-[#FF9F0D]">
                    $5.49
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <h3 className="pl-5 text-xl font-semibold text-gray-800">
                      Tomato Soup
                    </h3>
                    <p className="pl-5 text-gray-600">
                      Rich and creamy tomato soup topped with fresh basil.
                    </p>
                  </div>
                  <p className="w-24 text-right text-2xl font-bold text-[#FF9F0D]">
                    $6.99
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Course Card */}
          <div className="flex flex-col bg-white shadow-md rounded-lg p-6 space-y-4">
            {/* Heading */}
            <h2 className="text-5xl font-bold pt-20 text-gray-800">
              Main Course
            </h2>

            {/* Menu Items */}
            <div className="flex items-center justify-between space-y-4">
              <div className="flex-1 space-y-4">
                {/* Item 1 */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Caesar Salad
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fresh romaine lettuce, croutons, and parmesan cheese.
                    </p>
                  </div>
                  <p className="pr-20 text-2xl font-bold text-[#FF9F0D] text-center">
                    $9.99
                  </p>
                </div>

                {/* Item 2 */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Grilled Chicken
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Juicy grilled chicken breast served with steamed
                      vegetables.
                    </p>
                  </div>
                  <p className="pr-20 text-2xl font-bold text-[#FF9F0D] text-center">
                    $12.99
                  </p>
                </div>

                {/* Item 3 */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Spaghetti Bolognese
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Classic Italian pasta with rich, meaty tomato sauce.
                    </p>
                  </div>
                  <p className="pr-20 text-2xl font-bold text-[#FF9F0D] text-center">
                    $14.99
                  </p>
                </div>

                {/* Item 4 */}
                <div className="flex items-center">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Pan-Seared Salmon
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fresh salmon fillet with garlic butter sauce.
                    </p>
                  </div>
                  <p className="pr-20 text-2xl font-bold text-[#FF9F0D] text-center">
                    $18.99
                  </p>
                </div>
              </div>

              {/* Dish Picture - Right */}
              <img
                src="/images/Starter Menu2.png"
                alt="Dish 2"
                className="w-50 h-50 object-cover ml-6 rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
