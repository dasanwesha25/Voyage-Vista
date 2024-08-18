/* eslint-disable no-unused-vars */
import React from 'react'
import video from '../assets/video.mp4';
import Hero from './ui/custom/Hero'
function BgVideo() {
  return (
    <div className='w-[100%] object-cover'>  
        <div className="overlay ">
            <video src={video} autoPlay loop muted className='opacity-85 overflow-hidden '/>
            <div className='absolute -translate-y-64 md:-translate-y-full '>
                <Hero/>
            </div>
        </div>
    </div>
  )
}

export default BgVideo
// xl:-translate-y-full