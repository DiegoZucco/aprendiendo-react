import React from 'react';
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import style from "./styles/index.module.css";


function App() {
  const text = ["Inicio", "Nuestros Productos","Sobre Nosotros", "Contacto"];
  
  return (
      <div className={style.App}>
      <Header/>
      <Nav items= {text}/>
      <Main/>
     </div>
     
  );
}

export default App;
