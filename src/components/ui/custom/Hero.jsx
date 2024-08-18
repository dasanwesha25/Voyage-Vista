/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Hero() {
  return (
    <div className='flex flex-col items-center mt-24 md:pt-32 xl:mt-24 md:mx-56 gap-9'>
      <h1 className='font-extrabold text-2xl md:text-4xl xl:text-[50px] text-center '>
        Unlock New Horizons with <span className='text-[#f56551] font-serif'>VoyageVista</span>
        <p className=' text-xs sm:text-sm md:text-xl font-medium text-gray-300 text-center md:py-5 sm:py-16 py-24'>
          Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
        </p>
      </h1>
      <Link to={'/create-trip'}>
        <Button className='hover:scale-105'>Get Started, It is Free</Button>
      </Link>
      <Footer />
    </div>
  )
}

export default Hero
