import Productos from "../components/Productos";

const Inicio = ({manejarAgregarCarrito, estaLogueado, agregarAlCarrito})=>{

    return(
        <div>
            <h1>Productos destacados</h1>
        <Productos manejarAgregarCarrito={manejarAgregarCarrito} estaLogueado={estaLogueado} agregarAlCarrito={agregarAlCarrito}  limite={4} />
        </div>
    )
}

export default Inicio;