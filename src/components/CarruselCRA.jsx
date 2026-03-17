/**
 * Componente NewsCarousel (Sección CRA)
 * 
 * Un carrusel especializado para noticias en la sección CRA (Centro de Recursos para el Aprendizaje).
 * Presenta un diseño de cuadrícula con contenido de imagen y texto, adaptándose para móviles.
 * 
 * @param {Object[]} items - Array de noticias { image, title, excerpt, href }
 * @param {number} [interval=5000] - Tiempo en ms entre transiciones de diapositivas
 */
import React, { useEffect, useState } from 'react';

const NewsCarousel = ({ items = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Temporizador para la transición automática de diapositivas
  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  if (!items.length) return null;

  return (
    <div className="w-full overflow-hidden rounded-[26px] border border-gray-100 shadow-2xl bg-white min-h-[600px] flex flex-col">
      {/* Track del Slider: contiene todas las diapositivas de noticias en una fila horizontal */}
      <div
        className="flex transition-transform duration-700 ease-in-out grow"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / items.length}%)`,
        }}
      >
        {items.map((n, idx) => (
          <div
            key={idx}
            className="shrink-0 flex items-center justify-center"
            style={{ width: `${100 / items.length}%` }}
          >
            {/* Cuadrícula de diapositiva: se apila en móvil, lado a lado en pantallas grandes */}
            <div className="p-6 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8 sm:gap-12 items-center w-full">
              {/* Contenedor de Imagen */}
              <div className="w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
                <img
                  src={n.image}
                  alt={n.title}
                  className="w-full h-full object-cover block transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Área de Contenido de Texto */}
              <div className="max-w-[700px] w-full">
                <h3 className="text-primary font-bold text-xl mb-2">
                  {n.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg mb-8">
                  {n.excerpt}
                </p>

                {n.href && (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-2 group"
                  >
                    Leer noticia completa 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de Navegación (Puntos) */}
      <div className="flex justify-center gap-3 p-8 border-t border-gray-50">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              i === currentIndex 
                ? 'bg-secondary border-secondary scale-110' 
                : 'bg-gray-200 border-transparent hover:bg-gray-300'
            }`}
            aria-label={`Go to news ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
