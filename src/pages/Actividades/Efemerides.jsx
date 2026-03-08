// src/pages/Efemerides.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHero from '../../components/SectionHero';
import BotonContacto from '../../components/BotonContacto';
import '../../App.css';

const Efemerides = () => {
  const navigate = useNavigate();

  const efemerides = [
    { titulo: "Bienvenida de Estudiantes", descripcion: "Celebración especial para dar la bienvenida a todos nuestros estudiantes al nuevo año escolar." },
    { titulo: "Día del Carabinero", descripcion: "Reconocimiento a los carabineros por su labor y servicio a la comunidad." },
    { titulo: "Natalicio de Bernardo O'Higgins", descripcion: "Homenaje al Libertador Bernardo O'Higgins en su fecha de nacimiento." },
    { titulo: "Día del Estudiante", descripcion: "Celebración dedicada a reconocer el esfuerzo y dedicación de nuestros estudiantes." },
    { titulo: "Día del Profesor", descripcion: "Reconocimiento a nuestros docentes por su invaluable labor educativa." },
    { titulo: "Día del Asistente", descripcion: "Agradecimiento al personal de apoyo que contribuye al buen funcionamiento del colegio." },
    { titulo: "Fiestas Patrias", descripcion: "Celebración de las fiestas nacionales con actividades patrióticas y culturales." },
    { titulo: "Premiación Cuadro de Honor", descripcion: "Ceremonia especial para reconocer el mérito académico de nuestros estudiantes." },
    { titulo: "English Day", descripcion: "Día dedicado a fomentar el uso del idioma inglés mediante actividades lúdicas." },
    { titulo: "Encuentro de Dos Mundos", descripcion: "Conmemoración del encuentro de civilizaciones en la historia americana." },
    { titulo: "Aniversario Colegio", descripcion: "Celebración del aniversario fundacional de nuestro colegio." },
    { titulo: "Semana de la Inclusión", descripcion: "Actividades destinadas a promover la diversidad y la inclusión educativa." },
    { titulo: "Paso a Pasito Leo Solito", descripcion: "Evento para los más pequeños que inician su proceso lector." },
    { titulo: "Ya Soy Grande", descripcion: "Celebración para estudiantes que avanzan en su desarrollo escolar." },
    { titulo: "Ceremonia de Transición 8° Básico", descripcion: "Ceremonia para quienes concluyen la enseñanza básica." },
    { titulo: "Licenciatura IV° Medio", descripcion: "Ceremonia solemne de egreso de la enseñanza media." }
  ];

  return (
    <div className="t2-page">
      <div className="t2-shell">

        {/* HERO – Estilo 2 encapsulado */}
        <SectionHero
          variant="t2"
          pill="📅 Vida Escolar"
          title="Efemérides Escolares"
          subtitle={`Fechas y celebraciones que fortalecen la identidad, la convivencia
y el sentido de comunidad a lo largo del año escolar.`}
        />

        {/* CONTENIDO */}
        <section className="t2-content-only">
          <article className="t2-card">
            <h2 className="t2-h2">Celebrar también es educar</h2>
            <p className="t2-p">
              Las efemérides son instancias formativas que promueven valores,
              participación y memoria colectiva. Cada celebración aporta a la
              construcción de una comunidad educativa más cercana y consciente.
            </p>
            <div className="t2-callout">
              <strong>Enfoque:</strong> identidad, respeto y participación activa.
            </div>
          </article>

          {efemerides.map((e, i) => (
            <article key={i} className="t2-card">
              <h2 className="t2-h2">{e.titulo}</h2>
              <p className="t2-p">{e.descripcion}</p>
            </article>
          ))}

          <article className="t2-card">
            <h2 className="t2-h2">Calendario y actividades</h2>
            <p className="t2-p">
              Las fechas específicas y actividades asociadas se informan durante
              el año escolar. Para conocer el calendario actualizado y las próximas
              celebraciones, contáctanos.
            </p>
            <div className="t2-quote">
              Las tradiciones crean recuerdos; los recuerdos construyen comunidad.
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <BotonContacto
                onClick={() => navigate('/contacto')}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
              >
                Consultar Efemérides
              </BotonContacto>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Efemerides;
