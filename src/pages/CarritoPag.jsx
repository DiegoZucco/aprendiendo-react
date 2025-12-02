import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../Context/CarritoContext";
import { UserContext } from "../Context/UserContext";
import style from "../styles/Carrito.module.css";
import Carrito from "./Carrito";


const CarritoPage = () => {
    const { carrito,  } = useContext(CarritoContext);
    const { estaLogueado } = useContext(UserContext);

    return (
        <div>
            <h1>Carrito</h1>
            <div><Carrito  carrito={carrito} estaLogueado={estaLogueado} /></div>
        </div>
    );
}
export default CarritoPage;