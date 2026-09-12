import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";

const courses = [
  {
    id: 1,
    title: "Java Full Stack Development",
    instructor: "Md Tausif",
    duration: "6 Months",
    level: "Intermediate",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    description:
      "Learn Java Full Stack Development from basics to advanced concepts and build real-world web applications.",
    skills: [
      "Core Java",
      "JDBC",
      "Spring Boot",
      "Spring MVC",
      "React.js",
      "MySQL",
      "REST API",
    ],
  },

  {
    id: 2,
    title: "React.js Complete Course",
    instructor: "Rahul Kumar",
    duration: "3 Months",
    level: "Beginner",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description:
      "Learn React.js from fundamentals to advanced concepts and create modern frontend applications.",
    skills: [
      "JavaScript",
      "JSX",
      "Components",
      "Props",
      "State",
      "Hooks",
      "React Router",
    ],
  },

  {
    id: 3,
    title: "Python Programming",
    instructor: "Amit Kumar",
    duration: "4 Months",
    level: "Beginner",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
    description:
      "Learn Python programming from basic syntax to object-oriented programming and real-world projects.",
    skills: [
      "Python Basics",
      "Functions",
      "OOP",
      "Exception Handling",
      "File Handling",
      "Modules",
      "Projects",
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams();

  const course = courses.find(
    (course) => course.id === Number(id)
  );

  // Course not found
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Course Not Found
        </h1>

        <p className="text-gray-500 mt-2">
          The course you are looking for does not exist.
        </p>

        <Link to="/courses" className="mt-5">
          <Button>Back to Courses</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">

      <div className="max-w-6xl mx-auto px-4">

        {/* Back Button */}
        <Link
          to="/courses"
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Courses
        </Link>

        {/* Main Course Section */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mt-6">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Course Image */}
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full min-h-[350px] object-cover"
              />
            </div>

            {/* Course Information */}
            <div className="p-8">

              {/* Level */}
              <span
                className="inline-block bg-blue-100 text-blue-600
                           px-3 py-1 rounded-full text-sm font-medium"
              >
                {course.level}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mt-4">
                {course.title}
              </h1>

              {/* Description */}
              <p className="text-gray-600 leading-7 mt-4">
                {course.description}
              </p>

              {/* Course Info */}
              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Instructor
                  </p>
                  <p className="font-semibold text-gray-800">
                    {course.instructor}
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Duration
                  </p>
                  <p className="font-semibold text-gray-800">
                    {course.duration}
                  </p>
                </div>

              </div>

              {/* Price */}
              <div className="mt-6">
                <span className="text-sm text-gray-500">
                  Course Price
                </span>

                <p className="text-3xl font-bold text-blue-600">
                  ₹{course.price}
                </p>
              </div>

              {/* Enroll Button */}
              <div className="mt-6">
                <Button className="w-full">
                  Enroll Now
                </Button>
              </div>

            </div>
          </div>

          {/* What You Will Learn */}
          <div className="p-8 border-t">

            <h2 className="text-2xl font-bold text-gray-800">
              What You Will Learn
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2
                            lg:grid-cols-3 gap-4 mt-6">

              {course.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-50
                             p-4 rounded-lg"
                >
                  <span className="text-green-600 font-bold">
                    ✓
                  </span>

                  <span className="text-gray-700">
                    {skill}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CourseDetails;