import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Home = () => {
  const [productos, setProductos] = useState([])
      useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(respuesta => respuesta.json())
        .then(datos => {
          setProductos(datos)
        })
      }, [])
  return (
    <section>
        <div className='flex flex-wrap w-[50%] mx-auto justify-center items-center gap-5'>
          <Cards productos = {productos}/>
        </div>
    </section>
  )
}

export default Home