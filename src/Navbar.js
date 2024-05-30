import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Logoimg from '../src/assest/download.png'

function Navbar() {
    const [toggle, setToggle]=useState(false);
  return ( 
    <header className='flex justify-between px-3 py-2 bg-gray-100' >
        <div>
            <img className='h-[70px] w-[70px]'  src={Logoimg} alt="logoimages"/></div>
        <div className='hidden md:block'>
            <ul className='flex gap-7 py-5'>
                <li>Shop</li>
                <li>Ourstory</li>
                <li>Receipes</li>
                <li>Contact</li>
            </ul>
        </div>
        
        <div className='py-5 hidden md:block '><FavoriteIcon/><SearchIcon/><ShoppingBagOutlinedIcon/></div>
        {toggle && <div className='block md:hidden mobile-nav'>
            <div><ul className='flex flex-col'>
                <li className='border-b-2 py-1'>Shop</li>
                <li className='border-b-2 py-1'>Ourstory</li>
                <li className='border-b-2 py-1'>Receipes</li>
                <li className='border-b-2 py-1'>Contact</li>
                </ul>
             </div>
             <div className='border-b-2 py-1'><FavoriteIcon/></div>
             <div className='border-b-2 py-1'><SearchIcon/></div>
            <div className='border-b-2 py-1'><ShoppingBagOutlinedIcon/></div>
                  </div>
            }
        <button onClick={ ()=> setToggle(!toggle)} className='block md:hidden'>< MenuOutlinedIcon/></button>
        </header>
  
  )
}

export default Navbar