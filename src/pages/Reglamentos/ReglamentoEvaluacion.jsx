// src/pages/ReglamentoEvaluacion.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ReglamentoEvaluacion = () => {
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
          REGLAMENTO DE PROMOCIÓN Y EVALUACIÓN
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          ANEXO 7 - Normativa Interna del Colegio María Inmaculada de los Ángeles
        </p>
      </section>

      {/* Contenido del Reglamento */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        
        {/* Título I: Marco Legal */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: '#181760', 
            marginBottom: '1rem',
            borderBottom: '2px solid #181760',
            paddingBottom: '0.5rem'
          }}>
            TÍTULO I: MARCO LEGAL
          </h2>
          <p style={{ marginBottom: '1rem' }}>
            El Colegio MARÍA INMACULADA DE LOS ANGELES, presenta a la Comunidad Educativa su
            Normativa Interna de Evaluación y Promoción, tomando en consideración el Decreto 67 que
            comenzó a regir el año 2020, el cual permite a los Establecimientos Educacionales tomar
            decisiones en materias referidas al proceso de evaluación del aprendizaje de los estudiantes.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Complementan este reglamento el Decreto N°83/2015 y Decreto N°170/2009.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            El Decreto 67 reemplaza los Decretos N° 511/97 y sus modificaciones para Enseñanza Básica,
            Decreto N°112/99 para los cursos Primeros y Segundos Medios y el Decreto exento N°83 de 2001
            para los cursos Terceros y Cuartos Medios.
          </p>
          <p>
            Este nuevo decreto permite avanzar hacia un mayor uso pedagógico de la evaluación y reducir la
            repitencia mediante un mayor acompañamiento a los estudiantes. Se estructura en tres grandes
            temáticas: Evaluación, Calificación y Promoción.
          </p>
        </div>

        {/* Marco Legal por Niveles */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ 
            color: '#181760', 
            marginBottom: '1rem'
          }}>
            DECRETO MARCO/BASE POR NIVEL EDUCATIVO
          </h3>
          
          {/* Nivel de Transición */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ 
              color: '#4B0082', 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              Nivel de Transición I y II
            </h4>
            <p>Bases Curriculares Decreto 481/2018</p>
          </div>

          {/* 1° a 6° Básico */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ 
              color: '#4B0082', 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              1° a 6° Básico
            </h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>
                Decreto de Evaluación - Decreto 67/2018
              </li>
              <li style={{ marginBottom: '0.3rem' }}>
                Decreto Planes de Estudio - Decreto 2960/2012 Lenguaje y Comunicación, Matemática,
                Historia, Geografía y Ciencias Sociales, Ciencias Naturales, Idioma Extranjero Inglés.
              </li>
              <li>
                Decreto Planes de Estudio - Decreto 2960/2012 Artes Visuales, Música, Educación Física y Salud,
                Tecnología y Orientación.
              </li>
            </ul>
          </div>

          {/* 7° a 8° Básico */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ 
              color: '#4B0082', 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              7° a 8° Básico
            </h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>
                Decreto de Evaluación - Decreto 67/2018
              </li>
              <li style={{ marginBottom: '0.3rem' }}>
                Decreto Planes y Programas de estudio - Decreto N°169/2014 Lengua y Literatura, Matemática, Idioma
                Extranjero: inglés.
              </li>
              <li>
                Decreto 169/2014- Historia, Geografía y Ciencias Sociales y Ciencias Naturales. Decreto
                169/2014- Artes Visuales, Música, Tecnología y Orientación.
              </li>
            </ul>
          </div>

          {/* 1° y 2° Medio */}
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ 
              color: '#4B0082', 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              1° y 2° Medio
            </h4>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>
                Decreto de Evaluación - Decreto 67/2018
              </li>
              <li>
                Decreto Planes y Programas de estudio - Decreto N°1264/2016 Lengua y Literatura, Idioma Extranjero:
                Inglés, Matemática, Historia, Geografía y Ciencias Sociales, Ciencias Naturales, Tecnología o Música,
                Educación Física y Salud, Orientación y Religión.
              </li>
            </ul>
          </div>

          {/* 3° y 4° Medio */}
          <div>
            <h4 style={{ 
              color: '#4B0082', 
              marginBottom: '0.5rem',
              fontSize: '1.1rem'
            }}>
              3° Medio y 4° Medio
            </h4>
            <p>
              Decreto de Evaluación - Decreto 67/2018 Nuevas Bases Curriculares
            </p>
          </div>
        </div>

        {/* Consideraciones Finales */}
        <div>
          <h3 style={{ 
            color: '#181760', 
            marginBottom: '1rem'
          }}>
            CONSIDERACIONES GENERALES
          </h3>
          <p>
            Esta normativa busca garantizar una evaluación justa, equitativa y formativa que permita
            el desarrollo integral de cada estudiante, respetando los distintos ritmos de aprendizaje
            y promoviendo la excelencia académica en un ambiente de respeto y colaboración.
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
          ¿Necesitas más información sobre este reglamento?
        </h3>
        <p>
          Para consultas específicas sobre la evaluación y promoción, 
          comunícate con la dirección del colegio.
        </p>
        <button
              onClick={() => navigate('/contacto')}
              className="btn-primary"
              onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
            >
              Ir a Contacto
            </button>
      </section>
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
    </div>
  );
};

export default ReglamentoEvaluacion;
