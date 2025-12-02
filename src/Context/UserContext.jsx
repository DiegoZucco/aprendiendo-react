import React, { useState,useContext, createContext } from 'react';


const USUARIOS_FAKE = [
  { 
    id: 1, 
    usuario: 'admin', 
    email: "admin@admin.com",
    contrasenia: '1234', 
    rol: 'admin',
    nombre: 'Admin'
  }
  ,
  { 
    id: 2, 
    usuario: 'maria', 
    email:"maria@maria.com",
    contrasenia: '1234', 
    rol: 'usuario',
    nombre: 'Maria'
  }
];


export const UserContext = createContext();

export const UserProvider = ({children}) => {
 
const [usuario, setUsuario]= useState(null)

const login = (nombreUsuario, contrasenia) => {
  const usuarioLogin = USUARIOS_FAKE.find(
    (usuario) => usuario.usuario === nombreUsuario && usuario.contrasenia === contrasenia
);
  if (usuarioLogin) {
    const token = `fake-token-${nombreUsuario}`;
      localStorage.setItem('authToken', token);
      setUsuario(usuarioLogin);
      return true;
  } 
    return false
  };
const logout = () => {
  localStorage.removeItem("authToken");
  setUsuario(false);
  alert("¡Hasta pronto!");
  
  navigate('/');

};



  return (
    <UserContext.Provider value={{usuario, login, logout}}>
            {children}
    </UserContext.Provider>)};


    export default UserProvider;
