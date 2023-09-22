import React from 'react'

function DetailsItem({ icon, title, value }) {
  return (
    <div className="col-span-1">
      <div className='flex items-start gap-4'>
        {icon}
        <div>
          <p className='text-base text-slate-400'>{title}</p>
          <h3 className='text-lg font-medium mt-1'>{value}</h3>
        </div>
      </div>
    </div>
  )
}

export default DetailsItem;