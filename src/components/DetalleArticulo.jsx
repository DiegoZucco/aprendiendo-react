import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/DetalleArticulo.module.css'; // Crearemos este archivo para estilos
import {CarritoContext} from '../Context/CarritoContext';


// 1. Recibimos la prop `agregarAlCarrito`
const DetalleArticulo = () => {
    const {manejarAgregarCarrito}= useContext(CarritoContext);
    // 2. Capturamos el ID de la URL. ¡Esto ya lo tenías!
    const { id } = useParams();

    // 3. Creamos los estados para el producto, carga y error
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // 4. Usamos useEffect para buscar los datos cuando el componente se monta o el ID cambia
    useEffect(() => {
        // Reiniciamos el estado en cada carga
        setCargando(true);
        setProducto(null);
        setError(null);

        // 5. Hacemos la petición a la API con el ID específico
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo encontrar el producto.');
                }
                return response.json();
            })
            .then(data => {
                setProducto(data); // Guardamos el producto en el estado
            })
            .catch(err => {
                setError(err.message); // Guardamos el mensaje de error
            })
            .finally(() => {
                setCargando(false); // Dejamos de cargar, sea cual sea el resultado
            });

    }, [id]); // El efecto se volverá a ejecutar si el `id` cambia

    // 6. Mostramos mensajes de carga o error
    if (cargando) {
        return <p className={styles.mensaje}>Cargando detalle del producto...</p>;
    }

    if (error) {
        return <p className={styles.mensajeError}>Error: {error}</p>;
    }

    if (!producto) {
        return <p className={styles.mensaje}>Producto no encontrado.</p>;
    }

    // 7. Renderizamos los detalles del producto
    return (
        <div className={styles.detalleContainer}>
            <div className={styles.imagenContainer}>
                <img src={producto.image} alt={producto.title} />
            </div>
            <div className={styles.infoContainer}>
                <h1 className={styles.titulo}>{producto.title}</h1>
                <p className={styles.categoria}>{producto.category}</p>
                <p className={styles.descripcion}>{producto.description}</p>
                <p className={styles.precio}>${producto.price}</p>
                <button 
                    className={styles.botonAgregar}
                    onClick={() => manejarAgregarCarrito(producto)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
};

export default DetalleArticulo;
