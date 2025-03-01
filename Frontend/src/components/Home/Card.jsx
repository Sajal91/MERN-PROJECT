import React from 'react'
import img from "../../assets/Images/Product.jpeg"

const Card = ({ Product_name, Product_price }) => {
  return (
    <div className='flex flex-col h-[300px] w-[230px] justify-center mt-6 hover:cursor-pointer '>
      <div className="h-[270px] w-full overflow-hidden">
        {/* On Loading Effect */}
        <img className='w-full h-full hover:scale-105' src={img} />
      </div>
      <div className='pt-1'>
        <p className='text-[13px]'>{Product_name}</p>
        <p className='font-semibold'>${Product_price}</p>
      </div>
    </div>
  )
}

export default Card
