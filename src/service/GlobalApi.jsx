import axios from "axios"

const BASE_URL='https://places.googleapis.com/v1/places:searchText'                  //GOOGLE PLACE API (NEW)

const config={
    headers:{
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
        '-Goog-FieldMask':[
            'places.photos',
            'places.displayName',
            'places.place_id',
            'places.geometry',

        ]
    }
}
export const GetPlaceDetails=(data)=>axios.post(BASE_URL, data,config)

export const PHOTO_REF_URL='https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=1000&maxWidthPx=1000&key='+import.meta.env.VITE_GOOGLE_PLACE_API_KEY
