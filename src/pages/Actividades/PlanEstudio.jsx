// src/pages/PlanEstudio.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHero from '../../components/SectionHero';
import '../../App.css';

const PlanEstudio = () => {
  const navigate = useNavigate();

  return (
    <div className="t2-page">
      <div className="t2-shell">

        {/* HERO – estilo 2 encapsulado */}
        <SectionHero
          variant="t2"
          pill="📘 Propuesta Educativa"
          title="Plan de Estudio"
          subtitle={`Una formación alineada con el Ministerio de Educación, que integra
aprendizaje académico, habilidades prácticas y desarrollo personal.`}
        />

        {/* CONTENIDO */}
        <section className="t2-content-only">

          {/* BLOQUE 1 */}
          <article className="t2-card">
            <h2 className="t2-h2">Planes de Estudio</h2>
            <p className="t2-p">
              El Colegio María Inmaculada de Los Ángeles ha elaborado sus Planes de Estudio
              siguiendo la propuesta establecida por el Ministerio de Educación, asegurando
              coherencia curricular y cumplimiento de los estándares nacionales.
            </p>

            <div className="t2-callout">
              Nuestro enfoque educativo no se limita a contenidos, sino que busca formar
              estudiantes capaces de comprender, aplicar y proyectar lo aprendido.
            </div>
          </article>

          <article>
            <h1>
              Horas por semana de cada asignatura
            </h1>
          </article>

          {/* BLOQUE 2 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Primer Ciclo Básico (1° a 4° año básico)
            </h2>
            <p><strong>Lenguaje y Comunicación:</strong> 8 hrs a la semana</p>
            <p><strong>Matemática:</strong> 8 hrs a la semana</p>
            <p><strong>Historia, Geografía y Ciencias Sociales:</strong> 4 hrs a la semana</p>
            <p><strong>Ciencias Naturales:</strong> 4 hrs a la semana</p>
            <p><strong>Artes Visuales:</strong> 2 hrs a la semana</p>
            <p><strong>Música:</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 4 hrs a la semana</p>
            <p><strong>Orientación:</strong> 1 hr a la semana</p>
            <p><strong>Tecnología:</strong> 1 hr a la semana</p>
            <p><strong>Religión:</strong> 2 hrs a la semana</p>
            <p><strong>Inglés:</strong> 2 hrs a la semana</p>
          </article>

          {/* BLOQUE 2 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Segundo Ciclo Básico (5° a 8° año básico)
            </h2>
            <p><strong>Lenguaje y Comunicación:</strong> 7 hrs a la semana</p>
            <p><strong>Idioma Extrangero (Inglés):</strong> 3 hrs a la semana</p>
            <p><strong>Matemática:</strong> 6 hrs a la semana</p>
            <p><strong>Historia, Geografía:</strong> 4 hrs a la semana</p>
            <p><strong>Ciencias Naturales:</strong> 4 hrs a la semana</p>
            <p><strong>Artes Visuales:</strong> 2 hrs a la semana</p>
            <p><strong>Música:</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 2 hrs a la semana</p>
            <p><strong>Orientación:</strong> 2 hr a la semana</p>
            <p><strong>Tecnología:</strong> 2 hr a la semana</p>
            <p><strong>Religión:</strong> 2 hrs a la semana</p>

          </article>

          {/* BLOQUE 3 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Primero Medio
            </h2>
            <p><strong>Lengua y Literatura:</strong> 6 hrs a la semana</p>
            <p><strong>Idioma Extrangero (Inglés):</strong> 4 hrs a la semana</p>
            <p><strong>Matemática:</strong> 7 hrs a la semana</p>
            <p><strong>Historia, Geografía y Ciencias Sociales:</strong> 4 hrs a la semana</p>
            <p><strong>Biología:</strong> 2 hrs a la semana</p>
            <p><strong>Química:</strong> 2 hrs a la semana</p>
            <p><strong>Física:</strong> 2 hrs a la semana</p>
            <p><strong>Música, Artes Visuales:</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 2 hrs a la semana</p>
            <p><strong>Orientación:</strong> 1 hr a la semana</p>
            <p><strong>Tecnología:</strong> 2 hr a la semana</p>
            <p><strong>Religión:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Matemáticas:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Lenguaje:</strong> 2 hrs a la semana</p>
            <p><strong>Cocina/Salón:</strong> 2 hrs a la semana</p>

          </article>

          {/* BLOQUE 4 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Segundo Medio
            </h2>
            <p><strong>Lengua y Literatura:</strong> 6 hrs a la semana</p>
            <p><strong>Idioma Extrangero (Inglés):</strong> 4 hrs a la semana</p>
            <p><strong>Matemática:</strong> 7 hrs a la semana</p>
            <p><strong>Historia, Geografía y Ciencias Sociales:</strong> 4 hrs a la semana</p>
            <p><strong>Biología:</strong> 2 hrs a la semana</p>
            <p><strong>Química:</strong> 2 hrs a la semana</p>
            <p><strong>Física:</strong> 2 hrs a la semana</p>
            <p><strong>Artes Visuales (Música):</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 2 hrs a la semana</p>
            <p><strong>Orientación:</strong> 1 hr a la semana</p>
            <p><strong>Tecnología:</strong> 2 hr a la semana</p>
            <p><strong>Religión:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Matemáticas:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Lenguaje:</strong> 2 hrs a la semana</p>
            <p><strong>Cocina/Pedicura:</strong> 2 hrs a la semana</p>

          </article>

          {/* BLOQUE 5 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Tercero Medio
            </h2>
            <p><strong>Lengua y Literatura:</strong> 3 hrs a la semana</p>
            <p><strong>Idioma Extrangero (Inglés):</strong> 2 hrs a la semana</p>
            <p><strong>Matemática:</strong> 3 hrs a la semana</p>
            <p><strong>Educación Ciudadana:</strong> 2 hrs a la semana</p>
            <p><strong>Ciencias para la ciudadanía:</strong> 2 hrs a la semana</p>
            <p><strong>Filosofía:</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 2 hrs a la semana</p>
            <p><strong>Biología de los ecosistemas:</strong> 6 hrs a la semana</p>
            <p><strong>Probabilidades y estadística:</strong> 6 hrs a la semana</p>
            <p><strong>Lectura y escritura especial:</strong> 6 hr a la semana</p>
            <p><strong>Antropologia cristiana:</strong> 2 hr a la semana</p>
            <p><strong>PAES Matemáticas:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Lenguaje:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Ciencias:</strong> 2 hrs a la semana</p>

          </article>

          {/* BLOQUE 6 */}
          <article className="t2-card">
            <h2 className="t2-h2">
              Cuarto Medio
            </h2>
            <p><strong>Lengua y Literatura:</strong> 3 hrs a la semana</p>
            <p><strong>Idioma Extrangero (Inglés):</strong> 2 hrs a la semana</p>
            <p><strong>Matemática:</strong> 3 hrs a la semana</p>
            <p><strong>Educación Ciudadana:</strong> 2 hrs a la semana</p>
            <p><strong>Ciencias para la ciudadanía:</strong> 2 hrs a la semana</p>
            <p><strong>Filosofía:</strong> 2 hrs a la semana</p>
            <p><strong>Educación Física y Salud:</strong> 2 hrs a la semana</p>
            <p><strong>Química:</strong> 6 hrs a la semana</p>
            <p><strong>Pensamiento computacional:</strong> 6 hrs a la semana</p>
            <p><strong>Economia y sociedad:</strong> 6 hr a la semana</p>
            <p><strong>Liderazgo Educativo:</strong> 2 hr a la semana</p>
            <p><strong>PAES Ciencias:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Matemáticas:</strong> 2 hrs a la semana</p>
            <p><strong>PAES Lenguaje:</strong> 2 hrs a la semana</p>

          </article>



          {/* BLOQUE 5 */}
          <article className="t2-card">


            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={`${import.meta.env.BASE_URL}docs/planestudio/planestudio.xlsx`}
                download
                className="btn-primary"
                style={{ display: 'inline-block', textDecoration: 'none', padding: '0.8rem 1.5rem' }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
              >
                Descarga el Plan de Estudio (Excel)
              </a>
            </div>
          </article>

        </section>
      </div>
    </div>
  );
};

export default PlanEstudio;
