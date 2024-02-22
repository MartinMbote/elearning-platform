import React from 'react'
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className='flex justify-center h-[35vw] border'>
        <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'
        width='100%'
        height='100%'
        />
    </div>
  )
}

export default VideoPlayer