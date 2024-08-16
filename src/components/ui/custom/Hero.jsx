/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Hero() {
  return (
    <div className='main'>
      <video src="/video.mp4">
        <div className='flex flex-col items-center mx-56 gap-9'>
          <h1 className='font-extrabold text-[50px] text-center mt-16'>
            Unlock New Horizons with <span className='text-[#f56551] font-serif'>VoyageVista</span>
            <p className='text-xl font-medium text-gray-500 text-center py-5'>
              Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
            </p>
          </h1>
          <Link to={'/create-trip'}>
            <Button className='hover:scale-105'>Get Started, It is Free</Button>
          </Link>
          <img src='/landing.jpg' className='mt-5 w-full object-cover' />

          <Footer />
        </div>
      </video>
    </div>
  )
}

export default Hero
