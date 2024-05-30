import React from 'react'

function Footer() {
  return (
     <section className='bg-green-900 py-5'>
        <div className=' flex flex-col  lg:flex-row  mx-10 text-white ' >
        <svg className='hidden md:w-10' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
</svg>
        <div className="mb-5 lg:mx-10 ">
            <h3>SUBSCRIBE NEWSLETTER</h3>
            <p className='text-sm font-thin'>get the latest on sales new releases and more</p>
        </div>
        <div className='lg:mx-auto relative'>
            <input className='lg:w-[500px] h-[34px] px-8 ' type="email" placeholder="Enter your mail"/>
            <button className='absolute right-0 bg-black px-9 py-1  border border-white'>Subscribe</button>
        </div>
        </div>
        <div className='flex flex-col lg:flex-row lg:gap-28 bg-gray-200 lg:px-60 py-5 '>
        <div>
            <h3 className=' text-xl text-green-900'>Links</h3>
            <ul  >
              <li className='my-1 text-gray-600'>About us</li>
              <li className='my-1 text-gray-600'>Contact us</li>
              <li className='my-1  text-gray-600'>Customr Service</li>
              <li className='my-1  text-gray-600'>FAQ</li>
              <li className='my-1  text-gray-600'>Sitemap</li>
            </ul>
        </div>
        <div>
            <h3  className=' text-xl text-green-900'>Information</h3>
            <ul>
              <li className='my-1  text-gray-600'>Terms of Service</li>
              <li className='my-1  text-gray-600'>Refund Policy</li>
              <li className='my-1  text-gray-600'>Press</li>
            </ul>
        </div>



        </div>

     </section>
  )
}

export default Footer