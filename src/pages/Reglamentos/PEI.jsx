// src/pages/PEI.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const PEI = () => {
  const navigate = useNavigate();
  return (
    <div style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
      lineHeight: '1.6'
    }}>

      {/* Título Principal */}
      <section style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          color: '#181760',
          fontSize: '2.2rem',
          marginBottom: '0.5rem'
        }}>
          PROYECTO EDUCATIVO INSTITUCIONAL (PEI)
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Colegio María Inmaculada de los Ángeles
        </p>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <a
            href={`${import.meta.env.BASE_URL}docs/reglamentos/pei.pdf`}
            download
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none', padding: '0.8rem 1.5rem' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            📄 Descargar PEI (PDF)
          </a>
        </div>
      </section>

      {/* Contenido del PEI */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>

        {/* Introducción */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: '#181760',
            marginBottom: '1rem',
            borderBottom: '2px solid #181760',
            paddingBottom: '0.5rem'
          }}>
            PRESENTACIÓN
          </h2>
          <p>
            El Colegio María Inmaculada de Los Ángeles cuenta con un Proyecto Educativo Institucional (PEI)
            entendido como ideario que trata de integrar y explicar los valores y actitudes, que emanan de nuestra
            naturaleza de Institución Católica con la espiritualidad de la virgen María. Dependiente de la
            Corporación Educacional María Inmaculada de Los Ángeles.
          </p>
          <p>
            Nuestro colegio respondiendo a las transformaciones que se están experimentado en el campo de la
            tecnología, de las comunicaciones, del conocimiento, del impacto ecológico por el calentamiento global
            y el efecto sin precedentes que dejó la pandemia Covid19, los cuales han provocado cambios que
            marcarán un hito en la sociedad. Desde esta realidad hemos elaborado nuestro Proyecto Educativo
            2025, en el marco de las instituciones que aprenden y crean su propio conocimiento, bajo el paradigma
            Socio – Cognitivo, constructivo significativo, reconstruyendo sus procesos pedagógicos crítica y
            creativamente, ya que la inquietud ante estos desafíos es la necesidad de llevar a cabo la transformación
            de nuestra Institución, provocando cambios que permitan articular de manera efectiva las demandas
            económicas, industriales, sociales, políticas y culturales con los procesos de formación y educación.
          </p>
          <p>Otro fenómeno ocurrido en nuestra sociedad actual y que debe impactar el colegio es la nueva forma
            de organización del trabajo, que cada año que pasa requiere de menos mano de obra excluyendo a
            gran parte de la población. Por eso urge proyectos educativos que acojan a los excluidos y desarrollen
            capacidades que los incluyan nuevamente en la sociedad, especialmente habilidades para crear nuevos
            trabajos o ser profesionales para nuevas profesiones.</p>
          <p>Por tal razón, nuestro PEI tiene el propósito de fomentar una educación que aliente a pensar por sí
            mismo, que propicie el autoanálisis y la resolución de problemas que se presenten en lo cotidiano.
            Educación productiva y útil. Que sea transformadora, que tenga de base la imaginación, la inventiva,
            los conocimientos administrativos y financieros.</p>
          <p>
            Los principales cambios que se propone realizar nuestro colegio pasan por sus aulas y las formas de
            hacer en ellas, para lo cual, se implementarán diferentes modalidades de trabajo: modalidad híbrida,
            priorización curricular, pausas activas y grupos de aprendizaje en todos los cursos, atendidos por un
            equipo multidisciplinario siguiendo un nuevo Diseño Curricular de Aula considerando proyectos de
            aprendizaje individuales (PACI) y colectivos que permitan diversificar las estrategias de aprendizaje, con
            el objeto de que todos los estudiantes puedan aprender según sus estilos y ritmos de aprendizaje.
          </p>
          <p>
            Pilar fundamental del Currículum del colegio María Inmaculada de Los Ángeles, es la educación
            financiera, la conexión con la vida laboral y la empresa. Para lo cual contamos con talleres de reciclaje
            y creación, brigada medioambiental y oficios como: Cuidado del adulto Mayor, Salón y Estética, Textil y
            Cocina saludable, los que incluyen educación financiera e inventiva.
          </p>
          <p>
            Para enfrentar los desafíos que encierra este proyecto, nuestra Institución privilegia la formación
            permanente de su personal docente y asistentes de la educación, principalmente el
            autoperfeccionamiento, asumiendo la mediación entre iguales y el trabajo cooperativo como estrategia
            metodológica.
          </p>
          <p>Junto con perfeccionarnos, invitamos a todos los integrantes de esta Comunidad Educativa a asumirlo
            y a hacer vida los grandes ideales que encarna nuestro proyecto.</p>
        </div>

        {/* Misión */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: '#181760',
            marginBottom: '1rem',
            borderBottom: '2px solid #181760',
            paddingBottom: '0.5rem'
          }}>
            ¿Cuál es nuestra Misión?
          </h2>
          <p>
            El colegio María Inmaculada de Los Ángeles existe para formar estudiantes que sean agentes de
            cambio, personas exitosas en el mundo laboral y además ciudadanos con un alto componente
            ético, comprometidos con su fe en Dios, con espíritu crítico, creador y con libertad responsable,
            para ser agentes de cambio cultural, preparados para la acción y mejora de la calidad de vida de
            sus familias y sociedad en general
          </p>
        </div>

        {/* vision */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{
            color: '#181760',
            marginBottom: '1rem',
            borderBottom: '2px solid #181760',
            paddingBottom: '0.5rem'
          }}>
            Vision
          </h2>
          <p>
            El colegio María Inmaculada de Los Ángeles aspira a ser una institución reconocida en la provincia
            del Biobío, por su destacada gestión de liderazgo, autonomía y desarrollo sustentable de los
            estudiantes, en conexión efectiva con empresas y universidades locales. Teniendo como
            fundamento la educación católica, con el sello de la espiritualidad mariana, a fin de formar
            personas capaces de integrar saberes y amar sus raíces culturales para que se conviertan en
            agentes de cambio de la sociedad
          </p>
        </div>
      </section>

      {/* Sección de información adicional */}
      <section style={{
        maxWidth: '800px',
        margin: '3rem auto',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#fffbe6',
        borderRadius: '10px'
      }}>
        <h3 style={{ color: '#181760', marginBottom: '1rem' }}>
          Formación valórica y cristiana
        </h3>
        <p>
          Nuestro establecimiento se basa en la doctrina cristiana católica, que inspira su quehacer en la
          espiritualidad mariana, y genera instancias de participación y encuentros de formación espiritual,
          estos principios rigen el panel de valores del PEI del Establecimiento.
        </p>
      </section>
      {/* Botón de Regreso */}
      <section style={{
        textAlign: 'center',
        margin: '2rem 0'
      }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#181760',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#FFD700'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#181760'}
        >
          ← Volver al inicio
        </button>
      </section>
    </div>

  );
};

export default PEI;
