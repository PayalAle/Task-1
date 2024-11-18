import React from 'react'
import './index.css'

const Impact = () => {
  return (
    
    <div className='impact-main-cont'>
      
      <div className="impact-top-cont">
          <h1 className='impact-head-cont'>Impact</h1>
          <p className='impact-para-cont pt-3'>We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.</p>
      </div>
      
      <div>
          <div className='impact-bott-cont'>

              <div className='flex justify-center items-center'>
                    <div class="relative size-48">
                        <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="4"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="22" stroke-linecap="round"></circle>
                        </svg>
                        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span class="text-center text-2xl font-bold text-blue-600">60%</span>
                        </div>
                    </div>
                    <div className='pl-8'>
                        <h2 className='impact-bott-head-cont pb-4 text-2xl font-semibold'>Enhanced Patient Engagement:</h2>
                        <p className='impact-bott-para-cont'>We were successful in the development and deployment of the app before the planned timeline and supported their vision of making mental health more accessible to their patients, minus the hassles.</p>
                    </div>
              </div>

              <div className=' flex justify-center items-center -mt-10'>
                    <div class="relative size-48">
                        <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="4"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="70" stroke-linecap="round"></circle>
                        </svg>
                        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span class="text-center text-2xl font-bold text-blue-600">39%</span>
                        </div>
                    </div>
                    <div className='pl-8'>
                        <h2 className='impact-bott-head-cont pb-4 text-2xl font-semibold'>Improved Treatment Adherence:</h2>
                        <p className='impact-bott-para-cont'>Positive feedback from healthcare providers regarding improved patient adherence to treatment plans and therapy sessions was facilitated through the mobile application, resulting in more effective therapy outcomes.</p>
                    </div>
              </div>
              
              <div className='flex justify-center items-center -mt-10'>
                    <div class="relative size-48">
                        <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="4"></circle>
                          <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="4" stroke-dasharray="100" stroke-dashoffset="35" stroke-linecap="round"></circle>
                        </svg>
                        <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                          <span class="text-center text-2xl font-bold text-blue-600">53%</span>
                        </div>
                    </div>
                    <div className='pl-8'>
                        <h2 className='impact-bott-head-cont pb-4 text-2xl font-semibold'>Performance Scalability:</h2>
                        <p className='impact-bott-para-cont'>Seamless scalability and optimal performance of the mobile application, even during periods of peak user activity helped us ensure uninterrupted service availability and user satisfaction.
                        </p>
                    </div>
              </div>
              
          </div>
      </div>
    </div>
  )
}

export default Impact
