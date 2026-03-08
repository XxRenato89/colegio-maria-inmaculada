// src/pages/ReglamentoApoderados.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const RegulacionesGenerales = () => {
  const navigate = useNavigate();

  const regulacionesGenerales = [
    {
      categoria: "ARTÍCULO 1:",
      descripcion: "MODIFICACIÓN, REVISIÓN Y TEMPORALIDAD",
      items: [
        "El reglamento se presenta para consulta todos los años en el Consejo Escolar. En caso de que el Consejo lo estimenecesario aporta sus consultas y sugerencias acorde a sus disposiciones, estas propuestas de modificación se socializan con toda la comunidad educativa, instancias en que se realizan observaciones y nuevas propuestas. Estas modificaciones se incluyen en el Reglamento para su puesta en vigencia toda vez que sea conocido por la Comunidad a través de las vías de difusión oficiales"
      ]
    },
    {
      categoria: "ARTÍCULO 2:",
      descripcion: "VIGENCIA DE LAS MODIFICACIONES",
      items: [
        "Vencido el plazo de consulta, se procederá a aprobar la modificación, mediante la firma de la Directora. Para todos los efectos legales y administrativos las modificaciones se entenderán que rigen a contar del día siguiente a la fecha de recepción en el Ministerio Educación, lo que se hará mediante la entrega formal de una copia del reglamento con sus modificaciones"
      ]
    },
    {
      categoria: "ARTÍCULO 3:",
      descripcion: "DIFUSIÓN",
      items: [
        "El Reglamento Interno y de Convivencia Escolar se consulta cada año en el Consejo Escolar, sus modificaciones están siempre disponibles en el colegio en Secretaría Académica y también mediante publicación del Reglamento en la plataforma web dispuesta para ese medio por el colegio, en la actualidad es: www.appoderado.cl a disposición tanto de estudiantes como apoderados. Así mismo, la entrega del Reglamento se materializa en un extracto para los apoderados y estudiantes durante el periodo de matrícula. En caso de modificación extraordinaria al reglamento, el Equipo de Gestión Directiva del Colegio asume la coordinación de dichos cambios, luego se convoca al Consejo Escolar para informar sobre las modificaciones. Una vez consultado el Consejo Escolar se informa a los apoderados en la fecha de reunión más próxima al cambio realizado, según el calendario escolar de reuniones de apoderados, se deja registro de su entrega a través de las firmas de asistencia a la reunión por parte de los apoderados. Luego de ello el Reglamento es nuevamente declarado en la plataforma SIGE del Ministerio de Educación"]
    },
    {
      categoria: "ARTÍCULO 4:",
      descripcion: "CIRCULARES",
      items: [
        "Las circulares, instrucciones y comunicaciones que emite el establecimiento tienen carácter difusivo, por tanto, su obligatoriedad queda sujeta a los Principios y valores Institucionales del Proyecto Educativo y las disposiciones contenidas en este reglamento"
      ]
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

      {/* Encabezado */}
      <section style={{
        textAlign: 'center',
        marginBottom: '2rem'
      }}>
        <h1 style={{
          color: '#181760',
          fontSize: '2.2rem',
          marginBottom: '0.5rem'
        }}>
          REGULACIONES INSTITUCIONAL
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          El siguiente documento establece las normativas y directrices que rigen la convivencia y el funcionamiento del colegio María Inmaculada de Los Ángeles.
        </p>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <a
            href="/reglamentos/reglamentos.pdf"
            download
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none', padding: '0.8rem 1.5rem' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            📄 Descargar RICE (PDF)
          </a>
        </div>

        {/* Aviso importante */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '5px',
          padding: '1rem',
          marginTop: '1rem',
          maxWidth: '600px',
          margin: '1rem auto'
        }}>
          <p style={{
            color: '#856404',
            fontSize: '0.9rem',
            margin: 0
          }}>
            <strong>VISIÓN:</strong>
            El colegio María Inmaculada de Los Ángeles aspira a ser una institución reconocida en la provincia de Biobío, por su
            destacada gestión de liderazgo, autonomía y desarrollo sustentable de los estudiantes, en conexión efectiva con empresas
            y universidades locales. Teniendo como fundamento la antropología cristiana, con el sello de la espiritualidad mariana, a fin
            de formar personas capaces de integrar saberes y amar sus raíces culturales para que se conviertan en agentes de cambio
            de la sociedad.
          </p>
        </div>

        {/* Aviso importante */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '5px',
          padding: '1rem',
          marginTop: '1rem',
          maxWidth: '600px',
          margin: '1rem auto'
        }}>
          <p style={{
            color: '#856404',
            fontSize: '0.9rem',
            margin: 0
          }}>
            <strong>MISIÓN:</strong>
            El colegio María Inmaculada de Los Ángeles existe para formar estudiantes que sean agentes de cambio, personas exitosas
            en el mundo laboral y además ciudadanos con un alto componente valórico, comprometidos con su fe en Dios, con espíritu
            crítico, creador y con libertad responsable, para ser agentes de cambio cultural, preparados para la acción y mejora de la
            calidad de vida de sus familias y sociedad en general.
          </p>
        </div>
      </section>

      {/* Introducción */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{
          color: '#181760',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Propósito del Reglamento
        </h2>
        <p style={{
          fontSize: '1.05rem',
          lineHeight: '1.6',
          textAlign: 'justify'
        }}>
          Este reglamento establece desde la estructura general de la normativa del establecimiento
          hasta los derechos y deberes de los apoderados como miembros
          fundamentales de nuestra comunidad educativa. Reconocemos que la educación es
          un proceso compartido entre la institución, los estudiantes y las familias. Este
          documento busca promover una relación colaborativa y constructiva entre todos los
          actores involucrados en el desarrollo integral de nuestros estudiantes.
        </p>
      </section>

      {/* Normas Generales */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 2rem',
        padding: '0 1rem'
      }}>
        <h2 style={{
          color: '#181760',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Normas Generales
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {regulacionesGenerales.map((regulacion, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '1.5rem',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0'
              }}
            >
              <h3 style={{
                color: '#181760',
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>
                {regulacion.categoria}
              </h3>
              <p style={{
                color: '#666',
                marginBottom: '1rem',
                fontStyle: 'italic'
              }}>
                {regulacion.descripcion}
              </p>
              <ul style={{
                paddingLeft: '1.2rem',
                color: '#444'
              }}>
                {regulacion.items.map((item, itemIndex) => (
                  <li key={itemIndex} style={{ marginBottom: '0.5rem' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compromiso y Colaboración */}
      <section style={{
        maxWidth: '900px',
        margin: '2rem auto',
        backgroundColor: '#fff3cd',
        padding: '2rem',
        borderRadius: '10px',
        border: '1px solid #ffeaa7'
      }}>
        <h2 style={{
          color: '#856404',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Compromiso y Colaboración
        </h2>
        <p style={{
          marginBottom: '1rem',
          textAlign: 'justify'
        }}>
          El compromiso mutuo entre la institución y los apoderados es fundamental para
          el éxito educativo de nuestros estudiantes.
        </p>
        <ul style={{
          paddingLeft: '1.5rem',
          color: '#444'
        }}>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Con la entrada en vigor de la Ley de Violencia Escolar (Nº20.536) y acogiendo las directrices de la Superintendencia
              de Educación sobre convivencia escolar, el Colegio María Inmaculada de Los Ángeles implementa un proceso de reflexión y
              revisión de instrumentos, procesos y prácticas sobre la gestión de la convivencia escolar. Lo anterior, con el propósito de
              cumplir con la normativa vigente, enmarcada en la propuesta educativa con el sello de la espiritualidad Mariana, enfoque
              formativo que constituye un pilar en el clima escolar.</strong>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>De este modo, el establecimiento cuenta con un Reglamento apegado a norma y con los instrumentos relativos a
              convivencia escolar complementarios, entre otros: el Plan de Gestión Anual de Convivencia Escolar, Protocolos de
              Prevención y Actuación, un Encargado de Convivencia Escolar, un Consejo Escolar, de acuerdo con la Ley General de
              Educación.</strong>
          </li>
          <li style={{ marginBottom: '0.8rem' }}>
            <strong>Es deber de todos los miembros de la comunidad escolar conocer, adherir y velar por la correcta aplicación de las
              normas de funcionamiento y de convivencia contenidas en este Reglamento, y aplicar los procedimientos y medidas de
              acuerdo con el justo y debido proceso escolar.</strong>

          </li>
        </ul>
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

export default RegulacionesGenerales;