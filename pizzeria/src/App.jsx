import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/components/Home'
import BarraNavegacion from './assets/components/NavBar'
import Contenido from './assets/components/ContenidoMain'
import CardPizza from './assets/components/CardPizza'
import Footer from './assets/components/footer'

function App() {
return (
  <>
    <BarraNavegacion/>
    <Home/>
    <Contenido>
      <CardPizza nombrePizza="Napolitana" valorPizza={5950} ingredientes={["mozzarella", "tomates", "jamón", "orégano"]} ruta="https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_1280.jpg"/>
      <CardPizza nombrePizza="Espanola" valorPizza={7950} ingredientes={["queso", "tomates", "champinon", "orégano"]} ruta="https://cdn.pixabay.com/photo/2021/12/30/11/33/italian-cuisine-6903774_1280.jpg"/>
      <CardPizza nombrePizza="Peperoni" valorPizza={8950} ingredientes={["peperoni", "queso", "aceitunas", "orégano"]} ruta="https://cdn.pixabay.com/photo/2020/08/19/14/42/pizza-5501057_1280.jpg"/>
    </Contenido>
    <Footer></Footer>
  </>
)
}
export default App
