import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <div>
        <nav className='w-full h-[5vw] flex flex-row gap-[54vw]'>
            <img src={logo} className='ml-[3.3vw] mt-[0.5vw] h-[4vw]'/>
            <div className='flex flex-row text-[1.1vw] mt-[1.5vw] gap-[2vw]'>
              <p className='text-black'>
                  About
              </p>
              <p className='text-black'>
                  Courses
              </p>
              <p className='text-black'>
                  Instructors
              </p>
              <div className='w-[10vw] h-[2.6vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[-0.4vw]'>
                <p className='text-black text-center leading-[2.3vw]'>
                  Create Account
                </p>
              </div>
            </div>
        </nav>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw]'></div>
    </div>
  )
}

export default Navbar