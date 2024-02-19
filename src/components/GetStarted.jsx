import React from 'react'
import { girlsStudying } from '../assets';
import { childrenStudy } from '../assets';
import { girlRegister } from '../assets';

const GetStarted = () => {
  return (
    <div>
        <div className='w-[94vw] h-[0.12vw] bg-strathmore-yellow ml-[3vw] mt-[0.7vw]'></div>

        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] pb-[0vw] rounded-[0.7vw] bg-strathmore-blue text-white'>
            <div className='flex flex-col'>
                <div className='ml-[7.5vw] mt-[3.5vw] mb-[3.5vw]'>
                    <h1 className='text-[1vw] mb-[0.5vw] text-strathmore-yellow'>
                        Register
                    </h1>

                    <p className='text-[2.1vw] font-semibold mb-[2vw]'>
                        Get Started Today 
                    </p>

                    <div className='flex flex-row gap-[10vw]'>
                        {/* <img src={childrenStudy} className='h-[35vw] w-[37vw] rounded-[0.3vw] border-[0.15vw] border-strathmore-yellow'/> */}

                        <div className='w-[45vw] mt-[0.5vw]'>
                            <p className='text-[1.3vw]'>
                                Ready to take the next step? Sign up for an account and start exploring our catalog of courses. With our user-friendly interface and intuitive navigation, you'll be on your way to learning success in no time.
                            </p>

                            <div className='w-[15vw] h-[3vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[1.4vw] cursor-pointer'>
                                <p className='text-white text-center leading-[2.6vw] text-[1.05vw]'>
                                    Register
                                </p>
                            </div>
                        </div>

                        <img src={girlRegister} className='h-[22vw] mt-[-7vw] rounded-[35vw] border-[0.15vw] border-strathmore-yellow'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetStarted