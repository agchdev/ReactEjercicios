import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({productos, categoria, palabra, obtener}) => {

  console.log(categoria)
  const productosFiltrados = categoria 
  ? productos?.filter(producto => producto.category.name.toLowerCase() === categoria.toLowerCase()) 
  : productos;

  return (
    <>
      <div className='flex flex-wrap gap-4 w-[50%] m-auto justify-center'>
      {productosFiltrados?.map(producto => (
        producto.title.toLowerCase().includes(palabra) ?
        <div key={producto.id} className='w-[200px]' onClick={() => obtener(producto)}>
          <div className='relative'>
            <Link className='absolute px-3 py-2 bg-white/80 rounded-lg bottom-1 left-1' to={"./"+producto.category.name}>{producto.category.name}</Link>
            <img src={producto.images[0]} alt="" />
          </div>
          <p className='text-sm'>{producto.title} <span className='font-bold'>{producto.price}€</span></p>
        </div>: null
      ))}
      </div>
      
    </>
  )
}

export default Cards