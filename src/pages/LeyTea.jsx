// src/pages/LeyTea.jsx
import React from 'react';
import BotonContacto from '../components/BotonContacto';

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
          Ley TEA (Trastornos del Espectro Autista)
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#555' }}>
          Marco legal y disposiciones vigentes
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
            LEY NÚM. 21.545
          </h2>
          <p>
            ESTABLECE LA PROMOCIÓN DE LA INCLUSIÓN, LA ATENCIÓN INTEGRAL, Y LA PROTECCIÓN DE LOS DERECHOS DE LAS PERSONAS CON TRASTORNO DEL ESPECTRO AUTISTA EN EL ÁMBITO SOCIAL, DE SALUD Y EDUCACIÓN
          </p>
        </div>

        {/* Artículo 1 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Artículo 1: DISPOSICIONES GENERALES
          </h3>
          <p>
            Objeto; La presente ley tiene por objeto asegurar el derecho a la igualdad de oportunidades y resguardar la inclusión social de los niños, niñas, adolescentes y adultos con trastorno del espectro autista; eliminar cualquier forma de discriminación; promover un abordaje integral de dichas personas en el ámbito social, de la salud y de la educación, y concientizar a la sociedad sobre esta temática. Lo anterior, sin perjuicio de los demás derechos, beneficios o garantías contempladas en otros cuerpos legales o normativos y en los tratados internacionales ratificados por Chile que se encuentren vigentes.
    El trastorno de espectro autista es un neurotipo genérico, por tanto, los derechos contemplados en esta ley y en otros textos legales abarcarán todo el ciclo vital de las personas que lo presenten.
          </p>
        </div>

        {/* Artículo 2 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Artículo 2: Definiciones
          </h3>
          <p>
            Conceptos. Para los efectos de esta ley se entenderá por:

          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>a.- Personas con trastorno del espectro autista. (TEA):</strong> Se entenderá por personas con trastorno del espectro autista a aquellas que presentan una diferencia o diversidad en el neurodesarrollo típico, que se manifiesta en dificultades significativas en la iniciación, reciprocidad y mantención de la interacción y comunicación social al interactuar con los diferentes entornos, así como también en conductas o intereses restrictivos o repetitivos. El espectro de dificultad significativa en estas áreas es amplio y varía en cada persona.
    El trastorno del espectro autista corresponde a una condición del neurodesarrollo, por lo que deberá contar con un diagnóstico.
    Estas características constituyen algún grado de discapacidad cuando generan un impacto funcional significativo en la persona a nivel familiar, social, educativo, ocupacional o de otras áreas y que, al interactuar con diversas barreras presentes en el entorno, impida o restrinja su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás, lo que deberá ser calificado y certificado conforme a lo dispuesto en la ley N° 20.422, que establece normas sobre igualdad de oportunidades e inclusión social de personas con discapacidad.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>b.- Persona cuidadora de una persona con trastorno del espectro autista:</strong> Se entenderá por cuidador o cuidadora a quien proporcione asistencia o cuidado en los términos previstos por el artículo 5 quáter de la ley N° 20.584, que regula los derechos y deberes que tienen las personas en relación con acciones vinculadas a su atención en salud.
            </li>
          </ul>
        </div>

        {/* Artículo 3 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Artículo 3: Principios
          </h3>
          <p>
            La aplicación de esta ley, en lo que se refiere a las personas con trastorno del espectro autista, deberá sujetarse al cumplimiento de los siguientes principios:
          </p>
            <ul style={{ paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>a.- Trato digno.</strong> 
              Deben recibir un trato digno y respetuoso en todo momento y en cualquier circunstancia. Deberá adoptarse un lenguaje claro y sencillo en las atenciones que se les brinden, y medidas necesarias para respetar y proteger su vida privada y su honra.

              Quienes brinden atención al público deberán permitir que estas personas estén acompañadas por un familiar o cuidador, a quienes se les deberá otorgar un trato digno y respetuoso.

            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>b.- Autonomía progresiva. </strong> 
              Todo niño, niña y adolescente ejercerá sus derechos conforme a la evolución de sus facultades, en atención a su edad, madurez y grado de desarrollo que manifieste, de conformidad con lo establecido en el artículo 11 de la ley N° 21.430, sobre garantías y protección integral de los derechos de la niñez y adolescencia. Para ello se considerará el grado de discapacidad que pueda tener y, en caso de ser necesario, que los padres o tutores legales sean responsables de estas decisiones de acuerdo con la situación individual de apoyos de ellos y que, en ningún caso, implique un desmedro en su autonomía e independencia.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>c.- Perspectiva de género. </strong> 
            En la elaboración, ejecución y evaluación de las medidas que se adopten en relación con estas personas deberá considerarse la variable de género.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>d.- Intersectorialidad. </strong> 
              Las acciones, prestaciones y servicios que podrán realizarse para la protección de los derechos de estas personas se desarrollarán de manera conjunta y coordinada por los diversos órganos del Estado, dentro de sus respectivos ámbitos de competencia.
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <strong>e.- Participación y diálogo social. </strong> 
              Estas personas y sus organizaciones tendrán un rol activo en la elaboración, ejecución, seguimiento y evaluación de las políticas públicas que les conciernen.
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <strong>f.- Neurodiversidad. </strong> 
              Las personas tienen una variabilidad natural en el funcionamiento cerebral y presentan diversas formas de sociabilidad, aprendizaje, atención, desarrollo emocional y conductual, y otras funciones neurocognitivas.  
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <strong>g.- Detección temprana. </strong> 
              Los actores que forman parte de la red de protección y tratamiento de estas personas deberán adoptar todas las medidas necesarias para diagnosticar, durante los primeros años de vida, si una persona tiene o no trastorno del espectro autista.
            </li>
            <li style={{marginBottom: '0.5rem'}}>
              <strong>h.- Seguimiento continuo. </strong> 
              Una vez diagnosticada una persona con trastorno del espectro autista, existirá la obligación de parte de los actores que formen parte de la red de protección y tratamiento, en especial del Estado, de acompañarla durante las diferentes etapas de su vida, y proveer de soluciones adecuadas cuando sea necesario, tomando en consideración su grado de discapacidad.
            </li>
          </ul>
        </div>

        {/* Artículo 4 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Artículo 4: Aplicación de la ley N° 20.422.
          </h3>
          <p>
            Sin perjuicio de lo dispuesto en esta ley, a las personas con trastorno del espectro autista que cuenten con calificación y certificación de discapacidad de conformidad con la ley N° 20.422, que establece normas sobre igualdad de oportunidades e inclusión social de personas con discapacidad, también les serán aplicables las disposiciones contenidas en dicho cuerpo legal.
          </p>
        </div>

        {/* Artículo 5 */}
        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Artículo 5: Legitimación activa.
          </h3>
          <p>
          Sin perjuicio de las normas administrativas y penales, toda persona con trastorno del espectro autista directamente afectada por una acción u omisión que importe discriminación arbitraria, podrá interponer la acción prevista en el artículo 3° de la ley N° 20.609, que establece medidas contra la discriminación, a través de su representante legal o quien tenga de hecho su cuidado personal o educación, en la forma y condiciones contempladas en dicha ley. También podrá interponer esta acción cualquier persona, como un familiar, cuidador o cuidadora, cuando aquella se encuentre imposibilitada de ejercerla y carezca de representantes legales o personas que la tengan bajo su cuidado o educación, o cuando, aun teniéndolos, éstos se encuentren también impedidos de deducirla.
          </p>
          <p>
            Toda persona con trastorno del espectro autista que cuente con la calificación y certificación de discapacidad a que se refiere la ley N° 20.422, que establece normas sobre igualdad de oportunidades e inclusión social de personas con discapacidad, y que sufra amenaza, perturbación o privación en el ejercicio de los derechos consagrados en la referida ley, podrá ejercer, por sí o por cualquiera a su nombre, tales como un familiar, cuidador o cuidadora, la acción prevista en su artículo 57, en la forma y condiciones dispuestas en ella.
          </p>
        </div>

        {/* Consideraciones finales */}
        <div>
          <h3 style={{ color: '#181760', marginBottom: '0.5rem' }}>
            Consideraciones Generales
          </h3>
          <p>
            Esta ley entrará en vigencia a partir de su publicación en el Diario Oficial, y estará sujeta a las modificaciones 
            que establezcan los reglamentos respectivos.
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
          ¿Necesitas más información sobre la Ley TEA?
        </h3>
        <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <BotonContacto
          onClick={() => window.open('https://www.bcn.cl/leychile/navegar?idNorma=1190123', '_blank')}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#FFD700';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#181760';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Ir a Ley TEA 
        </BotonContacto>
      </section>
      </section>
      <div>
        
      </div>
    </div>
  );
};

export default LeyTea;
