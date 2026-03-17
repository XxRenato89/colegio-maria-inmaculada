/**
 * Componente SectionHero
 * 
 * Una sección hero prominente utilizada al comienzo de las subpáginas para proporcionar contexto y navegación.
 * Presenta un fondo degradado de alto impacto con botones de llamada a la acción opcionales.
 * 
 * @param {Object} props
 * @param {string} props.title - Encabezado principal grande
 * @param {string} props.subtitle - Texto descriptivo debajo del título
 * @param {string} props.primaryLabel - Texto para el botón de acción principal
 * @param {Function} props.onPrimaryClick - Manejador de clics para el botón primario
 * @param {string} props.secondaryLabel - Texto para el botón de acción secundario
 * @param {Function} props.onSecondaryClick - Manejador de clics para el botón secundario
 */
import React from 'react';

const SectionHero = ({
  title,
  subtitle,
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick,
  className
}) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden shadow-2xl bg-primary border border-primary/20 transition-all duration-300 ${className}`}>
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-primary via-primary/95 to-secondary/80" />
      <div className="absolute inset-0 z-0 opacity-30" style={{
        background: "radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.15), transparent 50%), radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1), transparent 50%)"
      }} />

      <div className="relative p-8 md:p-16 text-white z-10">

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/95 leading-relaxed max-w-3xl text-lg md:text-xl font-medium mb-10 drop-shadow-sm whitespace-pre-line">
            {subtitle}
          </p>
        )}

        <div className="flex gap-4 flex-wrap">
          {primaryLabel && (
            <button
              className="px-8 py-4 rounded-xl bg-white text-primary font-bold cursor-pointer transition-all duration-300 hover:bg-accent hover:-translate-y-1 hover:shadow-xl shadow-md border-none"
              onClick={onPrimaryClick}
            >
              {primaryLabel}
            </button>
          )}

          {secondaryLabel && (
            <button
              className="px-8 py-4 rounded-xl bg-white/10 border border-white/25 text-white font-bold cursor-pointer transition-all duration-300 hover:bg-white/20 backdrop-blur-md hover:-translate-y-1 hover:shadow-lg"
              onClick={onSecondaryClick}
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHero;
