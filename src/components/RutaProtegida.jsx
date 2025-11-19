import React from 'react';
import { Navigate } from "react-router-dom";

const RutaProtegida =({children, estaLogueado})=>{

    if(!estaLogueado){
        return <Navigate to ="/login"/>;
    
    }
        return children;
        
}
export default RutaProtegida;