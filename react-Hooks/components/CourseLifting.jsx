import React from 'react'
import { useState } from 'react'

// child component
const FreeCourse = ({ course }) => {
  return (
    <>
      <h2>FreeCourse: {course}</h2>
    </>
  )
}

// child component
const PaidCourse = ({ course }) => {
  return (
    <>
      <h2>PaidCourse: {course}</h2>
    </>
  )
}


// parent component
const Course = () => {

  const [course] = useState('React JS')

  return (
    <>
      <PaidCourse course={course} />
      <div>Courses!</div>
      <FreeCourse course={course} />
    </>
  )
}

export default Course