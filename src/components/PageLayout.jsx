/**
 * Componente PageLayout
 *
 * Un componente de nivel superior que proporciona una estructura de página consistente,
 * fondo, fuentes y centrado para toda la aplicación.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - El contenido de la página que se envolverá
 * @param {string} props.className - Clases de utilidad adicionales para el contenedor exterior
 */
import React from "react";
import { Helmet } from "react-helmet-async";

const PageLayout = ({ children, className = "", title, description }) => {
  const baseTitle = "Colegio María Inmaculada";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const defaultDescription =
    "Colegio María Inmaculada de Los Ángeles. Una institución educativa comprometida con la formación integral, valores cristianos y excelencia académica.";

  const hasPadding = className.split(" ").some(c => c.startsWith("p-") || c.startsWith("px-") || c.startsWith("py-"));
  const paddingClass = hasPadding ? "" : "p-4 md:p-8";

  return (
    <div
      className={`bg-white min-h-screen font-sans text-gray-800 leading-relaxed ${paddingClass} ${className}`}
    >
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta property="og:title" content={fullTitle} />
        <meta
          property="og:description"
          content={description || defaultDescription}
        />
      </Helmet>
      <div className="max-w-[1100px] mx-auto">{children}</div>
    </div>
  );
};

export default PageLayout;
