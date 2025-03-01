import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Collection from './components/Collections/Collection'

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </>
  )
}

export default App
