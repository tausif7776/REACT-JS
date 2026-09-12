import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            EduLearn
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Courses
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </Link>

            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg
                         hover:bg-blue-700 transition"
            >
              Signup
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 text-2xl"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Home
            </Link>

            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Courses
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              About
            </Link>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 bg-blue-600
                         text-white rounded-lg text-center"
            >
              Signup
            </Link>

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
