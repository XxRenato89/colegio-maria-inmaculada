//este es el estilo base para todas las paginas
import React from 'react';
import '../App.css';

const PageHero = ({ title, subtitle }) => {
  return (
    <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1 style={{ color: '#181760', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
        {title}
      </h1>
      {subtitle && (
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          {subtitle}
        </p>
      )}
    </section>
  );
};

export default PageHero;
