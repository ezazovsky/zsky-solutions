"use client";

import React, { useState } from 'react';

// Header component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling for navigation links on the same page
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo/Business Name linking to the homepage */}
          <a href="/" className="text-2xl font-bold text-indigo-700 rounded-md p-2 hover:text-indigo-800 transition-colors">
            ZSky Solutions
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li><button onClick={() => scrollToSection('home')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md">Home</button></li>
          <li><button onClick={() => scrollToSection('about')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md">About Us</button></li>
          <li><button onClick={() => scrollToSection('services')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md">Services</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md">Contact</button></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><button onClick={() => scrollToSection('home')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md w-full text-center">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md w-full text-center">About Us</button></li>
            <li><button onClick={() => scrollToSection('services')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md w-full text-center">Services</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors p-2 rounded-md w-full text-center">Contact</button></li>
          </ul>
        </div>
      )}
    </header>
  );
}
