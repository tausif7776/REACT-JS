import React from "react";
import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Java Full Stack Development",
    instructor: "Md Tausif",
    duration: "6 Months",
    level: "Intermediate",
    price: 999,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  },
  {
    id: 2,
    title: "React.js Complete Course",
    instructor: "Rahul Kumar",
    duration: "3 Months",
    level: "Beginner",
    price: 699,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "Python Programming",
    instructor: "Amit Kumar",
    duration: "4 Months",
    level: "Beginner",
    price: 799,
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  },
];

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold text-center text-gray-800">
        Our Courses
      </h1>

      <p className="text-center text-gray-500 mt-3">
        Learn new skills and build your career.
      </p>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                      gap-8 mt-10">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
};

export default Courses;