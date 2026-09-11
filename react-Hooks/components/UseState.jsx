import React from 'react'
import { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default UseState