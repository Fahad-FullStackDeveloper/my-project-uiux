"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* About Us Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">About Us</h3>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              interdum aliquam arcu, sit amet venenatis nulla commodo vel.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#FF9F0D] rounded-full flex justify-center items-center">
                <i className="text-white">📅</i>
              </div>
              <p className="text-sm">Opening Hours: 9:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Help?</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Reporting
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Support Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#FF9F0D]">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Recent Posts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/dish1.png"
                  alt="Dish 1"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm">Dish 1 - Delicious Pasta</p>
                  <span className="text-xs text-gray-400">
                    December 5, 2024
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/images/dish2.png"
                  alt="Dish 2"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm">Dish 2 - Spicy Tacos</p>
                  <span className="text-xs text-gray-400">
                    December 3, 2024
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="/images/dish3.png"
                  alt="Dish 3"
                  className="w-12 h-12 object-cover rounded-lg"
                />
                <div>
                  <p className="text-sm">Dish 3 - Crispy Chicken</p>
                  <span className="text-xs text-gray-400">
                    December 1, 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12 text-sm text-gray-400">
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />
          <p>&copy; Copyright 2024 by Ayeman. All rights reserved.</p>

          {/* Social Media Icons Section */}
          <div className="flex justify-center items-center space-x-6 mt-6 bg-gray-800 bg-opacity-50 py-2 px-4 rounded-md">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white text-blue-600 flex justify-center items-center rounded-md shadow-md hover:bg-[#FF9F0D]">
                <i className="fab fa-facebook-f"></i>
              </div>
            </a>

            {/* Twitter Icon */}
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white text-blue-400 flex justify-center items-center rounded-md shadow-md hover:bg-[#FF9F0D]">
                <i className="fab fa-twitter"></i>
              </div>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white text-pink-600 flex justify-center items-center rounded-md shadow-md hover:bg-[#FF9F0D]">
                <i className="fab fa-instagram"></i>
              </div>
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white text-red-600 flex justify-center items-center rounded-md shadow-md hover:bg-[#FF9F0D]">
                <i className="fab fa-youtube"></i>
              </div>
            </a>

            {/* Pinterest Icon */}
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 bg-white text-red-600 flex justify-center items-center rounded-md shadow-md hover:bg-[#FF9F0D]">
                <i className="fab fa-pinterest"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
