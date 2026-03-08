import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="header-custom">
      <div className="header-inner-custom">

        {/* LOGO + TITULO */}
        <Link
          to="/"
          className="header-logo-link"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <img
            src="/logo.png"
            alt="Logo Colegio"
            className="header-logo-img"
          />

          <div className="header-title-wrapper">
            <h1 className="header-title">
              Colegio María Inmaculada
            </h1>
            <span className="header-subtitle">
              Los Ángeles
            </span>
          </div>
        </Link>

        {/* INFO CONTACTO */}
        <div className="header-info">
          <div>
            <strong>Dirección:</strong> Av. Las Quintas N°188
          </div>

          <div>
            <strong>Tel:</strong> (43) 2658332
          </div>

          <div>
            <strong>WhatsApp:</strong> +56 9 3931 0070
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;