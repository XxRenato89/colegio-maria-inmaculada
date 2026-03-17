/**
 * Componente Section
 * 
 * Un componente estructural utilizado para agrupar contenido relacionado con un espaciado consistente y un encabezado opcional.
 * Actúa como contenedor para la mayoría de los bloques de la página.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenido de la sección
 * @param {string} props.className - Clases del contenedor de la sección exterior
 * @param {string} props.title - Título de sección opcional
 * @param {string} props.subtitle - Subtítulo/descripción de sección opcional
 * @param {string} props.spacing - Clase de relleno vertical (por defecto: 'py-10')
 * @param {string} props.containerClassName - Clases del envoltorio interno (centrado por defecto)
 */
import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  title, 
  subtitle, 
  spacing = 'py-10',
  containerClassName = ''
}) => {
  return (
    <section className={`${spacing} ${className}`}>
      <div className={`mx-auto ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-8 text-center md:text-left">
            {title && <h2 className="text-primary text-[1.8rem] md:text-[2.2rem] font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-[#555] text-lg max-w-2xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
