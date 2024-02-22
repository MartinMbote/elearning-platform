import React from 'react'
import { Link } from 'react-router-dom';
import { strathWhiteLogo } from '../../assets';

const SidePanel = () => {
  return (
    <div>
      <div className='fixed w-[18vw] h-[48.4vw] mt-[0.2vw] ml-[0.2vw] bg-strathmore-blue rounded-[0.7vw]'>
        <div className='flex'>
          {/* <img src={strathWhiteLogo} className='ml-[3.3vw] mt-[1vw] h-[4vw]'/> */}

          <Link to="/elearning-platform/">
            <img src={strathWhiteLogo} className='ml-[3.3vw] mt-[1.5vw] h-[4vw]'/>
          </Link>
        </div>

        {/* <div className='flex justify-center'>
          <div className='w-[3vw] h-[0.1vw] bg-strathmore-yellow'></div>
        </div> */}
      </div>
    </div>
  )
}

export default SidePanel