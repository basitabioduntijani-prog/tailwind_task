import { useState } from "react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Nav Links - hidden on mobile */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-green-300">Home</a>
            <a href="#" className="hover:text-green-300">Products</a>
            <a href="#" className="hover:text-green-300">About</a>
            <a href="#" className="hover:text-green-300">Contact</a>
          </div>

          {/* Right section: Cart + Login */}
          <div className="flex items-center space-x-4">
            {/* Cart SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer hover:text-green-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6M17 13l1.2 6M6 19a1 1 0 102 0 1 1 0 00-2 0zm12 0a1 1 0 102 0 1 1 0 00-2 0z"
              />
            </svg>

            <button className="bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100">
              Login
            </button>

            {/* Hamburger / Close */}
            <button className="md:hidden" onClick={toggleMenu}>
              {menuOpen ? (
                // X icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 px-4 pt-2 pb-4 space-y-2 transition-all duration-300">
          <a href="#" className="block hover:text-green-200">Home</a>
          <a href="#" className="block hover:text-green-200">Products</a>
          <a href="#" className="block hover:text-green-200">About</a>
          <a href="#" className="block hover:text-green-200">Contact</a>
        </div>
      )}
    </nav>
  );
}
