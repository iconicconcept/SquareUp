import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import call from "../assets/call.svg"
import location from "../assets/location.svg"
import email from "../assets/email.svg"
import logo from "../assets/Logo.svg"


import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {

  const [detailShow, setDetailShow] = useState(false) 
    const toggleShow = ()=>{
      setDetailShow(!detailShow)
    }
  
    const [second, setSecond] = useState(false)
    const toggleShow2 = ()=>{
      setSecond(!second)
    }
  
    const [third, setThird] = useState(false)
    const toggleShow3 = ()=>{
      setThird(!third)
    }
  
    const [forth, setForth] = useState(false)
    const toggleShow4 = ()=>{
      setForth(!forth)
    }
  
    const [five, setFive] = useState(false)
    const toggleShow5 = ()=>{
      setFive(!five)
    }
  
    const [six, setSix] = useState(false)
    const toggleShow6 = ()=>{
      setSix(!six)
    }
  
    const [seven, setSeven] = useState(false)
    const toggleShow7= ()=>{
      setSeven(!seven)
    }
  
    const [eight, setEight] = useState(false)
    const toggleShow8 = ()=>{
      setEight(!eight)
    }

    useEffect(()=>{
        Aos.init({
          duration: 1300
        })
      }, [])

  return (
    <>
      <Header />
      <section className='bg-green-950'>
        <div className='service text-white h-50 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-3'>
          <h2 className='text-[38px] font-semibold' data-aos="fade-up">Our Services</h2>
          <p className='text-[17px]' data-aos="fade-left">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>
        <div className='py-10 gap-6 flex px-4 flex-col md:flex-row lg:flex-row w-[100%] justify-center'>
          <h3 className='flex justify-center gap-2 items-center px-4 py-3  rounded-[4px] bg-green-700 text-white text-[15px]'><img src={email} alt="email" className='h-3' />hello@squareup.com</h3>
          <h3 className='flex justify-center gap-2 items-center py-3 px-4 rounded-[4px] bg-green-700 text-white text-[15px]' ><img src={call} alt="call" className='h-3' />+91 91813 23 2309</h3>
          <h3 className='flex justify-center gap-2 items-center py-3 px-4 rounded-[4px] bg-green-700 text-white text-[15px]' ><img src={location} alt="location" className='h-4' />Somewhere in the World</h3>
        </div>
      </section>

      <section className='bg-green-950 flex justify-center'>
      <div className='w-[100%] md:w-160 lg:w-160 flex flex-col items-center gap-5 py-13 px-4 border border-green-900 rounded-[8px]'>
          {/* 1st */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-[100%] ' data-aos="fade-up">
            <div className='flex flex-col gap-2 bg-green-700 rounded p-2 text-white'>
              <label htmlFor="firstName" className="font-semibold"> Full Name </label>
                <input name='firstName' id='firstName' type="text" placeholder='Type Here' className='outline-0 text-whit text-[13px] border-b border-b-green-900' />
            </div>
            <div className='flex flex-col gap-2 bg-green-700 rounded p-2 text-white' data-aos="fade-up">
              <label htmlFor="Email" classname="font-semibold"> Email </label>
                <input type="text" name='Email' id="Email" placeholder='Type Here' className='outline-0 text-whit text-[13px] border-b border-b-green-900' />
            </div>
          </div>
          
          {/* 2nd */}
          <div className='flex flex-col gap-2 bg-green-700 rounded p-2 text-white w-[100%] py-3 px-3' data-aos="fade-up">
            <p className='text-[17px] font-semibold text-white'>Why are you contacting us?</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-3 lg:gap-3'>
              <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                  <input type="checkbox" />
                  <p>Web Design</p>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" />
                  <p>Mobile App Design</p>
                </div>
              </div>

              <div>
                <div className='flex gap-2'>
                  <input type="checkbox" />
                  <p>Collaboration</p>
                </div>
                <div className='flex gap-2'>
                  <input type="checkbox" />
                  <p>Others</p>
                </div>
              </div>  
            </div>
          </div>

          {/* 3rd  */}
          <div className='flex flex-col gap-6 bg-green-700 rounded p-2 text-white w-[100%] py-3 px-3' data-aos="fade-up">
            <div className='flex flex-col gap-2'>
              <p className='text-[17px] font-semibold text-white'>Why are you contacting us?</p>
              <p className='text-[14px] text-white'>Slide to indicate your budget range</p>
            </div>
            <input type="range" name="range" id="range" min="20" max="100" step="10" className='h-2' />
          </div>

          {/* 4th */}
           
           <div className='flex flex-col bg-green-700 rounded p-2 text-white w-[100%] py-5 px-3' data-aos="fade-up">
            <label htmlFor="area">Your Message</label>
            <textarea name="area" id="area" className='border-b border-b-green-950 outline-0 max-h-10' placeholder='Type Here'></textarea>
           </div>

           <button className='px-5 py-2 bg-green-500 rounded cursor-pointer font-semibold' data-aos="fade-up">Submit</button>

        </div>
      </section>


      <section className='bg-green-950'>
        <div className='service text-white h-[max-content] md:px-25 lg:px-25 py-8 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-5'>
          <h2 className='text-[38px] font-semibold leading-12' data-aos="fade-up">Frequently Asked Questions</h2>
          <p className='text-[17px]' data-aos="fade-left">Still you have any questions? Contact our Team via hello@squareup.com</p>
        </div>

        <div className='border border-emerald-900 grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-3 lg:gap-3 py-10 px-8 md:px-25 lg:px-25 text-white'>
          
          {/* first box*/}
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>01</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-35 lg:gap-35'>
                    <h3 className='hover:text-green-500 cursor-pointer'>What services does SquareUp provide?</h3>
                    {detailShow ? <h2 onClick={toggleShow} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {detailShow && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>02</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-35 lg:gap-35'>
                    <h3 className='hover:text-green-500 cursor-pointer'>How can SquareUp help my business?</h3>
                    {second ? <h2 onClick={toggleShow2} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow2} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {second && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>03</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-25 lg:gap-25'>
                    <h3 className='hover:text-green-500 cursor-pointer'>What industries does SquareUp work with?</h3>
                    {third ? <h2 onClick={toggleShow3} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow3} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {third && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>04</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-25 lg:gap-25'>
                    <h3 className='hover:text-green-500 cursor-pointer'>How long does it take to complete a project with SquareUp?</h3>
                    {forth ? <h2 onClick={toggleShow4} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow4} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {forth && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>
            </div>

            {/* second box*/}

            <div className='flex flex-col gap-3'>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>05</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-35 lg:gap-35'>
                    <h3 className='hover:text-green-500 cursor-pointer'>What services does SquareUp provide?</h3>
                    {five ? <h2 onClick={toggleShow5} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow5} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {five && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>06</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-35 lg:gap-35'>
                    <h3 className='hover:text-green-500 cursor-pointer'>How can SquareUp help my business?</h3>
                    {six ? <h2 onClick={toggleShow6} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow6} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {six && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>07</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-28 lg:gap-28'>
                    <h3 className='hover:text-green-500 cursor-pointer'>What industries does SquareUp work with?</h3>
                    {seven ? <h2 onClick={toggleShow7} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow7} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {seven && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            <div className='flex flex-col gap-2 w-[100%] border border-emerald-900 rounded p-3 ' data-aos="fade-up">
                <div className='flex gap-3'>
                  <h1 className='p-3 h-12 font-bold rounded-[10px] bg-emerald-900'>08</h1>
                  <div className='flex justify-between items-center gap-4 md:gap-25 lg:gap-25'>
                    <h3 className='hover:text-green-500 cursor-pointer'>How long does it take to complete a project with SquareUp?</h3>
                    {eight ? <h2 onClick={toggleShow8} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>x</h2>
                    : <h2 onClick={toggleShow8} aria-label='diplay content' className='text-[18px] hover:text-green-500 cursor-pointer font-bold'>+</h2>}
                  </div>
                </div>
                {eight && <p>SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>}
            </div>

            </div>
          </div>
      </section>


      <section className=' bg-green-950 text-white py-5 md:py-10 lg:py-10 px-4 md:px-25 lg:px-25 flex flex-col gap-2'>
        <div className='border border-green-900 py-4 px-3 rounded flex flex-col gap-7 md:gap-8 lg:gap-8'>
          <div className="flex flex-col items-center justify-center text-center md:text-start lg:text-start md:flex-row lg:flex-row gap-4 md:items-start lg:items-start ">
            <img src={logo} alt="logo" data-aos="fade-right" />
            <div className='flex flex-col gap-3 md:gap-1 lg:gap-1'>
              <h2 className='font-semibold md:font-bold lg:font-bold text-[16px]' data-aos="fade-up">Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....</h2>
              <p className='text-[13px]' data-aos="fade-up">Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.</p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center text-center md:text-start lg:text-start md:flex-row lg:flex-row md:justify-between lg:justify-between gap-3 md:items-center lg:items-center'>
            <p className='text-[15px]' data-aos="fade-left">Welcome to SquareUp</p>
            <p className='text-[15px] bg-green-900 px-3 py-2 md:py-1 lg:py-1 rounded-[5px]' data-aos="fade-left">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</p>
            <button className='w-[100%] md:w-max lg:w-max px-3 py-2 cursor-pointer bg-green-500 rounded-[6px]' data-aos="fade-left">Start Project</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact