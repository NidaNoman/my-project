import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Navigation Links */}
        <div className="mt-8 text-center md:text-center">
          <ul className="space-x-6 flex justify-center md:justify-start flex-wrap text-center">
            <li className="inline-block mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-pink-600 font-sans text-center">
                Home
              </a>
            </li>
            <li className="inline-block mb-4 md:mb-0">
              <a href="/About" className="text-gray-300 hover:text-pink-600 font-sans text-center">
                About
              </a>
            </li>
            <li className="inline-block mb-4 md:mb-0">
              <a href="/skills" className="text-gray-300 hover:text-pink-600 font-sans text-center">
                Skills
              </a>
            </li>
            <li className="inline-block mb-4 md:mb-0">
              <a href="/contact" className="text-gray-300 hover:text-pink-600 font-sans text-center">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Text */}
        <div className="mt-8 text-center text-white font-serif italic">
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
