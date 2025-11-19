import React from 'react';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import style from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import { useState } from 'react';
import Inicio from './pages/Inicio.jsx';
import ProductosPag from './pages/ProductosPag.jsx';
import { Routes, Route } from 'react-router-dom';
import Contacto from './pages/Contacto.jsx';
import DetalleArticulo from './components/DetalleArticulo.jsx';
import PaginaLogin from './pages/PaginaLogin.jsx';
import PaginaCrearCuenta from './pages/PaginaCrearCuenta.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import { useNavigate } from 'react-router-dom';


function App() {
  const navItems = [{ text: "Inicio", path: "/" },
  { text: "Nuestros Productos", path: "/productos" },
  { text: "Sobre Nosotros", path: "/sobre-nosotros" },
  { text: "Contacto", path: "/contacto" }];

  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();

  const manejarAgregarCarrito = (data) => {
    if (estaLogueado) {
      agregarAlCarrito(data);
      alert("Producto agregado al carrito");
    } else {
      alert("Debes iniciar sesión para agregar productos al carrito");
      navigate("/login");
    }
  }

  const agregarAlCarrito = (data) => {
    setCarrito([...carrito, data]);
  };

  const vaciarCarrito = () => {
    setCarrito(carrito.slice(0, carrito.length - 1));
  };

  const [estaLogueado, setEstaLogueado] = useState(false);

  const login = () => {
    setEstaLogueado(true);
  };
  const logout = () => {
    setEstaLogueado(false);
  };


  return (
    <div className={style.App}>
      <Header carrito={carrito} />
      <Nav items={navItems} />
      <Routes>
        <Route path="/login" element={<PaginaLogin login={login} />} />
        <Route path="/crearCuenta" element={<PaginaCrearCuenta />} />
        <Route path="/productos/:id" element={<DetalleArticulo manejarAgregarCarrito={manejarAgregarCarrito} carrito={carrito} agregarAlCarrito={agregarAlCarrito} estaLogueado={estaLogueado} />} />
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} estaLogueado={estaLogueado} vaciarCarrito={vaciarCarrito} carrito={carrito} login={login} logout={logout} manejarAgregarCarrito={manejarAgregarCarrito} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<ProductosPag manejarAgregarCarrito={manejarAgregarCarrito} carrito={carrito} estaLogueado={estaLogueado} agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<RutaProtegida estaLogueado={estaLogueado}><Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} /></RutaProtegida>} />
      </Routes>
    </div>

  );
}

export default App;
