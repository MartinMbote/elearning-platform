import React from 'react'
import { logo } from '../../assets';
import { me } from '../../assets';
import { downArrow } from '../../assets';

const NavBarLoggedIn = () => {
  return (
    <div>
        <nav className='h-[4.5vw]'>
            <img src={logo} className='ml-[3.3vw] mt-[0.5vw] h-[4vw]'/>

            <div className='cursor-pointer top-[1.1vw] right-[2.8vw] absolute'>
                <img src={me} className='h-[3vw] border-[0.11vw] border-strathmore-yellow rounded-[2vw]' />
                
                {/* <div className=' flex justify-center'>
                    <img src={downArrow} className='h-[1.3vw]' />
                </div> */}
            </div>
        </nav>

        <div className='flex justify-center'>
          <div className='w-[94vw] h-[0.12vw] mb-[0.05vw] bg-strathmore-yellow'></div>
        </div>
    </div>
  )
}

export default NavBarLoggedIn