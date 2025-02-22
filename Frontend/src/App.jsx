import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Product from './Product.jsx'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/product',
      element: <Product />
    }
  ]);

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
