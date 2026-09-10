
import Navbar from './Navbar'
import Footer from './Footer'

const Home = (props) => {

    const name = "Learn React with Learn Coding."

  return (
    <>
      <Navbar/>
      <div>Welcome, {name}</div>
      {/* <h1>Name:{props.name}</h1>
      <p>Age: {props.age}</p> */}
      <h1>Number: {props.num}</h1>
      <Footer/>
    </>
  )
}

export default Home