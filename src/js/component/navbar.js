import React from "react";
import { Link } from "react-router-dom";

// Barra de navegación con botones accesibles para lectores de pantalla
export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">Gestión de Contactos</span>
            </Link>
            <div className="ml-auto">
                <Link to="/demo">
                    <button className="btn btn-primary">Ver Contactos</button>
                </Link>
            </div>
        </nav>
    );
};
