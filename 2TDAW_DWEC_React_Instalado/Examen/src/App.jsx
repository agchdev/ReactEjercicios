import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Plantilla from './layout/Plantilla'
import Productos from './pages/Productos'
import DetalleProducto from './pages/DetalleProducto'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Categorias from './pages/Categorias'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla/>}>
            <Route index element={<Home />} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='productos/:id' element={<DetalleProducto />} />
            <Route path='/:categoria' element={<Categorias />} />
            <Route path='/contacto' element={<Contacto />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
