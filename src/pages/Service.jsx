import React from 'react'
import { useEffect } from 'react'
import Header from '../components/Headers'
import Footer from '../components/Footers'
import first from "../assets/1st.svg"
import second from "../assets/2nd.svg"
import third from "../assets/3rd.svg"
import forth from "../assets/4th.svg"
import fifth from "../assets/5th.svg"
import sixth from "../assets/6th.svg"
import seventh from "../assets/7th.svg"
import eight from "../assets/8th.svg"
import ninth from "../assets/9th.svg"
import tenth from "../assets/10th.svg"
import eleventh from "../assets/11th.svg"
import twelvth from "../assets/12th.svg"
import icon1 from "../assets/icon1.svg"
import icon2 from "../assets/icon2.svg"
import icon3 from "../assets/icon 3.svg"
import icon4 from "../assets/Icon 4.svg"
import icon5 from "../assetS/icon 5.svg"
import icon6 from "../assets/icon 6.svg"
import icon7 from "../assets/icon 7.svg"
import icon8 from "../assets/icon 8.svg"
import icon9 from "../assets/icon 9.svg"
import icon10 from "../assets/icon 10.svg"
import icon11 from "../assets/icon 11.svg"
import icon12 from "../assets/icon 12.svg"
import Logo from "../assets/Logo.svg"

import Aos from 'aos'
import "aos/dist/aos.css"

const Service = () => {
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
        <h2 className='text-[38px] font-semibold' data-aos="fade-in">Our Services</h2>
        <p className='text-[17px]' data-aos="fade-up">Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
      </div>

        {/* DESIGN */}
        <section className='bg-green-950 text-white py-5 md:py-10 lg:py-10 px-4 md:px-25 lg:px-25 flex flex-col gap-3'>
          {/* first div */}
          <div className='text-white py-3 flex flex-col justify-center gap-8'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-[38px] font-semibold' data-aos="fade-left">Design</h2>
              <p className='text-[16px]' data-aos="fade-left">At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences. </p>
            </div>
            <button data-aos="fade-left" className='text-[14px] text-white px-3 py-1 cursor-pointer bg-green-600 w-max rounded-[5px]'>Our design services include:</button>
          </div>

          {/* second div */}
          <div className='flex flex-col gap-2'>
            {/* second 1st div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">User Experience (UX) Design</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={first} alt="icon" className='h-10' />
                <p className='text-[14px]'>User Research and Persona Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={second} alt="icon" className='h-10' />
                <p className='text-[14px]'>Information Architecture and Wireframing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={third} alt="icon" className='h-10' />
                <p className='text-[14px]'>Interactive Prototyping and User Testing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={forth} alt="icon" className='h-10' />
                <p className='text-[14px]'>UI Design and Visual Branding</p>
              </div>
            </div>
          </div>

          {/* second 2nd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">User Interface (UI) Design</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={fifth} alt="icon" className='h-10' />
                <p className='text-[14px]'>User Research and Persona Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={sixth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Information Architecture and Wireframing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={seventh} alt="icon" className='h-10' />
                <p className='text-[14px]'>Interactive Prototyping and User Testing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={eight} alt="icon" className='h-10' />
                <p className='text-[14px]'>UI Design and Visual Branding</p>
              </div>
            </div>
          </div>

          {/* second 3rd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Branding and Identity</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={ninth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Logo Design and Visual Identity Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={tenth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Brand Strategy and Positioning</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={eleventh} alt="icon" className='h-10' />
                <p className='text-[14px]'>Brand Guidelines and Style Guides</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={twelvth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Marketing Collateral Design (Brochures, Business Cards, etc.)</p>
              </div>
            </div>
          </div>

          </div>
        </section>



        {/* ENGINEERING */}
        <section className='bg-green-950 text-white py-5 md:py-10 lg:py-10 px-4 md:px-25 lg:px-25 flex flex-col gap-3'>
          {/* first div */}
          <div className='text-white py-3 flex flex-col justify-center gap-8'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-[38px] font-semibold' data-aos="fade-left">Engineering</h2>
              <p className='text-[16px]' data-aos="fade-left">Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs. </p>
            </div>
            <button className='text-[14px] text-white px-3 py-1 cursor-pointer bg-green-600 w-max rounded-[5px]' data-aos="fade-left">Our engineering services include:</button>
          </div>

          {/* second div */}
          <div className='flex flex-col gap-2'>
            {/* second 1st div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Web Development</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon3} alt="icon" className='h-10' />
                <p className='text-[14px]'>Front-End Development (HTML, CSS, JavaScript)</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={twelvth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Back-End Development (PHP, Python, Ruby)</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={third} alt="icon" className='h-10' />
                <p className='text-[14px]'>Content Management System (CMS) Development (WordPress, Drupal)</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={forth} alt="icon" className='h-10' />
                <p className='text-[14px]'>E-Commerce Platform Development (Magento, Shopify)</p>
              </div>
            </div>
          </div>

          {/* second 2nd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Mobile App Development</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon5} alt="icon" className='h-10' />
                <p className='text-[14px]'>Native iOS and Android App Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon6} alt="icon" className='h-10' />
                <p className='text-[14px]'>Cross-Platform App Development (React Native, Flutter)</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={seventh} alt="icon" className='h-10' />
                <p className='text-[14px]'>App Prototyping and UI/UX Design Integration</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={eight} alt="icon" className='h-10' />
                <p className='text-[14px]'>App Testing, Deployment, and Maintenance</p>
              </div>
            </div>
          </div>

          {/* second 3rd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Custom Software Development</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={ninth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Enterprise Software Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon9} alt="icon" className='h-10' />
                <p className='text-[14px]'>Custom Web Application Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={eleventh} alt="icon" className='h-10' />
                <p className='text-[14px]'>Integration with Third-Party APIs and Systems</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={twelvth} alt="icon" className='h-10' />
                <p className='text-[14px]'>Legacy System Modernization and Migration</p>
              </div>
            </div>
          </div>

          </div>
        </section>


        {/* Project Management */}
        <section className='bg-green-950 text-white py-5 md:py-10 lg:py-10 px-4 md:px-25 lg:px-25 flex flex-col gap-3'>
          {/* first div */}
          <div className='text-white py-3 flex flex-col justify-center gap-8'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-[38px] font-semibold leading-12' data-aos="fade-left">Project Management</h2>
              <p className='text-[16px]' data-aos="fade-left">Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process. </p>
            </div>
            <button className='text-[14px] text-white px-3 py-1 cursor-pointer bg-green-600 w-max rounded-[5px]' data-aos="fade-left">Our project management services include:</button>
          </div>

          {/* second div */}
          <div className='flex flex-col gap-2'>
            {/* second 1st div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Project Planning and Scoping</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon1} alt="icon" className='h-10' />
                <p className='text-[14px]'>Requirements Gathering and Analysis</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon2} alt="icon" className='h-10' />
                <p className='text-[14px]'>Project Roadmap and Timeline Development</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon3} alt="icon" className='h-10' />
                <p className='text-[14px]'>Resource Allocation and Task Assignment</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon4} alt="icon" className='h-10' />
                <p className='text-[14px]'>Risk Assessment and Mitigation Strategies</p>
              </div>
            </div>
          </div>

          {/* second 2nd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Agile Development</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon5} alt="icon" className='h-10' />
                <p className='text-[14px]'>Iterative Development and Sprints</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon6} alt="icon" className='h-10' />
                <p className='text-[14px]'>Scrum or Kanban Methodology Implementation</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon7} alt="icon" className='h-10' />
                <p className='text-[14px]'>Regular Progress Updates and Demos</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon8} alt="icon" className='h-10' />
                <p className='text-[14px]'>Continuous Improvement and Feedback Incorporation</p>
              </div>
            </div>
          </div>

          {/* second 3rd div */}
          <div className='py-3'>
            <p className='text-[15px] font-semibold' data-aos="fade-up">Quality Assurance and Testing</p>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 py-2 gap-1 '>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon9} alt="icon" className='h-10' />
                <p className='text-[14px]'>Test Planning and Execution</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon10} alt="icon" className='h-10' />
                <p className='text-[14px]'>Functional and Usability Testing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon11} alt="icon" className='h-10' />
                <p className='text-[14px]'>Performance and Security Testing</p>
              </div>
              <div className='px-3 py-2 flex flex-col gap-2 items-start border border-green-900' data-aos="fade-up">
                <img src={icon12} alt="icon" className='h-10' />
                <p className='text-[14px]'>Bug Tracking and Issue Resolution</p>
              </div>
            </div>
          </div>

          </div>
        </section>

        <div className='service text-white h-[max-content] md:px-25 lg:px-25 py-8 flex flex-col items-center justify-center text-center px-4 bg-green-700 gap-5'>
          <img src={Logo} alt="Logo" />
          <h2 className='text-[35px] font-semibold leading-12'>Let us Bring your Ideas to Life in the Digital World.</h2>
          <p className='text-[17px] md:max-w-180 lg:max-w-180'>No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.</p>
          <button onClick={cheers} className='hidden md:flex lg:flex px-3 py-2 h-[max-content] text-[13px] text-center bg-green-500 text-white rounded cursor-pointer'>Start Project</button>
        </div>
      <Footer />
    </>
  )
}

export default Service