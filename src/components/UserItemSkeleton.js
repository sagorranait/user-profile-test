import React from 'react'

function UserItemSkeleton() {
  return (
    <div className="col-span-1 bg-gray p-3 px-8 rounded-2xl flex items-center gap-10 animate-pulse">
      <div className='w-12 h-11 rounded-full bg-slate-300'></div>
      <div className='w-full flex items-center justify-between'>
        <div className='text-base font-semibold bg-slate-300 w-60 h-4 rounded-full'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full'></div>
        <div className='text-sm bg-slate-300 w-52 h-4 rounded-full'></div>
      </div>
    </div>
  )
}

export default UserItemSkeleton