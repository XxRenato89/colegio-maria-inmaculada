// src/pages/Transporte.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BotonContacto from '../components/BotonContacto';
import '../App.css';

const Transporte = () => {
  const navigate = useNavigate();

  return (
    <div className="page-content">

      {/* HERO ESTILO 1 */}
      <section className="act-hero">
        <div className="act-hero-inner">
          <span className="act-pill">Servicio Escolar</span>
          <h1 className="act-title">Transporte Escolar</h1>
          <p className="act-subtitle">
            Un servicio pensado para la seguridad, puntualidad y tranquilidad de nuestras familias.
          </p>

          <div className="act-hero-actions">
            <button
              className="act-btn-ghost"
              onClick={() => navigate('/contacto')}
            >
              Consultar recorridos
            </button>
          </div>
        </div>
      </section>

      {/* TARJETAS ESTILO 1 */}
      <section className="act-grid">

        <div className="act-card">
          <div className="act-card-content">
            <div className="act-icon">🚌</div>
            <div>
              <h3>Servicio seguro</h3>
              <p>
                El transporte escolar funciona bajo criterios de responsabilidad,
                puntualidad y seguridad, asegurando un traslado confiable
                desde y hacia el colegio.
              </p>
            </div>
          </div>
        </div>

        <div className="act-card">
          <div className="act-card-content">
            <div className="act-icon">⏰</div>
            <div>
              <h3>Puntualidad diaria</h3>
              <p>
                Los recorridos están organizados para facilitar la asistencia regular,
                evitando atrasos y mejorando la organización familiar.
              </p>
            </div>
          </div>
        </div>

        <div className="act-card">
          <div className="act-card-content">
            <div className="act-icon">❤️</div>
            <div>
              <h3>Apoyo al bienestar</h3>
              <p>
                Este servicio complementa el proyecto educativo,
                aportando tranquilidad a los apoderados
                y comodidad a los estudiantes.
              </p>
            </div>
          </div>
        </div>

        <div className="act-card">
          <div className="act-card-content">
            <div className="act-icon">📍</div>
            <div>
              <h3>Recorridos disponibles</h3>
              <p>
                Para conocer horarios, cobertura y proceso de inscripción,
                comunícate con la administración del colegio.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* CTA */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <BotonContacto
          onClick={() => navigate('/contacto')}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
        >
          Consultar por el servicio de transporte
        </BotonContacto>
      </div>

    </div>
  );
};

export default Transporte;
