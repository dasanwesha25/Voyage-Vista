/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function Hero() {
  return (
    <div className='flex flex-col translate-y-20 xl:-translate-y-16 lg:-translate-y-16 items-center sm:mt-24 md:pt-36 xl:mt-24 md:mx-56 gap-9'>
      <h1 className='font-extrabold text-xl md:text-4xl xl:text-[50px] text-center lg:pb-4'>
        Unlock New Horizons with <span className='text-[#f56551] font-serif'>VoyageVista</span>
        <p className=' text-xs sm:text-sm md:text-xl font-medium text-gray-300 text-center md:py-8 sm:py-16 py-11 xl:py-20 lg:pt-12'>
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
