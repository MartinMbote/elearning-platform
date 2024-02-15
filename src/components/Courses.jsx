import React from 'react'
import { africanKidsLearning } from '../assets';

const Courses = () => {
  return (
    <div>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div>

        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] pb-[4vw] rounded-[0.7vw] bg-strathmore-blue text-white'>
            <div className='flex flex-col'>
                <div className='ml-[7.5vw] mt-[3.5vw] mb-[3.5vw]'>
                    <h1 className='text-[1vw] mb-[0.5vw] text-strathmore-yellow'>
                        Courses
                    </h1>

                    <p className='text-[2.1vw] font-semibold'>
                        Here are some of the Courses we Offer 
                    </p>
                </div>
            </div>

            <div className='ml-[7.5vw]'>
                <div className='w-[23.5vw] border overflow-hidden'>
                    <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                    
                    <div className='ml-[1.2vw]'>
                        <p className='text-[1vw]'>
                            Course
                        </p>

                        <h2 className='text-[1.3vw] text-strathmore-yellow'>
                            Game Development
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses