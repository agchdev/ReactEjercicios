import React from 'react'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='sticky flex justify-between items-center bg-red-500 text-white p-5'>
        <div>
            <h3 className='font-bold text-3xl px-3'>Tienda</h3>
        </div>
        <Nav />
    </header>
  )
}

export default Header