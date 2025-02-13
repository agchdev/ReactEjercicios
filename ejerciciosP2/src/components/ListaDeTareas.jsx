import React, { useState } from 'react'

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([]);
    function cambiarCompletada(id) {
        setTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return {
                    ...tarea,
                    completada: !tarea.completada
                }
            }
            return tarea;
        }))
    }
  return (
    <>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className='flex gap-2'>
                <input className='border-2 rounded-full bg-gray-200' type="text" placeholder='Nueva Tarea'/>
                <button 
                    className='bg-indigo-500 text-white px-4 py-2 rounded-full'
                    onClick={() => {
                        setTareas([...tareas, {
                            id: tareas.length,
                            texto: document.querySelector("input").value,
                            completada: false
                        }])
                        document.querySelector('input').value = ''
                    }}
                    >Añadir tarea</button>
            </div>

            <ul className='mt-4'>
                {tareas.map((tarea) => (
                    <li className='list-none flex items-center gap-2' key={tarea.id}>
                        <span className={tarea.completada ? 'line-through' : ''}>{tarea.texto}</span>
                        <button 
                        className='bg-yellow-500 text-white px-4 py-2 rounded-full mb-1'
                        onClick={() => {
                            cambiarCompletada(tarea.id)
                        }}>Completar</button>
                        <button 
                        className='bg-red-500 text-white px-4 py-2 rounded-full mb-1'
                        onClick={() => {
                            setTareas(tareas.filter((t) => t.id !== tarea.id))
                        }}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default ListaDeTareas