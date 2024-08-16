/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from './Components/infoSection';
import Hotels from './Components/Hotels';
import PlacesToVisit from './Components/PlacesToVisit';
import Footer from '@/components/ui/custom/Footer';


function Viewtrip() {

    const { tripId } = useParams();
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        tripId && GetTripData();
    }, [tripId])

    /*
    *Used to get Trip Information from Firebase
    */
    //fetching the doc from firebase
    const GetTripData = async () => {
        const docRef = doc(db, 'AITrips', tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document: ", docSnap.data());
            setTrip(docSnap.data());
        }
        else {
            console.log("No such Document");
            toast("No trip found !")
        }

    }
    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
            {/* Information Section */}
            <InfoSection trip={trip} />
            {/* Recommended Hotels */}
            <Hotels trip={trip} />
            {/* Daily Plan */}
            <PlacesToVisit trip={trip} />
            {/* Footer */}
            <Footer trip={trip}/>
        </div>
    )
}

export default Viewtrip
