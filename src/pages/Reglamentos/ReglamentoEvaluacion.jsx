import { FaChartBar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const ReglamentoEvaluacion = () => {
  const navigate = useNavigate();

  const niveles = [
    {
      nombre: "Nivel de Transición I y II",
      decretos: ["Bases Curriculares Decreto 481/2018"],
    },
    {
      nombre: "1° a 6° Básico",
      decretos: [
        "Decreto de Evaluación 67/2018",
        "Decreto Planes de Estudio 2960/2012 (Troncales)",
        "Decreto Planes de Estudio 2960/2012 (Especialidades)",
      ],
    },
    {
      nombre: "7° a 8° Básico",
      decretos: [
        "Decreto de Evaluación 67/2018",
        "Decreto Planes y Programas 169/2014",
      ],
    },
    {
      nombre: "1° y 2° Medio",
      decretos: [
        "Decreto de Evaluación 67/2018",
        "Decreto Planes y Programas 1264/2016",
      ],
    },
    {
      nombre: "3° y 4° Medio",
      decretos: ["Decreto de Evaluación 67/2018", "Nuevas Bases Curriculares"],
    },
  ];

  return (
    <PageLayout title="Evaluación y Promoción">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaChartBar /> Evaluación
          </span>
        }
        title="Promoción y Evaluación"
        subtitle="Normativa interna que regula los procesos académiticos de acuerdo al Decreto 67."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* MARCO LEGAL */}
        <Section spacing="py-0">
          <Card
            title="Título I: Marco Legal"
            className="border-l-4 border-l-primary"
          >
            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p>
                Presentamos nuestra Normativa Interna bajo el{" "}
                <strong>Decreto 67</strong> (vigente desde 2020), que faculta a
                los establecimientos para decidir en materias de evaluación.
              </p>
              <p>
                Este marco legal se complementa con los Decretos 83/2015 y
                170/2009, permitiendo un uso pedagógico reforzado de la
                evaluación para reducir la repitencia mediante el acompañamiento
                efectivo.
              </p>
            </div>
          </Card>
        </Section>

        {/* CUMPLIMIENTO POR NIVEL */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center italic">
            DECRETOS POR NIVEL EDUCATIVO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {niveles.map((nivel, i) => (
              <Card
                key={i}
                title={nivel.nombre}
                className="bg-gray-50/50 border-none"
              >
                <ul className="space-y-2">
                  {nivel.decretos.map((dec, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-secondary font-bold">✓</span> {dec}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* CONSIDERACIONES */}
        <Card className="bg-primary text-white border-none shadow-xl text-center py-10">
          <h3 className="text-xl font-bold mb-4">Consideraciones Generales</h3>
          <p className="text-primary-foreground max-w-2xl mx-auto text-sm leading-relaxed opacity-90 italic">
            "Garantizamos una evaluación justa, equitativa y formativa que
            respete los distintos ritmos de aprendizaje y promueva la excelencia
            en un ambiente de colaboración."
          </p>
        </Card>

        {/* CTA FINAL */}
        <div className="flex flex-col items-center gap-8 py-10 bg-yellow-50/30 rounded-3xl border border-yellow-100/50">
          <div className="text-center space-y-2">
            <h4 className="text-primary font-bold">
              ¿Dudas sobre el Reglamento?
            </h4>
            <p className="text-gray-500 text-sm">
              Comunícate directamente con nuestra dirección académica.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/contacto")}
              className="px-8 py-2 bg-primary text-white rounded-full font-bold shadow-md hover:bg-accent transition-all"
            >
              Ir a Contacto
            </button>
            <button
              onClick={() => navigate("/reglamentos")}
              className="px-8 py-2 bg-white text-primary border border-primary/20 rounded-full font-bold hover:bg-gray-50 transition-all"
            >
              Reglamentos
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ReglamentoEvaluacion;
