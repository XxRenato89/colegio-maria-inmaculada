// src/pages/Materiales.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import materialesTIMG from '../images/materiales/MaterialesT.webp';
import riceImg from '../images/reglamentos/RICE.webp';
import leyteaImg from '../images/reglamentos/LeyTEA.webp';
import peiImg from '../images/reglamentos/PEI.webp';
import apoderadosImg from '../images/reglamentos/Apoderados.webp';
import vestimentaImg from '../images/reglamentos/vestimenta.webp';
import pdiImg from '../images/reglamentos/PDI.webp';

import img1 from '../images/carousel/img1.webp'
import img2 from '../images/carousel/img2.webp'
import img3 from '../images/carousel/img3.webp'

const Materiales = () => {
  const navigate = useNavigate();

  const cursos = [
    {
      titulo: "1° Básico",
      descripcion: "Materiales y recursos para el primer año de educación básica.",
      imagen: pdiImg,
      path: "/materiales/primero"
    },
    {
      titulo: "2° Básico",
      descripcion: "Materiales y recursos para el segundo año de educación básica.",
      imagen: riceImg,
      path: "/materiales/segundo"
    },
    {
      titulo: "3° Básico",
      descripcion: "Materiales y recursos para el tercer año de educación básica.",
      imagen: leyteaImg,
      path: "/materiales/tercero"
    },
    {
      titulo: "4° Básico",
      descripcion: "Materiales y recursos para el cuarto año de educación básica.",
      imagen: peiImg,
      path: "/materiales/cuarto"
    },
    {
      titulo: "5° Básico",
      descripcion: "Materiales y recursos para el quinto año de educación básica.",
      imagen: apoderadosImg,
      path: "/materiales/quinto"
    },
    {
      titulo: "6° Básico",
      descripcion: "Materiales y recursos para el sexto año de educación básica.",
      imagen: vestimentaImg,
      path: "/materiales/sexto"
    },
    {
      titulo: "7° Básico",
      descripcion: "Materiales y recursos para el séptimo año de educación básica.",
      imagen: img1,
      path: "/materiales/septimo"
    },
    {
      titulo: "8° Básico",
      descripcion: "Materiales y recursos para el octavo año de educación básica.",
      imagen: img2,
      path: "/materiales/octavo"
    },
    {
      titulo: "Enseñanza media",
      descripcion: "Materiales y recursos para enseñanza media.",
      imagen: img3,
      path: "/materiales/media"
    },
    {
      titulo: "Pre-Kinder y Kinder",
      descripcion: "Materiales y recursos para Pre-Kinder y Kinder.",
      imagen: materialesTIMG,
      path: "/materiales/T"
    }
  ];

  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>

      {/* Título Principal */}
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#181760', fontSize: '2.2rem', marginBottom: '0.5rem' }}>
          Listas de Útiles Escolares
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Recursos y materiales para cada nivel educativo
        </p>
      </section>

      {/* Cuadrícula 2x4 para los cursos */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gap: '2rem',
          justifyContent: 'center'
        }}>
          {cursos.map((curso, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '300px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
              onClick={() => navigate(curso.path)}
            >
              {/* Imagen de fondo */}
              <img
                src={curso.imagen}
                alt={curso.titulo}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
              />

              {/* Overlay con contenido */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(24, 23, 96, 0.4)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                textAlign: 'center',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'white' }}>
                  {curso.titulo}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  marginBottom: '1rem',
                  color: '#f0f0f0',
                  maxWidth: '90%'
                }}>
                  {curso.descripcion}
                </p>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'transparent',
                    color: 'white',
                    border: '2px solid white',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = 'rgba(255, 215, 0, 0.3)')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = 'transparent')}
                >
                  Ver Materiales
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL – MISMO ESTILO QUE QUIÉNES SOMOS */}
      <section className="qs-cta">
        <div className="qs-container qs-cta-card">
          <h3 className="qs-cta-title">¿Necesitas más información?</h3>
          <p className="qs-cta-text">
            Si tienes dudas sobre los materiales o recursos por nivel, contáctanos y te orientamos.
          </p>
          <div className="qs-cta-actions">
            <button
              onClick={() => navigate('/contacto')}
              className="btn-primary"
              onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
            >
              Ir a Contacto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materiales;
