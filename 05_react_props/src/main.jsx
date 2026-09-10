import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card'
import Header from './components/Header'
import LandingPage from './components/LandingPage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Card/>
    <Header/> */}

    <LandingPage/>
  </StrictMode>
)
