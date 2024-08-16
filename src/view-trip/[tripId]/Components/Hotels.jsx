// /* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItem from './HotelCardItem'

function Hotels({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-xl my-5'>Hotels Recommendation</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                {trip?.tripData?.hotels?.map((hotel, index) => (
                    <div key={index}>
                        <HotelCardItem hotel={hotel} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hotels
