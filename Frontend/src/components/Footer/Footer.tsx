import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className='bg-gray-50 pt-16 pb-8'>
      {/* Newsletter Section */}
      <div className='container mx-auto px-4 mb-16'>
        <div className='max-w-3xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Subscribe now & get 20% off</h2>
          <p className='text-gray-600 mb-8'>Stay updated with our latest collections and exclusive offers.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto'>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
            />
            <button className='px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12'>
          {/* Brand Section */}
          <div className='max-w-sm'>
            <h3 className='text-2xl font-bold mb-6'>Logo</h3>
            <p className='text-gray-600 leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum facilis culpa, 
              sed consequatur laborum temporibus repellendus ipsum quo.
            </p>
            <div className='mt-6 flex gap-4'>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-semibold mb-6'>Company</h3>
              <ul className='space-y-4'>
                <li>
                  <a href="#" className='text-gray-600 hover:text-black transition-colors'>Home</a>
                </li>
                <li>
                  <a href="#" className='text-gray-600 hover:text-black transition-colors'>About us</a>
                </li>
                <li>
                  <a href="#" className='text-gray-600 hover:text-black transition-colors'>Delivery</a>
                </li>
                <li>
                  <a href="#" className='text-gray-600 hover:text-black transition-colors'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='text-xl font-semibold mb-6'>Get in Touch</h3>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3 text-gray-600'>
                <i className="fas fa-phone"></i>
                <span>+1 (000) 000-1184</span>
              </li>
              <li className='flex items-center gap-3 text-gray-600'>
                <i className="fas fa-envelope"></i>
                <span>ourlogo@gmail.com</span>
              </li>
              <li className='flex items-center gap-3 text-gray-600'>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Fashion Street, New York, NY 10001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-200 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-600 text-sm'>
              Copyright © 2024 Rohan.dev & Sajal.dev - All Rights Reserved.
            </p>
            <div className='flex gap-6 text-sm'>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>Terms of Service</a>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>Privacy Policy</a>
              <a href="#" className='text-gray-600 hover:text-black transition-colors'>Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer