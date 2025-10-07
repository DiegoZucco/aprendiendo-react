import React from 'react';
import FormBusqueda from "./FormBusqueda.jsx";
import HeaderStyle from "../styles/Header.module.css";
import carrito from "../assets/icons/carrito-de-compras.png";

function Header() {
  
    return (
        <header style={{
            fontFamily: 'sans-serif',
            margin: '20px', textAlign: "center"
        }}>
            <div className={HeaderStyle.headerH4}><h4>Realiza tus pedidos y coordina la entrega, con 48hs de anticipacion</h4></div>
            <div className={HeaderStyle.header}>
            <FormBusqueda/>
            <h1 className={HeaderStyle.title}>Mis Princesas Candybar</h1>
            <div className={HeaderStyle.links}>
                <div><a href="">Crear cuenta</a>
                    <a href="">Iniciar sesión</a>
                </div>
                <div className={HeaderStyle.cart}>
                    
                   
                        <a href=""><img className={HeaderStyle.imgCart} src={carrito} alt="" />
                        <span>0</span>
                        </a>
                        
                   
              
                </div>
            </div>
        </div>
        </header >
    );
}

export default Header;