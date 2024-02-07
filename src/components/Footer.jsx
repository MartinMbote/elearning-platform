import React from 'react'
import { strathWhiteLogo } from '../assets';

const Footer = () => {
  return (
    <div>
        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] h-[40vw] bg-strathmore-blue'>
            <div>
                <div className='flex flex-row text-white gap-[3vw] text-[1.1vw]'>
                    <img src={strathWhiteLogo} className='ml-[6vw] mt-[5.6vw] h-[9vw]'/>

                    <div className='mt-[5.6vw] ml-[6vw]'>
                        <p>Company</p>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Educators</p>
                        <p>Courses</p>
                    </div>
                    
                    <div className='mt-[5.6vw]'>
                        <p>Product</p>
                        <p>Courses</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer