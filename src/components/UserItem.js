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
        className="col-span-1 bg-gray p-3 px-8 rounded-2xl flex items-center gap-10"
        onClick={() => handleUserClick(user)}
      >
        <img 
          className='w-12 h-12 rounded-full'
          src={imgUrl}
          alt={name}
        />
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-base font-semibold w-60'>{name}</h3>
          <p className='text-sm w-52'>{email}</p>
          <h5 className='text-sm w-52 text-center capitalize'>{gender}</h5>
          <h5 className='text-sm w-52 text-center capitalize'>{job}</h5>
          <h5 className='text-sm w-52 text-right'>{city}, {country}</h5>
        </div>
      </div>
    </Link>
  )
}

export default UserItem