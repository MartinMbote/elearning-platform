import React from 'react'
import { heroImage } from '../assets';

const HeroSection = () => {
  return (
    <div>
        <div className='mt-[0.7vw] ml-[0.5vw] w-[99vw] h-[42.3vw] rounded-[0.7vw] bg-strathmore-blue'>
            <div className='flex flex-row'>
                <div className='ml-[7.5vw] mt-[11vw] w-[55vw]'>
                    <h1 className='text-[3.3vw] font-semibold leading-[4vw] mb-[1.5vw] text-strathmore-yellow'>
                        Welcome to Strathmore's <br /> Learning Management System
                    </h1>

                    <p className='text-[1.3vw] w-[45vw] font-normal mb-[1.8vw]'>
                        {/* Welcome to our innovative Learning Management System (LMS), where knowledge meets convenience. Whether you're a student, educator, or lifelong learner, our platform is designed to empower you on your educational journey. Explore a world of possibilities with our diverse range of courses, interactive resources, and intuitive tools. */}

                        Embark on a journey of lifelong learning with Strathmore's LMS. Whether you're looking to advance your career, explore new passions, or enhance your skills, our innovative platform offers everything you need to succeed.
                    </p>

                    <div className='w-[15vw] h-[3vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[1.2vw]'>
                        <p className='text-white text-center leading-[2.6vw] text-[1.05vw]'>
                            Get Started
                        </p>
                    </div>
                </div>
                
                {/* <div className='w-[35vw] h-[35vw] border-[0.15vw] rounded-[0.3vw] border-strathmore-yellow mt-[4vw]'></div> */}
                <img src={heroImage} className='h-[27vw] w-[28vw] mt-[7vw] rounded-[20vw] border-[0.15vw] border-strathmore-yellow'/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection