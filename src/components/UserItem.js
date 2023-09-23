import React from 'react'
import { Link } from 'react-router-dom'
import { useUserContext } from '../stateManagement/contextApi/UserContext';

function UserItem({ user }) {  
  const { setUser } = useUserContext();
  const { id, imgUrl, name, email, gender, job, city, country } = user;

  const handleUserClick = (user) => {
    setUser(user);
  };

  return (
    <Link to={`/details/${id}`}>        
      <div 
        className="col-span-1 bg-gray p-3 px-8 rounded-2xl flex items-center flex-col gap-3 lg:gap-5 lg:flex-row xl:gap-10"
        onClick={() => handleUserClick(user)}
      >
        <img 
          className='w-20 h-20 lg:w-12 lg:h-12 rounded-full'
          src={imgUrl}
          alt={name}
        />
        <div className='w-full flex items-center justify-between flex-col lg:flex-row'>
          <h3 className='text-base text-center font-semibold w-44 lg:text-left'>{name}</h3>
          <p className='text-sm text-center w-52 lg:w-28 lg:text-left xl:w-52'>{email}</p> 
          <h5 className='text-sm w-52 lg:w-28 xl:w-52 text-center capitalize'>{gender}</h5>
          <h5 className='text-sm w-52 lg:w-28 xl:w-52 text-center capitalize'>{job}</h5>
          <h5 className='text-sm w-52 lg:w-28 xl:w-52 text-center lg:text-right'>{city}, {country}</h5>
        </div>
      </div>
    </Link>
  )
}

export default UserItem