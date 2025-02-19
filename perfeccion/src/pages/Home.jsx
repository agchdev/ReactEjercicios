import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import Buscador from '../components/Buscador'
import DetalleProducto from '../components/DetalleProducto'
import { useParams } from 'react-router-dom'

const Home = () => {
  const {categoria} = useParams();
  const [productos, setProductos] = useState([])
  const [seleccionado, setSeleccionado] = useState()
  const [mostrar, setMostrar] = useState(false)
  
  const [palabra, setPalabra] = useState("")

  let cambiar = (palabra) => {
    setPalabra(palabra)
  }

  let obtenerProducto = (product)=>{
    console.log(product);
    setSeleccionado(product);
    setMostrar(true);
  }

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
    .then(respuesta => respuesta.json())
    .then(datos => setProductos(datos))
  }, [])
  
  return (
    <>
      <Buscador cambiar={(word) => cambiar(word)}/>
      <section className='mb-[5rem] flex'>
        <Cards categoria = {categoria} productos={productos} id={null} palabra={palabra} obtener={(product) => obtenerProducto(product)}/>
        {
          mostrar && <DetalleProducto producto={seleccionado}/>
        }
      </section>
    </>
  )
}

export default Home