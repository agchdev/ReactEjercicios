import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-4'>
        <Link to="/" className='enlaces'>Home</Link>
        <Link to="/productos" className='enlaces'>Producto</Link>
        <Link to="/contacto" className='enlaces'>Contacto</Link>
        <Link to="/Shoes" className='enlaces'>Shoes</Link>
        <Link to="/Miscellaneous" className='enlaces'>Miscellaneous</Link>
    </nav>
  )
}

export default Nav