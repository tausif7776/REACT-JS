import React, { useRef } from 'react'

const UseRef = () => {

    const headingRef = useRef(null)
    console.log("Hello World");

    const changeText = () => {
        headingRef.current.textContent = "Hello React"
    }

  return (
    <>
        <h2 ref={headingRef}>Use-Ref</h2>
        <button onClick={changeText}>Change Heading</button>
    </>
  )
}

export default UseRef

