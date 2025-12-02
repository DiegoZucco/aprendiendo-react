import Productos from "../components/Productos.jsx";
import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";

const ProductosPag = ()=>{
  const {manejarAgregarCarrito, estaLogueado}= useContext(CarritoContext);

    return (
<div>
    <h1> Todos Nuestros Productos </h1>
<Productos estaLogueado={estaLogueado} manejarAgregarCarrito={manejarAgregarCarrito}/>
</div>
    );
}

export default ProductosPag;