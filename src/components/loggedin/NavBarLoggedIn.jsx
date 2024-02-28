import React, { useState } from 'react'
import { logo } from '../../assets';
import { me } from '../../assets';
import { downArrow } from '../../assets';
import { menuIcon } from '../../assets';
import SidePanel from './SidePanel';
import SidePanelVideoPlayer from './SidePanelVideoPlayer';

const NavBarLoggedIn = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <nav className='h-[4.5vw] flex flex-row'>
            <img src={menuIcon} className='h-[1.7vw] mt-[1.4vw] ml-[2.3vw] cursor-pointer' onClick={togglePanel} />

            <img src={logo} className='ml-[1.8vw] mt-[0.5vw] h-[3.7vw]'/>

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

        {/* <SidePanel /> */}
        <SidePanelVideoPlayer isOpen={isOpen} togglePanel={togglePanel} />
    </div>
  )
}

export default NavBarLoggedIn