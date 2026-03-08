import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!images || images.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div
      style={{
        width: '100%',
        height: '450px',
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
      }}
    >
      {/* Track */}
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: `${images.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / images.length)}%)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {images.map((slide, idx) => (
          <div
            key={idx}
            style={{
              width: `${100 / images.length}%`,
              height: '100%',
              flex: '0 0 auto',
              position: 'relative'
            }}
          >
            {/* Image */}
            <img
              src={slide.image || slide}
              alt={slide.title || `Imagen ${idx + 1}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Content Overlay (Now inside the slide) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                textAlign: 'center',
                padding: '2rem'
              }}
            >
              <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '0.75rem',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                maxWidth: '80%'
              }}>
                {slide.title || "Bienvenidos al Colegio María Inmaculada Los Ángeles"}
              </h1>

              <p style={{
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                maxWidth: '70%'
              }}>
                {slide.subtitle || "Formando personas íntegras con valores cristianos"}
              </p>

              {/* BOTÓN DINÁMICO */}
              {slide.buttonLabel && (
                <button
                  onClick={() => navigate(slide.buttonPath || '/postulaciones')}
                  style={{
                    padding: '0.95rem 2.4rem',
                    background: slide.buttonLabel.toLowerCase().includes('transporte') || slide.title.toLowerCase().includes('transporte')
                      ? 'linear-gradient(135deg, #1E69B3, #181760)'
                      : 'linear-gradient(135deg, #FFD700, #E6B800)',
                    color: slide.buttonLabel.toLowerCase().includes('transporte') || slide.title.toLowerCase().includes('transporte')
                      ? 'white'
                      : '#181760',
                    border: '2px solid rgba(255,255,255,0.85)',
                    borderRadius: '999px',
                    fontSize: '1.05rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'scale(1.06)';
                    e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  {slide.buttonLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
