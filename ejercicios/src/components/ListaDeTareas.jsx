import React from 'react'
import { useState } from 'react';
import "./ListaDeTareas.css"; // Importamos los estilos CSS

const ListaDeTareas = () => {
    const [tareas, setTareas] = useState([]);  // Estado de la lista de tareas
    const [nuevaTarea, setNuevaTarea] = useState(""); // Estado del input

    // Función para agregar una tarea
    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return; // Evita agregar tareas vacías
        setTareas([...tareas, { id: Date.now(), texto: nuevaTarea, completada: false }]);
        setNuevaTarea(""); // Limpia el input después de agregar
    };

    // Función para eliminar una tarea
    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
    };

    // Función para marcar una tarea como completada
    const toggleCompletada = (id) => {
        setTareas(
        tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        )
        );
    };

    return (
    <>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>

        {/* Lista de Tareas */}
        <ul>
            {tareas.map((tarea) => (
            <li key={tarea.id} className={tarea.completada ? "completada" : ""}>
                <span onClick={() => toggleCompletada(tarea.id)}>
                {tarea.texto}
                </span>
                <button onClick={() => eliminarTarea(tarea.id)}>❌</button>
            </li>
            ))}
        </ul>
    </>
  )
}

export default ListaDeTareas