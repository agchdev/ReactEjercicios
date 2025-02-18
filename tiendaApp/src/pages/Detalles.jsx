import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detalles = () => {
  const {id} = useParams();

  const [producto, setProducto] = useState([])
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(respuesta => respuesta.json())
    .then(datos => setProducto(datos))
  }, [])

  return (
    <>
      <section className='max-w-[960px] m-auto border p-5 my-10 text-center'>
        <img src={producto.images} alt="" className='h-[400px] m-auto'/>
        <h1 className='font-bold text-4xl'>{producto.title}</h1>
      </section>
    </>
  )
}

export default Detalles