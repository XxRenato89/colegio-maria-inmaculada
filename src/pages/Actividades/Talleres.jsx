// src/pages/Talleres.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHero from '../../components/SectionHero';
import BotonContacto from '../../components/BotonContacto';
import '../../App.css';

const Talleres = () => {
  const navigate = useNavigate();

  const talleres = [
    {
      titulo: "Taller Salón y Estética",
      descripcion: `Los estudiantes desarrollarán habilidades para realizar tratamientos en el área
de imagen y estética corporal aplicando procedimientos cosmetológicos, tales
como higiene, tratamientos faciales, maquillaje, manicura, atención en
peluquería, en corte, peinado y color, considerando las necesidades según la
evaluación diagnóstica.`
    },
    {
      titulo: "Taller de Gimnacia Rítmica",
      descripcion: `El Colegio María Inmaculada de Los Ángeles ofrece el Taller de Gimnasia Rítmica,
dirigido a estudiantes de Enseñanza Básica y Enseñanza Media, como un espacio
formativo que integra el movimiento, la expresión corporal y el desarrollo integral de
las alumnas.

Este taller combina los elementos propios de la gimnasia rítmica, como el trabajo
con implementos, la coordinación con la música, la flexibilidad y la expresión
artística, con fundamentos de la gimnasia artística, tales como giros, saltos,
equilibrios, desplazamientos, acrobacias básicas y control corporal. Esta integración
permite a las estudiantes desarrollar habilidades físicas de manera progresiva,
segura y adaptada a su etapa de crecimiento.`
    },
    {
      titulo: "Taller de Danza Moderna",
      descripcion: `Este taller está dirigido a estudiantes de Segundo Ciclo de Enseñanza Básica y Enseñanza Media,
como un espacio formativo que promueve la expresión corporal, la creatividad y el
desarrollo integral de los estudiantes a través del movimiento.

La danza moderna se caracteriza por la exploración del cuerpo, el uso del espacio,
el ritmo y la interpretación, permitiendo a los estudiantes desarrollar coordinación,
conciencia corporal, flexibilidad y control del movimiento. A través de coreografías y
dinámicas grupales, el taller estimula la creatividad, la sensibilidad artística y la
capacidad de comunicar emociones e ideas mediante el lenguaje corporal.
`
    },
    {
      titulo: "Taller Entre Hilos y Agujas (Textil)",
      descripcion: `Los estudiantes desarrollarán su habilidad para reconocer y potenciar las
características de los materiales textiles, siendo capaz con ello de dar forma a
obras textiles originales, privilegiando el uso de material reciclado y diferentes
técnicas textiles.

Los estudiantes serán capaces de trabajar en forma metódica y autoexigente,
teniendo la capacidad para desarrollar proyectos personales aplicando las
técnicas y conocimientos textiles.`
    },
    {
      titulo: "Taller Cocina Saludable",
      descripcion: `Este taller está orientado a desarrollar en nuestros estudiantes hábitos de
alimentación saludables, a mejorar los hábitos alimentarios de la familia,
prevenir con una alimentación adecuada las enfermedades de la infancia como
las de la edad adulta tales como: mal nutrición por exceso y déficit, diabetes,
etc. Introduciendo conceptos básicos sobre alimentación, nutrición y dieta
equilibrada y saludable. Elaborando diferentes preparaciones de recetas
saludables, aplicando las buenas prácticas de higiene, seguridad e inocuidad.`
    },
    {
      titulo: "Taller de Fútbol",
      descripcion: `Este taller dirigido a
estudiantes de Enseñanza Básica y Enseñanza Media, como un espacio formativo
que promueve la actividad física, el trabajo en equipo y el desarrollo integral de los
estudiantes.

A través de la práctica del fútbol, los estudiantes desarrollan habilidades motrices
como la coordinación, la resistencia, la agilidad y el control corporal, junto con
fundamentos técnicos y tácticos propios del deporte, tales como el dominio del
balón, el pase, el trabajo colectivo y el respeto por las reglas del juego. El taller se
desarrolla en un ambiente formativo que valora el esfuerzo, la constancia y el juego
limpio.`
    },
    {
      titulo: "Taller de Pintura y Manualidades",
      descripcion: `Este taller está dirigido a estudiantes de Nivel Transición y Primer Ciclo de
Enseñanza Básica, como un espacio formativo que estimula la creatividad, la
expresión y el desarrollo integral de los niños y niñas a través del arte.

Este taller invita a los estudiantes a explorar diversas técnicas de pintura y
manualidades, utilizando distintos materiales, colores y texturas, lo que favorece el
desarrollo de la motricidad fina, la coordinación óculo-manual y la creatividad. A
través de actividades lúdicas y guiadas, los niños y niñas aprenden a expresar
ideas, emociones y experiencias de manera artística, fortaleciendo su imaginación y
sensibilidad.`
    },
    {
      titulo: "Taller Radial",
      descripcion: ` Este taller está dirigido a
estudiantes de Segundo Ciclo de Enseñanza Básica y Enseñanza Media, como un
espacio formativo que promueve la comunicación, la creatividad y la participación
activa dentro de la comunidad educativa.

Este taller introduce a los estudiantes en el mundo de la radio, desarrollando
habilidades relacionadas con la locución, la expresión oral, la producción de
contenidos, el trabajo técnico básico y la planificación de programas. Como parte de
sus actividades, los estudiantes serán responsables de organizar la música durante
los recreos, seleccionando y presentando contenidos adecuados para la comunidad
escolar, y participarán en la creación y ejecución de programas radiales,
fortaleciendo su rol protagónico y su sentido de responsabilidad.`
    },
    {
      titulo: "Taller de Bandas",
      descripcion: `El Colegio María Inmaculada de Los Ángeles ofrece el Taller de Bandas, dirigido a
estudiantes de Segundo Ciclo de Enseñanza Básica, como un espacio formativo
que fomenta la expresión musical, la creatividad y el trabajo colaborativo a través de
la música.

Este taller está orientado a la formación de bandas musicales, donde los estudiantes
aprenden y desarrollan habilidades vocales e instrumentales, nociones básicas de
ritmo, armonía y ensamble, así como la interpretación de distintos estilos musicales.
Como parte de su proceso formativo, los participantes se presentarán en diversas
actividades del colegio y en instancias de la comunidad, fortaleciendo su experiencia
escénica y su vínculo con el entorno.`
    },
    {
      titulo: "Taller de Folclor para Apoderados",
      descripcion: `El Colegio María Inmaculada de Los Ángeles ofrece el Taller de Folclor, dirigido
especialmente a los apoderados, como un espacio de encuentro, participación y
valoración de nuestras tradiciones culturales, que fortalece el vínculo entre la familia
y la comunidad educativa.

Este taller invita a los apoderados a conocer y practicar danzas folclóricas chilenas,
promoviendo el rescate de la identidad cultural, el trabajo corporal, el ritmo y la
expresión a través del baile. Como parte de su proceso formativo, los participantes
se presentarán en diversas actividades del colegio, aportando activamente a la vida
escolar y fortaleciendo el sentido de comunidad.`
    }
  ];

  return (
    <div className="t2-page">
      <div className="t2-shell">

        {/* HERO – estilo 2 encapsulado */}
        <SectionHero
          variant="t2"
          pill="🧩 Formación Complementaria"
          title="Talleres Escolares"
          subtitle={`Programas especializados para fortalecer habilidades prácticas, hábitos saludables
y competencias para la vida, complementando la formación académica.`}
        />

        {/* CONTENIDO */}
        <section className="t2-content-only">
          <article className="t2-card">
            <h2 className="t2-h2">¿Qué ofrecen nuestros talleres?</h2>
            <p className="t2-p">
              Los talleres están diseñados para desarrollar competencias reales: creatividad, cuidado personal,
              hábitos saludables, apoyo comunitario y habilidades técnicas aplicables al hogar y al futuro laboral.
            </p>
            <div className="t2-callout">
              <strong>Idea central:</strong> aprendizaje práctico, guiado y con propósito.
            </div>
          </article>

          {talleres.map((taller, index) => (
            <article key={index} className="t2-card">
              <h2 className="t2-h2">{taller.titulo}</h2>
              <p className="t2-p" style={{ whiteSpace: 'pre-line' }}>
                {taller.descripcion}
              </p>
            </article>
          ))}

          <article className="t2-card">
            <h2 className="t2-h2">Inscripciones y disponibilidad</h2>
            <p className="t2-p">
              La oferta de talleres puede variar según cupos, niveles y calendario escolar. Para conocer horarios,
              requisitos e inscripciones, contáctanos directamente.
            </p>

            <div className="t2-quote">
              <strong>Recomendación:</strong> consulta con anticipación para asegurar cupos y compatibilidad horaria.
            </div>

            <div style={{ marginTop: '1.5rem' }}>
              <BotonContacto
                onClick={() => navigate('/contacto')}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
              >
                Consultar por Talleres
              </BotonContacto>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Talleres;
