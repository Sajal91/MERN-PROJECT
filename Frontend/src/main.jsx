import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.jsx'
import Product from './components/Product.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </BrowserRouter>,
)
