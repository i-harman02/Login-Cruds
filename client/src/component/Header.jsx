import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex justify-center p-4 bg-red-500'>
        <div className='text-center ml-auto text-white uppercase font-bold text-2xl font-serif'>My Login/Register Form</div>
        <Link to ="/register" className='ml-auto bg-white py-1 px-4 rounded-md shadow-xs border-0 text-sm text-red-500 uppercase font-serif'>Don't have account </Link>
      </div>
    </div>
  )
}

export default Header
