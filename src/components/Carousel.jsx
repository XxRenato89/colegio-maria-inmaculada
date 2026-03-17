import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [displayedImages, setDisplayedImages] = useState(images);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!images) return;
    if (isMobile) {
      setDisplayedImages(images.slice(0, 5));
    } else {
      setDisplayedImages(images);
    }
    setCurrentIndex(0);
  }, [images, isMobile]);

  useEffect(() => {
    if (!displayedImages || displayedImages.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayedImages.length);
    }, interval);

    return () => clearInterval(timer);
  }, [displayedImages, interval]);

  return (
    <div className="w-full h-[450px] sm:h-[500px] lg:h-[600px] overflow-hidden relative bg-primary">
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {displayedImages.map((slide, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img
              src={slide.image || slide}
              alt={slide.title || `Slide ${idx + 1}`}
              className="w-full h-full object-cover block"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-4 sm:p-12">
              <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-md max-w-[90%] leading-tight">
                {slide.title || "Bienvenidos al Colegio María Inmaculada Los Ángeles"}
              </h1>

              <p className="text-xs sm:text-lg lg:text-xl mb-4 sm:mb-8 drop-shadow-sm max-w-[85%] opacity-90">
                {slide.subtitle || "Formando personas íntegras con valores cristianos"}
              </p>

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
