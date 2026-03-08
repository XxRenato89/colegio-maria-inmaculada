// src/pages/CRA.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewsCarousel from '../components/CarruselCRA';
import SectionHero from '../components/SectionHero';
import CTA from '../components/CTA';
import '../App.css';

import cuentos1 from '../images/img_CRA_noticias/cuentos1.webp';
import cuentos2 from '../images/img_CRA_noticias/cuentos2.webp';
import cuentos3 from '../images/img_CRA_noticias/cuentos3.webp';
import cuentos4 from '../images/img_CRA_noticias/cuentos4.webp';

import debate1 from '../images/img_CRA_noticias/debate1.webp';
import debate2 from '../images/img_CRA_noticias/debate2.webp';
import debate4 from '../images/img_CRA_noticias/debate4.webp';
import debate5 from '../images/img_CRA_noticias/debate5.webp';

import apo2 from '../images/img_CRA_noticias/apo2.webp';
import apo3 from '../images/img_CRA_noticias/apo3.webp';
import apo4 from '../images/img_CRA_noticias/apo4.webp';

/** ✅ Carrusel interno: una imagen grande + botones */
const InlineImageCarousel = ({ images = [], altPrefix = 'Imagen' }) => {
  const [idx, setIdx] = useState(0);

  if (!images.length) return null;

  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <div style={{ marginTop: '1rem' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid #ececec',
          boxShadow: '0 12px 30px rgba(0,0,0,0.10)'
        }}
      >
        <img
          src={images[idx]}
          alt={`${altPrefix} ${idx + 1}`}
          className="cra-inline-img"
          style={{
            width: '100%',
            height: '420px',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          style={{
            position: 'absolute',
            top: '50%',
            left: '12px',
            transform: 'translateY(-50%)',
            width: '42px',
            height: '42px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.55)',
            background: 'rgba(0,0,0,0.40)',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)'
          }}
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          style={{
            position: 'absolute',
            top: '50%',
            right: '12px',
            transform: 'translateY(-50%)',
            width: '42px',
            height: '42px',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.55)',
            background: 'rgba(0,0,0,0.40)',
            color: '#fff',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(6px)'
          }}
        >
          ›
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '12px',
            background: 'rgba(0,0,0,0.45)',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '999px',
            fontSize: '0.9rem',
            border: '1px solid rgba(255,255,255,0.25)',
            backdropFilter: 'blur(6px)'
          }}
        >
          {idx + 1}/{images.length}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '10px',
          flexWrap: 'wrap'
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            style={{
              width: i === idx ? '22px' : '10px',
              height: '10px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              background: i === idx ? '#181760' : 'rgba(24,23,96,0.25)',
              transition: 'all 0.18s ease'
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 700px){
          .cra-inline-img { height: 260px !important; }
        }
      `}</style>
    </div>
  );
};

const CRA = () => {
  const navigate = useNavigate();

  const horariosBasica = [
    "Lunes a Jueves: 08:30 a 15:55 hrs.",
    "Viernes: 08:30 a 14:15 hrs."
  ];

  const horariosMedia = [
    "Lunes y Martes: 08:30 a 15:55 hrs.",
    "Miércoles y Jueves: 08:30 a 17:30 hrs.",
    "Viernes: 08:30 a 14:15 hrs."
  ];

  const principalesActividades = [
    "Préstamo individual y colectivo de libros.",
    "Lectura oral y guiada.",
    "Formación de lectores.",
    "Extensión cultural de la comunidad educativa.",
    "Centro de recursos funcionales y creativos.",
    "Comprensión lectora crítica y reflexiva.",
    "Apoyo con recursos tecnológicos para la investigación (computador, internet e impresora).",
    "Uso activo de material para actividades (hojas de block/oficio, lápices, gomas, reglas, juegos de mesa, etc.)."
  ];

  const objetivosEspecificos = [
    "Promover el trabajo autónomo y colaborativo entre docentes y estudiantes.",
    "Crear el hábito de utilizar textos y materiales C.R.A.",
    "Crear el hábito de la puntualidad en la devolución de libros y materiales en fechas estipuladas.",
    "Motivar a los estudiantes a participar activamente de las actividades CRA.",
    "Fomentar la lectura de forma presencial y con préstamos domiciliarios.",
    "Generar un impacto significativo en el mejoramiento institucional y en los aprendizajes."
  ];

  const actividadesProgramadas = [
    "Asistencia a biblioteca central una vez a la semana (NT1 a 4° medio).",
    "Club Literario en patios centrales (1° básico a 4° medio).",
    "Día del Libro: lectura y redacción de textos (por ciclos).",
    "Búsqueda de significado de palabras desconocidas en lecturas (1° básico a 4° medio).",
    "Palabra clave de la semana con su significado (por ciclos).",
    "Préstamo de libros en biblioteca móvil para lectura en el hogar (por ciclos).",
    "Dramatizaciones de libros leídos (1 vez por semestre, por ciclos).",
    "Conversatorio de textos leídos durante el semestre (semestral, por ciclos).",
    "Olimpiadas Académicas (primer semestre, por ciclos).",
    "Debates y conversatorios (7° básico a 4° medio).",
    "Concurso de deletreo (español e inglés, por ciclos).",
    "Revista escolar MIDLA 2024 para difusión del Plan CRA (enseñanza media).",
    "Roles de liderazgo como monitores CRA (por ciclos).",
    "Tutorías de aprendizaje entre pares (por ciclos).",
    "Investigación de efemérides para comunicar en fichero escolar (por ciclos)."
  ];

  const newsItems = [
    {
      title: 'Jornada de cuentacuentos en biblioteca',
      excerpt: 'Jornada de cuentacuentos realizada en la biblioteca, en la que docentes interpretaron el relato El almohadón de plumas.',
      image: cuentos1,
      href: ''
    },
    {
      title: 'Jornada de debate y conversatorio',
      excerpt: 'Se realizó una jornada de debate y conversatorio en el CRA, donde estudiantes participaron activamente exponiendo ideas, аргumentando con respeto y escuchando distintos puntos de vista.',
      image: debate1,
      href: ''
    },
  ];

  const imagenesCuentacuentos = [cuentos1, cuentos2, cuentos3, cuentos4];
  const imagenesDebate = [debate1, debate2, debate4, debate5];
  const imagenesApoderado = [apo2, apo3, apo4]

  return (
    <div className="t2-page">
      <div className="t2-shell">

        {/* HERO */}
        <SectionHero
          variant="t2"
          pill="📚 Biblioteca CRA"
          title="Centro de Recursos para el Aprendizaje"
          subtitle={`El CRA impulsa la literacidad —lectura, escritura y oralidad— y fortalece habilidades de comprensión,
razonamiento y aprendizaje interdisciplinario.`}
        />

        {/* Carrusel de noticias */}
        <section style={{ marginTop: '1rem' }}>
          <NewsCarousel items={newsItems} interval={5000} />
        </section>

        {/* ✅ Noticia grande estilo periódico + galería abajo */}
        <section style={{ marginTop: '1rem' }}>
          <article className="t2-card">
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  background: '#fffbe6',
                  border: '1px solid #f3e7a5',
                  color: '#181760',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Noticia CRA
              </span>
              <span style={{ color: '#666', fontSize: '0.95rem' }}>Biblioteca • Cuentacuentos • 23/09/2025</span>
            </div>

            <h2 className="t2-h2" style={{ marginTop: '0.6rem' }}>
              Jornada de cuentacuentos en biblioteca
            </h2>

            <p className="t2-p">
              Jornada de cuentacuentos realizada en la biblioteca, en la que docentes interpretaron el relato{' '}
              <strong>El almohadón de plumas</strong>. La actividad contó con el apoyo de profes PIE y se caracterizó
              por una puesta en escena expresiva, que favoreció la comprensión del texto y la participación de los
              estudiantes, promoviendo el gusto por la lectura y el trabajo colaborativo.
            </p>

            {/* ✅ IMÁGENES DENTRO DE LA NOTICIA (parte inferior) */}
            <InlineImageCarousel images={imagenesCuentacuentos} altPrefix="Cuentacuentos" />
          </article>
        </section>
        <section style={{ marginTop: '1rem' }}>
          <article className="t2-card">
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  background: '#fffbe6',
                  border: '1px solid #f3e7a5',
                  color: '#181760',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Noticia CRA
              </span>
              <span style={{ color: '#666', fontSize: '0.95rem' }}>Biblioteca • Cuentacuentos • 23/09/2025</span>
            </div>

            <h2 className="t2-h2" style={{ marginTop: '0.6rem' }}>
              Apoderada presenta cuentos a alumnos
            </h2>

            <p className="t2-p">
              En una emotiva actividad escolar, una apoderada sorprendió a los estudiantes al leerles un cuento infantil vestida de perrito,
              creando un ambiente cercano, divertido y lleno de imaginación.{' '} Durante la lectura, nuestra querida apoderada lee en voz alta de manera
              expresiva, deteniéndose a señalar las imágenes, reforzando vocabulario y para luego realizar preguntas de comprensión.
              Los niños y niñas junto a sus tías disfrutaron de una experiencia maravillosa, incentivando a los niños y niñas a la lectura. La iniciativa buscó fomentar
              la lectura y fortalecer el vínculo entre familia y escuela,
              demostrando que aprender también puede ser una experiencia alegre y creativa.
            </p>

            {/* ✅ IMÁGENES DENTRO DE LA NOTICIA (parte inferior) */}
            <InlineImageCarousel images={imagenesApoderado} altPrefix="Cuentacuentos" />
          </article>
        </section>
        <section style={{ marginTop: '1rem' }}>
          <article className="t2-card">
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span
                style={{
                  display: 'inline-block',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '999px',
                  background: '#fffbe6',
                  border: '1px solid #f3e7a5',
                  color: '#181760',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}
              >
                Noticia CRA
              </span>
              <span style={{ color: '#666', fontSize: '0.95rem' }}>Biblioteca • Debate • 03/10/2025</span>
            </div>

            <h2 className="t2-h2" style={{ marginTop: '0.6rem' }}>
              Jornada de debate y conversatorio
            </h2>

            <p className="t2-p">
              Se realizó una jornada de <strong>debate y conversatorio</strong> en el CRA, donde estudiantes participaron
              activamente exponiendo ideas, аргumentando con respeto y escuchando distintos puntos de vista. La actividad
              fortaleció habilidades de <strong>expresión oral</strong>, pensamiento crítico y convivencia, promoviendo el
              trabajo colaborativo y la reflexión.
            </p>

            {/* ✅ IMÁGENES DENTRO DE LA NOTICIA (parte inferior) */}
            <InlineImageCarousel images={imagenesDebate} altPrefix="Debate CRA" />
          </article>
        </section>


        {/* CONTENIDO (se mantiene todo lo que tenías desde aquí) */}
        <section className="t2-content-only" style={{ marginTop: '1rem' }}>
          <article className="t2-card">
            <h2 className="t2-h2">Descripción del Programa CRA</h2>
            <p className="t2-p">
              El Plan Anual CRA busca reactivar la literacidad fomentando el desarrollo de habilidades de comprensión
              lectoescritura y razonamiento lógico, alineado al currículum nacional, mediante estrategias diversificadas
              y trabajo interdisciplinario.
            </p>

            <div className="t2-callout">
              <strong>Enfoque:</strong> aprendizaje interdisciplinario, evaluación formativa y participación activa de
              estudiantes líderes.
            </div>
          </article>

          <article className="t2-card">
            <h2 className="t2-h2">Objetivo general</h2>
            <p className="t2-p">
              Implementar estrategias diversificadas para fomentar lectura, escritura y oralidad en todas las actividades
              curriculares desde NT1 hasta IV° medio.
            </p>
          </article>

          <article className="t2-card">
            <h2 className="t2-h2">Objetivos específicos</h2>
            <ul className="t2-p" style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {objetivosEspecificos.map((o, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{o}</li>
              ))}
            </ul>
          </article>

          <article className="t2-card">
            <h2 className="t2-h2">Horarios de funcionamiento</h2>

            <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>Educación Básica</h3>
            <ul className="t2-p" style={{ paddingLeft: '1.25rem', marginTop: 0 }}>
              {horariosBasica.map((h, i) => (
                <li key={i} style={{ marginBottom: '0.35rem' }}>{h}</li>
              ))}
            </ul>

            <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>Educación Media</h3>
            <ul className="t2-p" style={{ paddingLeft: '1.25rem', marginTop: 0 }}>
              {horariosMedia.map((h, i) => (
                <li key={i} style={{ marginBottom: '0.35rem' }}>{h}</li>
              ))}
            </ul>
          </article>

          <article className="t2-card">
            <h2 className="t2-h2">Principales actividades del CRA</h2>
            <ul className="t2-p" style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {principalesActividades.map((a, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{a}</li>
              ))}
            </ul>
          </article>

          <article className="t2-card">
            <h2 className="t2-h2">Actividades programadas (resumen)</h2>
            <ul className="t2-p" style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {actividadesProgramadas.map((a, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{a}</li>
              ))}
            </ul>
          </article>
        </section>

        {/* CTA final */}
        <CTA
          title="¿Quieres conocer más del CRA?"
          text="Si necesitas información sobre horarios, préstamos, actividades o apoyo académico, contáctanos y te orientamos."
          primaryLabel="Ir a Contacto"
          onPrimaryClick={() => navigate('/contacto')}
          secondaryLabel="Volver al Inicio"
          onSecondaryClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default CRA;