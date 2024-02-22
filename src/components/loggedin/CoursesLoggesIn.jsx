import React from 'react'
import { africanKidsLearning } from '../../assets'
import { rightArrow } from '../../assets'
import { arrowCircled } from '../../assets'
import { Link } from 'react-router-dom';

const CoursesLoggesIn = () => {
  return (
    <div>
        <div className='absolute w-[79vw] top-[6.5vw] left-[18.5vw] pt-[1.5vw] rounded-[0.7vw]'>
            <div className='ml-[2vw]'>
                <div className='mb-[2vw]'>
                    <h1 className='text-[1vw] mb-[0.3vw] text-strathmore-yellow'>
                        Registered Courses
                    </h1>

                    {/* <div className='flex flex-row gap-[50vw]'>
                        <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                            Game Development
                        </p>

                        <div className='flex flex-row mt-[0.65vw] gap-[0.4vw] cursor-pointer'>
                            <img src={arrowCircled} className='h-[2vw] rotate-180' />
                            <img src={arrowCircled} className='h-[2vw]' />
                        </div>
                    </div> */}

                    <div className='flex flex-row'>
                        <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                            Game Development
                        </p>

                        <div className='absolute flex flex-row mt-[0.65vw] right-[3.7vw] gap-[0.4vw] cursor-pointer'>
                            <img src={arrowCircled} className='h-[2vw] rotate-180' />
                            <img src={arrowCircled} className='h-[2vw]' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-[1vw]'>
                    {/* <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
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
                    </div> */}

                    <Link to="/elearning-platform/ChosenCourse">
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
                    </Link>

                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Game Design
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
                                Programming for Game Development
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
                                Art and Audio in Game Development
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

        <div className='absolute w-[79vw] top-[39vw] left-[18.5vw] pt-[1.5vw] rounded-[0.7vw] '>
            <div className='ml-[2vw]'>
                <div className='mb-[2vw]'>
                    {/* <h1 className='text-[1vw] mb-[0.3vw] text-strathmore-yellow'>
                        Registered Courses
                    </h1> */}

                    {/* <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                        C++
                    </p> */}

                    <div className='flex flex-row'>
                        <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                            C++
                        </p>

                        <div className='absolute flex flex-row mt-[0.65vw] right-[3.7vw] gap-[0.4vw] cursor-pointer'>
                            <img src={arrowCircled} className='h-[2vw] rotate-180' />
                            <img src={arrowCircled} className='h-[2vw]' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-[1vw]'>
                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to C++
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
                                Control Structures
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
                                Functions
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
                                Object-Oriented Programming (OOP)
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

        <div className='absolute w-[79vw] top-[70vw] left-[18.5vw] pt-[1.5vw] rounded-[0.7vw]'>
            <div className='ml-[2vw]'>
                <div className='mb-[2vw]'>
                    <div className='flex flex-row'>
                        <h1 className='text-[1vw] mb-[0.3vw] text-strathmore-yellow'>
                            Recommended Courses
                        </h1>

                        <div className='w-[10vw] h-[0.05vw] mt-[0.8vw] ml-[0.5vw] bg-strathmore-blue opacity-50'></div>
                    </div>

                    {/* <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                        Animation and Visual Effects
                    </p> */}

                    <div className='flex flex-row'>
                        <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                            Animation and Visual Effects
                        </p>

                        <div className='absolute flex flex-row mt-[0.65vw] right-[3.7vw] gap-[0.4vw] cursor-pointer'>
                            <img src={arrowCircled} className='h-[2vw] rotate-180' />
                            <img src={arrowCircled} className='h-[2vw]' />
                        </div>
                    </div>
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
                                Game Design
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
                                Programming for Game Development
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
                                Art and Audio in Game Development
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

        <div className='absolute w-[79vw] top-[103vw] left-[18.5vw] pt-[1.5vw] pb-[0.4vw] rounded-[0.7vw] '>
            <div className='ml-[2vw]'>
                <div className='mb-[2vw]'>
                    {/* <h1 className='text-[1vw] mb-[0.3vw] text-strathmore-yellow'>
                        Registered Courses
                    </h1> */}

                    {/* <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                        Audio Production and Sound Design
                    </p> */}

                    <div className='flex flex-row'>
                        <p className='text-[2.1vw] font-semibold text-strathmore-blue'>
                            Audio Production and Sound Design
                        </p>

                        <div className='absolute flex flex-row mt-[0.65vw] right-[3.7vw] gap-[0.4vw] cursor-pointer'>
                            <img src={arrowCircled} className='h-[2vw] rotate-180' />
                            <img src={arrowCircled} className='h-[2vw]' />
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-[1vw]'>
                    <div className='w-[19vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
                        <img src={africanKidsLearning} className='mb-[1vw] mt-[-7vw]'/>
                        
                        <div className='ml-[1.1vw]'>
                            <p className='text-[0.8vw] opacity-80 mb-[0.3vw] font-bold text-strathmore-blue'>
                                TOPIC
                            </p>

                            <h2 className='text-[1.3vw] text-strathmore-yellow font-semibold mb-[0.8vw] leading-[1.65vw]'>
                                Introduction to C++
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
                                Control Structures
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
                                Functions
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
                                Object-Oriented Programming (OOP)
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