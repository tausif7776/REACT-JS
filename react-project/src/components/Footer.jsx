import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              EduLearn
            </Link>

            <p className="mt-4 text-gray-400 leading-7">
              Learn new skills, improve your knowledge,
              and build your career with our online courses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-blue-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="hover:text-blue-400 transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-blue-400 transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Account
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/login"
                  className="hover:text-blue-400 transition"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/signup"
                  className="hover:text-blue-400 transition"
                >
                  Signup
                </Link>
              </li>

              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-400 transition"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📧 support@edulearn.com</li>
              <li>📞 +91 98765 43210</li>
              <li>📍 Odisha, India</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-3">

            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} EduLearn. All rights reserved.
            </p>

            <div className="flex gap-5 text-sm">
              <Link
                to="/privacy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="hover:text-white transition"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;