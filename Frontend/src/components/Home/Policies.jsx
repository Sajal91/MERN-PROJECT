import React from 'react';
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";

const Policies = () => {
  return (
<<<<<<< HEAD
     <div className="flex gap-20 justify-between w-full items-center  ">  
    <div className=" flex flex-col  items-center">
     <div className="w-[20px]" > <RiExchangeFundsLine  /></div>
      <p>Easy Exchange Policy</p>
      <p> We offer hassle free exchange policy </p>
    </div>
    <div  className=" flex flex-col  items-center">
    <MdVerified />
    <p>7 Days Return Policy</p>
    <p> We provide 7 days free return policy </p>
    </div>
    <div className=" flex flex-col  items-center">
    <FiHeadphones />
    <p>Best customer support</p>
    <p> we provide 24/7 customer support </p>
    </div>
=======
    <div className="flex gap-36 justify-center items-center w-full text-center flex-wrap">
      <div className="flex flex-col justify-center items-center">
        <div className="w-10 h-10">
          <RiExchangeFundsLine className='w-full h-full' />
        </div>
        <p className='text-md font-semibold'>Easy Exchange Policy</p>
        <p className='text-sm text-gray-400'> We offer hassle free exchange policy </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10">
          <MdVerified className='w-full h-full' />
        </div>
        <p className='text-md font-semibold'>7 Days Return Policy</p>
        <p className='text-sm text-gray-400'> We provide 7 days free return policy </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-10 h-10">
          <FiHeadphones className='w-full h-full' />
        </div>
        <p className='text-md font-semibold'>Best customer support</p>
        <p className='text-sm text-gray-400'> we provide 24/7 customer support </p>
      </div>
>>>>>>> e1da05770cca893fe047ab30cbc859ed843cfd18
    </div>
  )
}

export default Policies
