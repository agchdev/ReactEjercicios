import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <div className='bg-red-500 flex justify-between text-white p-5   w-[100%] z-10'>
      <div className='ml-4'>
        <h1>AGCHDEV</h1>
      </div>
      <Nav/>
    </div>
  )
}

export default Header