import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {

    const name = "Learn React with Learn Coding."

  return (
    <>
      <Navbar/>
      <div>Welcome, {name}</div>
      <Footer/>
    </>
  )
}

export default Home