import React, { useState } from "react";
import estilos from "../styles/FormContacto.module.css";

const FormContacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos del formulario:", formData);
        alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
        setFormData({ nombre: "", email: "", mensaje: "" }); // Limpiar formulario
    };

    return (
        <div className={estilos.formContainer}>
            <form onSubmit={handleSubmit} className={estilos.formComponente} >
                <div className={estilos.formGroup}>
                    <label htmlFor="nombre" className={estilos.label}>Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={estilos.input}
                        required
                    />
                </div>
                <div className={estilos.formGroup}>
                    <label htmlFor="email" className={estilos.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={estilos.input}
                        required
                    />
                </div>
                <div className={estilos.formGroup}>
                    <label htmlFor="mensaje" className={estilos.label}>Mensaje:</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className={estilos.textarea}
                        rows="5"
                        required
                    ></textarea>
                </div>
                <div className={estilos.buttonContainer}>
                    <button type="submit" className={estilos.button}>Enviar</button>
                </div>
            </form>
        </div>
    );
};

export default FormContacto;
