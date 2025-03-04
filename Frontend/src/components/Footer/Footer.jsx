import React from 'react'

const Footer = () => {
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold  mt-10 mb-5'>Subscribe now & get 20% off</h1>
      <p className='text-center mb-5'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <div className='flex text-center mb-5 h-10 justify-center'>
        <div className='h-10 w-96 border-1'>
          <input type="text" placeholder=' Enter your email' id="textbox" className='h-full w-full' />
        </div>
        <div className='h-10 w-36'>
          <button className='h-full w-full bg-black text-white'>Search</button>
        </div>
      </div>

      <div className='flex justify-between mt-30'>
        <div className='w-[350px]'>
          <h1 className='text-4xl font-semibold mb-5 '> Logo </h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum facilis culpa, sed consequatur laborum temporibus repellendus ipsum quo, molestiae similique, optio adipisci. Hic quam reprehenderit facere, dignissimos id provident.</p>
        </div>
        <div className='flex gap-15'>
          <div>
            <h1 className='text-4xl font-semibold mb-5'> Company</h1>
            <p> Home</p>
            <p> About us </p>
            <p> Delivery </p>
            <p> Privacy Policy </p>
          </div>
          <div>
            <h1 className='text-4xl font-semibold mb-5'>Get in Touch</h1>
            <p> +100000011848 </p>
            <p>ourlogo@gmail.com </p>
          </div>
        </div>
      </div>
      <hr className='mt-5' />
      <div className='text-center mb-2 mt-2'> <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p> </div>
    </div>


  )
}

export default Footer
