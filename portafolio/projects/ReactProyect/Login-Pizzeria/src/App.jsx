import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Registro from './components/FormCorreo'
import Login from './components/login'
import ContHome from './components/home'
import Footer from './components/footer'
import HomeCart from './components/homeCart'

function App() {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarRegistro, setMostrarRegistro] = useState(false);
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (pizza) => {
    setCarrito(prev => [...prev, pizza]);
    console.log("Carrito actualizado:", [...carrito, pizza]);
  };

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
      <Navbar 
        onLoginClick={manejarMostrarLogin} 
        onCreateAccount={manejarMostrarRegistro} 
      />
      <Header></Header>
      {mostrarLogin && <Login onCancelar={manejarCancelar} />}
      {mostrarRegistro && <Registro onCancelar={manejarCancelar} />}
      
      <HomeCart listaCart={carrito}/>
      <ContHome onAgregarPizza={agregarAlCarrito}/>
      <Footer></Footer>
    </>
  )
}

export default App;
