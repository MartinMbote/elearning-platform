import React from 'react'
import { mentors } from "../constants";
import { me } from '../assets';

const MentorSection = ({ name }) => {
  return (
    <div>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div>
        
        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] pb-[4vw] rounded-[0.7vw] bg-strathmore-blue text-white'>
            <div className='flex flex-col'>
                <div className='ml-[7.5vw] mt-[3.5vw] mb-[3.5vw]'>
                    <h1 className='text-[1vw] mb-[0.5vw] text-strathmore-yellow'>
                        Mentors
                    </h1>

                    <p className='text-[2.1vw] font-semibold'>
                        See some of our Instructors 
                    </p>
                </div>

                <div className='ml-[7.5vw] flex justify-center gap-[3vw]'>
                    <div className='text-center w-[11vw]'>
                        <img src={me} className='h-[11vw] border-[0.15vw] mb-[0.9vw] border-strathmore-yellow rounded-[10vw]'/>

                        <h1 className='text-[1.06vw] mb-[0.1vw] font-bold'>
                            Martin Maina
                        </h1>

                        <p className='text-[1.06vw] text-strathmore-yellow'>
                            Developer
                        </p>
                    </div>

                    <div className='text-center w-[11vw]'>
                        <img src={me} className='h-[11vw] border-[0.15vw] mb-[0.9vw] border-strathmore-yellow rounded-[10vw]'/>

                        <h1 className='text-[1.06vw] mb-[0.1vw] font-bold'>
                            Martin Maina
                        </h1>

                        <p className='text-[1.06vw] text-strathmore-yellow'>
                            Developer
                        </p>
                    </div>

                    <div className='text-center w-[11vw]'>
                        <img src={me} className='h-[11vw] border-[0.15vw] mb-[0.9vw] border-strathmore-yellow rounded-[10vw]'/>

                        <h1 className='text-[1.06vw] mb-[0.1vw] font-bold'>
                            Martin Maina
                        </h1>

                        <p className='text-[1.06vw] text-strathmore-yellow'>
                            Developer
                        </p>
                    </div>

                    <div className='text-center w-[11vw]'>
                        <img src={me} className='h-[11vw] border-[0.15vw] mb-[0.9vw] border-strathmore-yellow rounded-[10vw]'/>

                        <h1 className='text-[1.06vw] mb-[0.1vw] font-bold'>
                            Martin Maina
                        </h1>

                        <p className='text-[1.06vw] text-strathmore-yellow'>
                            Developer
                        </p>
                    </div>

                    <div className='text-center w-[11vw]'>
                        <img src={me} className='h-[11vw] border-[0.15vw] mb-[0.9vw] border-strathmore-yellow rounded-[10vw]'/>

                        <h1 className='text-[1.06vw] mb-[0.1vw] font-bold'>
                            Martin Maina
                        </h1>

                        <p className='text-[1.06vw] text-strathmore-yellow'>
                            Developer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MentorSection