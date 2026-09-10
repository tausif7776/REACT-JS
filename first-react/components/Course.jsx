

const FreeCourse = () => {

    const name = "A Free Course for Learn React with Learn Coding.";
  return (
    <div>{name}</div>
  )
}

import React from 'react'

const PaidCourse = () => {
  return (
    <div>PaidCourse</div>
  )
}



const Course = () => {

  return (
    <>
        <div>Course</div>
        <FreeCourse/>
        <PaidCourse/>
    </>
  )

}

export default Course