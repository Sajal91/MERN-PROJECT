import React from 'react'
// import img from "../../assets/Images/Product2.png"

const Card = ({ Product_name, Product_price, Product_image, isDataLoaded }) => {
  return (
    <>
      {!isDataLoaded ?
        <div className='flex flex-col h-[340px] w-[250px] justify-center'>
          <div className="h-[320px] w-full overflow-hidden">
              <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          </div>
          <div className='pt-1'>
              <div>
                <div className='bg-gray-200 h-4 w-3/4 mb-1 animate-pulse'></div>
                <div className='bg-gray-200 h-5 w-1/2 animate-pulse'></div>
              </div>
          </div>
        </div> :
        <div className='flex flex-col h-[340px] w-[250px] justify-center hover:cursor-pointer'>
          <div className="h-[320px] w-full overflow-hidden">
              <img className='w-full h-full hover:scale-105 transition-all' src={Product_image} alt={Product_name} />
          </div>
          <div className='pt-1'>
              <>
                <p className='text-[13px]'>{Product_name}</p>
                <p className='font-semibold'>${Product_price}</p>
              </>
          </div>
        </div>
      }
    </>

  )
}

export default Card
