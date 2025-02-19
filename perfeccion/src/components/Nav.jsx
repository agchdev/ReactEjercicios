import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-4 mr-4'>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/Shoes">Shoes</Link>
      <Link to="/Electronics">Electronics</Link>
      <Link to="/Clothes">Clothes</Link>
    </nav>
  )
}

export default Nav