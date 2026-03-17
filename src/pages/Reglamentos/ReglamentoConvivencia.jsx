import { FaHandshake, FaBalanceScale, FaBook } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import SectionHero from '../../components/SectionHero';

const ReglamentoConvivencia = () => {
  const navigate = useNavigate();

  const principiosConvivencia = [
    {
      titulo: "Respeto Mutuo",
      descripcion: "Trato digno y considerado entre todos los miembros de la comunidad educativa.",
      aspectos: ["Escucha activa", "Lenguaje respetuoso", "Reconocimiento de diversidad"]
    },
    {
      titulo: "Responsabilidad",
      descripcion: "Compromiso con las normas y deberes escolares.",
      aspectos: ["Puntualidad", "Cuidado del patrimonio", "Participación activa"]
    },
    {
      titulo: "Solidaridad",
      descripcion: "Apoyo y colaboración entre compañeros y con la comunidad.",
      aspectos: ["Ayuda mutua", "Trabajo en equipo", "Respeto a vulnerables"]
    },
    {
      titulo: "Honestidad",
      descripcion: "Actitud veraz en todas las interacciones escolares.",
      aspectos: ["Sinceridad", "Transparencia", "Reconocimiento de errores"]
    }
  ];

  const normasBasicas = [
    {
      categoria: "En el Aula",
      normas: ["Levantar la mano", "Respetar el turno de palabra", "Mantener el orden", "Cuidar mobiliario"]
    },
    {
      categoria: "En el Recinto",
      normas: ["Caminar ordenadamente", "Mantener limpieza", "Respetar áreas", "Uso adecuado instalaciones"]
    },
    {
      categoria: "Con Compañeros",
      normas: ["Evitar burlas", "Resolver dialogando", "Ayudar mutua", "Inclusión total"]
    },
    {
      categoria: "Con Docentes",
      normas: ["Trato respetuoso", "Cumplir tareas", "Participación activa", "Sinceridad"]
    }
  ];

  const tiposInfracciones = [
    {
      nivel: "Leves",
      color: "text-green-600",
      bg: "bg-green-50/50",
      ejemplos: ["Atrasos", "Falta materiales", "Hablar sin permiso"]
    },
    {
      nivel: "Graves",
      color: "text-yellow-600",
      bg: "bg-yellow-50/50",
      ejemplos: ["Faltas de respeto", "Incumplimiento sanciones", "Disturbios"]
    },
    {
      nivel: "Gravísimas",
      color: "text-red-600",
      bg: "bg-red-50/50",
      ejemplos: ["Violencia física", "Bullying", "Sustancias prohibidas"]
    }
  ];

  return (
    <PageLayout>
      {/* HERO */}
      <SectionHero
        pill={<span className="flex items-center gap-2"><FaHandshake /> Convivencia</span>}
        title="Convivencia Escolar"
        subtitle="Directrices para una convivencia escolar respetuosa, segura y armoniosa en nuestro colegio."
      />

      <div className="max-w-[1100px] mx-auto mt-12 pb-20 space-y-16 px-4">
        
        {/* AVISO */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm">
           <p className="text-yellow-800 text-sm font-medium italic">
             <strong>NOTA:</strong> Esta información es ilustrativa. Las normas específicas oficiales deben ser consultadas en la administración.
           </p>
        </div>

        {/* PROPÓSITO */}
        <Section spacing="py-0">
          <Card className="border-l-4 border-l-primary bg-primary/5">
            <h2 className="text-primary text-xl font-bold mb-4">Propósito del Reglamento</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              Este reglamento busca promover una convivencia escolar basada en el respeto, la tolerancia y la solidaridad. Establece normas que permiten crear un ambiente propicio para el aprendizaje y el desarrollo integral, en consonancia con los valores cristianos que inspiran nuestra institución.
            </p>
          </Card>
        </Section>

        {/* PRINCIPIOS */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Principios Fundamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principiosConvivencia.map((p, i) => (
              <Card key={i} title={p.titulo} className="hover:shadow-lg transition-all h-full">
                <p className="text-[11px] text-gray-500 mb-4 italic leading-relaxed">{p.descripcion}</p>
                <ul className="space-y-2">
                  {p.aspectos.map((a, idx) => (
                    <li key={idx} className="text-xs text-secondary flex gap-2">
                      <span className="text-primary font-bold">•</span> {a}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* NORMAS BÁSICAS */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Protocolos de Conducta</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {normasBasicas.map((cat, i) => (
              <Card key={i} title={cat.categoria} className="bg-gray-50/50 border-none shadow-sm">
                <ul className="space-y-2">
                  {cat.normas.map((n, idx) => (
                    <li key={idx} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-secondary opacity-50">✓</span> {n}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* INFRACCIONES */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Categorización de Faltas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposInfracciones.map((t, i) => (
              <Card key={i} className={`${t.bg} border-none shadow-md overflow-hidden text-center`}>
                <h3 className={`${t.color} font-black text-xl mb-6 uppercase tracking-tighter`}>{t.nivel}</h3>
                <div className="space-y-3">
                   {t.ejemplos.map((ej, idx) => (
                     <div key={idx} className="text-xs text-gray-500 font-medium py-1 border-b border-black/5 last:border-none">
                        {ej}
                     </div>
                   ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* DERECHOS Y DEBERES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card title={<span className="flex items-center gap-2"><FaBalanceScale /> Derechos del Estudiante</span>} className="bg-primary text-white border-none shadow-xl">
              <ul className="space-y-4 text-sm opacity-90 italic leading-relaxed">
                <li>• Ser respetado en su dignidad y libertad de expresión.</li>
                <li>• Participar en actividades escolares y recreativas.</li>
                <li>• Recibir educación de calidad y ser escuchado.</li>
                <li>• Un ambiente seguro y libre de discriminación.</li>
              </ul>
           </Card>
           <Card title={<span className="flex items-center gap-2"><FaBook /> Deberes del Estudiante</span>} className="bg-secondary text-white border-none shadow-xl">
              <ul className="space-y-4 text-sm opacity-90 italic leading-relaxed">
                <li>• Respetar a todos los miembros de la comunidad.</li>
                <li>• Cumplir puntualmente con horarios y compromisos.</li>
                <li>• Cuidar el patrimonio y limpieza institucional.</li>
                <li>• Mantener un comportamiento acorde a los valores del colegio.</li>
              </ul>
           </Card>
        </div>

        {/* RESOLUCIÓN Y CIERRE */}
        <div className="flex flex-col items-center gap-10 py-16 bg-gray-50 rounded-[4rem] border border-gray-100 relative overflow-hidden">
           <div className="text-center space-y-4 max-w-xl px-6 relative z-10">
              <h4 className="text-primary font-black text-3xl">Cultura de Diálogo</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Contamos con mecanismos formales para la resolución pacífica de conflictos, incluyendo mediaciones escolares, mesas de diálogo y consejos de convivencia, priorizando siempre la formación humana.
              </p>
           </div>
           <button 
             onClick={() => navigate('/reglamentos')}
             className="group flex items-center gap-4 px-12 py-5 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-accent transition-all duration-500 relative z-10"
           >
             <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">←</span> Volver a Reglamentos
           </button>
           
           {/* Decorativo */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32"></div>
           <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full -ml-24 -mb-24"></div>
        </div>

      </div>
    </PageLayout>
  );
};

export default ReglamentoConvivencia;
