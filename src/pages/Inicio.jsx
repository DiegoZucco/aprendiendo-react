import Productos from "../components/Productos";
import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";




const Inicio = ()=>{
    const {manejarAgregarCarrito, estaLogueado} = useContext(CarritoContext);

    return(
        <div>
            <h1>Productos destacados</h1>
        <Productos manejarAgregarCarrito={manejarAgregarCarrito} estaLogueado={estaLogueado}  limite={4} />
        </div>
    )
}

export default Inicio;