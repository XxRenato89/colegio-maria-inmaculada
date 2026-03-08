import React from 'react';
import { useNavigate } from 'react-router-dom';
import quienesSomosImg from '../images/reglamentos/Institucional.webp';
import CTA from '../components/CTA';
import BotonContacto from '../components/BotonContacto';
import organigrama from '../images/Organigrama.webp';

import '../App.css';

const cargos = [
  {
    titulo: 'Directora',
    descripcion:
      'Responsable de la dirección, organización, control y funcionamiento del establecimiento, de acuerdo a las normas legales y reglamentarias vigentes y a los objetivos y directrices de la Corporación María Inmaculada de Los Ángeles.'
  },
  {
    titulo: 'Subdirectora',
    descripcion:
      'Subroga a la Directora en caso de ausencia y colabora en la dirección, organización y control del establecimiento conforme a las normas vigentes y directrices institucionales.'
  },
  {
    titulo: 'Inspector General',
    descripcion:
      'Responsable de las funciones organizativas necesarias para el cumplimiento del Reglamento Interno y de Convivencia Escolar del Colegio María Inmaculada de Los Ángeles.'
  },
  {
    titulo: 'Jefe de Unidad Técnico Pedagógica (UTP)',
    descripcion:
      'Responsable del asesoramiento, supervisión y evaluación del desarrollo del currículum, conforme a los planes y programas del Ministerio de Educación y las políticas de la Corporación María Inmaculada de Los Ángeles.'
  },
  {
    titulo: 'Docente',
    descripcion:
      'Profesor titulado o autorizado que cumple funciones docentes conforme a los objetivos ministeriales e institucionales, orientando su labor a la formación integral de los estudiantes.'
  },
  {
    titulo: 'Profesor Jefe',
    descripcion:
      'Profesor responsable de las funciones docentes y administrativas asociadas a la jefatura de curso, de acuerdo con los reglamentos internos y disposiciones de la Dirección.'
  },
  {
    titulo: 'Asistente de la Educación',
    descripcion:
      'Personal que apoya el proceso educativo en funciones profesionales, de paradocencia y de servicios auxiliares.\n\n' +
      'Incluye:\n' +
      '• Inspector Educacional\n' +
      '• Técnico en Educación de Párvulos\n' +
      '• Técnico en Educación Diferencial\n' +
      '• Asistente de Aula\n' +
      '• Personal Auxiliar (aseo, cuidado y mantención del establecimiento)'
  }
];

const QuienesSomos = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      {/* HERO */}
      <section className="qs-hero">
        <div className="qs-hero-inner">
          <div className="qs-hero-text">
            <h1 className="qs-title">¿Quiénes Somos?</h1>
            <p className="qs-subtitle">
              Aquí lo importante no es solo “pasar materia”. Es acompañar a cada estudiante para que crezca con
              confianza, valores y herramientas reales para la vida.
            </p>

            <div className="qs-hero-actions">
              <BotonContacto
                onClick={() => navigate('/postulaciones')}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
              >
                Postulaciones
              </BotonContacto>
            </div>
          </div>

          <div className="qs-hero-image">
            <img
              src={quienesSomosImg}
              alt="Colegio María Inmaculada Los Ángeles"
              className="qs-image"
            />
          </div>
        </div>
      </section>

      {/* 🔥 ORGANIGRAMA */}
      <section className="qs-section">
        <div className="qs-container">
          <h2 className="qs-section-title">Organigrama</h2>
          <p className="qs-section-lead">
            Estructura organizacional del Colegio María Inmaculada de Los Ángeles.
          </p>

          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <img
              src={organigrama}
              alt="Organigrama Colegio María Inmaculada"
              style={{
                maxWidth: '100%',
                borderRadius: '14px',
                boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                border: '1px solid #ececec'
              }}
            />
          </div>
        </div>
      </section>

      {/* EQUIPO Y CARGOS */}
      <section className="qs-section">
        <div className="qs-container">
          <h2 className="qs-section-title">Nuestro equipo educativo</h2>
          <p className="qs-section-lead">
            El colegio está conformado por profesionales y asistentes que cumplen roles fundamentales
            para el desarrollo académico, formativo y humano de nuestros estudiantes.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {cargos.map((c, i) => (
              <article
                key={i}
                className="qs-card"
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  width: '100%'
                }}
              >
                <div
                  style={{
                    width: '92px',
                    height: '92px',
                    borderRadius: '14px',
                    background: '#f2f2f2',
                    border: '1px dashed #cfcfcf',
                    flex: '0 0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#777',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                    padding: '0.4rem',
                    lineHeight: 1.2
                  }}
                >
                  Imagen<br />cargo
                </div>

                <div style={{ flex: 1 }}>
                  <h3 className="qs-card-title" style={{ marginTop: 0 }}>
                    {c.titulo}
                  </h3>
                  <p className="qs-card-text" style={{ whiteSpace: 'pre-line' }}>
                    {c.descripcion}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE VIVIMOS */}
      <section className="qs-section">
        <div className="qs-container">
          <h2 className="qs-section-title">Lo que vivimos día a día</h2>
          <p className="qs-section-lead">
            Este espacio está pensado para que estudiantes y familias entiendan qué tipo de experiencia ofrece el
            colegio: cercana, exigente y humana.
          </p>

          <div className="qs-grid">
            <article className="qs-card">
              <h3 className="qs-card-title">Acompañamiento cercano</h3>
              <p className="qs-card-text">
                Cada estudiante es visto y escuchado. Nos importa cómo aprende, cómo se siente y cómo se relaciona.
              </p>
            </article>

            <article className="qs-card">
              <h3 className="qs-card-title">Convivencia con respeto</h3>
              <p className="qs-card-text">
                Promovemos una convivencia basada en el respeto, la responsabilidad y el cuidado mutuo.
              </p>
            </article>

            <article className="qs-card">
              <h3 className="qs-card-title">Aprendizaje con sentido</h3>
              <p className="qs-card-text">
                Conectamos lo aprendido con la vida real y el futuro de cada estudiante.
              </p>
            </article>

            <article className="qs-card">
              <h3 className="qs-card-title">Identidad y valores</h3>
              <p className="qs-card-text">
                Formación inspirada en valores cristianos y la espiritualidad mariana.
              </p>
            </article>

            <article className="qs-card">
              <h3 className="qs-card-title">Participación y pertenencia</h3>
              <p className="qs-card-text">
                Cuando el estudiante se siente parte, aprende con mayor compromiso.
              </p>
            </article>

            <article className="qs-card">
              <h3 className="qs-card-title">Preparación para la vida</h3>
              <p className="qs-card-text">
                Herramientas reales para un futuro autónomo y responsable.
              </p>
            </article>
          </div>
        </div>
      </section>

      <CTA
        title="¿Quieres conocer más?"
        text="Si tienes dudas sobre el proyecto educativo o admisión, conversemos."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate('/contacto')}
      />
    </div>
  );
};

export default QuienesSomos;
