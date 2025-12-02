import { Navigate } from "react-router-dom";
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';


const RutaProtegida =({children})=>{
    
    const {usuario} = useContext(UserContext);

    if(!usuario){
        alert("Debes iniciar sesión para acceder a esta página");
        return <Navigate to ="/login" replace/>;
    
    }
        return children;
        
}
export default RutaProtegida;