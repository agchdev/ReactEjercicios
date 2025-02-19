import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Plantilla from './layout/Plantilla'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import "./App.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Plantilla/>}>
            <Route index element={<Home/>} />
            <Route path='/contacto' element={<Contacto/>} />
            <Route path='/:categoria' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
