import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import CartApp from './CartApp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
      <App />
      <CartApp />
    </StrictMode>
)
