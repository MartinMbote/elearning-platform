import React from 'react'
import { mentors } from "../constants";

const MentorSection = ({ name }) => {
  return (
    <div>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div>
        
        <h1 className='text-center text-[3.5vw] mb-[3vw] mt-[0.5vw] font-bold'>
            Our Mentors
        </h1>

        <div className='w-[11vw] text-[1.2vw] ml-[2vw] mb-[0.7vw]'>
            <div className='w-[11vw] h-[11vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow'></div>

            <h1 className='text-center mt-[0.5vw] font-bold'>
                name
            </h1>

            <p className='text-center'>
                position
            </p>
        </div>
    </div>
  )
}

export default MentorSection