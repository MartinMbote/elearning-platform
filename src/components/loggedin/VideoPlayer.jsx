import React from 'react'
import ReactPlayer from 'react-player';
import { africanKidsLearning } from '../../assets';
import { me } from '../../assets';

const VideoPlayer = () => {
  return (
    <div>
      <div className='flex justify-center h-[35vw] border bg-black'>
        <ReactPlayer url='https://github.com/MartinMbote/elearning-platform/raw/main/src/assets/bikeRide.mp4'
        width='100%'
        height='100%'
        config={{
            file: {
              attributes: {
                controlsList: 'nodownload' // Optional: To prevent the download button from appearing
              }
            },
            attributes: {
              controls: true // Optional: To show player controls
            }
          }}
        />
      </div>

      <div className='flex justify-center'>
          <div className='w-[94vw] h-[0.12vw] mt-[0.05vw] bg-strathmore-yellow'></div>
      </div>

      <div className='flex flex-row ml-[3.3vw] mt-[0.8vw] gap-[7.4vw]'>
        <div>
          <div className='w-[54vw]'>
            <h1 className='text-[2vw] font-bold '>
              Introduction to Game Development
            </h1>

            <div className='text-[1vw] mt-[0.5vw]'>
              <p className='text-strathmore-yellow font-semibold'>
                Course Description
              </p>

              <div className='w-[6vw] h-[0.01vw] mt-[0.15vw] bg-strathmore-blue'></div>
            </div>
            
            <p className='text-[1vw] mt-[0.5vw] font-medium leading-[1.7vw]'>
              Dive into the exciting world of game development with our introductory course designed for beginners. "Introduction to Game Development" offers a comprehensive overview of the fundamental concepts, tools, and skills required to start creating your own games. Whether you're dreaming of developing the next big indie game or simply curious about how games are made, this course is your first step towards understanding the game development process.

              Throughout this course, you will learn about the history of video games, the basics of game design, and the principles of game mechanics that make games fun and engaging. We'll explore different genres of games and what makes each unique, from action-packed shooters to strategic role-playing games.
            </p>
          </div>

          <div className='mt-[2vw] ml-[1vw]'>
            <h1 className='text-[1.2vw] font-bold mb-[0.6vw] ml-[0.5vw]'>
              Instructor
            </h1>

            <div className='flex flex-row'>
              <img src={me} className='h-[6.5vw] border-[0.15vw] border-strathmore-yellow rounded-[10vw]' />

              <div className='ml-[1.05vw] mt-[0.35vw]'>
                <p className='font-medium text-[1.35vw]'>
                  Martin Maina Mbote
                </p>

                <p className='text-[1.05vw] mt-[-0.2vw]'>
                  Front-End Developer
                </p>

                <p className='text-strathmore-blue font-semibold mt-[0.6vw]'>
                  View More Courses by Martin Maina
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[31.4vw] h-[35vw] mt-[0.8vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.7vw] mb-[1vw]'>
          <div className='w-full bg-strathmore-blue'>
            <div className='ml-[1.1vw] flex flex-col pb-[1.7vw]'>
              <h1 className='text-strathmore-yellow text-[0.9vw] mt-[1.2vw]'>
                Course Content
              </h1>

              <p className='text-white text-[1.35vw] mt-[0.1vw]'> 
                Game Development :
              </p>
            </div>
          </div>

          <div className='w-31.4vw h-[28.5vw]'>
          <div className='w-full h-[6vw]'>
            <div className='bg-strathmore-yellow opacity-25 absolute h-[6vw] w-[31.3vw]'></div>

            <div className='absolute flex flex-row'>
              <p className='mt-[2.2vw] mx-[0.6vw]'>
                1
              </p>

              <img src={africanKidsLearning} className='w-[7vw] h-[5vw] mt-[0.5vw] mr-[1vw] rounded-[0.7vw]' />

              <div>
                <p className='text-black font-semibold text-[1.05vw] mt-[1.4vw]'>
                  Introduction to Game Development
                </p>

                <p className='text-[0.8vw] font-semibold'>
                  55 min
                </p>
              </div>
            </div>
          </div>

          <div className='w-full h-[6vw]'>
            {/* <div className='bg-strathmore-yellow opacity-25 absolute h-[6vw] w-[31.3vw]'></div> */}

            <div className='absolute flex flex-row'>
              <p className='mt-[2.2vw] mx-[0.6vw]'>
                2
              </p>

              <img src={africanKidsLearning} className='w-[7vw] h-[5vw] mt-[0.5vw] mr-[1vw] rounded-[0.7vw]' />

              <div>
                <p className='text-black font-semibold text-[1.05vw] mt-[1.4vw]'>
                  Introduction to Game Development
                </p>

                <p className='text-[0.8vw] font-semibold'>
                  55 min
                </p>
              </div>
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer