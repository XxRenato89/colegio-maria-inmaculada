import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import '../App.css';

const Postulaciones = () => {
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

      {/* HERO reutilizable */}
      <PageHero
        title="Proceso de Postulación"
        subtitle="Sigue estos pasos para postular a través del Sistema de Admisión Escolar"
      />

      {/* Pasos del proceso */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ color: '#181760', marginBottom: '1rem' }}>Pasos a Seguir</h2>

        <ol style={{ paddingLeft: '1.5rem', fontSize: '1.05rem' }}>

          <li style={{ marginBottom: '1.5rem' }}>
            <strong>
              Paso 1: Ingrese al{' '}
              <a
                href="https://registropublicodigital.mineduc.gob.cl/rpd-app-registro-apoderado/login"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#181760', textDecoration: 'underline' }}
              >
                Portal de Registro Mineduc
              </a>
            </strong>

            <p>
              <strong>Usuarios nuevos:</strong> Si es la primera vez que postula, debe registrarse creando una contraseña de 8 a 12 caracteres que incluya al menos una letra mayúscula, una letra minúscula, un número y un símbolo.
              Solo podrán crear cuenta aquellos apoderados que tengan estudiantes asociados. Si no ha registrado estudiantes, debe realizar primero el trámite de vinculación.
            </p>
            <p>
              Si es extranjero, debe solicitar previamente su IPA (Identificador Provisorio de Apoderado) y el IPE (Identificador Provisorio Escolar) de su estudiante.
              Para obtenerlos, visite la página oficial del Ministerio de Educación de Chile.
            </p>
            <p>
              <strong>Usuarios antiguos:</strong> Ingrese con su clave actual y la plataforma le pedirá actualizarla.
              La nueva clave debe tener entre 8 y 12 caracteres con al menos una letra mayúscula, una letra minúscula, un número y un símbolo.
              Puede recuperar su clave mediante SMS o correo electrónico, según los datos registrados anteriormente.
            </p>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            <strong>Paso 2: Verifique la información del postulante</strong>
            <p>
              Revise que los datos del estudiante sean correctos. Si el curso (nivel) al que postula no es el adecuado,
              puede solicitar su actualización en la sección de trámites en línea.
            </p>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            <strong>Paso 3: Busque establecimientos y cree su lista de preferencias</strong>
            <p>
              Ingrese a la Vitrina de establecimientos y agréguelos a su lista.
              Puede ordenarlos según su preferencia.
            </p>
            <p>
              Para facilitar la búsqueda, utilice los filtros disponibles:
              región, comuna, nivel, tipo de establecimiento, jornada, género, dependencia,
              establecimientos con PIE, gratuitos, con internado, entre otros.
            </p>
          </li>

          <li style={{ marginBottom: '1.5rem' }}>
            <strong>Paso 4: Envíe su postulación y descargue el comprobante</strong>
            <p>
              Asegúrese de que la postulación haya sido finalizada y no quede en estado de borrador.
              Descargue el comprobante y no olvide cerrar su sesión.
            </p>
          </li>

        </ol>

        {/* Video de YouTube */}
        <div style={{ margin: '2rem 0', textAlign: 'center' }}>
          <h3 style={{ color: '#181760', marginBottom: '1rem' }}>
            Tutorial del Proceso de Postulación
          </h3>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            maxWidth: '100%'
          }}>
            <iframe
              src="https://www.youtube.com/embed/T5Bn3I7WzJI"
              title="Tutorial Postulación"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>

        {/* Botón oficial */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a
            href="https://registropublicodigital.mineduc.gob.cl/rpd-app-registro-apoderado/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '0.9rem 1.6rem',
              backgroundColor: '#181760',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease, transform 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#FFD700';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#181760';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Ir al Portal de Registro Mineduc
          </a>
        </div>

      </section>

      <CTA
        title="¿Tienes dudas sobre el proceso de postulación?"
        text="Si necesitas orientación sobre requisitos, documentación o plazos, contáctanos y te ayudamos."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate('/contacto')}
      />
    </div>
  );
};

export default Postulaciones;
