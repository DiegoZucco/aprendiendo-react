import React from 'react';
import styleBtn from "../styles/Logo.module.css"; // Corrected path to the CSS module
import logo from "../assets/icons/logo_Mis_Princesas.png";
import styleNav from "../styles/NavBar.module.css"; // Corrected path to the CSS module
import styleUlLinks from "../styles/LinksNav.module.css";


// El componente recibe la prop "items" desde su padre (App.jsx)
function Nav({ items }) {

    return (
        <nav className={styleNav.navBar}>
            <img className={styleBtn.logo} src={logo} alt="logo" />

            <ul className={styleUlLinks.ulLinks}>
                {
                    items.map((texto, index) => (
                        <li key={index}>
                            <a href="#" style={{ textDecoration: "none", color: "#333" }}>
                                {texto}
                            </a>
                        </li>
                    ))
                }
            </ul>
            
        </nav>
    );
}


export default Nav;
