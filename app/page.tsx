"use client";

import React, { useState, useRef } from 'react';

// Main page component
export default function HomePage() {
  // State for hero image source
  const [heroImageSrc, setHeroImageSrc] = useState("https://placehold.co/500x300/667eea/ffffff?text=ZSky+Solutions");
  // State for about us image source
  const [aboutImageSrc, setAboutImageSrc] = useState("https://placehold.co/600x400/a78bfa/ffffff?text=About+Us");

  // Create a ref for the contact form
  const contactFormRef = useRef<HTMLFormElement>(null);

  // Smooth scrolling for navigation links
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle image error for hero section
  const handleHeroImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "https://placehold.co/500x300/667eea/ffffff?text=Image+Load+Error";
  };

  // Function to handle image error for about us section
  const handleAboutImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "https://placehold.co/600x400/a78bfa/ffffff?text=Image+Load+Error";
  };

  // Function to handle contact form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      name: (contactFormRef.current?.elements.namedItem('name') as HTMLInputElement)?.value || '',
      email: (contactFormRef.current?.elements.namedItem('email') as HTMLInputElement)?.value || '',
      message: (contactFormRef.current?.elements.namedItem('message') as HTMLTextAreaElement)?.value || '',
    };

    try {
      const backendUrl = 'https://api.zskysolutions.xyz/api/contact';
      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        contactFormRef.current?.reset();
      } else {
        const errorText = await response.text();
        alert(`Failed to send message: ${errorText || response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again later.');
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-20 md:py-32 overflow-hidden">
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
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
          {/* Learn More Button */}
          <div className="mb-12">
            <a
              href="/services"
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Learn More About Our Services
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-indigo-600 mb-4 text-5xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600">Crafting responsive, high-performance websites tailored to your business needs. From simple landing pages to complex web applications.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-green-600 mb-4 text-5xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Software Solutions</h3>
              <p className="text-gray-600">Developing custom software solutions to streamline your operations and enhance productivity. Scalable and secure applications.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="text-red-600 mb-4 text-5xl flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cloud Consulting</h3>
              <p className="text-gray-600">Expert guidance on cloud strategy, migration, and optimization using AWS, Azure, and Google Cloud platforms.</p>
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
            <p className="text-lg text-gray-700 mb-4">ZSky Solutions is a dynamic technology company dedicated to delivering innovative and reliable solutions. We specialize in helping small to medium-sized businesses leverage the power of technology to achieve their goals.</p>
            <p className="text-lg text-gray-700">Our team of experienced professionals is committed to providing exceptional service and building long-lasting partnerships with our clients. We believe in transparency, efficiency, and delivering measurable results.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Let&apos;s discuss how ZSky Solutions can help you achieve your digital aspirations.</p>
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
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">We&apos;d love to hear from you! Fill out the form below or reach out directly.</p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} ref={contactFormRef} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-left text-lg font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-lg font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-lg font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} required className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-lg" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Send Message
              </button>
            </form>
          </div>
          <div className="mt-12 text-gray-700">
            <p className="text-lg">Or connect with us directly:</p>
            <p className="text-xl font-semibold mt-2">ezazovsky@gmail.com</p>
            <p className="text-xl font-semibold mt-2">+1 (832) 274-2673</p>
          </div>
        </div>
      </section>
    </main>
  );
}
