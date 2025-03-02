import React from 'react';
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";

const Policies = () => {
  return (
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
    </div>
  )
}

export default Policies
