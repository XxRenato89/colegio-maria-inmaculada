import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../components/PageHero';
import BotonContacto from '../components/BotonContacto';
import '../App.css';

const ReglamentoApoderados = () => {
  const navigate = useNavigate();

  // NOTA: La siguiente información es ILUSTRATIVA y debe ser reemplazada
  // con las normas específicas del Colegio María Inmaculada de Los Ángeles
  const principiosConvivencia = [
    {
      titulo: "Respeto Mutuo",
      descripcion: "Trato digno y considerado entre todos los miembros de la comunidad educativa.",
      aspectos: [
        "Escucha activa y empática",
        "Uso de lenguaje respetuoso",
        "Reconocimiento de la diversidad",
        "Valoración de las diferencias individuales"
      ]
    },
    {
      titulo: "Responsabilidad",
      descripcion: "Compromiso con las normas y deberes escolares.",
      aspectos: [
        "Cumplimiento puntual de horarios",
        "Cuidado del patrimonio escolar",
        "Participación activa en actividades",
        "Asumir las consecuencias de los actos"
      ]
    },
    {
      titulo: "Solidaridad",
      descripcion: "Apoyo y colaboración entre compañeros y con la comunidad.",
      aspectos: [
        "Ayuda a compañeros en dificultades",
        "Participación en actividades solidarias",
        "Respeto a personas vulnerables",
        "Promoción del trabajo en equipo"
      ]
    },
    {
      titulo: "Honestidad",
      descripcion: "Actitud veraz en todas las interacciones escolares.",
      aspectos: [
        "No copiar en evaluaciones",
        "Ser sincero en comunicaciones",
        "Devolver objetos encontrados",
        "Reconocer errores y aprender de ellos"
      ]
    }
  ];

  const normasBasicas = [
    {
      categoria: "En el Aula",
      normas: [
        "Levantar la mano para participar",
        "Respetar el turno de palabra",
        "Mantener el orden durante clases",
        "Cuidar el mobiliario y materiales",
        "Apagar dispositivos electrónicos",
        "Asistir puntualmente a clases"
      ]
    },
    {
      categoria: "En los Recintos Escolares",
      normas: [
        "Caminar en forma ordenada en pasillos",
        "No correr ni hacer ruido excesivo",
        "Mantener limpios los espacios",
        "Respetar áreas de descanso",
        "Usar instalaciones adecuadamente",
        "No consumir alimentos fuera del casino"
      ]
    },
    {
      categoria: "En Relación con Compañeros",
      normas: [
        "Evitar burlas y discriminación",
        "Resolver conflictos dialogando",
        "Ayudar a compañeros que lo necesiten",
        "Incluir a todos en actividades",
        "Respetar espacio personal",
        "Denunciar situaciones de riesgo"
      ]
    },
    {
      categoria: "En Relación con Docentes",
      normas: [
        "Dirigirse con respeto a los profesores",
        "Cumplir con las tareas asignadas",
        "Participar activamente en clases",
        "Presentar excusas médicas oportunamente",
        "Solicitar ayuda cuando sea necesario",
        "Cumplir con los acuerdos establecidos"
      ]
    }
  ];

  const tiposInfracciones = [
    {
      nivel: "Leves",
      descripcion: "Faltas que afectan mínimamente la convivencia escolar.",
      ejemplos: [
        "Llegar tarde sin justificación",
        "No traer materiales escolares",
        "Hablar sin permiso en clase",
        "No cumplir con uniforme"
      ],
      consecuencias: [
        "Llamado de atención verbal",
        "Reflexión escrita sobre la conducta",
        "Compromiso de mejora firmado"
      ]
    },
    {
      nivel: "Graves",
      descripcion: "Faltas que afectan significativamente la convivencia escolar.",
      ejemplos: [
        "Falta de respeto a docentes o compañeros",
        "No cumplir con sanciones anteriores",
        "Provocar disturbios en clases",
        "No seguir instrucciones de autoridad"
      ],
      consecuencias: [
        "Citación a apoderados",
        "Suspensión de actividades extraprogramáticas",
        "Trabajo comunitario escolar",
        "Informe escrito a dirección"
      ]
    },
    {
      nivel: "Gravísimas",
      descripcion: "Faltas que ponen en riesgo la integridad física o moral.",
      ejemplos: [
        "Amenazas o violencia física",
        "Consumo de sustancias prohibidas",
        "Robo o hurto en el colegio",
        "Acoso escolar (bullying)"
      ],
      consecuencias: [
        "Suspensión temporal de clases",
        "Citación a consejo de profesores",
        "Derivación a especialistas",
        "Suspensión del establecimiento"
      ]
    }
  ];

  const mecanismosResolucion = [
    {
      nombre: "Diálogo Directo",
      descripcion: "Primera instancia para resolver conflictos menores.",
      proceso: [
        "Las partes involucradas dialogan",
        "Se buscan soluciones consensuadas",
        "Se establecen compromisos de conducta",
        "Seguimiento por el profesor jefe"
      ]
    },
    {
      nombre: "Mesa de Diálogo",
      descripcion: "Instancia mediada por profesionales para conflictos moderados.",
      proceso: [
        "Intervención de orientador escolar",
        "Participación de apoderados si es necesario",
        "Elaboración de plan de convivencia",
        "Seguimiento sistemático"
      ]
    },
    {
      nombre: "Consejo de Convivencia",
      descripcion: "Instancia formal para casos graves con participación directiva.",
      proceso: [
        "Investigación del caso por dirección",
        "Citación a todas las partes involucradas",
        "Determinación de responsabilidades",
        "Aplicación de sanciones correspondientes"
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

      {/* ✅ HERO refactorizado */}
      <PageHero
        title="Reglamento de Apoderados"
        subtitle="Directrices y orientaciones para el rol de los apoderados en la comunidad educativa"
      />

      {/* Aviso importante */}
      <div style={{
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '5px',
        padding: '1rem',
        maxWidth: '600px',
        margin: '0 auto 2rem'
      }}>
        <p style={{ color: '#856404', fontSize: '0.9rem', margin: 0 }}>
          <strong>NOTA:</strong> Esta información es ilustrativa. Las normas específicas
          del colegio deben ser proporcionadas por la administración.
        </p>
      </div>

      {/* Introducción */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        backgroundColor: '#f9f9f9',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ color: '#181760', marginBottom: '1rem', textAlign: 'center' }}>
          Propósito del Reglamento
        </h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'justify' }}>
          Este reglamento tiene como objetivo promover una convivencia escolar basada en
          el respeto, la tolerancia y la solidaridad entre todos los miembros de nuestra
          comunidad educativa. Establece las normas de conducta que permiten crear un
          ambiente propicio para el aprendizaje y el desarrollo integral de nuestros
          estudiantes, en consonancia con los valores cristianos que inspiran nuestra
          institución.
        </p>
      </section>

      {/* Principios */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 2rem', padding: '0 1rem' }}>
        <h2 style={{ color: '#181760', marginBottom: '1.5rem', textAlign: 'center' }}>
          Principios Fundamentales
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {principiosConvivencia.map((principio, index) => (
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
              <h3 style={{ color: '#181760', marginBottom: '1rem', fontSize: '1.3rem' }}>
                {principio.titulo}
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>
                {principio.descripcion}
              </p>
              <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
                {principio.aspectos.map((aspecto, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{aspecto}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Normas */}
      <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ color: '#181760', marginBottom: '1.5rem', textAlign: 'center' }}>
          Normas Básicas
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {normasBasicas.map((categoria, index) => (
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
              <h3 style={{ color: '#181760', marginBottom: '1rem', fontSize: '1.2rem' }}>
                {categoria.categoria}
              </h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
                {categoria.normas.map((norma, i) => (
                  <li key={i} style={{ marginBottom: '0.7rem' }}>{norma}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Infracciones */}
      <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ color: '#181760', marginBottom: '1.5rem', textAlign: 'center' }}>
          Tipos de Infracciones y Consecuencias
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {tiposInfracciones.map((tipo, index) => (
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
                color: index === 0 ? '#28a745' : index === 1 ? '#ffc107' : '#dc3545',
                marginBottom: '1rem',
                fontSize: '1.3rem'
              }}>
                {tipo.nivel}
              </h3>

              <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>
                {tipo.descripcion}
              </p>

              <h4 style={{ color: '#181760', marginBottom: '0.5rem', fontSize: '1rem' }}>Ejemplos:</h4>
              <ul style={{ paddingLeft: '1.2rem', color: '#444', marginBottom: '1rem' }}>
                {tipo.ejemplos.map((ej, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{ej}</li>
                ))}
              </ul>

              <h4 style={{ color: '#181760', marginBottom: '0.5rem', fontSize: '1rem' }}>Consecuencias:</h4>
              <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
                {tipo.consecuencias.map((c, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{c}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Resolución de conflictos */}
      <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
        <h2 style={{ color: '#181760', marginBottom: '1.5rem', textAlign: 'center' }}>
          Mecanismos de Resolución de Conflictos
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {mecanismosResolucion.map((m, index) => (
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
              <h3 style={{ color: '#181760', marginBottom: '1rem', fontSize: '1.3rem' }}>
                {m.nombre}
              </h3>
              <p style={{ color: '#666', marginBottom: '1rem', fontStyle: 'italic' }}>
                {m.descripcion}
              </p>

              <h4 style={{ color: '#181760', marginBottom: '0.5rem', fontSize: '1rem' }}>Proceso:</h4>
              <ol style={{ paddingLeft: '1.5rem', color: '#444' }}>
                {m.proceso.map((p, i) => (
                  <li key={i} style={{ marginBottom: '0.7rem' }}>{p}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* Derechos y Deberes */}
      <section style={{
        maxWidth: '900px',
        margin: '2rem auto',
        backgroundColor: '#d4edda',
        padding: '2rem',
        borderRadius: '10px',
        border: '1px solid #c3e6cb'
      }}>
        <h2 style={{ color: '#155724', marginBottom: '1rem', textAlign: 'center' }}>
          Derechos y Deberes
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '1rem' }}>
          <div>
            <h3 style={{ color: '#181760', marginBottom: '1rem' }}>Derechos</h3>
            <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
              <li style={{ marginBottom: '0.5rem' }}>Ser respetado en su dignidad</li>
              <li style={{ marginBottom: '0.5rem' }}>Participar en actividades escolares</li>
              <li style={{ marginBottom: '0.5rem' }}>Expresar libremente sus ideas</li>
              <li style={{ marginBottom: '0.5rem' }}>Recibir educación de calidad</li>
              <li style={{ marginBottom: '0.5rem' }}>Ser escuchado en decisiones que les afectan</li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#181760', marginBottom: '1rem' }}>Deberes</h3>
            <ul style={{ paddingLeft: '1.2rem', color: '#444' }}>
              <li style={{ marginBottom: '0.5rem' }}>Respetar a compañeros y docentes</li>
              <li style={{ marginBottom: '0.5rem' }}>Cumplir con normas de convivencia</li>
              <li style={{ marginBottom: '0.5rem' }}>Asistir puntualmente a clases</li>
              <li style={{ marginBottom: '0.5rem' }}>Participar activamente en el aprendizaje</li>
              <li style={{ marginBottom: '0.5rem' }}>Cuidar el patrimonio escolar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ✅ Botón de regreso refactorizado */}
      <section style={{ textAlign: 'center', margin: '2rem 0' }}>
        <BotonContacto
          onClick={() => navigate('/reglamentos')}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
        >
          ← Volver a Reglamentos
        </BotonContacto>
      </section>
    </div>
  );
};

export default ReglamentoApoderados;
