import React from 'react';
import PageHero from '../components/PageHero';
import '../App.css';

const Contacto = () => {
  const informacionContacto = {
    nombre: "Colegio María Inmaculada de Los Ángeles",
    rbd: "11716-1",
    directora: "Mirta Morales Sepúlveda",
    direccion: "Avenida Las Quintas 188, Los Ángeles",
    telefono: "432658332",
    celular: "939310070",
    email: "secretaria@midla.cl",
    region: "Del Biobío",
    provincia: "Biobío",
    comuna: "Los Ángeles",
    caracter: "Católico",
    fechaFundacion: "04/08/2017",
    reconocimiento: "Resolución Exenta N° 1542 de 04/08/2017",
    dependencia: "Particular Subvencionado",
    tiposEnsenanza: [
      "Educación Parvularia (NT1 - NT2)",
      "Educación Básica (1° a 8° básico)",
      "Educación Media (I° a IV° Medio)"
    ],
    jornada: "Jornada Escolar Completa",
    horario: "08:30 - 17:30 hrs"
  };


  return (
    <div style={{
      backgroundColor: 'transparent',
      minHeight: '100vh',
      padding: '2rem 1rem',
      fontFamily: 'Arial, sans-serif'
    }}>

      {/* Hero */}
      <PageHero
        title="Contáctanos"
        subtitle="Estamos aquí para ayudarte. Comunícate con nosotros."
      />

      <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* Información Institucional */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ color: '#181760', fontSize: '1.4rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
            Información Institucional
          </h2>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#181760', fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 'bold' }}>
                {informacionContacto.nombre}
              </h3>
              <p style={{ margin: '0.4rem 0' }}><strong>RBD:</strong> {informacionContacto.rbd}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Directora:</strong> {informacionContacto.directora}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#181760', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Dirección</h4>
              <p style={{ margin: '0.4rem 0' }}>{informacionContacto.direccion}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Comuna:</strong> {informacionContacto.comuna}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Provincia:</strong> {informacionContacto.provincia}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Región:</strong> {informacionContacto.region}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#181760', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Contacto</h4>
              <p style={{ margin: '0.4rem 0' }}><strong>Teléfono:</strong> {informacionContacto.telefono}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Celular:</strong> {informacionContacto.celular}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Email:</strong> {informacionContacto.email}</p>
            </div>

            <div>
              <h4 style={{ color: '#181760', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Información General</h4>
              <p style={{ margin: '0.4rem 0' }}><strong>Carácter:</strong> {informacionContacto.caracter}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Fecha Fundación:</strong> {informacionContacto.fechaFundacion}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Dependencia:</strong> {informacionContacto.dependencia}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Jornada:</strong> {informacionContacto.jornada}</p>
              <p style={{ margin: '0.4rem 0' }}><strong>Horario:</strong> {informacionContacto.horario}</p>
            </div>
        </section>

        {/* Nuestra Ubicación */}
        <section style={{
          backgroundColor: '#ffffff',
          borderRadius: '15px',
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#181760', fontSize: '1.4rem', marginBottom: '2rem', fontWeight: 'bold' }}>
            Nuestra Ubicación
          </h2>
          <div style={{ height: '350px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid #eee' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.8745678901234!2d-72.3456789!3d-37.456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96681b2a82a8282b%3A0xc0c7c7c0c7c7c7c0!2sAv.%20Las%20Quintas%20188%2C%20Los%20%C3%81ngeles%2C%20Biob%C3%ADo!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Colegio María Inmaculada Los Ángeles"
            />
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#181760' }}>
              <strong>Avenida Las Quintas 188, Los Ángeles</strong>
            </p>
            <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.5' }}>
              Sector sur de la ciudad de Los Ángeles<br />
              Colindante con Villa Las Quintas y sector Paillihue
            </p>
          </div>
        </section>

        {/* Horario de Atención */}
        <section style={{
          backgroundColor: '#fffbe6',
          borderRadius: '15px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          textAlign: 'center',
          border: '1px solid #ffe58f'
        }}>
          <h2 style={{ color: '#181760', fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            Horario de Atención
          </h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#333' }}>
            <strong>Lunes a Viernes:</strong> {informacionContacto.horario}
          </p>
          <p style={{ color: '#777', fontSize: '0.95rem' }}>
            Atención presencial y telefónica durante todo el año escolar
          </p>
        </section>

      </div>
    </div>
  );
};

export default Contacto;
