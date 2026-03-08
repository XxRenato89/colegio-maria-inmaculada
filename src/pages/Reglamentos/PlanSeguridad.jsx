// src/pages/LeyTea.jsx
import React from 'react';
import BotonContacto from '../../components/BotonContacto';
import '../../App.css';

const LeyTea = () => {
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
          PLAN INTEGRAL DE SEGURIDAD ESCOLAR
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          2023
        </p>
      </section>

      {/* Contenido de la Ley */}
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
          <h2 style={{ color: '#181760', marginBottom: '1rem' }}>
            INTRODUCCIÓN
          </h2>
          <p>
            En nuestro país, la seguridad escolar dispone de una herramienta legal que la sustenta: El
            Plan Integral de Seguridad Escolar PISE, aprobado por resolución exenta Nº 51 del
            Ministerio de Educación - 4 de enero de 2001, que rescata las principales fortalezas de la
            antigua operación DEYSE, aplicada en todos los colegios desde 1977. Esta nueva
            normativa privilegia la prevención y también perfecciona y refuerza los mecanismos de
            atención de accidentes y emergencias, para sentar definitivamente las bases de una cultura
            nacional de la prevención.
          </p>
          <p>
            Este plan ha sido puesto a disposición de las instituciones educativas del país. El colegio
            María inmaculada de Los Ángeles, por su parte, ha desarrollado su Plan Específico Integral
            de Seguridad Escolar 20024, que aborda la diversidad de riesgos a los que hoy está
            expuesta la comunidad colegial y facilita el trabajo sobre los riesgos presentes al interior y
            en el entorno inmediato de la unidad educativa. Asimismo, involucra a profesores, padres y
            apoderados, alumnos, administrativos y auxiliares, como también al Comité Paritario.
            Además, propicia una relación permanente con los organismos operativos: Salud,
            Bomberos, Carabineros, Cruz Roja y Oficina de Protección Civil y Emergencia.
          </p>
          <p>
            El “Plan Integral de Seguridad Escolar” de nuestro Establecimiento, estará en permanente
            actualización y perfeccionamiento. Tiene, por tanto, un carácter de proceso constante que
            compromete a todos.
          </p>
          <p>
            Nos hemos fijado como objetivo: Implementar y desarrollar un Plan de Seguridad para los
            estudiantes y personal del Establecimiento, conocido por todos, con el fin de proteger y
            evitar accidentes, ya sea por causas naturales o por situaciones de riesgo y cuyo fin será
            el mejoramiento de las condiciones de seguridad y el bienestar físico de todos los
            integrantes de la Comunidad Educativa.
          </p>
          <p>
            Hemos avanzado en la formación del Equipo de Seguridad, en la ubicación de los espacios
            de riesgo dentro del Establecimiento. También estamos en proceso de difusión del plan de
            nuestros estudiantes sobre la importancia de su seguridad, tanto dentro como
          </p>
          <p>
            uera del Establecimiento. Y también en un proceso de socialización del plan a través de su
            publicación para el periodo 2024.
          </p>
        </div>

        {/* Objetivo General */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            OBJETIVO GENERAL
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <p>
                Generar en la comunidad escolar una cultura preventiva, teniendo por sustento
                la responsabilidad colectiva frente a la seguridad.
              </p>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <p>
                Proporcionar un efectivo ambiente de seguridad integral, mientras los
                estudiantes cumplen con sus actividades académicas.
              </p>
            </li>
          </ul>
        </div>

        {/* Objetivo especifico */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            OBJETIVOS ESPECÍFICOS
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <p>
                a. Actualizar, aplicar y evaluar un plan de seguridad integral que incluya procedimientos
                de evacuación adecuados en caso de emergencias.
              </p>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <p>
                b. Contribuir con el aprendizaje de actitudes de autoprotección y autocuidado, generando
                un efectivo ambiente de seguridad replicable en el diario vivir.
              </p>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <p>
                c. Organizar acciones de prevención de riesgos en los estudiantes de acuerdo a las
                necesidades detectadas.
              </p>
            </li>
          </ul>
        </div>

        {/* Definiciones */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Definiciones
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Emergencia:</strong>
              Suceso inesperado que puede ocasionar lesiones a las personas, daño a la
              propiedad, o ambas situaciones a la vez y que para superarlas se requiere de una acción
              coordinada de personas debidamente entrenadas y capacitadas.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Vía de Evacuación: </strong>
              Una vía de evacuación es un camino continuo y sin impedimento para
              trasladarse desde cualquier punto de una estructura al nivel de la calle o en su defecto a
              una zona de seguridad.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Señal de Alarma: </strong>
              Señal que ante una emergencia indica la necesidad de evacuar a las
              personas hacia las zonas de seguridad. También pueden indicar alerta o retorno de éstas
              a sus actividades habituales. Esta puede ser sonora o visual, o bien, ambas.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Zona de Seguridad: </strong>
              Lugar en que las personas podrán agruparse o concentrarse sin que
              la influencia del siniestro las afecte, al cual llegarán por medio de las vías de evacuación
              previamente establecidas.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Simulacro:</strong>
              Ejercicio práctico en terreno, que implica movimiento de personas y recursos,
              en el cual los participantes se acercan lo más posible a un escenario de emergencia real.
              Permite probar la planificación.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Coordinador General: </strong>
              Autoridad máxima en el momento de la emergencia, responsable
              de la gestión de control de emergencias y evacuaciones del recinto.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Monitor de Apoyo: </strong>
              Son los responsables de evacuar a las personas de su sector, hacia
              las zonas de seguridad, al momento de presentarse una emergencia. El Monitor de Apoyo
              responde ante el Coordinador de Piso o Área.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Iluminación de emergencia: </strong>
              Es un medio de iluminación secundaria que proporciona
              iluminación, cuando la fuente de alimentación para la iluminación normal falla. El Objetivo
              básico de un Sistema de Iluminación de Emergencia es permitir la evacuación segura de
              lugares en que transiten o permanezcan personas.
            </li>
          </ul>
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
          ¿Necesitas más información sobre el Plan de Seguridad Integral?
        </h3>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <a
            href="/Reglamentos/Reglamentos.pdf"
            download
            className="btn-primary"
            style={{ display: 'inline-block', textDecoration: 'none', padding: '0.8rem 1.5rem' }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            📄 Descargar RICE (PDF)
          </a>
        </div>
      </section>
      <div>

      </div>
    </div>
  );
};

export default LeyTea;
