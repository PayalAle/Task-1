import React from 'react'
import './index.css'
import { FaArrowRightLong } from "react-icons/fa6";
import  hubnexlogo  from '../images/Hubnexlogo.svg'

function Footer() {
    return(

        <div className='mt-40'>
            
            <div className='footer-top-cont  text-white rounded-xl'>
                <h1 className='footer-head'>See all that you can accomplish with Hubnex Labs</h1>
                <a href=""><button type='button' className='footer-top-butt flex items-center'>Connect Sales <FaArrowRightLong /></button></a>
            </div>

            <div className="footer-mid-cont flex justify-between items-center">
                <h1 className='text-gray-900 font-bold text-3xl'>Let’s grow 💪<br />
                together with the faster ecosystem</h1>
                <a href=""><button type='button' className='foot-mid-cont-butt bg-gray-900 text-white flex items-center'>Contact Us <FaArrowRightLong /></button></a>
                </div>

            <div className='foot-botm-cont'>
                <footer class="bg-white dark:bg-gray-900">
                    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="#" class="flex  items-center">
                                <img src={hubnexlogo} class="h-8" alt="Hubnex Logo" />
                                <span class="foot-botm-con-span self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hubnex <br /> <label className='text-xl font-light'>Labs</label></span>
                            </a>

                            <h2 class="text-md font-bold text-gray-900 dark:text-white mt-6 mb-4">About Hubnex Labs</h2>
                            <p className='text-left text-gray-500 dark:text-gray-400 text-sm w-96'>We are a leading IT consultancy with expertise in innovative solutions for modern challenges. Our client-centric approach enables us to design tailored solutions that keep businesses ahead in the ever-evolving digital landscape.</p>

                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 mt-7 text-md font-bold text-gray-900 dark:text-white">Company</h2>
                                <ul class="text-gray-500 dark:text-gray-400 text-sm">
                                    <li class="mb-4">
                                        <a href="#/" class="hover:underline">About</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Services</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">For Partners</a>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 mt-7 text-md font-bold text-gray-900 dark:text-white">Help</h2>
                                <ul class="text-gray-500 dark:text-gray-400 text-sm">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline ">Grievance Redressal Policy</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline ">Community</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline ">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='ml-14'>
                            <h2 class="mb-6 mt-7 text-md font-bold text-gray-900 dark:text-white">Resources</h2>
                               
                                <ul class="text-gray-500 dark:text-gray-400 text-sm">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Blogs</a>
                                    </li>
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">Case Studies</a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">Insights</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="sm:flex mt-8">
                        
                        <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                                    </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>

                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white ms-5">
                            <span class="[&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 448 512">
                                    <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                                <span class="sr-only">Instagram</span>
                            </a>
                            <a href="#" class="text-gray-900 hover:text-gray-900 dark:hover:text-white ms-5">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                                </svg>
                                <span class="sr-only">GitHub account</span>
                            </a>
                        </div>
                    </div>
                        <div className='flex justify-center mt-8'>
                            <span class="text-md text-gray-500 sm:text-center dark:text-gray-400 mt-8">© Copyright 2024, All Rights Reserved by Hubnex Labs
                            </span>
                        </div>
                        
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Footer;

