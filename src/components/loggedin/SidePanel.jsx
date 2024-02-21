import React from 'react'
import { Link } from 'react-router-dom';
import { strathWhiteLogo } from '../../assets';

const SidePanel = () => {
  return (
    <div>
      <div className='w-[18vw] h-[48.4vw] mt-[0.2vw] ml-[0.2vw] bg-strathmore-blue rounded-[0.7vw]'>
        <div className='flex'>
          {/* <img src={strathWhiteLogo} className='ml-[3.3vw] mt-[1vw] h-[4vw]'/> */}

          <Link to="/elearning-platform/">
            <img src={strathWhiteLogo} className='ml-[3.3vw] mt-[1vw] h-[4vw]'/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SidePanel