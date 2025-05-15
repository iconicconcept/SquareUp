import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Headers'
import Footer from '../components/Footers'
import first from "../assets/first.svg"
import third from  "../assets/third.svg"
import second from "../assets/second.svg"
import fourth from "../assets/forth.svg"
import fifth from "../assets/fifth.svg"
import sixth from "../assets/sixth.svg"
import logo from "../assets/Logo.svg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Work = () => {
  useEffect(()=>{
    Aos.init({
      duration: 1300
    })
  }, [])

  const cheers = ()=>{
    alert("cheers")
  }
  return (
    <>
      <Header />
      <div className='service text-white h-50 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-3'>
        <h2 className='text-[38px] font-semibold' data-aos="fade-in">Our Works</h2>
        <p className='text-[17px]' data-aos="fade-up">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
      </div>
      <div className='border border-y-green-900 text-white py-10 bg-green-950 flex flex-col items-start justify-center px-4 md:px-25 lg:px-25 gap-5'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-[22px] font-semibold' data-aos="fade-up">Our Works</h2>
          <p className='text-[16px]' data-aos="fade-up">Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise.</p>
        </div>
        <p className='text-[15px] bg-green-900 px-2 py-1 rounded' data-aos="fade-left">Here are ten examples of our notable works:</p>
      </div>

      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-white h-[max-content] py-6 md:py-10 lg:py-10 px-4 md:px-30 lg:px-30 bg-green-950'>
        {/* 1st div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>E-Commerce Platform for Fashion Hub</p>
          <img src={first} alt="image" />
          <h3 className='font-semibold'>Chic Boutique</h3>
          <p className='text-[16px] mt-1'>We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.</p>
        </div>

        {/* 2nd div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>Mobile App for Food Delivery Service</p>
          <img src={second} alt="image" />
          <h3 className='font-semibold'>HungryBites</h3>
          <p className='text-[16px] mt-1'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
        </div>

        {/* 3rd div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>Booking and Reservation System for Event Management</p>
          <img src={third} alt="image" />
          <h3 className='font-semibold'>EventMasters</h3>
          <p className='text-[16px] mt-1'>EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration, ticketing, and attendee management, resulting in streamlined processes and enhanced customer experiences.</p>
        </div>

        {/* 4th div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>Custom Software for Workflow Automation</p>
          <img src={fourth} alt="image" />
          <h3 className='font-semibold'>ProTech Solutions</h3>
          <p className='text-[16px] mt-1'>HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency.</p>
        </div>

        {/* 5th div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>Web Portal for Real Estate Listings</p>
          <img src={fifth} alt="image" />
          <h3 className='font-semibold'>Dream Homes Realty</h3>
          <p className='text-[16px] mt-1'>Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters, virtual tours, and a user-friendly interface, enabling potential buyers to find their dream homes easily.</p>
        </div>

        {/* 6th div */}
        <div className='border border-green-900 rounded-[6px] flex flex-col px-4 py-5 gap-4' data-aos="fade-up">
          <p className='text-[14px]'>Mobile App for Fitness Tracking</p>
          <img src={sixth} alt="image" />
          <h3 className='font-semibold'>FitLife Tracker</h3>
          <p className='text-[16px] mt-1'>FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included features such as activity tracking, progress monitoring, and social sharing, empowering users to lead healthier lifestyles.</p>
        </div>
      </section>


      <div className='service text-white h-[max-content] md:px-25 lg:px-25 py-10 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-5'>
        <img src={logo} alt="Logo" data-aos="fade-up" />
        <h2 className='text-[35px] font-semibold leading-12' data-aos="fade-up">Let us Bring your Ideas to Life in the Digital World.</h2>
        <p className='text-[17px] md:max-w-180 lg:max-w-180' data-aos="fade-up">No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
        <button data-aos="fade-left" onClick={cheers} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-green-500 text-white rounded cursor-pointer'>Start Project</button>
      </div>

      <Footer />
    </>
  )
}

export default Work