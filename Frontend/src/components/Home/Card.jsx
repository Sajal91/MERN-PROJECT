import React from 'react'
import img from "../../assets/Product.jpeg"

const Card = ({Product_name, Product_price}) => {
  return (
    <div className='flex-col  ml-48 mt-18'>
      <div className="border-1 h-72 w-60 "> <img className='w-60 h-72 '  src={img}></img> </div> 
      <div>
      <p> {Product_name} iudfhvieubv</p>
      <p> {Product_price} jfbiufbiu</p>
      </div>
    </div>
  )
}

export default Card
