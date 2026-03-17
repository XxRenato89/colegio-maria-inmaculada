/**
 * Componente BotonContacto
 *
 * Un componente de botón estilizado y reutilizable con variantes primarias y secundarias integradas.
 * Se utiliza para acciones prominentes como "Ir a Contacto" o botones de navegación general.
 *
 * @param {Object} props
 * @param {string} props.variant - Estilo visual ('primary' para azul sólido, 'secondary' para blanco delineado)
 * @param {React.ReactNode} props.children - Etiqueta del botón o icono
 * @param {string} props.className - Clases de utilidad adicionales
 */
import React from "react";
import "../App.css";

const BotonContacto = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 px-[1.4rem] py-[0.85rem] rounded-lg cursor-pointer font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md";

  const variantStyles =
    variant === "secondary"
      ? "bg-white text-primary border border-gray-300 hover:bg-gray-50"
      : "bg-primary text-white border-none hover:bg-accent hover:text-primary";

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default BotonContacto;
