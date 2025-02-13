import React from 'react'
import logo from '../assets/logo.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='bg-indigo-500 px-[20px] py-[30px] flex items-center justify-between text-white'>
        <div>
            <img className='w-15' src={logo} alt="Logo" />
        </div>
        <Nav />
    </header>
  )
}

export default Header