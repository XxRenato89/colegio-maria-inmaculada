// src/pages/Actividades.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHero from '../components/SectionHero';
import CTA from '../components/CTA';
import '../App.css';

const Actividades = () => {
  const navigate = useNavigate();

  const actividades = [
    {
      titulo: "Plan de Estudio",
      descripcion: "Conoce nuestro currículum y planificación académica.",
      path: "/actividades/plan-estudio",
      icon: "📘"
    },
    {
      titulo: "Talleres",
      descripcion: "Programas extracurriculares y actividades complementarias.",
      path: "/actividades/talleres",
      icon: "🧩"
    },
    {
      titulo: "Concursos",
      descripcion: "Participación en competencias académicas y culturales.",
      path: "/actividades/concursos",
      icon: "🏆"
    },
    {
      titulo: "Efemérides",
      descripcion: "Celebraciones y eventos especiales del calendario escolar.",
      path: "/actividades/efemerides",
      icon: "📅"
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '2rem' }}>

      {/* HERO – estilo 2 encapsulado */}
      <SectionHero
        pill="⭐ Vida Escolar • Actividades"
        title="Actividades Escolares"
        subtitle="Programas y eventos que fortalecen talentos, convivencia y participación.
Entra a cada sección para ver detalles y recursos."
        primaryLabel="Consultar información"
        onPrimaryClick={() => navigate('/contacto')}
        secondaryLabel="Ver Postulaciones"
        onSecondaryClick={() => navigate('/postulaciones')}
      />

      {/* CARDS */}
      <section className="act-grid">
        {actividades.map((a, idx) => (
          <div
            key={idx}
            className="act-card"
            onClick={() => navigate(a.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(a.path);
            }}
          >
            <div className="act-card-content">
              <div className="act-icon" aria-hidden="true">{a.icon}</div>
              <div>
                <h3>{a.titulo}</h3>
                <p>{a.descripcion}</p>
                <div className="act-card-footer">
                  Explorar <span className="act-arrow">→</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA final consistente */}
      <CTA
        title="¿Quieres saber más sobre nuestras actividades?"
        text="Si deseas información detallada sobre talleres, concursos o actividades formativas,
nuestro equipo estará disponible para orientarte."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate('/contacto')}
      />
    </div>
  );
};

export default Actividades;
