// src/pages/Concursos.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHero from '../../components/SectionHero';
import BotonContacto from '../../components/BotonContacto';
import '../../App.css';

const Concursos = () => {
  const navigate = useNavigate();

  const concursos = [
    {
      titulo: "Cueca",
      descripcion:
        "Competencia cultural donde los estudiantes demuestran sus habilidades en la danza tradicional chilena, celebrando nuestra identidad nacional a través del folklore."
    },
    {
      titulo: "Ajedrez",
      descripcion:
        "Torneo de ajedrez que fomenta el pensamiento estratégico, la concentración y el desarrollo de habilidades cognitivas en nuestros estudiantes."
    },
    {
      titulo: "Festival de la Voz",
      descripcion:
        "Concurso vocal donde los estudiantes compiten demostrando su talento musical y artístico, promoviendo la expresión artística y la confianza en público."
    },
    {
      titulo: "Show de Talentos",
      descripcion:
        "Evento multidisciplinario donde los estudiantes muestran sus diversos talentos artísticos, fomentando la creatividad y el espíritu de participación."
    },
    {
      titulo: "Spelling Bee",
      descripcion:
        "Competencia de ortografía en inglés que desafía a los estudiantes a demostrar su dominio del vocabulario y la precisión lingüística en el idioma extranjero."
    }
  ];

  return (
    <div className="t2-page">
      <div className="t2-shell">

        {/* HERO – Estilo 2 encapsulado */}
        <SectionHero
          variant="t2"
          pill="🏆 Vida Escolar"
          title="Concursos Escolares"
          subtitle={`Eventos que impulsan participación, talento y confianza.
Actividades pensadas para que cada estudiante encuentre un espacio donde destacar.`}
        />

        {/* CONTENIDO */}
        <section className="t2-content-only">

          {/* Intro */}
          <article className="t2-card">
            <h2 className="t2-h2">Participar es crecer</h2>
            <p className="t2-p">
              Nuestros concursos promueven habilidades artísticas, cognitivas y sociales,
              fortaleciendo la convivencia y el sentido de pertenencia.
            </p>
            <div className="t2-callout">
              <strong>Tip:</strong> no se trata solo de competir, sino de aprender, compartir y atreverse.
            </div>
          </article>

          {/* Lista de concursos */}
          {concursos.map((concurso, index) => (
            <article key={index} className="t2-card">
              <h2 className="t2-h2">{concurso.titulo}</h2>
              <p className="t2-p">{concurso.descripcion}</p>
            </article>
          ))}

          {/* Cierre */}
          <article className="t2-card">
            <h2 className="t2-h2">Inscripciones y fechas</h2>
            <p className="t2-p">
              Las fechas y bases pueden variar durante el año escolar. Para conocer requisitos,
              cupos y calendario actualizado, contáctanos.
            </p>

            <div className="t2-quote">
              <strong>Recuerda:</strong> participar es una oportunidad para practicar,
              mejorar y ganar confianza.
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <BotonContacto
                onClick={() => navigate('/contacto')}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
              >
                Consultar por Concursos
              </BotonContacto>
            </div>
          </article>

        </section>
      </div>
    </div>
  );
};

export default Concursos;
