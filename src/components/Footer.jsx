import React from 'react'
import { strathWhiteLogo } from '../assets';

const Footer = () => {
  return (
    <div>
        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] bg-strathmore-blue'>
            <div>
                <div className='flex flex-row text-white gap-[2.4vw] text-[1.1vw] justify-center'>
                    <img src={strathWhiteLogo} className='mt-[2vw] mr-[8vw] h-[9vw]'/>

                    <div className='mt-[2vw]'>
                        <p>Company</p>
                        <p className='mt-[0.7vw]'>About Us</p>
                        <p className='mt-[0.7vw]'>Careers</p>
                        <p className='mt-[0.7vw]'>Educators</p>
                        <p className='mt-[0.7vw]'>Courses</p>
                    </div>
                    
                    <div className='mt-[2vw]'>
                        <p>Product</p>
                        <p className='mt-[0.7vw]'>Courses</p>
                        <p className='mt-[0.7vw]'>Pricing</p>
                        <p className='mt-[0.7vw]'>Testimonials</p>
                    </div>
                </div>

                <div className='text-[0.9vw] flex flex-row gap-[0.5vw] text-white justify-center mt-[2.5vw]'>
                    <p>
                        Terms of Service 
                    </p>

                    <p>
                        &#x2022;
                    </p>

                    <p className='mb-[0.5vw]'>
                        Privacy Policy
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer