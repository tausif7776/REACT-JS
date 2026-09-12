import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");

    // Temporary frontend signup
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          <Link
            to="/"
            className="text-3xl font-bold text-blue-600"
          >
            EduLearn
          </Link>

          <h1 className="text-2xl font-bold text-gray-800 mt-6">
            Create Your Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start your learning journey with EduLearn.
          </p>

        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

          {error && (
            <div className="bg-red-100 text-red-600
                            px-4 py-3 rounded-lg mb-5 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-5">
              <label className="block text-gray-700
                                font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300
                           rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label className="block text-gray-700
                                font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300
                           rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label className="block text-gray-700
                                font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 border border-gray-300
                           rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label className="block text-gray-700
                                font-medium mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 border border-gray-300
                           rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Signup Button */}
            <Button type="submit" className="w-full">
              Create Account
            </Button>

          </form>

          {/* Login */}
          <p className="text-center text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium
                         hover:text-blue-800"
            >
              Login
            </Link>
          </p>

        </div>

        {/* Back Home */}
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-gray-500 hover:text-blue-600 text-sm"
          >
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Signup;