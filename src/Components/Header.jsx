import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import {
     HiHome, 
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from 'react-icons/hi2'

import { HiPlus, HiDotsVertical  } from 'react-icons/hi'
import HeaderItems from './HeaderItems'


function Header() {
    
    const [toggle, setToggle] = useState(false)
   const menu = [
    {
        name: "HOME",
        icon: HiHome
    },
    {
        name: "SEARCH",
        icon: HiMagnifyingGlass
    },
    {
        name: "WATCH LIST",
        icon: HiPlus
    },
    {
        name: "ORIGINAL",
        icon: HiStar
    },
    {
        name: "MOVIES",
        icon: HiPlayCircle
    },
    {
        name: "SERIES",
        icon: HiTv
    },
   ]

  return (
    <div className='flex items-center p-5 justify-between'>
         <div className="flex items-center gap-8">
        <img src={logo} className="w-[80px] md:w-[115px] object-cover" />
      <div className='hidden md:flex gap-8'>
         {menu.map((item) => (
            <HeaderItems name={item.name} Icon={item.icon}/>
        ))}
      </div>
      <div  className='flex md:hidden gap-5'>
         {menu.map((item, index) => index<3 &&(
            <HeaderItems name={''} Icon={item.icon}/>
        ))}
         <div onClick={() => setToggle(!toggle)} className='md:hidden'>
        <HeaderItems onclic name={''}  Icon={HiDotsVertical} />
        
         {toggle &&<div className='absolute mt-3 bg-[#121212]
         border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map((item, index) => index>2 &&(
            <HeaderItems name={item.name} Icon={item.icon}/>
        ))}
         </div>}
       
         </div>
      </div>
     
    </div>

    <img src="https://thumbs.dreamstime.com/b/cartoon-smiling-boy-vector-illustration-avatar-profile-picture-use-vibrant-young-wearing-casual-hoodie-character-364611515.jpg" 
    className='w-12 rounded-full' />
    </div>
   
  )
}

export default Header