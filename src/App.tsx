import './App.css'
import { HomePage } from './pages/Home'
import { UsuariosPage } from './pages/Usuario.page'
import { BrowserRouter, Route, Routes } from 'react-router'
import { UsuarioDetallePage } from './pages/UsuarioDetalle'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/usuarios' element={<UsuariosPage />}/>
          <Route path='/usuarios/detalle' element={<UsuarioDetallePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
