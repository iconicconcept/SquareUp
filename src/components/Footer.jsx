import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/LogoText.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import facebook from "../assets/facebook.svg"
import email from "../assets/email.svg"
import call from "../assets/call.svg"
import location from "../assets/location.svg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(()=>{
          Aos.init({
            duration: 1300
          })
        }, [])

  return (
    <div className='h-max px-4 gap-5 md:gap-9 lg:gap-9 md:px-25 lg:px-25 py-4 flex flex-col justify-between items-center text-white bg-stone-950'>
        <div className='w-[100%] md:border-b lg:border-b md:border-b-emerald-900 lg:border-b-emerald-900 flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between gap-8 items-center '>
            <div className='border-b md:border-0 lg:border-0 border-b-emerald-900 py-5 flex justify-center md:justify-start lg:justify-start w-[100%] md:w-[max-content] lg:w-[max-content]'>
                <img src={logo} alt="logo" className='h-9 md:h-11 lg:h-11' data-aos="fade-up" />
            </div>
            <div className='flex justify-center md:justify-start lg:justify-start'>
                <ul className='flex gap-5 text-[16px] font-medium items-center' data-aos="fade-left">
                    <li className='cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='cursor-pointer'><Link to="/about">About</Link></li>
                    <li className='cursor-pointer'><Link to="/service">Service</Link></li>
                    <li className='cursor-pointer'><Link to="/work">Work</Link></li>
                    <li className='cursor-pointer'><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className='flex flex-col items-center md:justify-center lg:justify-center md:flex-row lg:flex-row gap-2 border border-emerald-900 rounded py-3 px-4 h-max w-[100%] md:w-[max-content] lg:w-[max-content] ' data-aos="fade-up">
                <p className='text-[15px]' data-aos="fade-up">stay connected</p>
                <div className='flex w-[max-content] gap-2'>
                    <img src={twitter} alt="twitter" className='cursor-pointer h-12 md:h-8 lg:h-8' data-aos="fade-up" />
                    <img src={facebook} alt="facebook" className='cursor-pointer h-12 md:h-8 lg:h-8' data-aos="fade-up" />
                    <img src={linkedin} alt="linkedin" className='cursor-pointer h-12 md:h-8 lg:h-8' data-aos="fade-up" />
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-5 md:gap-0 lg:gap-0 md:flex-row lg:flex-row justify-between w-[100%] items-center md:items-start lg:items-center'>
            <div className='w-[100%] flex flex-col md:flex-row lg:flex-row items-center gap-5 '>
                <h3 className='flex gap-3 items-center border-b py-4 border-b-emerald-900 text-[15px]'><img src={email} alt="email" className='h-3' />hello@squareup.com</h3>
                <h3 className='flex gap-3 items-center border-b py-4 border-b-emerald-900 text-[15px] w-40' ><img src={call} alt="call" className='h-3' />+91 91813 23 2309</h3>
                <h3 className='flex gap-3 items-center border-b py-4 border-b-emerald-900 text-[15px] w-50' ><img src={location} alt="location" className='h-4' />Somewhere in the World</h3>
            </div>
            <div className='w-[100%] flex justify-center md:justify-end lg:justify-end text-[14px]'><p>© 2023 SquareUp. All rights reserved.</p></div>
        </div>
    </div>
  )
}

export default Footer