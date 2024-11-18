import React from 'react'
import './index.css'
import slackimage from '../images/SlackImage.svg'
import slackcrown from '../images/crown.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Slack = () => {
    return (
    <div >

        <div className='slack-top-cont'>
            <div className='text-center'>
                <a href="" className='text-sky-600 text-sm font-bold'>3940+ Happy Hubnex Labs Users</a>
                <h1 className='font-bold text-3xl mt-10 mb-10'>Driving results for leaders across the globe</h1>
            </div>

            <div className='flex justify-between items-center'>
                <div>
                <img src={slackimage} alt=""/>
                </div>
                <div className='w-7/12'>
                    <h1 className='font-semibold text-xl mb-10'>“People now recognise that having a good performance conversation means that something happens as a result.”</h1>
                    <p class="text-gray-500 dark:text-gray-400 text-md">“With Landingfolio, the design team can now build design which identifies employees’ career aspirations and goals and from which we approach managers and check to see what is happening.”
                        
                         <br /> <br />

                        <span class="slack-span self-center text-sm font-bold text-black">Slack <br />
                        <label className='text-xs font-normal text-gray-500 dark:text-gray-400'>Product Company </label></span>
                    </p>

                </div>
            
            </div>

        </div>

        <div className='slack-bott-cont flex justify-between'>
            <div className='flex'>
                <img src={slackcrown} alt="crown" />
                <div className='pl-7'>
                    <p className='font-light text-xs text-white'>Work better, together</p>
                    <p className='font-semibold text-xl text-white'>Get Evaluate Your Business Score for Free!</p>
                </div>
            </div>

            <div className='slack-bott-cont-butt'>
                <a href=""><button type='button' className='slack-bott-cont-butt flex justify-between items-center'>Check Now! <FaArrowRightLong /></button>
                </a>  
            </div>
            
        </div>

    </div>
  )
}

export default Slack
