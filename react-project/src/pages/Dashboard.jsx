import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: "Java Full Stack Development",
      progress: 75,
      instructor: "Md Tausif",
    },
    {
      id: 2,
      title: "React.js Complete Course",
      progress: 45,
      instructor: "Rahul Kumar",
    },
    {
      id: 3,
      title: "Python Programming",
      progress: 90,
      instructor: "Amit Kumar",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="flex">

        {/* ================= SIDEBAR ================= */}
        <aside className="hidden md:flex w-64 min-h-screen bg-gray-900 text-white flex-col">

          {/* Logo */}
          <div className="p-6 border-b border-gray-700">
            <Link
              to="/"
              className="text-2xl font-bold text-blue-400"
            >
              EduLearn
            </Link>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4">

            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-3
                         bg-blue-600 rounded-lg mb-2"
            >
              📊
              <span>Dashboard</span>
            </Link>

            <Link
              to="/courses"
              className="flex items-center gap-3 px-4 py-3
                         rounded-lg hover:bg-gray-800 transition"
            >
              📚
              <span>My Courses</span>
            </Link>

            <Link
              to="/profile"
              className="flex items-center gap-3 px-4 py-3
                         rounded-lg hover:bg-gray-800 transition"
            >
              👤
              <span>Profile</span>
            </Link>

            <Link
              to="/settings"
              className="flex items-center gap-3 px-4 py-3
                         rounded-lg hover:bg-gray-800 transition"
            >
              ⚙️
              <span>Settings</span>
            </Link>

          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-700">

            <Link
              to="/login"
              className="flex items-center gap-3 px-4 py-3
                         rounded-lg hover:bg-red-600 transition"
            >
              🚪
              <span>Logout</span>
            </Link>

          </div>

        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1">

          {/* Top Navbar */}
          <header className="bg-white shadow-sm">

            <div className="flex justify-between items-center
                            px-4 sm:px-6 lg:px-8 py-4">

              {/* Mobile Logo */}
              <Link
                to="/"
                className="md:hidden text-xl font-bold text-blue-600"
              >
                EduLearn
              </Link>

              <div className="hidden md:block">
                <h2 className="text-xl font-semibold text-gray-800">
                  Dashboard
                </h2>
              </div>

              {/* User */}
              <div className="flex items-center gap-3">

                <div className="text-right hidden sm:block">
                  <p className="font-semibold text-gray-800">
                    Md Tausif
                  </p>

                  <p className="text-sm text-gray-500">
                    Student
                  </p>
                </div>

                <div
                  className="w-10 h-10 rounded-full bg-blue-600
                             text-white flex items-center justify-center
                             font-bold"
                >
                  T
                </div>

              </div>

            </div>

          </header>

          {/* Dashboard Content */}
          <div className="p-4 sm:p-6 lg:p-8">

            {/* Welcome Section */}
            <div className="mb-8">

              <h1 className="text-3xl font-bold text-gray-800">
                Welcome back, Tausif! 👋
              </h1>

              <p className="text-gray-500 mt-2">
                Continue learning and achieve your goals.
              </p>

            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Total Courses */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">
                  Enrolled Courses
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  3
                </h2>

                <p className="text-blue-600 text-sm mt-2">
                  Keep learning
                </p>
              </div>

              {/* Completed */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">
                  Completed
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  1
                </h2>

                <p className="text-green-600 text-sm mt-2">
                  Great job!
                </p>
              </div>

              {/* In Progress */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">
                  In Progress
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  2
                </h2>

                <p className="text-yellow-600 text-sm mt-2">
                  Keep going
                </p>
              </div>

              {/* Certificates */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">
                  Certificates
                </p>

                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                  1
                </h2>

                <p className="text-purple-600 text-sm mt-2">
                  Earned
                </p>
              </div>

            </div>

            {/* ================= COURSES ================= */}
            <div className="mt-10">

              <div className="flex justify-between items-center mb-5">

                <h2 className="text-2xl font-bold text-gray-800">
                  My Courses
                </h2>

                <Link
                  to="/courses"
                  className="text-blue-600 hover:text-blue-800
                             font-medium"
                >
                  View All
                </Link>

              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {enrolledCourses.map((course) => (

                  <div
                    key={course.id}
                    className="bg-white p-6 rounded-xl shadow-sm"
                  >

                    {/* Course Info */}
                    <div className="flex justify-between gap-4">

                      <div>
                        <h3 className="text-lg font-bold text-gray-800">
                          {course.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Instructor: {course.instructor}
                        </p>
                      </div>

                      <span className="text-blue-600 font-bold">
                        {course.progress}%
                      </span>

                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full
                                    h-2 mt-5">

                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{
                          width: `${course.progress}%`,
                        }}
                      ></div>

                    </div>

                    {/* Bottom */}
                    <div className="flex justify-between items-center mt-5">

                      <span className="text-sm text-gray-500">
                        {course.progress === 100
                          ? "Completed"
                          : "In Progress"}
                      </span>

                      <Link
                        to={`/courses/${course.id}`}
                        className="rounded-lg border border-blue-600 px-5 py-2.5 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        Continue
                      </Link>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* ================= RECENT ACTIVITY ================= */}
            <div className="mt-10">

              <h2 className="text-2xl font-bold text-gray-800 mb-5">
                Recent Activity
              </h2>

              <div className="bg-white rounded-xl shadow-sm divide-y">

                <div className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100
                                  flex items-center justify-center">
                    ✅
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      Completed Python Programming
                    </p>

                    <p className="text-sm text-gray-500">
                      2 hours ago
                    </p>
                  </div>
                </div>

                <div className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100
                                  flex items-center justify-center">
                    📖
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      Started React.js Course
                    </p>

                    <p className="text-sm text-gray-500">
                      Yesterday
                    </p>
                  </div>
                </div>

                <div className="p-5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100
                                  flex items-center justify-center">
                    🏆
                  </div>

                  <div>
                    <p className="font-medium text-gray-800">
                      Earned Java Certificate
                    </p>

                    <p className="text-sm text-gray-500">
                      3 days ago
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </main>

      </div>
    </div>
  );
};

export default Dashboard;
