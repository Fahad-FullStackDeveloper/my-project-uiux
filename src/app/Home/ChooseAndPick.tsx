import React from "react";

const ChooseAndPick = () => {
  return (
    <>
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

          {/* Item Categories Navbar */}
          <div className="flex justify-center gap-20 mb-10">
            {[
              "Breakfast",
              "Lunch",
              "Dinner",
              "Dessert",
              "Drink",
              "Snack",
              "Soups",
            ].map((category) => (
              <button
                key={category}
                className="text-white hover:text-[#FF9F0D] text-lg font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Food Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={`/images/dish${index + 1}.png`}
                    alt={`Dish ${index + 1}`}
                    className="rounded-full w-24 h-24 mb-4"
                  />
                  <h4 className="text-lg font-semibold text-white">
                    Dish Name {index + 1}
                  </h4>
                  <p className="text-sm text-gray-400">
                    Delicious and savory details.
                  </p>
                  <p className="text-[#FF9F0D] font-medium mt-2">$6.99-above</p>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseAndPick;
