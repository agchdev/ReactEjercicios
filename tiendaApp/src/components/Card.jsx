import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({productos}) => {
    console.log(productos)
  return (
    <>
        {
            productos?.map(producto => (
                <div className='border p-5 border-indigo-700 text-center min-h-[200px]' key={producto.id}>
                    <img src={producto.images[0]} className='h-[200px] mx-auto' alt="imagen" />
                    <h2 className='font-bold text-2xl my-3'>{producto.title}</h2>
                    <p className='text-[15px] my-3'>{producto.description}</p>
                    <Link to={`${producto.id}`} className='p-3 mt-3 bg-blue-500 text-white rounded-full'>Mas detalles</Link>
                </div>
            ))
        }
    </>
  )
}

export default Card