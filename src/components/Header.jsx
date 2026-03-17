import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <header className="bg-[#1E69B3] text-white">
      <div className="max-w-[1200px] mx-auto px-5 py-2.5 flex items-center justify-between gap-5">

        {/* LOGO + TITULO */}
        <Link
          to="/"
          className="flex items-center no-underline text-inherit gap-3"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <img
            src="/logo.png"
            alt="Logo Colegio"
            className="h-[60px]"
          />

          <div className="flex flex-col">
            <h1 className="m-0 text-[1.4rem] text-white font-bold leading-tight">
              Colegio María Inmaculada
            </h1>
            <span className="text-[0.9rem] opacity-90">
              Los Ángeles
            </span>
          </div>
        </Link>

        {/* INFO CONTACTO - Oculto en móbiles pequeños por espacio */}
        <div className="hidden sm:flex flex-col text-[0.85rem] leading-[1.4] text-right">
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