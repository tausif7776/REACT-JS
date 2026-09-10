import React from "react";

const FreeCourse = ({ courses }) => {
  return (
    <>
      <h2>Free Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p>Course Id: {course.id}</p>
          <h3>Course Title: {course.title}</h3>
          <h4>Course Instructor: {course.name}</h4>
        </div>
      ))}
    </>
  );
};

const PaidCourse = ({ courses }) => {
  return (
    <>
      <h2>Paid Courses</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <p>Course Id: {course.id}</p>
          <h3>Course Title: {course.title}</h3>
          <h4>Course Instructor: {course.name}</h4>
        </div>
      ))}
    </>
  );
};

const Course = () => {
  const freeCourse = [
    {
      id: 1,
      title: "HTML CSS",
      name: "John",
    },
    {
      id: 2,
      title: "JavaScript",
      name: "Doe",
    },
  ];

  const paidCourse = [
    {
      id: 1,
      title: "React JS",
      name: "Abdul",
    },
    {
      id: 2,
      title: "Node JS",
      name: "Bill",
    },
  ];

  return (
    <>
      <PaidCourse courses={paidCourse} />

      <div>Course</div>

      <FreeCourse courses={freeCourse} />
    </>
  );
};

export default Course;