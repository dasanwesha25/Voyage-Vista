/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AI_PROMPT, SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { toast } from 'sonner';
import { chatSession } from '@/service/AIModel';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from '@react-oauth/google';
import { DialogTitle } from '@radix-ui/react-dialog';
import axios from 'axios';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Footer from '@/components/ui/custom/Footer';


function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDialogue, setOpenDialogue] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {
    console.log(formData);
  }, [formData])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error)
  });

  const OnGenerateTrip = async () => {

    const user = localStorage.getItem('user');

    if (!user) {
      setOpenDialogue(true)
      return;
    }


    if (formData?.noOfDays > 15 && !formData?.location || !formData?.budget || !formData?.traveler) {
      toast("Please fill all the details !!");
      return;
    }

    setLoading(true);

    const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData?.location?.label)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays)

    // console.log(FINAL_PROMPT);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log("--", result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text())

  };

  const SaveAiTrip = async (TripData) => {

    setLoading(true);
    const user = JSON.parse(localStorage.getItem('user'));
    const docId = Date.now().toString()

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId
    });
    setLoading(false);
    navigate('/view-trip/' + docId);
  };

  const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: "Application/json"
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data));
      setOpenDialogue(false);
      OnGenerateTrip();
    })
  };

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl'>Mention Your Travel Preference 🏕️🌴</h2>
      <p className='mt-3 text-gray-500 text-xl'>Just provide some basic information, and our trip planner will generate a perfect customised itinerary based on your prefernces </p>
      <div className='mt-20 flex flex-col gap-10'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is destination of choice ?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => { setPlace(v); handleInputChange('location', v) }
            }}
          />
        </div>

        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning your trip ?</h2>
          <Input placeholder={'Ex.3'} type='number'
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>


        <div>
          <h2 className='text-xl my-3 font-medium'>What is Your Budget</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('budget', item.title)}
                className={`p-4 border curson-pointer 
                  rounded-lg hover:shadow-lg
                ${formData?.budget == item.title && 'shadow-lg border-black'}
                `}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-400'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you plan on travelling with on your next adventure ?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item, index) => (
              <div key={index}
                onClick={() => handleInputChange('traveler', item.people)}
                className={`p-4 curson-pointer border rounded-lg 
                  hover:shadow-lg
                  ${formData?.traveler == item.people && 'shadow-lg border-black'}
                `}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-400'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-19 justify-end flex'>
        <Button
          disabled={loading}
          onClick={OnGenerateTrip}>
          {loading ?
            <AiOutlineLoading3Quarters className='h-7 w-7 animate-spin' /> : 'Generate Trip'
          }
        </Button>
      </div>
      <Dialog open={openDialogue}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className='grid grid-cols-6 mt-5'>
                <img src="/logo.svg" />
                <DialogTitle className='font-bold text-purple-950 font-serif text-4xl mt-2'>VoyageVista</DialogTitle>
              </div>
              <h2 className='font-bold text-lg mt-6'>Sign In With Google</h2>
              <p className='text-gray-400 text-xs mt-1'>Sign In To The App With Google Authentication Securely</p>
              <Button
                onClick={login}
                className='w-full mt-5 flex gap-4 items-center'>
                <FcGoogle className='h-7 w-7' />
                Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  )
}

export default CreateTrip
