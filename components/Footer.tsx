import React from 'react';
import Link from 'next/link';

// Footer component
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center">
      <div className="container mx-auto">
        <p className="text-lg mb-4">&copy; {new Date().getFullYear()} ZSky Solutions. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          {/* Use Link for internal navigation if you create these pages later */}
          <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
