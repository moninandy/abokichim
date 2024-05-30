import React from 'react'
import secImg from "../assest/partner.png";
import receipeImg from "../assest/noodels.png";

function Section() {
  return (
    <section className='flex flex-col mx-5 py-10 md:flex-row justify-center '>
        <div className=" mx-10 sm:mx-52" >
            <img className="w-[400px]" src={secImg} alt="Ourstry"/>
            <p className='text-center font-bold'>Our Story</p>
        </div>
        <div className="mx-10 sm:mx-52">
        <img className="w-[400px]" src={receipeImg} alt="Receipesimg"/>
        <p className='text-center font-bold'>Receipes</p>
        </div>
    </section>
  )
}

export default Section