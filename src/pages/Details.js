import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { 
  BiLogoOkRu,
  BiSolidUser, 
  BiLogoGmail, 
  BiSolidPhone, 
  BiSolidBusiness, 
  BiSolidBabyCarriage, 
} from "react-icons/bi";

import DetailsItem from '../components/DetailsItem';

function Details() {
  const navigate = useNavigate();
  const backButton = () => navigate("/");

  return (
    <>    
      <button onClick={backButton} className='flex items-center gap-2 py-5'>
        <BsArrowLeft className='text-xl text-primary'/>
        <span>Back</span>
      </button>
      <div className='h-[650px] bg-white p-10 rounded-2xl flex items-start gap-20'>
        <img src="https://i.imgur.com/HU0PoXJ.png" alt="user-name" className='w-52 h-52 rounded-2xl object-cover' />
        <div className='w-full grid grid-cols-3 gap-10'>
          <DetailsItem 
            icon={<BiSolidUser className='text-base mt-1 text-slate-400' />} 
            title='Full Name' 
            value={'Timothy Lutz'} 
          />
          <DetailsItem 
            icon={<BiLogoGmail className='text-lg mt-1 text-slate-400' />} 
            title='Email Address' 
            value={'timothy@gmail.com'} 
          />
          <DetailsItem 
            icon={<BiSolidPhone className='text-lg mt-1 text-slate-400' />} 
            title='Contact Number' 
            value={'+6152448902'} 
          />

          <DetailsItem 
            icon={<BiSolidBusiness className='text-base mt-1 text-slate-400' />} 
            title='Designation' 
            value={'Production assistant'} 
          />
          <DetailsItem 
            icon={<BiLogoOkRu className='text-lg mt-1 text-slate-400' />} 
            title='Gender' 
            value={'male'} 
          />
          <DetailsItem 
            icon={<BiSolidBabyCarriage className='text-lg mt-1 text-slate-400' />} 
            title='Date of Birth' 
            value={'1903-03-30'} 
          />
          
        </div>
      </div>
    </>
  )
}

export default Details;