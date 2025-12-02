import React from 'react';
import styleForm from '../styles/FormContacto.module.css';

function FormularioContacto() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    e.target.reset();
  };

  return (
    <form className={styleForm.formContainer} onSubmit={handleSubmit}>
      <div className={styleForm.formGroup}>
        <label className={styleForm.label} htmlFor="usuario">Usuario:</label>
        <input className={styleForm.input} type="text" id="usuario" name="usuario" required />
      </div>
      <div className={styleForm.formGroup}>
        <label className={styleForm.label} htmlFor="mail">Mail:</label>
        <input className={styleForm.input} type="email" id="mail" name="mail" required />
      </div>
      <div className={styleForm.formGroup}>
        <label className={styleForm.label} htmlFor="texto">Texto:</label>
        <textarea className={styleForm.textarea} id="texto" name="texto" required></textarea>
      </div>
      <button className={styleForm.button} type="submit">Enviar</button>
    </form>
  );
}

export default FormularioContacto;
