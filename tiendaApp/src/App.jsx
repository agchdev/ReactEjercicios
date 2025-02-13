import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Plantilla from './layout/Plantilla'
import Detalles from './pages/Detalles'
import Error from './pages/Error'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Productos from './pages/Productos'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Plantilla />}>
            <Route index element={<Home />} />
            <Route path='/productos' element={<Productos />} />
            <Route path='productos/:id' element={<Detalles />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
