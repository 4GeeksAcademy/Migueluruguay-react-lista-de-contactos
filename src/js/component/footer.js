import React from "react";

// Componente de pie de página, será leído por NVDA ya que usa etiquetas estándar
export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <p>
            Hecho con <i className="fa fa-heart text-danger" aria-label="corazón"/> por{" "}
            <a href="http://www.4geeksacademy.com">4Geeks Academy</a>
        </p>
    </footer>
);
