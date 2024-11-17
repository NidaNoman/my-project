// 


"use client";

import Link from "next/link";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center bg-black text-white p-4">
      {/* Logo Section */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic hover:text-pink-600">
          Nida Noman
        </h2>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-8 text-lg sm:text-xl md:text-2xl font-sans italic">
        <li>
          <Link href="/" className="hover:text-pink-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-pink-600">
            About
          </Link>
        </li>
        <li>
          <Link href="/skills" className="hover:text-pink-600">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-pink-600">
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <MdClose className="w-8 h-8" />
        ) : (
          <MdOutlineMenu className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6 text-white text-xl">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <MdClose className="w-8 h-8" />
          </button>
          <Link
            href="/"
            className="hover:text-pink-600 text-2xl"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/About"
            className="hover:text-pink-600 text-2xl"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/skills"
            className="hover:text-pink-600 text-2xl"
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="hover:text-pink-600 text-2xl"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
