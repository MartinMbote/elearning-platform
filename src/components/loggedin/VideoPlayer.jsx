import React from 'react'
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='flex justify-center h-[35vw] border'>
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
  )
}

export default VideoPlayer