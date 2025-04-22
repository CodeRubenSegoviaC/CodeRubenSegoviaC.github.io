import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Registro from './components/FormCorreo'
import Login from './components/login'

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);

  const manejarMostrarLogin = () => {
    setMostrarLogin(true);
    setMostrarRegistro(false); 
  };

  const manejarMostrarRegistro = () => {
    setMostrarRegistro(true);
    setMostrarLogin(false); 
  };

  const manejarCancelar = () => {
    setMostrarLogin(false);
    setMostrarRegistro(false);
  };
  return (
    <>
    
      <Header></Header>
      <Navbar 
        onLoginClick={manejarMostrarLogin} 
        onCreateAccount={manejarMostrarRegistro} 
      />

      {mostrarLogin && <Login onCancelar={manejarCancelar} />}
      {mostrarRegistro && <Registro onCancelar={manejarCancelar} />}

    </>
  )
}

export default App
