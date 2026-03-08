// src/pages/Reglamentos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import riceImg from '../../images/reglamentos/RICE.webp';
import leyteaImg from '../../images/reglamentos/LeyTEA.webp';
import peiImg from '../../images/reglamentos/PEI.webp';

import apoderadosImg from '../../images/reglamentos/Apoderados.webp';
import vestimentaImg from '../../images/reglamentos/vestimenta.webp';
import pdiImg from '../../images/reglamentos/PDI.webp';

const Reglamentos = () => {
  const navigate = useNavigate();

  const reglamentos = [
    {
      titulo: "RICE",
      descripcion: "Reglamento Interno de Convivencia Escolar",
      imagen: riceImg,
      path: "/rice"
    },
    {
      titulo: "PEI",
      descripcion: "Proyecto Educativo Institucional",
      imagen: peiImg,
      path: "/pei"
    },
    {
      titulo: "Reglamento de Evaluación",
      descripcion: "Normativa de promoción y evaluación académica",
      imagen: apoderadosImg,   // imagen Apoderados aquí
      path: "/reglamento-evaluacion"
    },
    {
      titulo: "Ley TEA",
      descripcion: "Marco legal para Trastornos del Espectro Autista",
      imagen: leyteaImg,
      path: "/ley-tea"
    },
    {
      titulo: "Reglamento de Vestimenta",
      descripcion: "Normas sobre uniforme y presentación personal",
      imagen: vestimentaImg,   // imagen Vestimenta
      path: "/reglamento-vestimenta"
    },
    {
      titulo: "Plan de Seguridad Integral",
      descripcion: "Participación y responsabilidades de apoderados",
      imagen: pdiImg,          // imagen PDI aquí
      path: "/plan-seguridad"
    },
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#181760', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          Reglamentos del Colegio
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Conoce las normas que guían nuestra comunidad educativa
        </p>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {reglamentos.map((reglamento, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                height: '300px'
              }}
              onClick={() => navigate(reglamento.path)}
            >
              <img
                src={reglamento.imagen}
                alt={reglamento.titulo}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />

              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(24, 23, 96, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  {reglamento.titulo}
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem', maxWidth: '90%' }}>
                  {reglamento.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reglamentos;
