import React from 'react';
import FormBusqueda from "./FormBusqueda.jsx";
import HeaderStyle from "../styles/Header.module.css";
import carritoImg from "../assets/icons/carrito-de-compras.png";
import { Link } from 'react-router-dom';

function Header({ carrito }) {

    return (
        <header>
            <div className={HeaderStyle.headerH4}><h4>Realiza tus pedidos y coordina la entrega, con 48hs de anticipacion</h4></div>
            <div className={HeaderStyle.header}>
                <FormBusqueda />
                <h1 className={HeaderStyle.title}>Mis Princesas Candybar</h1>
                <div>
                    <div className={HeaderStyle.links}>
                        <Link to="/crearCuenta">Crear cuenta</Link>
                        <Link to="/login">Iniciar sesión</Link>
                    </div>
                    <div className={HeaderStyle.cart}>
                        <Link to={"/carrito"}><img className={HeaderStyle.imgCart} src={carritoImg} alt="" />
                            <span className={HeaderStyle.badge}>{carrito.length}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;