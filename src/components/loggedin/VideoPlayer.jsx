import React from 'react'
import ReactPlayer from 'react-player';

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

      {/* <div className='ml-[3.3vw] mt-[0.8vw] w-[50vw]'>
        <h1 className='text-[2vw] font-bold '>
          Introduction to Game Development
        </h1>

        <div className='text-[1vw] mt-[0.5vw]'>
          <p className='text-strathmore-yellow font-semibold'>
            Description
          </p>

          <div className='w-[6vw] h-[0.01vw] mt-[0.15vw] bg-strathmore-blue'></div>
        </div>
        
        <p className='text-[1vw] mt-[0.5vw] font-medium leading-[1.7vw]'>
          Dive into the exciting world of game development with our introductory course designed for beginners. "Introduction to Game Development" offers a comprehensive overview of the fundamental concepts, tools, and skills required to start creating your own games. Whether you're dreaming of developing the next big indie game or simply curious about how games are made, this course is your first step towards understanding the game development process.

          Throughout this course, you will learn about the history of video games, the basics of game design, and the principles of game mechanics that make games fun and engaging. We'll explore different genres of games and what makes each unique, from action-packed shooters to strategic role-playing games.
        </p>
      </div> */}

      <div className='flex flex-row ml-[3.3vw] mt-[0.8vw] gap-[11.4vw]'>
        <div className='w-[50vw]'>
          <h1 className='text-[2vw] font-bold '>
            Introduction to Game Development
          </h1>

          <div className='text-[1vw] mt-[0.5vw]'>
            <p className='text-strathmore-yellow font-semibold'>
              Description
            </p>

            <div className='w-[6vw] h-[0.01vw] mt-[0.15vw] bg-strathmore-blue'></div>
          </div>
          
          <p className='text-[1vw] mt-[0.5vw] font-medium leading-[1.7vw]'>
            Dive into the exciting world of game development with our introductory course designed for beginners. "Introduction to Game Development" offers a comprehensive overview of the fundamental concepts, tools, and skills required to start creating your own games. Whether you're dreaming of developing the next big indie game or simply curious about how games are made, this course is your first step towards understanding the game development process.

            Throughout this course, you will learn about the history of video games, the basics of game design, and the principles of game mechanics that make games fun and engaging. We'll explore different genres of games and what makes each unique, from action-packed shooters to strategic role-playing games.
          </p>
        </div>

        <div className='w-[31.4vw] mt-[0.8vw] border border-strathmore-yellow overflow-hidden pb-[0.4vw] rounded-[0.3vw]'>
          <div className='w-full h-[10vw] bg-strathmore-blue'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer