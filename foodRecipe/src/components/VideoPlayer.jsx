import React from 'react'

function VideoPlayer({videoUrl}) {
  return (
    <div>
        <video controls autoPlay>
            <source src={videoUrl} type='video/mp4'/>
        </video>
    </div>
  )
}

export default VideoPlayer