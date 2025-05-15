import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import Header from '../components/header'
import Footer from '../components/footer'
import zapier from "../assets/Zapier.svg"
import spotify from "../assets/spotify.svg"
import zoom from "../assets/zoom.svg"
import slack from "../assets/slack.svg"
import amazon from "../assets/amazon.svg"
import adobe from "../assets/adobe.svg"
import design from "../assets/design.svg"
import engineer from "../assets/engineer.svg"
import project from "../assets/project.svg"
import client from "../assets/client.svg"
import expertise from "../assets/expertise.svg"
import result from "../assets/result.svg"
import collaborate from "../assets/expertise.svg"
import Logo2 from "../assets/Logo.svg"
import John from "../assets/johnsmith.svg"
import sarah from "../assets/sarahjohnson.svg"
import micheal from "../assets/michealAnderson.svg"
import Thompson from "../assets/markthompson.svg"
import Laura from "../assets/lauraAdams.svg"
import emily from  "../assets/emilyTurner.svg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Home = () => { 
  const Disclose = ()=>{
    alert("Not Discloseable")
  }
  
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

      <section className='h-[70vh] lg:h-[80vh] w-[100%] md:h-[100vh] py-3 flex flex-col items-center pt-30 gap-7 px-4 home text-white'>
        <h1 className='text-[30px] text-center' data-aos="fade-up">A Digital Product Studio that will Work</h1>
          <h3 className='text-[17px] text-center leading-8 px-3 py-2 bg-green-600 rounded-[9px]' data-aos="fade-up">For <span className='ml-1 md:px-2 lg:px-2 rounded md:bg-green-800 lg:bg-green-800'>StartUp</span>, 
          <span className='md:px-2 lg:px-2 rounded md:bg-green-800 lg:bg-green-800 ml-1'>Enterprises Leader</span>,
          <span className='md:px-2 lg:px-2 rounded md:bg-green-800 lg:bg-green-800 ml-1'>Media & Publisher</span> and 
          <span className='md:px-2 lg:px-2 rounded md:bg-green-800 lg:bg-green-800 ml-1'>Social Good</span></h3>

        <div className='flex gap-3'>
          <button className="px-4 py-2 bg-stone-950 border hover:border-0 border-green-500 rounded cursor-pointer"><Link to="/work" data-aos="fade-up">Our Works</Link></button>
          <button className='px-4 py-2 bg-green-700 hover:bg-stone-950 rounded cursor-pointer'><Link to="/contact" data-aos="fade-up">Contact Us</Link></button>
        </div>
      </section>


      <section className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 bg-stone-950 text-white px-5 gap-5 py-7 product'>
        <div className="flex justify-center items-center border py-2 px-1"><img src={zapier} alt="zapier" className='h-9' data-aos="fade-left" /></div>
        <div className="flex justify-center items-center border py-2 px-1"><img src={spotify} alt="spotify" className='h-9' data-aos="fade-left" /></div>
        <div className="flex justify-center items-center border py-2 px-1"><img src={zoom} alt="zoom" className='h-9' data-aos="fade-left" /></div>
        <div className="flex justify-center items-center border py-2 px-1"><img src={slack} alt="slack" className='h-9' data-aos="fade-left" /></div>
        <div className="flex justify-center items-center border py-2 px-1"><img src={amazon} alt="amazon" className='h-9' data-aos="fade-left" /></div>
        <div className="flex justify-center items-center border py-2 px-1"><img src={adobe} alt="adobe" className='h-9' data-aos="fade-left" /></div>
      </section>


      <section className='bg-green-950'>
        <div className='service text-white h-50 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-3'>
          <h2 className='text-[38px] font-semibold' data-aos="fade-up">Our Services</h2>
          <p className='text-[17px]' data-aos="fade-left">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
        </div>

        <div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-3 lg:gap-3 py-10 px-8 md:px-25 lg:px-25 text-white'>
          <div className='flex flex-col justify-between md:pr-6 lg:pr-6 gap-12 md:gap-0 lg:gap-0 h-[max-content] md:h-89 lg:h-89 md:border-r lg:border-r p-6 md:p-0 lg:p-0 border-r-green-900 border md:border-0 border-emerald-900 py-7'>
            <div className='flex flex-col gap-3' data-aos="fade-up">
              <img src={design} alt="design" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Design</h2>
              <p className='text-[14px]'>At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences.</p>
            </div>
            <button data-aos="fade-left" className='px-3 py-2 text-center bg-stone-900 text-white rounded w-[100%] cursor-pointer'>Learn More</button>
          </div>

          <div className='flex flex-col justify-between md:px-5 lg:px-5 p-6 md:p-0 lg:p-0 gap-12 md:gap-0 lg:gap-0 h-[max-content] md:h-89 lg:h-89 md:border-r lg:border-r border-r-green-900 border md:border-0 border-emerald-900 py-7'>
            <div className='flex flex-col gap-3' data-aos="fade-up">
              <img src={engineer} alt="engineer" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Engineering</h2>
              <p className='text-[14px]'>Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.</p>
            </div>
            <button data-aos="fade-left" className='px-3 py-2 text-center bg-stone-900 text-white rounded w-[100%] cursor-pointer'>Learn More</button>
          </div>

          <div className='flex flex-col justify-between md:pl-6 lg:pl-6 gap-12 md:gap-0 lg:gap-0 h-[max-content] md:h-89 lg:h-89 p-6 md:p-0 lg:p-0 border md:border-0 border-emerald-900 py-7'>
            <div className='flex flex-col gap-3' data-aos="fade-up">
              <img src={project} alt="project" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Project Managing</h2>
              <p className='text-[14px]'>Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.</p>
            </div>
            <button data-aos="fade-left" className='px-3 py-2 text-center bg-stone-900 text-white rounded w-[100%] cursor-pointer'>Learn More</button>
          </div>
        </div>
      </section>



      <section className='bg-green-950'>
        <div className='service text-white md:px-25 lg:px-25 h-[max-content] py-6 md:py-13 lg:py-13 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-3'>
          <h2 className='text-[38px] font-semibold' data-aos="fade-up">Why Choose SquareUp?</h2>
          <p className='text-[17px]' data-aos="fade-left">Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.</p>
        </div>

        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-8 lg:gap-8 py-10 px-8 md:px-25 lg:px-25 text-white'>
            <div data-aos="fade-down" className='flex flex-col gap-3 p-6 md:p-8 lg:p-8 border md:border-0 lg:border-0 md:border-r lg:border-r md:border-b lg:border-b border-r-emerald-900 border-emerald-900 py-7'>
              <img src={expertise} alt="design" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Expertise</h2>
              <p className='text-[14px]'>Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.</p>
            </div>

            <div data-aos="fade-down" className='flex flex-col gap-3 p-6 md:p-8 lg:p-8 border md:border-0 lg:border-0 md:border-l lg:border-l md:border-b lg:border-b border-r-emerald-900 border-emerald-900 py-7'>
              <img src={client} alt="project" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Client-Centric Approach</h2>
              <p className='text-[14px]'>We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.</p>
            </div>

            <div data-aos="fade-up" className='flex flex-col gap-3 p-6 md:p-8 lg:p-8 border md:border-0 lg:border-0 md:border-r lg:border-r md:border-t lg:border-t border-r-emerald-900 border-emerald-900 py-7'>
              <img src={result} alt="design" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Result-Driven Solution</h2>
              <p className='text-[14px]'>Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.</p>
            </div>

            <div data-aos="fade-up" className='flex flex-col gap-3 p-6 md:p-8 lg:p-8 border md:border-0 lg:border-0 md:border-l lg:border-l md:border-t lg:border-t border-r-emerald-900 border-emerald-900 py-7'>
              <img src={collaborate} alt="project" className='h-10 flex self-start' />
              <h2 className='text-[21px] font-semibold'>Collaborative Partnership</h2>
              <p className='text-[14px]'>We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.</p>
            </div>
        </div>
      </section>



      <section className='bg-green-950'>
        <div className='service text-white md:px-25 lg:px-25 h-[max-content] py-8 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-5'>
          <h2 className='text-[38px] font-semibold leading-12' data-aos="fade-up">What our Clients say About us</h2>
          <p className='text-[17px]' data-aos="fade-left">At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients. Here's what some of our satisfied clients have to say about their experience working with us</p>
        </div>

        <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-3 lg:gap-3 py-10 px-8 md:px-25 lg:px-25 text-white'>
          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>SquareUp developed a comprehensive booking and reservation system for our event management company</h2>
              <p className='text-[14px]'>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={John} alt="john smith" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>John Smith</h3>
                  <p className='text-[12px] font-extralight'>CEO of Chic Boutique</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>ProTech Solutions turned to SquareUp to automate our workflow</h2>
              <p className='text-[14px]'>They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism have made them a trusted technology partner.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={Laura} alt="Laura Adams" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>Laura Adams</h3>
                  <p className='text-[12px] font-extralight'>CEO of ProTech Solutions.</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>Working with SquareUp was a breeze.</h2>
              <p className='text-[14px]'>They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. SquareUp is a trusted partner we highly recommend.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={sarah} alt="Sarah Johnso" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>Sarah Johnson</h3>
                  <p className='text-[12px] font-extralight'>Founder of HungryBites.</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>SquareUp developed a comprehensive booking and reservation system for our event management company</h2>
              <p className='text-[14px]'>Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={Thompson} alt="Mark Thompson" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>Mark Thompson</h3>
                  <p className='text-[12px] font-extralight'>CEO of EventMasters</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>SquareUp designed and developed a captivating web portal for showcasing our real estate listings.</h2>
              <p className='text-[14px]'>The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={micheal} alt="Micheal Anderson" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>Micheal Anderson</h3>
                  <p className='text-[12px] font-extralight'>Founder of Dream Homes Realty.</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

          <div data-aos="fade-up" className='flex flex-col rounded-[7px] justify-between md:pr-6 lg:pr-6 gap-12 md:gap-4 lg:gap-4 h-[max-content] md:h-85 lg:h-85 p-6 border-r-green-900 border  border-emerald-900 py-7'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[21px] font-semibold'>FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.</h2>
              <p className='text-[14px]'>SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.</p>
            </div>
            <div className='flex justify-between items-center py-3 px-2 bg-green-900 rounded'>
              <div className='flex gap-2 items-center'>
                <img src={emily} alt="Emily Turner" className='float-left h-8' />
                <div>
                  <h3 className='text-[14px] font-bold'>Emily Turner</h3>
                  <p className='text-[12px] font-extralight'>CEO of FitLife Tracker</p>
                </div>
              </div>
              <button onClick={Disclose} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-stone-900 text-white rounded cursor-pointer'>Open Website</button>
            </div>
          </div>

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


      <section className='bg-green-950 flex flex-col items-center'>
        <div className='service text-white h-[max-content] md:px-25 lg:px-25 py-8 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-5'>
          <img src={Logo2} alt="Logo" data-aos="fade-up" />
          <h2 className='text-[38px] font-semibold leading-12' data-aos="fade-up">Thank you for your Interest in SquareUp.</h2>
          <p className='text-[17px]' data-aos="fade-up">We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us.</p>
          <button data-aos="fade-left" className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-green-500 text-white rounded cursor-pointer'><Link to="/">Open Website</Link></button>
        </div>

        {/**secon div */}
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

      <Footer />
    </>
  )
}

export default Home