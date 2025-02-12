import React, { useState } from 'react'

const Boton = () => {
    const [suma, setSuma] = useState(0)

    function sumar(){
        setSuma(suma+1);
    }
    function restar(){
        setSuma(suma-1);
    }
  return (
    <>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p>{suma}</p>
    </>
  )
}

export default Boton