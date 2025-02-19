import React from 'react'

const Detalles = ({producto}) => {
    console.log(producto)
  return (
    <div>
        <h3>{producto[0].title}</h3>
    </div>
  )
}

export default Detalles