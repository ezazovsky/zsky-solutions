"use client";

import React, { useState, useEffect } from 'react';

// Main App component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for hero image source
  const [heroImageSrc, setHeroImageSrc] = useState("https://placehold.co/500x300/667eea/ffffff?text=ZSky+Solutions");
  // State for about us image source
  const [aboutImageSrc, setAboutImageSrc] = useState("https://placehold.co/600x400/a78bfa/ffffff?text=About+Us");

  // Smooth scrolling for navigation links
  const scrollToSection = (id: string) => { // Added type annotation 'string' for 'id'
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  // Function to handle image error for hero section
  const handleHeroImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Cast e.target to HTMLImageElement to access src property
    (e.target as HTMLImageElement).src = "https://placehold.co/500x300/667eea/ffffff?text=Image+Load+Error"; // Fallback image
  };

  // Function to handle image error for about us section
  const handleAboutImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Cast e.target to HTMLImageElement to access src property
    (e.target as HTMLImageElement).src = "https://placehold.co/600x400/a78bfa/ffffff?text=Image+Load+Error"; // Fallback image
  };

  return (
    <>
      {/* Styles for animations and font import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
      <div className="min-h-screen bg-gray-50 antialiased text-gray-800">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white shadow-md py-4 px-6 md:px-12">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo/Business Name */}
              <a href="#" className="text-2xl font-bold text-indigo-700 rounded-md p-2 hover:text-indigo-800 transition-colors">
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

        <main>
          {/* Hero Section */}
          <section id="home" className="relative bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 md:py-32 overflow-hidden rounded-b-lg shadow-lg">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
                  Innovative <span className="text-yellow-300">Solutions</span> for Your Business
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up">
                  ZSky Solutions provides cutting-edge technology services to help your business thrive in the digital age.
                </p>
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
                >
                  Explore Our Services
                </button>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
                {/* Placeholder image or SVG for visual appeal */}
                <img
                  src={heroImageSrc}
                  alt="Business Solutions"
                  width={500} 
                  height={300} 
                  className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  onError={handleHeroImageError} 
                />
              </div>
            </div>
            {/* Background shapes for visual flair */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute w-48 h-48 bg-white opacity-10 rounded-full -top-10 -left-10 animate-pulse"></div>
              <div className="absolute w-64 h-64 bg-white opacity-10 rounded-full -bottom-20 -right-20 animate-pulse"></div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                We offer a comprehensive suite of services designed to empower your business and drive growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {/* Service Card 1: Web Development */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <div className="text-indigo-600 mb-4 text-5xl flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {/* Simple monitor icon path */}
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Web Development</h3>
                  <p className="text-gray-600">
                    Crafting responsive, high-performance websites tailored to your business needs. From simple landing pages to complex web applications.
                  </p>
                </div>
                {/* Service Card 2: Software Solutions */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <div className="text-green-600 mb-4 text-5xl flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Software Solutions</h3>
                  <p className="text-gray-600">
                    Developing custom software solutions to streamline your operations and enhance productivity. Scalable and secure applications.
                  </p>
                </div>
                {/* Service Card 3: Cloud Consulting */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <div className="text-red-600 mb-4 text-5xl flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cloud Consulting</h3>
                  <p className="text-gray-600">
                    Expert guidance on cloud strategy, migration, and optimization using AWS, Azure, and Google Cloud platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <img
                  src={aboutImageSrc}
                  alt="About Us"
                  width={600} 
                  height={400}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                  onError={handleAboutImageError} 
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">About ZSky Solutions</h2>
                <p className="text-lg text-gray-700 mb-4">
                  ZSky Solutions is a dynamic technology company dedicated to delivering innovative and reliable solutions. We specialize in helping small to medium-sized businesses leverage the power of technology to achieve their goals.
                </p>
                <p className="text-lg text-gray-700">
                  Our team of experienced professionals is committed to providing exceptional service and building long-lasting partnerships with our clients. We believe in transparency, efficiency, and delivering measurable results.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-indigo-700 text-white text-center rounded-t-lg shadow-inner">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s discuss how ZSky Solutions can help you achieve your digital aspirations.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-indigo-700 hover:bg-indigo-100 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50"
              >
                Get in Touch
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                We&apos;d love to hear from you! Fill out the form below or reach out directly.
              </p>
              <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="mt-12 text-gray-700">
                <p className="text-lg">Or connect with us directly:</p>
                <p className="text-xl font-semibold mt-2">info@zskysolutions.com</p>
                <p className="text-xl font-semibold mt-2">+1 (555) 123-4567</p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center rounded-t-lg shadow-inner">
          <div className="container mx-auto">
            <p className="text-lg mb-4">&copy; {new Date().getFullYear()} ZSky Solutions. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
