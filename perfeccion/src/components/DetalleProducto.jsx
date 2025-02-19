import React from 'react'

const DetalleProducto = ({producto}) => {
  console.log(producto)
  return (
    <>
      <div className='w-[30%] mx-auto'>
        <img src={producto.images[0]} alt="" />
        <h3 className='font-bold'>{producto.title}</h3>
        <p>{producto.description}</p>
      </div>
    </>
  )
}

export default DetalleProducto