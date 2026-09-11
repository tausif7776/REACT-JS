import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseEffect from '../components/UseEffect.jsx'
import UseState from '../components/UseState.jsx'
import Course from '../components/Course.jsx'
import CourseLifting from '../components/CourseLifting.jsx'
import Bonus from '../components/Bonus.jsx'
import UseRef from '../components/UseRef.jsx'

createRoot(document.getElementById('root')).render(
  // <App/>
  // <UseState/>
  // <UseEffect/>
  // <Course/>
  // <CourseLifting/>
  // <Bonus/>
  <UseRef/>
)
