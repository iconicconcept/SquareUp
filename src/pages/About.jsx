import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Headers'
import Footer from '../components/Footers'
import AboutImage from "../assets/aboutImage.svg"
import logo from "../assets/Logo.svg"

import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
  useEffect(()=>{
        Aos.init({
          duration: 1300
        })
      }, [])

  return (
    <>
        <Header />
        <div className='service text-white h-50 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-3'>
          <h2 className='text-[38px] font-semibold' data-aos="fade-in">Our Services</h2>
          <p className='text-[17px]' data-aos="fade-up">Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.</p>
        </div>

        <section className='border border-green-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-white h-[max-content] py-6 px-4 md:px-30 lg:px-30 bg-green-950'>
          <div className='flex flex-col gap-3 justify-center'>
            <h1 className='text-[22px] font-semibold' data-aos="fade-up">About SquareUp</h1>
            <p className='text-[15px]' data-aos="fade-up">SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.</p>
          </div>
          <div className='flex justify-end w-[100%]'>
            <img src={AboutImage} alt="Image" className='h-95' data-aos="fade-left" />
          </div>
        </section>



        <section className='bg-green-950 text-white py-5 md:py-10 lg:py-10 px-4 md:px-25 lg:px-25 flex flex-col gap-2'>
          <p className='text-[22px] md:text-[25px] lg:text-[25px] font-bold py-3' data-aos="fade-up">Our Story</p>
          {/* 1st div */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-2 gap-4 '>
            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>01</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Design</p>
              </div>
              <p className='text-[14px]'>Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision. They believed that design could shape the way people interacted with digital products. With their passion for aesthetics and usability, they founded SquareUp Digital Product Agency's design department. Their mission was to create visually stunning and user-friendly interfaces that would leave a lasting impression.</p>
            </div>

            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>02</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Engineering</p>
              </div>
              <p className='text-[14px]'>Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. With their expertise in coding and development, they founded the engineering division of SquareUp. They believed that technology had the power to transform ideas into reality. Their mission was to build robust, scalable, and cutting-edge digital solutions that would push the boundaries of what was possible.</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-2 gap-4 '>
            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>03</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Project Management</p>
              </div>
              <p className='text-[14px]'>In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They understood the importance of effective communication, organization, and efficient execution. With their skills in planning and coordination, they founded SquareUp's project management team. Their mission was to ensure that every project ran smoothly, on time, and within budget.</p>
            </div>

            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>04</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Collaboratin</p>
              </div>
              <p className='text-[14px]'>At SquareUp, these three departments came together to form a cohesive and collaborative unit. They embraced the power of collaboration and recognized that their combined expertise would result in truly exceptional digital products. They believed that by working closely with their clients, understanding their needs, and involving them in the creative process, they could deliver solutions that surpassed expectations.</p>
            </div>
          </div>

          {/* 3rd div */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-2 gap-4 '>
            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>05</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Client-Centric Approach</p>
              </div>
              <p className='text-[14px]'>SquareUp's success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. They placed their clients at the center of everything they did. They took the time to listen, understand their unique challenges, and tailor their services to meet their specific requirements. Their mission was to become trusted partners, guiding businesses on their digital journey.</p>
            </div>

            <div className='px-4 py-3 flex flex-col gap-3 items-start border border-green-900 rounded-[6px]' data-aos="fade-up">
              <div className='flex items-center gap-2'>
                <h1 className='text-5xl text-green-400 font-bold'>06</h1>
                <p className='text-[18px] text-green-400 font-semibold'>Driving Success</p>
              </div>
              <p className='text-[14px]'>With each project, SquareUp's reputation grew. Their portfolio expanded to include a diverse range of industries and their impact was felt far and wide. From startups to established enterprises, businesses sought out SquareUp for their expertise in creating digital products that delivered tangible results. SquareUp's success was driven by their passion for innovation, their dedication to quality, and their commitment to helping their clients succeed in the digital world.</p>
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
            <p className='text-[15px]' data-aos="fade-up">Welcome to SquareUp</p>
            <p className='text-[15px] bg-green-900 px-3 py-2 md:py-1 lg:py-1 rounded-[5px]' data-aos="fade-left">Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.</p>
            <button className='w-[100%] md:w-max lg:w-max px-3 py-2 cursor-pointer bg-green-500 rounded-[6px]' data-aos="fade-left">Start Project</button>
          </div>
        </div>
      </section>

        <Footer />
    </>
  )
}

export default About