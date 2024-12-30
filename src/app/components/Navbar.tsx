'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname(); // To detect the current route

  // Dynamic Routes for the Navbar
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }, // Add more routes dynamically
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Add search logic here (e.g., navigate to a search results page)
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Heading */}
        <div className="text-2xl font-extrabold text-black">
          <Link href="/">My Dynamic Blog</Link>
        </div>

        {/* Search Bar (Desktop View) */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex items-center w-1/3"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-green-400 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>

        {/* Toggle Button for Mobile */}
        <button
          className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 ${
                  pathname === item.href
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`lg:hidden space-y-4 absolute top-16 right-0 bg-white shadow-md w-[190px] px-6 py-4 transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 ${
                  pathname === item.href
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* Search Bar (Mobile View) */}
          <li>
            <form onSubmit={handleSearch} className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Go
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
