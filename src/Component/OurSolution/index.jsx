import React from 'react'
import './index.css'

const Conclusion = () => {
  return (

    <div>

        <div className='oursoln-cont'>
        
            <h1 className='oursoln-head-cont'>Our Solution</h1>

            <p className='oursoln-para-cont pt-3'>After a detailed discussion of the brand’s concerns we understood the critical importance of implementing cybersecurity measures in safeguarding sensitive customer data, maintaining regulatory compliance, and preserving brand reputation.
            </p>

        </div>

        <div className='oursoln-botm-cont flex justify-between'>
            <div>
                <a href="#" class="card-cont block max-w-sm p-6 bg-blue-700 border border-black-200 rounded-lg shadow dark:bg-blue-800 ">
                <h5 className='font-bold text-blue-700  bg-white w-6 text-center rounded'>1</h5>
                <h5 class="box-head mt-3 mb-3 text-lg font-bold tracking-tight text-white dark:text-white">Endpoint Security</h5>
                <p class="font-light text-sm text-white">Our team deployed advanced endpoint protection solutions to safeguard desktops, laptops, and mobile devices from malware, ransomware, and other cyber threats.</p>
                </a>
            </div>
            <div>
                <a href="#" class="card-cont block max-w-sm p-6 border border-blue-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className='font-bold text-blue-700 bg-blue-200 w-6 text-center rounded'>2</h5>
                <h5 class="box-head mt-3 mb-3 text-lg font-bold tracking-tight text-black">Network Security</h5>
                <p class="font-light text-sm text-black">We implemented robust network security measures, including firewalls, intrusion detection systems (IDS), and secure VPN (Virtual Private Network) connections, to protect against unauthorised access and network-based attacks.</p>
                </a>
            </div>
            <div>
                <a href="#" class="card-cont block max-w-sm p-6 border border-blue-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-blue-700 dark:hover:bg-gray-700">
                <h5 className='font-bold text-blue-700 bg-blue-200 w-6 text-center rounded'>3</h5>
                <h5 class="box-head mt-3 mb-3 text-lg font-bold tracking-tight text-black">Security Awareness Training</h5>
                <p class="font-light text-sm text-black">We provided comprehensive security awareness training programs for employees, focusing on cybersecurity best practices, phishing awareness, and incident response protocols.</p>
                </a>
            </div>
            <div>
                <a href="#" class="card-cont block max-w-sm p-6 border border-blue-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className='font-bold text-blue-700 bg-blue-200 w-6 text-center rounded'>4</h5>
                <h5 class="box-head mt-3 mb-3 text-lg font-bold tracking-tight text-black">Incident Response and Forensics</h5>
                <p class="font-light text-sm text-black">Our data experts also took care of incident response and forensics capabilities to detect, respond to, and recover from cybersecurity incidents effectively, minimising the impact on business operations and data integrity.</p>
                </a>
            </div>

        </div>

    </div>
  )
}

export default Conclusion
