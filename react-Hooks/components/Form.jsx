import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'



const Form = () => {

    const [name, setName] = useState("")

    const inputRef = useRef(null)

    console.log("rendering form component");

    const handleSubmit = (event) => {
        event.preventDefault()
        setName(inputRef.current.value);

    }
    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} /> */}
            <input type="text" placeholder="Enter your name" ref={inputRef} />
            <button type="submit">Submit</button>
            <h1>{name}</h1>
        </form>
    )
}

export default Form

