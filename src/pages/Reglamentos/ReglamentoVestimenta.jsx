// src/pages/ReglamentoVestimenta.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const ReglamentoVestimenta = () => {
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
          REGLAMENTO DE VESTIMENTA
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Normas de uniforme y presentación personal
        </p>
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
          marginBottom: '1rem'
        }}>
          Presentación Personal y Uniforme Escolar
        </h2>
        <p>
          El presente reglamento establece las normas de vestimenta para todos los niveles 
          educativos del Colegio María Inmaculada de los Ángeles, promoviendo una imagen 
          institucional adecuada, respetuosa y que favorezca un ambiente propicio para el aprendizaje.
        </p>
        <p>
          El uso del uniforme es obligatorio y debe mantenerse en buen estado, limpio y completo 
          en todos los días de clases y actividades escolares.
        </p>
      </section>

      {/* Tabla de Vestimenta */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto 2rem',
        padding: '0 1rem'
      }}>
        <table 
          border="1" 
          cellPadding="10" 
          cellSpacing="0" 
          style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#181760', color: 'white' }}>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Nivel</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Género</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Tipo de Tenida</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {/* NT1 a Cuarto BÁSICO */}
            <tr>
              <td rowSpan="4" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>NT1 a Cuarto Básico</td>
              <td rowSpan="2" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>Damas</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Diaria y Formal</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Buzo Institucional</li>
                  <li>Polera Institucional</li>
                  <li>Zapatillas</li>
                  <li>Delantal</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Educación Física</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>No se utiliza delantal o cotona</td>
            </tr>
            <tr>
              <td rowSpan="2" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>Varones</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Diaria y Formal</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Buzo Institucional</li>
                  <li>Polera Institucional</li>
                  <li>Zapatillas</li>
                  <li>Cotona</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Educación Física</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>No se utiliza delantal o cotona</td>
            </tr>

            {/* QUINTO BÁSICO A CUARTO MEDIO */}
            <tr>
              <td rowSpan="6" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>Quinto Básico a Cuarto Medio</td>
              <td rowSpan="3" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>Damas</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Diaria</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Blusa Blanca</li>
                  <li>Corbata institucional</li>
                  <li>Falda (largo de 5 cm sobre la rodilla) o pantalón azul marino</li>
                  <li>Polerón Institucional o azul marino</li>
                  <li>Zapatos negros de colegio</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Formal</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Blusa Blanca</li>
                  <li>Corbata institucional</li>
                  <li>Falda (largo de 5 cm sobre la rodilla)</li>
                  <li>Blazer e insignia institucional</li>
                  <li>Zapatos negros de colegio</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Educación Física</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Buzo Institucional</li>
                  <li>Polera institucional</li>
                  <li>Zapatillas</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td rowSpan="3" style={{ border: '1px solid #ddd', padding: '10px', verticalAlign: 'top' }}>Varones</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Diaria</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Camisa Blanca</li>
                  <li>Corbata Institucional</li>
                  <li>Pantalón Gris</li>
                  <li>Polerón Institucional o azul marino</li>
                  <li>Zapatos negros de colegio</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Tenida Formal</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Camisa Blanca</li>
                  <li>Corbata Institucional</li>
                  <li>Pantalón Gris</li>
                  <li>Vestón con insignia institucional</li>
                  <li>Zapatos negros</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Educación Física</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  <li>Buzo Institucional</li>
                  <li>Polera institucional</li>
                  <li>Zapatillas</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Normativas Adicionales */}
      <section style={{
        maxWidth: '900px',
        margin: '0 auto 2rem',
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)'
      }}>
        <h2 style={{ 
          color: '#181760', 
          marginBottom: '1rem',
          borderBottom: '2px solid #181760',
          paddingBottom: '0.5rem'
        }}>
          Normativas y Procedimientos
        </h2>

        {/* 24.1 Uso del uniforme */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.1 Uso del uniforme
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              El uniforme completo es de uso diario obligatorio, por lo que deberá ser usado según las indicaciones mencionadas. No se aceptará ninguna moda o tendencia que intervengan en el corte, diseño y/o forma de llevar prendas.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Se autorizará el uso de accesorio azul marino o gris (gorros, bufandas, guantes).
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              El uniforme deportivo será de uso exclusivo de la clase de Educación física y actividades deportivas internas o externas. No se permitirá su uso en reemplazo del uniforme para asistir a la jornada diaria de clases.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              En las Salidas Pedagógicas hacer uso del uniforme y/o buzo institucional de acuerdo a la naturaleza de la actividad (remitirse al Protocolo referido sobre el tema).
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Para fomentar los hábitos higiénicos se solicitará una polera de recambio para las clases de educación física.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Será responsabilidad del apoderado que todas las prendas de vestir de los estudiantes, deberán venir apropiadamente marcadas con nombre y curso del alumno.
            </li>
            <li>
              Cada alumno es responsable del cuidado de sus prendas de vestir, así como del cuidado del resto de sus materiales, quedando exento de responsabilidad el colegio en caso de extravío o deterioro.
            </li>
          </ul>
        </div>

        {/* 24.2 Adquisición del uniforme */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.2 Adquisición del uniforme
          </h3>
          <p>
            El padre, madre o apoderado (tutor legal) buscará al proveedor que se ajuste a su presupuesto familiar con el cuidado que dicha confección cumpla con el diseño oficial del colegio.
          </p>
        </div>

        {/* 24.3 Incumplimiento de uso sin causa justificada */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.3 Incumplimiento de uso sin causa justificada
          </h3>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              Conversación reflexiva con el estudiante de parte del Profesor Jefe, enfatizando el uso del uniforme como identidad del colegio al que pertenece, el perfil de estudiante y los valores que este promueve, generando una actitud de cambio.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              El Profesor Jefe Informará por escrito y/o vía telefónica de la situación al apoderado con el fin de hacerlo partícipe del proceso formativo.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Citación al apoderado por parte del Profesor Jefe.
            </li>
            <li>
              Cuando la actitud persista, la citación será desde Inspectoría General.
            </li>
          </ol>
        </div>

        {/* 24.4 Observaciones sobre el uso del uniforme */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.4 Observaciones sobre el uso del uniforme
          </h3>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              En relación al uso de uniforme para estudiantes embarazadas, éstas ajustarán su uniforme de acuerdo a su condición de embarazo. (Ver Protocolo de embarazo, maternidad y paternidad y Protocolo de Retención y Apoyo a las Estudiantes Embarazadas, Madres y Padres Estudiantes).
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              El uniforme de estudiante transgénero se adecuará de acuerdo a la situación particular de cada caso, sin desmedro de la identidad del establecimiento, de acuerdo a lo establecido en Ordinario N° 768. Cualquier niño, niña o estudiante, tendrá derecho de utilizar el uniforme, ropa deportiva y/o accesorios que considere más adecuado a su identidad de género, independiente de la situación legal en que se encuentre, de acuerdo a lo establecido en Ordinario Nº768.
            </li>
            <li>
              Es de responsabilidad de cada estudiante, el cuidado de sus pertenencias: útiles escolares y prendas de vestir.
            </li>
          </ul>
        </div>

        {/* 24.5 Cuidado Corporal */}
        <div>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.5 Cuidado Corporal
          </h3>
          <p>
            Es deber del estudiante, junto a su apoderado cuidar su aseo, higiene y presentación personal, lo que se expresa en una apariencia exterior cuidada, limpia, ordenada y sobria.
          </p>
          
          <h4 style={{ 
            color: '#666', 
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            24.5.1 Los varones deberán presentarse:
          </h4>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              Diariamente bien aseados, cabello corto tradicional, natural (sin colorantes ni peinados de fantasía), sin accesorios (aretes, y/o piercing, collares, pulseras, anillos de gran tamaño, etc.).
            </li>
            <li>
              Alumnos deben asistir afeitados al colegio. El estudiante que represente al establecimiento en eventos formales deberá presentarse sin accesorios y sin tintes en el cabello.
            </li>
          </ul>

          <h4 style={{ 
            color: '#666', 
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            24.5.2 Las damas deberán presentarse:
          </h4>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              Diariamente bien aseadas, sin maquillajes, ni accesorios (aretes y/o piercing, collares, pulseras, anillos de gran tamaño, etc).
            </li>
            <li>
              Por motivos de seguridad, está permitido sólo el uso de aros pequeños en alumnas del colegio. Cabello limpio (sin tintura, decoloraciones, extensiones, ni peinados de moda).
            </li>
          </ul>

          <h4 style={{ 
            color: '#666', 
            marginBottom: '0.5rem',
            fontSize: '1rem'
          }}>
            24.5.3 Mantener las uñas:
          </h4>
          <p>
            Cortas y limpias, en las damas se aceptará solo esmalte incoloro (brillo).
          </p>
        </div>

        {/* 24.6 Ropa de Cambio para estudiantes de Educación Parvularia */}
        <div>
          <h3 style={{ 
            color: '#4B0082', 
            marginBottom: '0.5rem'
          }}>
            24.6 Ropa de Cambio para estudiantes de Educación Parvularia
          </h3>
          <p>
            Para los estudiantes de Educación Parvularia se considerarán los cambios de ropa frente a situaciones que lo requieran (al orinarse, defecar, vómitos) de acuerdo al siguiente procedimiento:
          </p>
          <ol style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.3rem' }}>
              Un funcionario del colegio que en primera instancia atiende al niño frente a las necesidades y de ser necesario se le saca la ropa y se cubre con una manta o con ropa disponible en el colegio dependiendo la emergencia. Previa autorización de los padres, madres y/o tutor legal a través de ficha de matrícula.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Secretaria se comunica con los padres o apoderados del alumno para informarle la situación y solicitar que asista al colegio con ropa de recambio.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Se evalúa junto con los padres, madre y/o legal la permanencia en el establecimiento hasta término de la jornada o el retiro del estudiante.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              La ropa que se ha cambiado se deposita en una bolsa para ser entregada al apoderado, manteniendo las normas de higiene.
            </li>
            <li style={{ marginBottom: '0.3rem' }}>
              Los procedimientos serán informados en reunión de padres y/o a través de una notificación escrita.
            </li>
            <li>
              Si el estudiante utiliza pañales, el padre, madre y/o tutor legal, apoderado deberá concertar junto con el profesor un horario para cambio, dejando por escrito la autorización para realizar el cambio de pañales por un funcionario del colegio.
            </li>
          </ol>
        </div>
      </section>

      {/* Sección de información adicional */}
      <section style={{
        maxWidth: '800px',
        margin: '3rem auto',
        textAlign: 'center',
        padding: '2rem',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px'
      }}>
        <h3 style={{ color: '#181760', marginBottom: '1rem' }}>
          ¿Tienes dudas sobre el uniforme?
        </h3>
        <p>
          Para consultas específicas sobre la vestimenta o adquisición de uniformes, 
          comunícate con la administración del colegio.
        </p>
        <button
          onClick={() => navigate('/contacto')}
          style={{
            marginTop: '1rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#181760',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#FFD700'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#181760'}
        >
          Contáctanos
        </button>
      </section>
    </div>
  );
};

export default ReglamentoVestimenta;
