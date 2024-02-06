import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';

const Navbar = () => {
  return (
    <div>
        <nav className='w-full h-[5vw] flex flex-row'>
            <img src={logo} className='ml-[3vw]'/>
            <p className='text-black'>
                Text
            </p>
        </nav>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw]'></div>
    </div>
  )
}

export default Navbar