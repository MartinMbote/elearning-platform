import React from 'react'
import { me } from '../../assets';
import { downArrow } from '../../assets';

const ProfileIcon = () => {
  return (
    <div>
        <div className='cursor-pointer top-[0.95vw] right-[2.8vw] absolute'>
                <img src={me} className='h-[3vw] border-[0.11vw] border-strathmore-yellow rounded-[2vw]' />
                
                <div className=' flex justify-center'>
                    <img src={downArrow} className='h-[1.3vw]' />
                </div>
            </div>
    </div>
  )
}

export default ProfileIcon