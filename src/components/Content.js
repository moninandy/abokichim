import React, { useState } from 'react'
import ContentImg from "../assest/Mask Group 6@2x.png"
import SecImg from "../assest/Mask Group 7.png"

function Content() {
  const[state,setState]=useState(false);
  return (
    <section>
        <div className='flex flex-col md:flex-row lg:flex-row'>
        <div className=""><img className='w-[755px] h-[470px]' src={ContentImg} alt=""/></div>
        <div ><img className='w-[755px] h-[470px]' src={SecImg} alt=""/></div>
        <div className=''>
            <p className='text-5xl font-thin mt-7'>Nourish<br></br>Yourself with</p>
            <p className=' text-5xl mt-7 mx-16'>MISO<br/>Goodness</p>
            <button className='btn'>Shop now</button>
            <p className='mt-5'><span className='font-bold text-gray-700'>Free shipping</span>within the <br/>US for orders of $54 or more</p>
        </div>
        </div>
        <div className='hidden md:block lg:block bg-green-900 text-white'>
          <ul className='flex justify-between'>
            <li className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Vegan</li>
            <li className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>KETO-friendly</li>
            <li className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Non-GMO</li>
            <li className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Organic miso</li>
            </ul>  
        </div>
        <div className='bg-green-900 flex justify-end text-white md:hidden lg:hidden'><button onClick={()=>setState(!state)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
</button></div>
        
      {state &&  <div className='block md:hidden lg:hidden bg-green-900 text-white'>
        <ul>
            <li className='flex border border-white justify-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Vegan</li>
            <li className='flex border  border-white justify-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>KETO-friendly</li>
            <li className='flex border border-white justify-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Non-GMO</li>
            <li className='flex border border-white justify-center'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</span>Organic miso</li>

            </ul>
        </div>}
    </section>
  )
}

export default Content