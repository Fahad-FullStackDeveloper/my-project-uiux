import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center pr-20 pl-20">
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="/Menu" className="text-white hover:text-gray-400">
              Menu
            </a>
          </li>
          <li>
            <a href="/Blog" className="text-white hover:text-gray-400">
              Blog
            </a>
          </li>
          <li>
            <a href="/Pages" className="text-white hover:text-gray-400">
              Pages
            </a>
          </li>
          <li>
            <a href="/About" className="text-white hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="/Shop" className="text-white hover:text-gray-400">
              Shop
            </a>
          </li>
          <li>
            <a href="/Contact" className="text-white hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Search Bar and Shopping Icon */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-3 rounded-full border-2 border-[#FF9F0D] bg-black text-white placeholder-white focus:outline-none"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 20l-5.2-5.2a7.9 7.9 0 1 0-1.4 1.4L19 20h2zM10 16a6 6 0 1 1 6-6 6 6 0 0 1-6 6z"
                fill="currentColor"
              />
            </svg>
          </div>

          {/* Handbag Icon (White Lined with Hover Color) */}
          <a
            href="#cart"
            className="text-white hover:text-[#FF9F0D] transition-colors duration-200"
          >
            {/* White Lined Handbag Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white" // White line color
              strokeWidth="2"
              className="transition-colors duration-200 hover:stroke-[#FF9F0D]" // Hover effect for the icon
            >
              <path
                d="M6 8h12c1.1 0 1.99.9 1.99 2L20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V10c0-1.1.9-2 2-2zm3-6h6c1.1 0 2 .9 2 2v2H7V4c0-1.1.9-2 2-2z"
                fill="none" // Remove fill so the icon is just a stroke
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
