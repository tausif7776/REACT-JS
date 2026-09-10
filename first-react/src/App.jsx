
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'
import Course from '../components/Course'
import Signup from '../components/Signup'

const App = () => {

  const number = 20;
  console.log(number);

  return (
    <>

      <Routes>
        {/* <Route path="/" element={<Home name="Tausif" age={22} />} /> */}
        <Route path="/" element={<Home num={number} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/course" element={<Course />} />
      </Routes>


    </>
  )
}

export default App