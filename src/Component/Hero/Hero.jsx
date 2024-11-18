import React from 'react'
import heroimage from '../images/Frame.svg'
import './Hero.css'
import { FaBuilding } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
      
        <nav class="justify-between px-4 py-3 text-gray-700 rounded-lg sm:flex sm:px-5  dark:bg-gray-800 dark:border-gray-700 ml-14 mr-14  mb-8" aria-label="Breadcrumb">
          <ol class="inline-flex items-center mb-3 space-x-1 md:space-x-2 rtl:space-x-reverse sm:mb-0">
            <li>
              <div class="flex items-center">
                <a href="#" class="ms-1 text-sm font-normal text-gray-500 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Home</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4"/>
                </svg>
                <a href="#" class="ms-1 text-sm font-normal  hover:text-blue-600 md:ms-2 text-gray-500 md:mx-2 dark:text-gray-400">Blog</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center ">
                <svg class="rtl:rotate-180 w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="mx-1 text-sm font-medium md:mx-2 text-gray-800">How cybersecurity solutions helped an insurance company </span></div>
            </li>
          </ol>
          
        </nav>
     
     <div className='frame1 flex justify-evenly items-center'>

        {/* cyber security cont   */}

        <div className='secu-cont'>

              <div>
                <h1 className='secu-head font-bold'>How cybersecurity solutions helped an insurance company</h1>

                <p className='security-content mt-5 mb-5'>Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.landing page or admin panel for your SaaS.landing page. </p>
              </div>
                  
              <div className='flex justify-between mb-5 pt-2 pb-2'>
                <div className='flex items-center'>
                    <div className='p-3 bg-green-200 text-green-950 rounded-full'>
                        <FaBuilding/>
                    </div>
                    <div className='pl-3'>
                        <p className='text-green-800 font-semibold text-1xl'>Software</p>
                        <p className='text-sm'>Industry</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='p-3 bg-green-200 text-green-950 rounded-full'>
                        <IoBagOutline />
                    </div>
                    <div className='pl-3'>
                        <p className='text-green-800 font-semibold'>Cybersecurity Solutions</p>
                        <p className='text-sm'>Service Provided</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='p-3 bg-green-200 text-green-950 rounded-full'>
                        <FaPeopleGroup />
                    </div>
                    <div className='pl-3'>
                      <p className='text-green-800 font-semibold text-1xl'>200-500</p>
                      <p className='text-sm'>Company Size</p>
                    </div>
                </div>
               
              </div>

              <div className='numb-cont flex justify-between'>
                {/* percent */}

                <div>
                    <h2 className='numb'>78.6%</h2>
                    <h4 className='numbText'>Better  <br />
                    Data Protection</h4>
                </div>

                <div>
                    <h2 className='numb'>50.60%</h2>
                    <h4 className='numbText'>Improvement in <br />
                    Regulatory Compliance</h4>
                </div>

                <div>
                    <h2 className='numb'>25.6%</h2>
                    <h4 className='numbText'>Phishing <br />
                    Mitigation</h4>
                </div>
              </div>
        </div>

        {/* Image Cont */}

        <div className='Frame1-img'>
            <img src={heroimage} alt=""/>
        </div>
        
     </div>


      <div className='frme2'>
          <h1 className='head'>Business Challenge</h1>

          <p className='para pt-3'>One major problem they identified was the heightened risks of data breaches and unauthorized access to sensitive customer information, including personal and financial data. This was further exaggerated by the possibilities of increasingly sophisticated phishing and social engineering attacks targeting employees and customers, posing risks of credential theft and fraud. Another threat looming over the business was the growing prevalence of ransomware and malware attacks that had the potential to disrupt business operations and compromise data integrity and availability.</p>
      </div>

    </div>
  )
}

export default Hero
