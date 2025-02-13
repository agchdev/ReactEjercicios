import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='space-x-5 font-medium '>
        <Link to="/" className='enlaces'>Home</Link>
        <Link to="/productos" className='enlaces'>Producto</Link>
        <Link to="/contacto" className='enlaces'>Contacto</Link>
    </nav>
  )
}

export default Nav