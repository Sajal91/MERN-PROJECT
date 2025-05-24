import { Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Collection from './components/Collections/Collection'
import { FC } from 'react'
import TempNav from './components/Navbar/TempNav'
import Footer from './components/Footer/Footer'
import TempFooter from './components/Footer/TempFooter'


const App: FC = () => {

  return (
    <>
        {/* <Navbar /> */}
        <TempNav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <TempFooter/>
    </>
  )
}

export default App