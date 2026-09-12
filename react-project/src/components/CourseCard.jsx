import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden
                    hover:shadow-xl transition duration-300
                    border border-gray-100">

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      {/* Course Content */}
      <div className="p-5">

        {/* Level */}
        <span className="inline-block bg-blue-100 text-blue-600
                         text-sm font-medium px-3 py-1 rounded-full">
          {course.level}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mt-3">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-gray-500 text-sm mt-2">
          Instructor: {course.instructor}
        </p>

        {/* Duration */}
        <p className="text-gray-500 text-sm mt-1">
          Duration: {course.duration}
        </p>

        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">

          {/* Price */}
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ₹{course.price}
            </span>
          </div>

          {/* Details Button */}
          <Link
            to={`/courses/${course.id}`}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            View Details
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CourseCard;
