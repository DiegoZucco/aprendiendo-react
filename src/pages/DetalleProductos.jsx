import DetalleArticulo from "../components/DetalleArticulo";

const DetalleProductos = ({agregarAlCarrito,manejarAgregarCarrito})=> {
    return(
        <div>
            <DetalleArticulo manejarAgregarCarrito={manejarAgregarCarrito} agregarAlCarrito={agregarAlCarrito}/>
        </div>
    );
}
export default DetalleProductos;

//