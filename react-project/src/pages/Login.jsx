import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {
      setError("Please fill all fields.");
      return;
    }

    setError("");

    // Temporary frontend login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">

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
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Login to continue your learning journey.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

          {error && (
            <div className="bg-red-100 text-red-600
                            px-4 py-3 rounded-lg mb-5 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>

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
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300
                           rounded-lg focus:outline-none
                           focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-6">
              <Link
                to="/forgot-password"
                className="text-blue-600 text-sm
                           hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full">
              Login
            </Button>

          </form>

          {/* Signup */}
          <p className="text-center text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium
                         hover:text-blue-800"
            >
              Signup
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

export default Login;