/**
 * Componente Carousel
 *
 * Un carrusel de imágenes responsivo y de alto impacto con rotación automática.
 * Diseñado para la sección hero de la página de inicio.
 *
 * @param {Object[]} images - Array de objetos de diapositiva { image, title, subtitle, buttonLabel, buttonPath }
 * @param {number} [interval=5000] - Tiempo en ms entre transiciones de diapositivas
 */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [displayedImages, setDisplayedImages] = useState(images);

  // Manejar el cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtrar imágenes para móvil (máximo 5)
  useEffect(() => {
    if (!images) return;
    if (isMobile) {
      setDisplayedImages(images.slice(0, 5));
    } else {
      setDisplayedImages(images);
    }
    setCurrentIndex(0); // Reiniciar al primer slide cuando cambia el set de imágenes
  }, [images, isMobile]);

  // Lógica de rotación automática
  useEffect(() => {
    if (!displayedImages || displayedImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayedImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [displayedImages, interval]);

  return (
    <div className="w-full h-[300px] sm:h-[500px] lg:h-[600px] overflow-hidden relative rounded-xl shadow-2xl bg-primary">
      {/* Track del Slider: usa transform para transiciones suaves aceleradas por hardware */}
      <div
        className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
        style={{
          width: `${displayedImages.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / displayedImages.length)}%)`,
        }}
      >
        {displayedImages.map((slide, idx) => (
          <div
            key={idx}
            className="h-full relative shrink-0"
            style={{ width: `${100 / displayedImages.length}%` }}
          >
            {/* Imagen de fondo */}
            <img
              src={slide.image || slide}
              alt={slide.title || `Slide ${idx + 1}`}
              className="w-full h-full object-cover block opacity-90"
            />

            {/* Superposición de Contenido: usa un degradado para legibilidad en diferentes imágenes */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4 sm:p-12">
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-md max-w-[90%] leading-tight">
                {slide.title ||
                  "Bienvenidos al Colegio María Inmaculada Los Ángeles"}
              </h1>

              <p className="text-xs sm:text-lg lg:text-xl mb-4 sm:mb-8 drop-shadow-sm max-w-[85%] opacity-90">
                {slide.subtitle ||
                  "Formando personas íntegras con valores cristianos"}
              </p>

              {/* Botón de Llamada a la Acción Dinámico */}
              {slide.buttonLabel && (
                <button
                  onClick={() => navigate(slide.buttonPath || "/postulaciones")}
                  className={`
                    px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base
                    border-2 border-white/80 shadow-lg transition-all duration-300
                    hover:scale-105 hover:shadow-xl active:scale-95
                    ${
                      slide.buttonLabel.toLowerCase().includes("transporte") ||
                      slide.title.toLowerCase().includes("transporte")
                        ? "bg-accent hover:bg-primary text-white"
                        : "bg-primary text-white hover:bg-accent hover:text-primary"
                    }
                  `}
                >
                  {slide.buttonLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Indicadores de diapositiva / Puntos */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {displayedImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
