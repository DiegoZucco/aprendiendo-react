import DetalleArticulo from "../components/DetalleArticulo";
import { useContext } from "react";
import { CarritoContext } from "../Context/CarritoContext";

const DetalleProductos = ()=> {
const {manejarAgregarCarrito, estaLogueado} = useContext(CarritoContext);
    
    return(
        <div>
            <DetalleArticulo manejarAgregarCarrito={manejarAgregarCarrito} estaLogueado={estaLogueado}/>
        </div>
    );
}
export default DetalleProductos;

//