"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white">
          <span className="text-white">Food</span>
          <span style={{ color: "#FF9F0D" }}>tuck</span>
        </a>

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

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <a href="#search" className="text-white hover:text-[#FF9F0D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </a>
          {/* User Icon */}
          <a href="#user" className="text-white hover:text-[#FF9F0D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M5.5 21h13a5 5 0 0 0-13 0z" />
            </svg>
          </a>
          {/* Shopping Tote Icon */}
          <a href="#cart" className="text-white hover:text-[#FF9F0D]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 2h12l1 5H5l1-5z" />
              <path d="M6 8h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
