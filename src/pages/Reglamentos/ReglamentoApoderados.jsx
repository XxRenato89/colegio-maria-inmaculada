import { FaHandshake, FaBalanceScale, FaBook } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';
import Section from '../../components/Section';
import Card from '../../components/Card';
import SectionHero from '../../components/SectionHero';

const ReglamentoApoderados = () => {
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

  const tiposInfracciones = [
    {
      nivel: "Leves",
      color: "text-green-600",
      bg: "bg-green-50/50",
      desc: "Faltas que afectan mínimamente la convivencia.",
      ejemplos: ["Atrasos", "Falta de materiales", "Uniforme incompleto"]
    },
    {
      nivel: "Graves",
      color: "text-yellow-600",
      bg: "bg-yellow-50/50",
      desc: "Faltas que afectan significativamente la convivencia.",
      ejemplos: ["Faltas de respeto", "Incumplimiento de sanciones", "Disturbios"]
    },
    {
      nivel: "Gravísimas",
      color: "text-red-600",
      bg: "bg-red-50/50",
      desc: "Faltas que ponen en riesgo la integridad física o moral.",
      ejemplos: ["Violencia", "Bullying", "Sustancias prohibidas"]
    }
  ];

  return (
    <PageLayout>
      {/* HERO */}
      <SectionHero
        pill={<span className="flex items-center gap-2"><FaHandshake /> Apoderados</span>}
        title="Reglamento de Apoderados"
        subtitle="Directrices y orientaciones para el rol fundamental de las familias en nuestra comunidad educativa."
      />

      <div className="max-w-[1100px] mx-auto mt-12 pb-20 space-y-16 px-4">
        
        {/* AVISO */}
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6 text-center max-w-2xl mx-auto shadow-sm">
           <p className="text-yellow-800 text-sm font-medium italic">
             <strong>NOTA:</strong> Esta información es ilustrativa. Las normas específicas oficiales deben ser consultadas en la administración del establecimiento.
           </p>
        </div>

        {/* PROPÓSITO */}
        <Section spacing="py-0">
          <Card className="border-l-4 border-l-primary bg-primary/5">
            <h2 className="text-primary text-xl font-bold mb-4">Propósito del Reglamento</h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              Este reglamento busca promover una convivencia basada en el respeto, la tolerancia y la solidaridad. Establece normas que permiten crear un ambiente propicio para el aprendizaje y el desarrollo integral, en consonancia con los valores cristianos que inspiran nuestra institución.
            </p>
          </Card>
        </Section>

        {/* PRINCIPIOS */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Principios Fundamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principiosConvivencia.map((p, i) => (
              <Card key={i} title={p.titulo} className="hover:shadow-lg transition-all h-full">
                <p className="text-xs text-secondary font-medium mb-4 italic opacity-80">{p.desc}</p>
                <ul className="space-y-2">
                  {p.aspectos.map((a, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex gap-2">
                      <span className="text-primary">•</span> {a}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* INFRACCIONES */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest italic">Escala de Convivencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiposInfracciones.map((t, i) => (
              <Card key={i} className={`${t.bg} border-none shadow-md overflow-hidden`}>
                <h3 className={`${t.color} font-black text-xl mb-2`}>{t.nivel}</h3>
                <p className="text-xs text-gray-600 mb-6 leading-relaxed font-medium">{t.desc}</p>
                <div className="space-y-2 pt-4 border-t border-black/5">
                   {t.ejemplos.map((ej, idx) => (
                     <div key={idx} className="text-[11px] text-gray-500 uppercase tracking-tighter flex justify-between items-center">
                        <span>{ej}</span>
                        <span className="opacity-30">▶</span>
                     </div>
                   ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* DERECHOS Y DEBERES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <Card title={<span className="flex items-center gap-2"><FaBalanceScale /> Derechos</span>} className="bg-primary text-white border-none shadow-xl">
              <ul className="space-y-4 text-sm opacity-90 italic leading-relaxed">
                <li>• Ser respetado en su dignidad y libertad de expresión.</li>
                <li>• Participar activamente en la vida escolar.</li>
                <li>• Recibir educación de calidad y ser escuchado.</li>
              </ul>
           </Card>
           <Card title={<span className="flex items-center gap-2"><FaBook /> Deberes</span>} className="bg-secondary text-white border-none shadow-xl">
              <ul className="space-y-4 text-sm opacity-90 italic leading-relaxed">
                <li>• Respetar a todos los miembros de la comunidad.</li>
                <li>• Cumplir puntualmente con horarios y normas.</li>
                <li>• Cuidar el patrimonio y prestigio institucional.</li>
              </ul>
           </Card>
        </div>

        {/* CIERRE */}
        <div className="flex flex-col items-center gap-10 py-16 bg-gray-50 rounded-[3rem] border border-gray-100">
           <div className="text-center space-y-4 max-w-md">
              <h4 className="text-primary font-bold text-2xl">¿Requiere mediación?</h4>
              <p className="text-gray-500 text-sm">Disponemos de mecanismos de resolución de conflictos como mesas de diálogo y consejos de convivencia.</p>
           </div>
           <button 
             onClick={() => navigate('/reglamentos')}
             className="group flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full font-bold shadow-2xl hover:bg-accent transition-all duration-300"
           >
             <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span> Volver a Reglamentos
           </button>
        </div>

      </div>
    </PageLayout>
  );
};

export default ReglamentoApoderados;
