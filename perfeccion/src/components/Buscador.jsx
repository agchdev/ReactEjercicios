import React from 'react'

const Buscador = ({cambiar}) => {
    
  return (
    <form className='flex justify-center m-5'  action="">
        <input className='border m-auto' type="search" onChange={(e) => cambiar(e.target.value)} />
    </form>
  )
}

export default Buscador