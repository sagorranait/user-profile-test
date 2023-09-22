import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

import UserItem from '../components/UserItem';
import UserItemSkeleton from '../components/UserItemSkeleton';

function Home() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');

        if (!response.ok) {
          toast.error('Network response was not ok');
        }

        setTimeout(async () => {
          const data = await response.json();
          setUsers(data);
          setLoading(false);
        }, 1000);
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='h-[700px] bg-white p-10 rounded-2xl'>
      <div className="grid grid-cols-1 gap-5">
        { loading && <UserItemSkeleton/> }
        { 
          users?.map( user => <UserItem 
            key={user.id}
            userId={user.id}
            url={user.imgUrl}
            name={user.name}
            email={user.email}
            gender={user.gender}
            designation={user.job}
            address={`${user.state}, ${user.country}`}
          />) 
        }        
      </div>
    </div>
  )
}

export default Home