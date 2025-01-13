import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/Images/logo.png'
import { GoSearch } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { ThemeContext } from '../Context/ThemeContext';
function Header() {
    const[toggle,setToggle]=useState(true);
    const {theme,setTheme}=useContext(ThemeContext)
    useEffect( ()=>{
      console.log("Theme",theme)
    },[])

  return (
    <div className='flex items-center p-2'>   
        <img src={logo} width={70} height={70} />
        <div className='flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center'>
            <GoSearch  className='text-slate-700'/>
            <input type="text" placeholder='Search Games' className='px-1 bg-transparent outline-none text-slate-800' />
        </div>
        <div>
            {theme=='light' ?
             (<FaMoon className='text-[30px] bg-slate-200 text-black p-1 
               rounded-full cursor-pointer' onClick={()=>{setTheme('dark') ; localStorage.setItem('theme','dark')}} />
             ) : (
             <GoSun className='text-[30px] bg-slate-200 text-black p-1 
               rounded-full cursor-pointer' onClick={()=>{setTheme('light') ; localStorage.setItem('theme','light')}} /> )}   
        </div>
    </div>
  )
}

export default Header