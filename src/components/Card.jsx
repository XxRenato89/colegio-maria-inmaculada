/**
 * Componente Card
 *
 * Un contenedor versátil para contenido con diferentes variantes visuales.
 * Maneja el estilo para patrones comunes de UI como tarjetas de perfil, superposiciones de noticias y bloques de información estándar.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido interno de la tarjeta
 * @param {string} props.title - Mensaje de encabezado principal
 * @param {string} props.subtitle - Texto de apoyo o descripción
 * @param {React.ReactNode} props.icon - Elemento de icono para el encabezado (variante estándar)
 * @param {string} props.image - URL para la imagen de fondo o destacada
 * @param {Function} props.onClick - Manejador de clics (habilita efectos de hover)
 * @param {string} props.className - Clases CSS personalizadas
 * @param {string} props.variant - Estilo visual ('default', 'profile', 'image-overlay')
 * @param {React.ReactNode} props.footer - Contenido para la parte inferior de la tarjeta
 */
import React from "react";

const Card = ({
  children,
  title,
  subtitle,
  icon,
  image,
  onClick,
  className = "",
  variant = "default", // 'default', 'profile', 'image-overlay'
  footer,
}) => {
  // Estilos base de utilidad usando Tailwind CSS
  const baseStyles =
    "border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden";
  const hoverStyles = onClick
    ? "hover:shadow-md hover:border-primary/10 hover:-translate-y-1.5 cursor-pointer"
    : "";

  if (variant === "image-overlay") {
    return (
      <div
        className={`group relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${className}`}
        onClick={onClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/65 group-hover:bg-primary/75 transition-all duration-300 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-3 drop-shadow-md">
            {title}
          </h3>
          {subtitle && (
            <p className="text-[0.95rem] text-gray-100 mb-6 max-w-[90%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  if (variant === "profile") {
    return (
      <article
        className={`${baseStyles} ${hoverStyles} p-6 flex flex-col sm:flex-row gap-6 items-start ${className}`}
        onClick={onClick}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-[80px] h-[80px] shrink-0 rounded-2xl object-cover shadow-sm"
          />
        ) : (
          <div className="w-[80px] h-[80px] shrink-0 rounded-2xl bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center text-gray-400 text-xs text-center p-2 leading-tight">
            {icon || "No Image"}
          </div>
        )}
        <div className="flex-1">
          <h3 className="m-0 mb-2 text-primary text-xl font-bold">{title}</h3>
          <p className="m-0 text-[#444] leading-relaxed text-[1.02rem] whitespace-pre-line">
            {subtitle}
          </p>
          {children}
        </div>
      </article>
    );
  }

  return (
    <div
      className={`${baseStyles} ${hoverStyles} p-6 ${className}`}
      onClick={onClick}
    >
      {icon && (
        <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-primary text-3xl mb-5 shadow-xs">
          {icon}
        </div>
      )}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
      )}
      <div className="flex-1">
        {title && (
          <h3 className="text-primary text-xl font-bold mb-2">{title}</h3>
        )}
        {subtitle && (
          <p className="text-gray-700 leading-relaxed text-[0.95rem] mb-4">
            {subtitle}
          </p>
        )}
        {children}
      </div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-gray-50">{footer}</div>
      )}
    </div>
  );
};

export default Card;
