import React from 'react'
import { Link } from 'react-router-dom';
import { strathWhiteLogo } from '../../assets';
import { menuIcon } from '../../assets';
import { menuIconWhite } from '../../assets';

const SidePanelVideoPlayer = ({ isOpen, togglePanel }) => {
  return (
    <div>
        <div className={`fixed w-[18vw] h-[48.9vw] top-[0vw] left-[0vw] bg-strathmore-blue z-10 transition-transform duration-300 ease-in-out ${isOpen ? '' : '-translate-x-full'}`}>
        <div className='flex flex-col'>
          {/* <img src={strathWhiteLogo} className='ml-[3.3vw] mt-[1vw] h-[4vw]'/> */}

          <div className='flex flex-row'>
            <img src={menuIconWhite} className='h-[1.7vw] mt-[1.4vw] ml-[2.3vw] cursor-pointer' onClick={togglePanel} />

            <Link to="/elearning-platform/">
                <img src={strathWhiteLogo} className='ml-[1.8vw] mt-[0.5vw] h-[3.7vw]'/>
            </Link>
          </div>

          <div>
            <div className='flex justify-center'>
                <div className='w-[8vw] h-[0.1vw] mt-[1vw] bg-strathmore-yellow'></div>
            </div>

            <div className='flex justify-center mt-[2vw] text-white text-[1.1vw] text-center'>
                <div className='flex flex-col justify-center gap-[1.3vw]'>
                    <Link to="/elearning-platform/HomePageSigned">
                        <p>
                            Home
                        </p>
                    </Link>

                    <p>
                        Courses
                    </p>

                    <p>
                        Progress
                    </p>

                    <p>
                        Notes
                    </p>

                    <p>
                        Instructors
                    </p>
                </div>
            </div>
          </div>
        </div>

        {/* <div className='flex justify-center'>
          <div className='w-[3vw] h-[0.1vw] bg-strathmore-yellow'></div>
        </div> */}
      </div>
    </div>
  )
}

export default SidePanelVideoPlayer