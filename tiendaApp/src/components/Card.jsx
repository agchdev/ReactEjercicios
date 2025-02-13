import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({productos}) => {
    console.log(productos)
  return (
    <>
        {
            productos.map(producto => (
                <div key={producto.id}>
                    <img src={producto.images[0]} alt="imagen" />
                    <h2>{producto.title}</h2>
                    <p>{producto.description}</p>
                    <Link to={`${producto.id}`}>Mas detalles</Link>
                </div>
            ))
        }
    </>
  )
}

export default Card