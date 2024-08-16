/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        place && GetPlacePhoto();
    }, [place])

    const GetPlacePhoto = async () => {
        const data = {
            textQuery: place?.place
        }
        const result = await GetPlaceDetails().then(resp => {
            console.log(resp.data.places[0].photos[3].name)
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
            setPhotoUrl(PhotoUrl);
        })
    }

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.place} target='_blank'>
            <div className='shadow-md border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-auto'>
                <img src={photoUrl?photoUrl:'/placeholder.jpg'} className='h-[150px] w-[150px] rounded-xl object-cover' />
                <div>
                    <h2 className='text-md font-bold'>{place.place}</h2>
                    <p className='text-sm text-gray-400 mt-1'>{place.details}</p>
                    <h2 className='my-2 text-md'>🕙 {place?.travel_time}</h2>
                </div>
            </div>
        </Link>
    )
}

export default PlaceCardItem
