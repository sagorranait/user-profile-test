import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({ userId, url, name, email, gender, designation, address }) {
  return (
    <Link to={`/details/${userId}`}>        
      <div className="col-span-1 bg-gray p-3 px-8 rounded-2xl flex items-center gap-10">
        <img 
          className='w-12 h-12 rounded-full'
          src={url}
          alt={name}
        />
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-base font-semibold w-60'>{name}</h3>
          <p className='text-sm w-52'>{email}</p>
          <h5 className='text-sm w-52 text-center capitalize'>{gender}</h5>
          <h5 className='text-sm w-52 text-center capitalize'>{designation}</h5>
          <h5 className='text-sm w-52 text-right'>{address}</h5>
        </div>
      </div>
    </Link>
  )
}

export default UserItem