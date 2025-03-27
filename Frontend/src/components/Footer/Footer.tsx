import { FC } from 'react'

const Footer: FC = () => {
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

      <div className='flex justify-between mt-30 flex-wrap'>
        <div className='max-w-[450px] w-full'>
          <h1 className='text-4xl font-semibold mb-5'> Logo </h1>
          <p className='text-left text-sm leading-6'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatum facilis culpa, sed consequatur laborum temporibus repellendus ipsum quo, molestiae similique, optio adipisci. Hic quam reprehenderit facere, dignissimos id provident.</p>
        </div>
        <div className='flex justify-center max-w-[450px] w-full gap-10 flex-wrap'>
          <div>
            <h1 className='text-4xl font-semibold mb-5'> Company</h1>
            <ul className='text-sm'>
              <li> Home</li>
              <li> About us </li>
              <li> Delivery </li>
              <li> Privacy Policy </li>
            </ul>
          </div>
          <div>
            <h1 className='text-4xl font-semibold mb-5'>Get in Touch</h1>
            <ul className='text-sm'>
              <li> +100000011848 </li>
              <li>ourlogo@gmail.com </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='mt-5' />
      <div className='text-center mb-2 mt-2'> <p>Copyright 2024@ Rohan.dev & Sajal.dev - All Right Reserved.</p> </div>
    </div>


  )
}

export default Footer