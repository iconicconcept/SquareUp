import React, { useState } from 'react'
import logo from "../assets/LogoText.svg"
import menu from "../assets/toggle.svg"
import { Link } from "react-router-dom"

const Headers = () => {
    const [show, setShow] = useState(false)

    const toggleMenu = ()=>{
        setShow(!show)
    }

    const closeMenu = ()=>{
        setShow(false)
    }

  return (
    <>
        <div className='h-max px-4 md:px-20 lg:px-20 py-4 flex justify-between items-center text-white bg-stone-950 border-b border-b-emerald-950'>
            <img src={logo} alt="logo" className='h-9 md:h-11 lg:h-11' />
            <ul className='hidden md:flex lg:flex gap-5 text-[17px] font-semibold'>
                <li className='cursor-pointer'><Link to="/">Home</Link></li>
                <li className='cursor-pointer'><Link to="/about">About</Link></li>
                <li className='cursor-pointer'><Link to="/service">Service</Link></li>
                <li className='cursor-pointer'><Link to="/work">Work</Link></li>
                <li className='cursor-pointer'><Link to="/contact">Contact</Link></li>
            </ul>
            <button className='hidden md:flex lg:flex bg-green-600 text-white px-4 py-2 rounded-[7px] cursor-pointer'><Link to="/contact">Contact Us</Link></button>
            {show ? <img src={menu} onClick={toggleMenu} aria-label="Toggle menu" alt="menu" className='flex md:hidden lg:hidden cursor-pointer' /> : <img src={menu} aria-label="Toggle menu" onClick={toggleMenu} alt="menu" className='flex md:hidden lg:hidden cursor-pointer' />}
        </div>

        {show && <div className='absolute top-19 bg-green-500 h-[100%] w-[100%] py-20 z-9 md:hidden lg:hidden text-white'>
            <ul className='flex flex-col items-center text-center md:hidden lg:hidden gap-7 text-[20px] font-semibold z-10'>
                <li className='cursor-pointer'><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li className='cursor-pointer'><Link to="/about" onClick={closeMenu}>About</Link></li>
                <li className='cursor-pointer'><Link to="/service" onClick={closeMenu}>Service</Link></li>
                <li className='cursor-pointer'><Link to="/work" onClick={closeMenu}>Work</Link></li>
                <li className='cursor-pointer'><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </div>}
    </>
  )
}

export default Headers