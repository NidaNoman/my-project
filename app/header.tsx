"use client"; 

import Link from "next/link";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="flex justify-between items-center mt-6 bg-black text-white p-4">
      {/* Logo Section */}
      <div>
        <h2 className="text-3xl font-bold italic hover:text-pink-600">
          Nida Noman
        </h2>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-16 text-2xl gap-6 font-sans italic">
        <li><Link href="/" className="hover:text-pink-600">Home</Link></li>
        <li><Link href="/About" className="hover:text-pink-600">About</Link></li>
        <li><Link href="/skills" className="hover:text-pink-600">Skills</Link></li>
        <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? (
          <MdClose className="w-8 h-8" />
        ) : (
          <MdOutlineMenu className="w-8 h-8" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-2/3 bg-black h-full flex justify-center items-center transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} font-serif`}
      >
        <div className="space-y-6 text-white text-xl">
          <Link href="/" className="hover:text-pink-600">Home</Link>
          <Link href="/About" className="hover:text-pink-600">About</Link>
          <Link href="/skills" className="hover:text-pink-600">Skills</Link>
          <Link href="/contact" className="hover:text-pink-600">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
