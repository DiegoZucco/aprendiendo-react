import React from 'react';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import style from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import { useState } from 'react';
import Inicio from './pages/Inicio.jsx';
import ProductosPag from './pages/ProductosPag.jsx';
import {Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto.jsx';
import DetalleArticulo from './components/DetalleArticulo.jsx';


function App() {
  const navItems = [{text:"Inicio", path:"/"},
    {text: "Nuestros Productos", path:"/productos"},
    {text: "Sobre Nosotros", path:"/sobre-nosotros"},
    {text: "Contacto", path:"/contacto"}];

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (data) => {
    // Mejorado para no añadir duplicados
    if (!carrito.find(item => item.id === data.id)) {
        setCarrito([...carrito, data]);
    }
  };

  // Restauramos la función original de vaciar carrito
  const vaciarCarrito = () => {
    setCarrito(carrito.slice(0, carrito.length - 1));
  };

  return (
    <div className={style.App}>
      <Header carrito={carrito} />
      <Nav items={navItems} />
      <Routes>
        <Route path ="/productos/:id" element={<DetalleArticulo agregarAlCarrito={agregarAlCarrito}/>}/>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />}/>
        <Route path ="/contacto" element={<Contacto/>}/>
        <Route path = "/productos" element ={<ProductosPag carrito={carrito} agregarAlCarrito={agregarAlCarrito} />}/>
        
        {/* --- CAMBIO REVERTIDO --- */}
        {/* Volvemos a pasar la prop `vaciarCarrito` original */}
        <Route path = "/carrito" element ={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito}/>}/>
      </Routes>
    </div>

  );
}

export default App;
