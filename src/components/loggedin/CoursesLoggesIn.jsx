import React from 'react'
import { africanKidsLearning } from '../../assets'
import { rightArrow } from '../../assets'

const CoursesLoggesIn = () => {
  return (
    <div>
        <div className='absolute w-[79vw] top-[6.5vw] left-[18.5vw] pb-[4vw] pt-[1.5vw] rounded-[0.7vw] '>
            <div className='ml-[2vw]'>
                <div className='mb-[2vw]'>
                    <h1 className='text-[1vw] mb-[0.3vw] text-strathmore-yellow'>
                        Registered Courses
                    </h1>

                    <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                        Game Development
                    </p>
                </div>

                <div className='flex flex-row gap-[1vw]'>
                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to Game Development
                            </h2>

                            <p className='w-[21vw text-[1vw]'>
                                Learn the basics of creating games.
                            </p>

                            <img src={rightArrow} className='h-[1.6vw] pr-[1.2vw] float-right' />
                        </div>
                    </div>

                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to Game Development
                            </h2>

                            <p className='w-[21vw text-[1vw]'>
                                Learn the basics of creating games.
                            </p>

                            <img src={rightArrow} className='h-[1.6vw] pr-[1.2vw] float-right' />
                        </div>
                    </div>

                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to Game Development
                            </h2>

                            <p className='w-[21vw text-[1vw]'>
                                Learn the basics of creating games.
                            </p>

                            <img src={rightArrow} className='h-[1.6vw] pr-[1.2vw] float-right' />
                        </div>
                    </div>

                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to Game Development
                            </h2>

                            <p className='w-[21vw text-[1vw]'>
                                Learn the basics of creating games.
                            </p>

                            <img src={rightArrow} className='h-[1.6vw] pr-[1.2vw] float-right' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesLoggesIn