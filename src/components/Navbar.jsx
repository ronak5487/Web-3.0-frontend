import React, { useState } from 'react'
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo3 from '../../images/logo3.png'
const NavbarItem =({title , classprops}) => {
return (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    {title}
  </li>
);
}

const Navbar = () => {
  const [toggleMenu , setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo3} alt="logo" className='w-32 cursor-pointer'/>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial ">
        {["Market" , "Exchange" , "Tutorials" , "Wallets"].map((item, index)=> (
<NavbarItem key={item + index} title={item} />

        ))}
        
      </ul>
      <div className="flex relative">
        {toggleMenu &&(
        <AiOutlineClose  fontsize ={50} className='text-white md:hidden cursor-pointer ' onClick={()=>{
          setToggleMenu(false)
        }}/>) }
        {!toggleMenu &&(
        <HiMenuAlt4 fontsize ={50} className='text-white md:hidden cursor-pointer' onClick={()=>{
          setToggleMenu(true) 
        }}/>)}
          {toggleMenu && (
          <ul className='z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-side-in'
          >
            <li className='text-xl w-full my-2'>
           <AiOutlineClose onClick={()=> setToggleMenu(false)}/>
            </li>
            {["Market" , "Exchange" , "Tutorials" , "Wallets",].map((item, index)=> (
<NavbarItem key={item + index} title={item} classprops="my-2 text-lg" />

        ))}
          </ul>
          )}
        
      </div>
    </nav>
    
  );
}

export default Navbar
