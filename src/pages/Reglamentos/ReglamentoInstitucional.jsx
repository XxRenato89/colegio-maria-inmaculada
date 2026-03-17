/**
 * Página de Reglamento Institucional
 * 
 * Una guía completa de las políticas internas del colegio, estándares de comportamiento
 * y mecanismos de resolución de conflictos. Utiliza un diseño estructurado con tarjetas
 * para presentar información regulatoria compleja de manera clara.
 */
import { FaBook, FaBalanceScale } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import SectionHero from '../../components/SectionHero';
import '../../App.css';

const ReglamentoInstitucional = () => {
  const navigate = useNavigate();

  /** Lista de principios de convivencia y sus aspectos específicos */
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
      color: "text-green-600",
      bg: "bg-green-50/50",
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
      color: "text-yellow-600",
      bg: "bg-yellow-50/50",
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
      color: "text-red-600",
      bg: "bg-red-50/50",
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
    <PageLayout>
      <SectionHero
        pill={<span className="flex items-center gap-2"><FaBook /> Reglamentos</span>}
        title="Reglamento Institucional"
        subtitle="Normas generales que rigen el funcionamiento y la convivencia de nuestro colegio."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* Aviso importante */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 shadow-sm">
          <p className="text-yellow-800 text-sm font-medium italic text-center">
            <strong>NOTA:</strong> Esta información es ilustrativa. Las normas específicas oficiales deben ser consultadas en la administración del establecimiento.
          </p>
        </div>

        {/* Propósito */}
        <Section spacing="py-0">
          <Card title="Propósito del Reglamento" className="border-l-4 border-l-primary leading-relaxed text-gray-600 text-justify">
            <p>
              Este reglamento tiene como objetivo promover una convivencia escolar basada en
              el respeto, la tolerancia y la solidaridad entre todos los miembros de nuestra
              comunidad educativa. Establece las normas de conducta que permiten crear un
              ambiente propicio para el aprendizaje y el desarrollo integral de nuestros
              estudiantes, en consonancia con los valores cristianos que inspiran nuestra
              institución.
            </p>
          </Card>
        </Section>

        {/* Principios */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Principios Fundamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principiosConvivencia.map((principio, index) => (
              <Card
                key={index}
                title={principio.titulo}
              >
                <p className="text-secondary text-sm italic mb-4">
                  {principio.descripcion}
                </p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {principio.aspectos.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary font-bold">•</span> {a}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Normas Básicas */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Normas de Conducta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {normasBasicas.map((categoria, index) => (
              <Card
                key={index}
                title={categoria.categoria}
                className="bg-gray-50/50 border-none shadow-none"
              >
                <ul className="space-y-2 text-gray-600 text-sm">
                  {categoria.normas.map((n, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-secondary font-bold">✓</span> {n}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Infracciones */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Infracciones y Consecuencias</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposInfracciones.map((tipo, index) => (
              <Card
                key={index}
                className={`${tipo.bg} border-none shadow-md`}
              >
                <h3 className={`${tipo.color} font-black text-xl mb-4 uppercase`}>
                  {tipo.nivel}
                </h3>
                <p className="text-xs text-gray-600 mb-6 italic leading-relaxed">
                  {tipo.descripcion}
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-primary text-[10px] uppercase mb-2 tracking-widest">Ejemplos</h4>
                    <ul className="space-y-1">
                      {tipo.ejemplos.map((ej, i) => (
                        <li key={i} className="text-[11px] text-gray-500">• {ej}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-[10px] uppercase mb-2 tracking-widest">Consecuencias</h4>
                    <ul className="space-y-1">
                      {tipo.consecuencias.map((c, i) => (
                        <li key={i} className="text-[11px] text-gray-500">• {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Resolución */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Resolución de Conflictos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mecanismosResolucion.map((m, index) => (
              <Card
                key={index}
                title={m.nombre}
                className="h-full border-gray-100"
              >
                <p className="text-[11px] text-gray-500 mb-4 italic leading-relaxed">
                  {m.descripcion}
                </p>
                <div className="pt-4 border-t border-gray-50">
                  <h4 className="text-[10px] font-bold text-secondary uppercase mb-2">Proceso</h4>
                  <ol className="space-y-2">
                    {m.proceso.map((p, i) => (
                      <li key={i} className="text-[11px] text-gray-600 flex gap-2">
                        <span className="font-black text-primary/30">{i + 1}.</span> {p}
                      </li>
                    ))}
                  </ol>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Derechos y Deberes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary text-white border-none shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaBalanceScale className="text-2xl" /> Derechos Estudiantiles
            </h3>
            <ul className="space-y-3 text-sm opacity-90 italic">
              <li>• Ser respetado en su dignidad</li>
              <li>• Participar en actividades escolares</li>
              <li>• Expresar libremente sus ideas</li>
              <li>• Recibir educación de calidad</li>
              <li>• Ser escuchado en decisiones que les afectan</li>
            </ul>
          </Card>

          <Card className="bg-secondary text-white border-none shadow-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <FaBook className="text-2xl" /> Deberes Estudiantiles
            </h3>
            <ul className="space-y-3 text-sm opacity-90 italic">
              <li>• Respetar a compañeros y docentes</li>
              <li>• Cumplir con normas de convivencia</li>
              <li>• Asistir puntualmente a clases</li>
              <li>• Participar activamente en el aprendizaje</li>
              <li>• Cuidar el patrimonio escolar</li>
            </ul>
          </Card>
        </div>

        {/* Botón de regreso */}
        <div className="flex justify-center pt-8">
          <button
            onClick={() => navigate('/reglamentos')}
            className="group flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-accent transition-all duration-300"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span> Volver a Reglamentos
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReglamentoInstitucional;
