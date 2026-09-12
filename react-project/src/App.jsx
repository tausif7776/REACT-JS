
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import InfoPage from "./pages/InfoPage";

function App() {
  const { pathname } = useLocation();
  const isDashboard = pathname === "/dashboard";

  return (
    <>
      {!isDashboard && <Navbar />}

      {/* Routes */}
      <main className="min-h-screen">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Courses */}
          <Route path="/courses" element={<Courses />} />

          {/* Course Details */}
          <Route
            path="/courses/:id"
            element={<CourseDetails />}
          />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/about" element={<InfoPage title="About EduLearn" description="EduLearn helps learners build practical skills through accessible online courses." />} />
          <Route path="/privacy" element={<InfoPage title="Privacy Policy" description="Your personal information is used only to provide and improve the EduLearn learning experience." />} />
          <Route path="/terms" element={<InfoPage title="Terms & Conditions" description="Use EduLearn responsibly and respect the course content and community guidelines." />} />
          <Route path="/forgot-password" element={<InfoPage title="Password Reset" description="Password reset is not connected to a backend yet. Please contact support@edulearn.com for help." actionLabel="Back to Login" actionTo="/login" />} />
          <Route path="/profile" element={<InfoPage title="Profile" description="Profile management will be available when account storage is connected." actionLabel="Back to Dashboard" actionTo="/dashboard" />} />
          <Route path="/settings" element={<InfoPage title="Settings" description="Account settings will be available when account storage is connected." actionLabel="Back to Dashboard" actionTo="/dashboard" />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="min-h-[70vh] flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-gray-800">
                  404
                </h1>

                <p className="text-gray-500 mt-3">
                  Page not found
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {!isDashboard && <Footer />}
    </>
  );
}

export default App;

