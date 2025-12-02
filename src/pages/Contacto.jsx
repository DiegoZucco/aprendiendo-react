import React from 'react';
import FormularioContacto from '../components/FormularioContacto';
import style from '../styles/FormContacto.module.css';

const Contacto = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Ponte en contacto</h1>
      <div>
      <FormularioContacto />
      </div>
    </div>
  );
};

export default Contacto;
