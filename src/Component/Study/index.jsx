import React from 'react'
import studyimage1 from '../images/studyimage1.svg'
import studyimage2 from '../images/studyimage2.svg'
import { GoArrowUpRight } from "react-icons/go"
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css'


const Study = () => {
    return (
      
        <div className='study-main-cont mt-32 pb-10'>

            <div className='casecont m-auto text-center w-10/12 pl-36 pr-36 pt-14 pb-14'>
                <h1 className='font-semibold text-3xl mt-10 mb-5 text-white'>Case Study</h1>
                <p class="text-white text-md mb-5">We guide global businesses through the challenges of developing purposeful technology that addresses their needs and advances their growth. We have established offices in India, the UAE, and the USA.</p>
                <a href=""><button type="button" class="flex justify-center items-center py-2 px-7 m-auto mb-2 text-sm font-normal text-white focus:outline-none rounded-sm border border-gray-200 dark:hover:bg-gray-700">View All <div className='ml-2'><FaArrowRightLong /></div></button>
                </a>
            </div>

            <div>
                <div class="m-auto w-9/12">
                    <div class="swiper multiple-slide-carousel swiper-container relative">
                        <div class="swiper-wrapper flex justify-evenly">
                            <div class="swiper-slid">
                                <div class="max-w-md bg-white rounded-lg">
                                    <a href="#">
                                        <img class="rounded-t-lg bg-gray-950" src={studyimage1} alt="" />
                                    </a>
                                    <div class="p-5 bg-gray-950 pb-14 rounded-b-lg">
                                        <a href="#">
                                            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">What is Ad Exposure and Why It Matters?</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-white text-md">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                                        <a href="#" class="inline-flex items-center text-md font-medium text-left text-white">
                                            Read Full Article
                                            <div className='p-2 text-lg'><GoArrowUpRight /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="max-w-md bg-white rounded-lg">
                                    <a href="#">
                                        <img class="rounded-t-lg bg-gray-950" src={studyimage2} alt="" />
                                    </a>
                                    <div class="p-5 bg-gray-950 pb-14 rounded-b-lg">
                                        <a href="#">
                                            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">What is Ad Exposure and Why It Matters?</h5>
                                        </a>
                                        <p class="mb-3 font-normal text-white text-md">Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                                        <a href="#" class="inline-flex items-center text-md font-medium text-left text-white">
                                            Read Full Article
                                            <div className='p-2 text-lg'><GoArrowUpRight /></div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center m-auto  w-fit bottom-12 font-bold text-3xl text-white mt-5 mb-16'>
                    <div className='mr-5'>
                        <a href=""><FiArrowLeftCircle /></a>
                    </div>
                    <div>
                        <a href=""><FiArrowRightCircle /></a>
                    </div>
                </div>

            </div>
         
        </div>
    )
}

export default Study