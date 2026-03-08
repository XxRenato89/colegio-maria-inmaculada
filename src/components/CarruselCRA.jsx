import React, { useEffect, useState } from 'react';

const NewsCarousel = ({ items = [], interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!items.length) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval]);

  if (!items.length) return null;

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        borderRadius: '26px',
        border: '1px solid #e6e6e6',
        boxShadow: '0 26px 60px rgba(0,0,0,0.12)',
        backgroundColor: '#ffffff',
        minHeight: '520px'
      }}
    >
      {/* Track */}
      <div
        style={{
          display: 'flex',
          width: `${items.length * 100}%`,
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.6s ease-in-out'
        }}
      >
        {items.map((n, idx) => (
          <div
            key={idx}
            style={{
              width: '100%',
              flex: '0 0 100%',
              boxSizing: 'border-box',
              padding: '4rem'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '420px 1fr',
                gap: '3rem',
                alignItems: 'center'
              }}
            >
              {/* Imagen */}
              <div
                style={{
                  width: '420px',
                  height: '300px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  backgroundColor: '#f3f3f3',
                  border: '1px solid #e2e2e2'
                }}
              >
                <img
                  src={n.image}
                  alt={n.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Texto (limitado al área roja + fuente reducida) */}
              <div
                style={{
                  maxWidth: '520px',
                  minWidth: 0
                }}
              >
                <h3
                  style={{
                    color: '#181760',
                    fontWeight: 800,
                    fontSize: '1.6rem',
                    margin: 0,
                    marginBottom: '0.8rem',
                    lineHeight: 1.3
                  }}
                >
                  {n.title}
                </h3>

                <p
                  style={{
                    color: '#444',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                    margin: 0,
                    marginBottom: '1.2rem'
                  }}
                >
                  {n.excerpt}
                </p>

                {n.href && (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: '#181760',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      fontSize: '0.95rem'
                    }}
                  >
                    Leer noticia completa →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.9rem',
          padding: '1.6rem'
        }}
      >
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrentIndex(i)}
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: i === currentIndex ? '#181760' : '#cfcfcf',
              cursor: 'pointer'
            }}
            role="button"
            tabIndex={0}
            aria-label={`Ir a noticia ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;
