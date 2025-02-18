import React, { useEffect, useState } from 'react'
import Card from '../components/Card';

const Productos = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
      fetch("https://dummyjson.com/products")
      .then(respuesta => respuesta.json())
      .then(data => setProductos(data.products))
    }, [])

  return (
    <section className='grid grid-cols-3 my-5 mb-[100px] max-w-[1200px] mx-auto gap-4'>
        <Card productos = {productos} />
    </section>
  )
}

export default Productos