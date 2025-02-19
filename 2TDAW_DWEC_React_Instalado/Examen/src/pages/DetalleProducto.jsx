import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const {id} = useParams();
  const [productos, setProductos] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(respuesta => respuesta.json())
    .then(datos => setProductos(datos))
  }, [])
  
  return (
    <section>
        <div className='flex flex-wrap w-[50%] mx-auto justify-center items-center gap-5'>
          <Cards productos = {productos} id={id}/>
        </div>
    </section>
  )
}

export default DetalleProducto