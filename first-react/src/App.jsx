
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'
import Course from '../components/Course'
import Signup from '../components/Signup'

const App = () => {

  const user = true;

  // if-else statement to check if the user is logged in or not

  // if (user) {
  //   return (
  //     <Routes>

  //       <Route path="/" element={<Home />} />
  //       <Route path="/course" element={<Course />} />
  //     </Routes>
  //   )
  // } else {
  //   return (

  //     <Routes>

  //       <Route path="/login" element={<Login />} />
  //       <Route path="/signup" element={<Signup />} />
  //     </Routes>
  //   )
  // }


  // ternary operator to check if the user is logged in or not


  // return (
  //   <Routes>
  //     {
  //       user ? (
  //         <>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/course" element={<Course />} />
  //         </>
  //       ) : (
  //         <>
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/signup" element={<Signup />} />
  //         </>
  //       )}
  //   </Routes>
  // )


  // logical AND operator to check if the user is logged in or not

  return (
    <Routes>
      {
        user && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
    </Routes>
  )
}
export default App