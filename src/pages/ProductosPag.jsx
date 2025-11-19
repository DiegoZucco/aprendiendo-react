import Productos from "../components/Productos.jsx";

const ProductosPag = ({ estaLogueado, agregarAlCarrito,manejarAgregarCarrito})=>{
    return (
<div>
    <h1> Todos Nuestros Productos </h1>
<Productos estaLogueado={estaLogueado} manejarAgregarCarrito={manejarAgregarCarrito} agregarAlCarrito={agregarAlCarrito} />
</div>
    );
}

export default ProductosPag;