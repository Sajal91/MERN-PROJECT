import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Login from './components/Login/Login'
import Collection from './components/Collections/Collection'
import { FC } from 'react'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes> 
      <Footer />
    </>
  )
}

export default App