import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { GoSearch } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
function Header() {
    const[toggle,setToggle]=useState(false)
  return (
    <div className='flex items-center p-2'>   
        <img src={logo} width={70} height={70} />
        <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
            <GoSearch/>
            <input type="text" placeholder='Search Games' className='px-1 bg-transparent outline-none' />
        </div>
        <div>
            {toggle ? <FaMoon className='text-[30px] text-black cursor-pointer' onClick={()=>setToggle(!toggle)} /> : <GoSun className='text-[30px] text-black cursor-pointer' onClick={()=>setToggle(!toggle)} />}   
        </div>
    </div>
  )
}

export default Header