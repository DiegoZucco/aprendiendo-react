import React from 'react';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import style from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import Inicio from './pages/Inicio.jsx';
import ProductosPag from './pages/ProductosPag.jsx';
import { Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto.jsx';
import DetalleArticulo from './components/DetalleArticulo.jsx';
import PaginaLogin from './pages/PaginaLogin.jsx';
import PaginaCrearCuenta from './pages/PaginaCrearCuenta.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';


function App() {
  const navItems = [{ text: "Inicio", path: "/" },
  { text: "Nuestros Productos", path: "/productos" },
  { text: "Sobre Nosotros", path: "/sobre-nosotros" },
  { text: "Contacto", path: "/contacto" }];

 

  return (
    <div className={style.App}>
      <Header/>
      <Nav items={navItems} />
      <Routes>
        <Route path="/login" element={<PaginaLogin/>} />
        <Route path="/crearCuenta" element={<PaginaCrearCuenta />} />
        <Route path="/productos/:id" element={<DetalleArticulo/>} />
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<ProductosPag />} />
        <Route path="/carrito" element={<RutaProtegida> <Carrito/> </RutaProtegida>}/>
      </Routes>
    </div>

  );
}

export default App;
