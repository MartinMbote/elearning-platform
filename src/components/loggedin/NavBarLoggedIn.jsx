import React from 'react'
import { logo } from '../../assets';
import { me } from '../../assets';
import { downArrow } from '../../assets';

const NavBarLoggedIn = () => {
  return (
    <div>
        <nav className=''>
            <div className='cursor-pointer mt-[0.95vw] ml-[76vw]'>
                <img src={me} className='h-[3vw] border-[0.11vw] border-strathmore-yellow rounded-[2vw]' />
                
                <div className=' flex justify-center'>
                    <img src={downArrow} className='h-[1.3vw]' />
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavBarLoggedIn