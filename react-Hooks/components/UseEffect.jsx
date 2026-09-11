import React from 'react'
import { useEffect, useState } from 'react'

const UseEffect = () => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const getPosts = async () => {
            console.log("Fetching data...");
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        getPosts()
    }, [])

    return (
        <>
            <h1>Data Display</h1>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </>
    )
}

export default UseEffect    