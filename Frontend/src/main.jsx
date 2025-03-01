import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
// import Navbar from './components/Navbar/Navbar.jsx'
// import Product from './components/Product/Product.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Login from './components/Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
)
