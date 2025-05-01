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

  const total = carrito.reduce((acc, pizza) => acc + pizza.precio * pizza.cantidad, 0);

  const aumentarCantidad = (nombrePizza) => {
    setCarrito(prev =>
      prev.map(p =>
        p.nombre === nombrePizza
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  };

  const disminuirCantidad = (nombrePizza) => {
    setCarrito(prev =>
      prev
        .map(p =>
          p.nombre === nombrePizza
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
        .filter(p => p.cantidad > 0) 
    );
  };

  const agregarAlCarrito = (pizza) => {
    setCarrito(prev => {
      const pizzaExistente = prev.find(p => p.nombre === pizza.nombre);
      if (pizzaExistente) {
        return prev.map(p => 
          p.nombre === pizza.nombre 
            ? { ...p, cantidad: p.cantidad + 1 } 
            : p
        );
      } else {
        return [...prev, { ...pizza, cantidad: 1 }]; 
      } 
    });
  };
  console.log(carrito)


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
        totalPrecio={total}
      />
      <Header></Header>
      {mostrarLogin && <Login onCancelar={manejarCancelar} />}
      {mostrarRegistro && <Registro onCancelar={manejarCancelar} />}
      
      <HomeCart listaCart={carrito} botonAumentar={aumentarCantidad} botonDisminuir={disminuirCantidad} total={total} />
      <ContHome onAgregarPizza={agregarAlCarrito}/>
      <Footer></Footer>
    </>
  )
}

export default App;
