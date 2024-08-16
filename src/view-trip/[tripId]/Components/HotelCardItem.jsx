/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItem({ hotel }) {

    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        hotel && GetPlacePhoto();
    }, [hotel])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery:  hotel?.name
        }
        const result = await GetPlaceDetails().then(resp => {
            console.log(resp.data.places[0].photos[3].name)
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + ", " + hotel?.address} target='_blank'>
            <div className='hover:scale-105 transition-all cursor-pointer'>
                <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='rounded-lg h-[180px] w-full object-cover' />
                <div className='my-2'>
                    <h2 className='font-medium '>{hotel?.name}</h2>
                    <h2 className='test-xs text-gray-500'>📍 {hotel?.address}</h2>
                    {/* <h2 className='test-xs text-gray-400'> {hotel?.description}</h2> */}
                    <h2 className='test-xs' >💵 {hotel?.price}</h2>
                    <h2 className='test-xs'>⭐ {hotel?.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCardItem
