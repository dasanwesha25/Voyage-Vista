/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PlaceCardItem from './PlaceCardItem'

function PlacesToVisit({ trip }) {
    return (
        <div>
            <h2 className='font-bold text-lg mt-5'> Places To Visit</h2>
            <div>
                {trip.tripData?.itinerary.map((item, i) => (
                    <div key={i} className='mt-5'> 

                        <h2 className='font-medium text-md'>{item.day}</h2>
                        <div className='grid grid-cols-2 gap-5'>
                            {item.schedule?.map((place, index) => (
                                <div key={index}>
                                    <h2 className='font-medium text-sm mt-2'>Visiting Time : <span className='text-red-400'>{place.time}</span></h2>
                                    <PlaceCardItem place={place} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default PlacesToVisit
