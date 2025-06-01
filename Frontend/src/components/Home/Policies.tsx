import { FC } from 'react';
import { RiExchangeFundsLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
import { FiHeadphones } from "react-icons/fi";

const Policies: FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
          <RiExchangeFundsLine className='w-8 h-8 text-orange-500' />
        </div>
        <h3 className='text-xl font-semibold mb-3'>Easy Exchange Policy</h3>
        <p className='text-gray-600 text-center'>
          Enjoy hassle-free exchanges within 30 days of purchase. Your satisfaction is our priority.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <MdVerified className='w-8 h-8 text-green-500' />
        </div>
        <h3 className='text-xl font-semibold mb-3'>7 Days Return Policy</h3>
        <p className='text-gray-600 text-center'>
          Not satisfied? Return your purchase within 7 days for a full refund, no questions asked.
        </p>
      </div>

      <div className="flex flex-col items-center p-6 rounded-xl hover:bg-gray-50 transition-colors duration-200">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
          <FiHeadphones className='w-8 h-8 text-blue-500' />
        </div>
        <h3 className='text-xl font-semibold mb-3'>24/7 Customer Support</h3>
        <p className='text-gray-600 text-center'>
          Our dedicated support team is available round the clock to assist you with any queries.
        </p>
      </div>
    </div>
  )
}

export default Policies