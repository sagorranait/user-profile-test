import React from 'react'
import { useSelector } from 'react-redux';
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from 'react-router-dom';
import { getUser } from '../stateManagement/redux/userSlice';
import { 
  BiBox,
  BiSolidMap,
  BiLogoOkRu,
  BiSolidUser, 
  BiLogoGmail, 
  BiSolidCity,
  BiSolidPhone, 
  BiSolidMapPin,
  BiSolidBusiness, 
  BiLogoDeviantart,
  BiSolidBabyCarriage,
} from "react-icons/bi";

import DetailsItem from '../components/DetailsItem';

function Details() {
  const { id } = useParams();
  const users = useSelector(getUser);
  const navigate = useNavigate();
  const backButton = () => navigate("/");

  const user = users.filter(item => item.id === parseInt(id));
  
  return (
    <>    
      <button onClick={backButton} className='flex items-center gap-2 py-5'>
        <BsArrowLeft className='text-xl text-primary'/>
        <span>Back</span>
      </button>
          {
            user.map((item, index) => {
              const { city, country, date_of_birth, email, gender, imgUrl, job, name, phone, state, street, zipcode} = item;
              return (
                <div key={index} className='h-[650px] bg-white p-10 rounded-2xl flex items-start gap-20'>
                  <img src={imgUrl} alt={name} className='w-52 h-52 rounded-2xl object-cover border border-primary' />
                  <div className='w-full grid grid-cols-3 gap-10'>
                    <DetailsItem 
                      icon={<BiSolidUser className='text-base mt-1 text-slate-400' />} 
                      title='Full Name' 
                      value={name} 
                    />
                    <DetailsItem 
                      icon={<BiLogoGmail className='text-lg mt-1 text-slate-400' />} 
                      title='Email Address' 
                      value={email} 
                    />
                    <DetailsItem 
                      icon={<BiSolidPhone className='text-lg mt-1 text-slate-400' />} 
                      title='Contact Number' 
                      value={phone} 
                    />
                    <DetailsItem 
                      icon={<BiSolidBusiness className='text-base mt-1 text-slate-400' />} 
                      title='Designation' 
                      value={job} 
                    />
                    <DetailsItem 
                      icon={<BiLogoOkRu className='text-lg mt-1 text-slate-400' />} 
                      title='Gender' 
                      value={gender} 
                    />
                    <DetailsItem 
                      icon={<BiSolidBabyCarriage className='text-lg mt-1 text-slate-400' />} 
                      title='Date of Birth' 
                      value={date_of_birth} 
                    />
                    <DetailsItem 
                      icon={<BiLogoDeviantart className='text-lg mt-1 text-slate-400' />} 
                      title='Street' 
                      value={street} 
                    />
                    <DetailsItem 
                      icon={<BiSolidMapPin className='text-lg mt-1 text-slate-400' />} 
                      title='State' 
                      value={state} 
                    />
                    <DetailsItem 
                      icon={<BiSolidCity className='text-lg mt-1 text-slate-400' />} 
                      title='City' 
                      value={city} 
                    />
                    <DetailsItem 
                      icon={<BiBox className='text-lg mt-1 text-slate-400' />} 
                      title='Zipcode' 
                      value={zipcode} 
                    />
                    <DetailsItem 
                      icon={<BiSolidMap className='text-lg mt-1 text-slate-400' />} 
                      title='Country' 
                      value={country} 
                    />
                  </div>
                </div>
              );
            })
          }
    </>
  )
}

export default Details;