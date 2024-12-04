"use client";

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We help travelers find the best flight deals worldwide. Our mission is to make air travel accessible and affordable for everyone.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white">Home</Link></li>
              <li><Link href="/destinations" className="text-sm hover:text-white">Destinations</Link></li>
              <li><Link href="/deals" className="text-sm hover:text-white">Flight Deals</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-white">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white">FAQs</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get the latest deals and travel tips.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FlightDeals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}