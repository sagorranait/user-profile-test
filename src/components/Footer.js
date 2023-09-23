import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='py-7'>
      <p className='text-sm lg:text-base text-center'>
        &copy;Copyright 2023, Design & Developed by <Link to={'https://www.linkedin.com/in/sagorranait/'} className='text-primary font-semibold'>Sagor Rana</Link>
      </p>
    </div>
  )
}

export default Footer