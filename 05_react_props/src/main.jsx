import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Card from './components/Card'
import Header from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card/>
    <Header/>
  </StrictMode>
)
