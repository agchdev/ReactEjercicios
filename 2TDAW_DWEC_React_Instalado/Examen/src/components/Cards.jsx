import React from 'react'
import { Link } from 'react-router-dom';

const Cards = ({ productos, categoria, id }) => {
    console.log(categoria);
    console.log(id);
    
    console.log(typeof(parseInt(id)))

    // Filtrar productos si se proporciona una categoría
    let productosFiltrados = categoria 
        ? productos?.filter(producto => producto.category.name.toLowerCase() === categoria.toLowerCase()) 
        : productos;
    let productoId = id 
    ? productos?.filter(producto => producto.id === parseInt(id))
    : productos;

    function cambiar(){

    }

    console.log(productoId[0])
    return (
        <>  
            {
                productoId.length > 0 &&(
                    <div className='top-30 right-5 z-12 w-[550px] mx-auto absolute bg-red-200 p-5 backdrop-blur-sm' >
                        <img src={productoId[0].images[0]} alt="" />
                        <h1 className='font-bold '>{productoId[0].title}</h1>
                        <p className='font-light '>{productoId[0].description}</p>
                        <button onClick={cambiar} className='p-3 bg-red-900 text-white mt-7' to="/">Cerrar</button>
                    </div>
                )
            }
            {
                productosFiltrados?.map(producto => (
                    <div  key={producto.id} className='w-[250px] mx-auto' >
                        <div className='w-[250px] m-auto relative'>
                            <Link to={"../"+producto.category.name} className='absolute bottom-1 left-2 text-black p-2 bg-white rounded-2xl'>{producto.category.name}</Link>
                            <Link to={"../productos/"+producto.id}><img className='rounded-2xl' src={producto.images[0]} alt="imagen producto" /></Link>
                        </div>
                        <div className='flex justify-center gap-1 w-[100%] text-center'>
                            <h3 className='text-sm m-auto w-[100%]'>{producto.title} <span className='font-bold'>{producto.price}€</span></h3>
                        </div>
                    </div>
                ))
            }
            
        </>
    )
}

export default Cards;
