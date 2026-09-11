import React from 'react'
import { useState } from 'react'

// child component
const FreeCourse = ({ freeCourse }) => {
  return (
    <>
      <h2>FreeCourse: {freeCourse}</h2>
    </>
  )
}

// child component
const PaidCourse = ({ paidCourse }) => {
  return (
    <>
      <h2>PaidCourse: {paidCourse}</h2>
    </>
  )
}


// parent component
const Course = () => {

  const [freeCourse] = useState("HTML CSS JS")
  const [paidCourse] = useState("React JS Node JS")

  return (
    <>
      <PaidCourse paidCourse={paidCourse} />
      <div>Courses!</div>
      <FreeCourse freeCourse={freeCourse} />
    </>
  )
}

export default Course