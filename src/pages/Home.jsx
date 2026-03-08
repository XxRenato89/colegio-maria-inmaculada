import React from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import { carouselImages } from '../data/carouselImages';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      {/* Carrusel Principal */}
      <section style={{ padding: '2rem' }}>
        <Carousel images={carouselImages} interval={5000} />
      </section>

      {/* Bienvenida (tarjeta estilizada) */}
      <section className="welcome-section">
        <div className="welcome-container">
          <div className="welcome-card">
            <div className="welcome-header">
              <h2 className="welcome-title">"Sembrando sueños e innovando para servir"</h2>
            </div>

            <div className="welcome-body">
              <p className="welcome-paragraph">
                Somos una institución humanista basada en una antropología cristiana, que proyecta al
                estudiante desde una formación holística, siguiendo el perfil de egreso del estudiante del año
                2030 dada por la OCDE. Se perfila una persona de fe cristiana, con fuerte carácter ético,
                demócrata, con capacidad de trabajo en equipo, liderazgo autosustentable, flexibilidad,
                inventiva, con capacidad de resolver problemas ecológicos, adaptarse al cambio y a la
                contingencia de la sociedad futura.
              </p>

              <div className="welcome-grid">
                <div className="welcome-feature">
                  <div className="welcome-feature-title">¿Cuál es nuestra Concepción Educativa?</div>
                  <p className="welcome-feature-text">
                    Establecer estrategias que favorezcan un aprendizaje constructivo - significativo, permanente y
                    continuo, en el colegio, en la familia y en los proyectos pedagógicos de tal modo que, los
                    estudiantes sean los actores principales de su proceso educativo.
                  </p>
                </div>

                <div className="welcome-feature">
                  <div className="welcome-feature-title">¿Cuál es nuestro objetivo social?</div>
                  <p className="welcome-feature-text">
                    Establecer en el Colegio, un ambiente de fe, donde la confianza, la cordialidad y la comunicación
                    sean un nexo permanente entre: profesores, estudiantes, apoderados, personal asistente de la
                    educación del Establecimiento y el resto de la sociedad.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Botones principales */}
      <section
        style={{
          padding: '2rem',
          backgroundColor: '#f9f9f9',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => navigate('/postulaciones')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#181760',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            Ir a Postulaciones
          </button>

          <button
            onClick={() => navigate('/reglamentos')}
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#181760',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            Ver Reglamentos
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
