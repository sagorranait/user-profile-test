import React from 'react'

function UserItemSkeleton() {
  return (
    <div className="col-span-1 bg-gray p-3 px-8 rounded-2xl flex items-center flex-col gap-3 lg:gap-10 lg:flex-row animate-pulse">
      <div className='w-20 h-20 lg:w-12 lg:h-11 rounded-full bg-slate-300'></div>
      <div className='w-full flex items-center justify-between flex-col gap-2 lg:gap-0 lg:flex-row'>
        <div className='text-base font-semibold bg-slate-300 w-52 lg:w-60 h-4 rounded-full'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full lg:w-28 xl:w-36'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full lg:w-28 xl:w-36'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full lg:w-28 xl:w-36'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full lg:w-28 xl:w-36'></div>
      </div>
    </div>
  )
}

export default UserItemSkeleton