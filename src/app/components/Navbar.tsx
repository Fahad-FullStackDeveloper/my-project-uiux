"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-white">Food</span>
          <span style={{ color: "#FF9F0D" }}>tuck</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Menu" className="text-white hover:text-gray-400">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/Blog" className="text-white hover:text-gray-400">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/Pages" className="text-white hover:text-gray-400">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/About" className="text-white hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/Shop" className="text-white hover:text-gray-400">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/Contact" className="text-white hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <Link href="#search" className="text-white hover:text-[#FF9F0D]">
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
          </Link>
          {/* User Icon */}
          <Link href="#user" className="text-white hover:text-[#FF9F0D]">
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
          </Link>
          {/* Shopping Tote Icon */}
          <Link href="#cart" className="text-white hover:text-[#FF9F0D]">
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
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
