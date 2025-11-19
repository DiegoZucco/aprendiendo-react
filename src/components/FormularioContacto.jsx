import React from 'react';
import styleForm from '../styles/FormContacto.module.css';

function FormularioContacto() {
  return (
    <form className={styleForm.FormContacto} action="">
      <div >
        <label >Usuario:</label>
        <input type="text" id="usuario" name="usuario" />
      </div>
      <div>
        <label >Mail:</label>
        <input type="email" id="mail" name="mail" />
      </div>
      <div>
        <label>Texto:</label>
        <textarea id="texto" name="texto"></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioContacto;

