import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { storeUser } from '../stateManagement/redux/userSlice';

import UserItem from '../components/UserItem';
import UserItemSkeleton from '../components/UserItemSkeleton';

function Home() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) { toast.error('Network response was not ok'); }

        setTimeout(async () => {
          const results = await response.json();
          dispatch(storeUser({ user: results }));
          setUsers(results);
          setLoading(false);
        }, 500);
      } catch (error) {
        toast.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);
  

  return (
    <div className='h-[700px] bg-white p-10 rounded-2xl'>
      <div className="grid grid-cols-1 gap-5">
        { loading && Array(7).fill().map((_, index) => <UserItemSkeleton key={index} />)}
        { 
          users?.map( user => <UserItem 
            key={user.id}
            user={user}
          />) 
        }        
      </div>
    </div>
  )
}

export default Home;