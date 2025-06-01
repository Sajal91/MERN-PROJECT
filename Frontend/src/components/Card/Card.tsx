import { FC } from 'react'
import { NavLink } from 'react-router'
import CardInterface from '../../interfaces/cardInterface'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'

const Card: FC<CardInterface> = ({ Product_name, Product_price, Product_id, Product_image, isDataLoaded }) => {
  const [isWishlist, setIsWishlist] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {!isDataLoaded ? (
        <div className='flex flex-col h-[400px] w-[280px] bg-white rounded-xl shadow-sm overflow-hidden'>
          <div className="h-[320px] w-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className='p-4'>
            <div className='space-y-2'>
              <div className='bg-gray-200 h-4 w-3/4 animate-pulse rounded'></div>
              <div className='bg-gray-200 h-5 w-1/2 animate-pulse rounded'></div>
            </div>
          </div>
        </div>
      ) : (
        <NavLink to={`/product/${Product_id}`}>
          <div 
            className='flex flex-col h-[400px] w-[280px] bg-white rounded-xl shadow-sm overflow-hidden group'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-[320px] w-full overflow-hidden">
              <img 
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110' 
                src={Product_image} 
                alt={Product_name} 
              />
              <div className={`absolute top-4 right-4 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsWishlist(!isWishlist);
                  }}
                  className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  {isWishlist ? (
                    <FaHeart className="w-5 h-5 text-red-500" />
                  ) : (
                    <FaRegHeart className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <button className="w-full bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Quick View
                </button>
              </div>
            </div>
            <div className='p-4 flex flex-col gap-2'>
              <h3 className='text-gray-800 font-medium line-clamp-2'>{Product_name}</h3>
              <div className="flex items-center justify-between">
                <p className='text-lg font-semibold text-gray-900'>${Product_price}</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">4.5</span>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      )}
    </>
  )
}

export default Card