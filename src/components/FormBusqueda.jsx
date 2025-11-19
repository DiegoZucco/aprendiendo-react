import React, { useState } from 'react';

const FormBusqueda = () => {
    const [Busqueda, setBusqueda] = useState("");
    const submit = (e) => {
        e.preventDefault();
        console.log(Busqueda);
    }
    return (
        <form onSubmit={submit} value={Busqueda} onChange={(e) => setBusqueda(e.target.value)} action="" method='get'>
            <input type="text" placeholder="Buscar"></input>
            <button type="submit">Buscar</button>
        </form>
    );
}

export default FormBusqueda;