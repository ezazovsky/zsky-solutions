"use client";

import React from 'react';

// Detailed Services Page Component
export default function ServicesPage() {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Detailed Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A closer look at the solutions we provide to help your business excel in the digital landscape.
          </p>
        </div>

        {/* Detailed Service 1: Software Solutions */}
        <div className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-green-700 mb-4">Software Solutions</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Our custom software solutions are designed to solve your unique business challenges. We work closely with you to understand your workflows and develop applications that streamline operations, boost productivity, and drive efficiency. From internal tools to customer-facing platforms, we deliver robust and scalable software.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Bespoke application development</li>
            <li>API design and integration</li>
            <li>Database design and management</li>
            <li>Legacy system modernization</li>
            <li>Ongoing support and feature development</li>
          </ul>
        </div>

        {/* Service 2: Cybersecurity Support */}
        <div className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Cybersecurity Support</h2>
          <p className="text-gray-700 mb-4 text-lg">
            In today's digital world, protecting your business from cyber threats is paramount. We offer comprehensive cybersecurity services to safeguard your data, network, and operations. Our proactive approach helps identify vulnerabilities and prevent attacks before they happen.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>24/7 network monitoring and threat detection</li>
            <li>Phishing prevention training and simulation</li>
            <li>Firewall and endpoint protection management</li>
            <li>Vulnerability assessments and penetration testing</li>
            <li>Incident response and data recovery planning</li>
          </ul>
        </div>

        {/* Service 3: Physical Security & Network Installation */}
        <div className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Physical Security & Network Installation</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Protect your assets and ensure reliable connectivity with our professional installation services. We provide end-to-end solutions for your physical infrastructure, from planning and cabling to hardware setup and configuration. Our team ensures your network is robust, secure, and built to last.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Server rack and hardware installation</li>
            <li>Structured network cabling (Ethernet, Fiber)</li>
            <li>Security camera (CCTV) system setup and configuration</li>
            <li>Access control system installation</li>
            <li>Wireless network design and deployment</li>
          </ul>
        </div>

        {/* Service 4: Web Development */}
        <div className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">Web Development</h2>
          <p className="text-gray-700 mb-4 text-lg">
            We build modern, responsive, and blazing-fast websites that provide an exceptional user experience. Our development process is collaborative, ensuring the final product perfectly aligns with your brand and business objectives. We focus on clean code, scalability, and SEO best practices to give you a strong online presence.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Custom website design and development</li>
            <li>E-commerce solutions and online stores</li>
            <li>Content Management Systems (CMS) like WordPress or headless CMS</li>
            <li>Web application development with React, Next.js, and other modern frameworks</li>
            <li>Performance optimization and website maintenance</li>
          </ul>
        </div>

        {/* Service 5: Cloud Consulting */}
        <div className="mb-12 p-8 bg-gray-50 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-red-700 mb-4">Cloud Consulting</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Leverage the power of the cloud with our expert consulting services. We help you navigate the complexities of cloud adoption, from strategy and migration to security and cost optimization. Our goal is to help you build a secure, scalable, and cost-effective cloud infrastructure on platforms like AWS, Azure, and Google Cloud.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>Cloud readiness assessment and strategy</li>
            <li>Infrastructure as Code (IaC) setup</li>
            <li>CI/CD pipeline implementation for automated deployments</li>
            <li>Cloud security and compliance consulting</li>
            <li>Cost management and optimization strategies</li>
          </ul>
        </div>

        {/* Home Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
