import React from 'react';
import Botones from "../components/Botones";
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import CTA from '../components/CTA';
import BotonContacto from '../components/BotonContacto';
import '../App.css';

const Appoderados = () => {
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

      {/* HERO */}
      <PageHero
        title="¿Qué es Appoderado?"
        subtitle="Una aplicación escolar pensada para padres y apoderados para seguir la vida académica de sus hijos de forma simple, segura y actualizada."
      />

      {/* TUTORIAL DE ACCESO */}
      <section style={{
        maxWidth: '900px',
        margin: '1.5rem auto 2.5rem',
        backgroundColor: '#f9f9f9',
        padding: '1.75rem',
        borderRadius: '12px',
        boxShadow: '0 6px 16px rgba(0,0,0,0.06)'
      }}>
        <h2 style={{
          color: '#181760',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          ¿Cómo ingresar por primera vez?
        </h2>

        <ol style={{
          maxWidth: '700px',
          margin: '0 auto',
          paddingLeft: '1.2rem',
          fontSize: '1.05rem'
        }}>
          <li style={{ marginBottom: '0.6rem' }}>
            Ingresar el <strong>RUT del estudiante</strong>.
          </li>
          <li style={{ marginBottom: '0.6rem' }}>
            Digitar la <strong>contraseña provisoria: 0000</strong>.
          </li>
          <li>
            Presionar <strong>Ingresar</strong> para acceder a la plataforma.
          </li>
        </ol>
      </section>

      {/* DESCARGA */}
      <section>
        <h2 style={{ color: '#181760', marginBottom: '1rem', textAlign: 'center' }}>
          Descarga aquí
        </h2>
      </section>

      {/* BOTONES STORE */}
      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Botones />
      </section>

      {/* ACCESO WEB */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <BotonContacto
          onClick={() =>
            window.open('https://appoderado.cl/sistema/index-login', '_blank')
          }
        >
          Acceso Appoderado.com
        </BotonContacto>
      </section>

      {/* VIDEO */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ color: '#181760', marginBottom: '1rem' }}>
          Appoderado
        </h2>

        <div style={{ margin: '2rem 0' }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden'
          }}>
            <iframe
              src="https://www.youtube.com/embed/9EMF7cYkgoM"
              title="Tutorial Appoderado"
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
      </section>

      {/* CTA */}
      <CTA
        title="¿Necesitas más información?"
        text="Si tienes dudas sobre la instalación o el uso de Appoderado, contáctanos. Te orientamos de forma clara y directa."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate('/contacto')}
      />
    </div>
  );
};

export default Appoderados;
