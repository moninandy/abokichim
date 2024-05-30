import React from 'react'
// import { CiLocationOn } from "react-icons/ci";

function Header() {
  return (
<header className='flex justify-start bg-black text-white px-3 py-1'>
    <div className='flex flex-grow'>
<select className='bg-transparent'>
    <option>USD</option>
</select>
<p>Stores</p>
</div>
<div className=''>
    <button>Login/Register</button>
</div>


   
</header>
  )
}

export default Header