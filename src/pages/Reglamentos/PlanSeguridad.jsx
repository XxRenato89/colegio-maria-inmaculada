import { FaShieldHalved, FaFilePdf } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const PlanSeguridad = () => {
  const navigate = useNavigate();

  const definiciones = [
    {
      term: "Emergencia",
      desc: "Suceso inesperado que requiere acción coordinada de personas entrenadas.",
    },
    {
      term: "Vía de Evacuación",
      desc: "Camino continuo y sin impedimentos hacia una zona de seguridad.",
    },
    {
      term: "Señal de Alarma",
      desc: "Indica la necesidad de evacuar hacia las zonas de seguridad.",
    },
    {
      term: "Zona de Seguridad",
      desc: "Lugar donde las personas pueden agruparse fuera del área de siniestro.",
    },
    {
      term: "Simulacro",
      desc: "Ejercicio práctico en terreno para probar la planificación de emergencias.",
    },
  ];

  return (
    <PageLayout title="Plan de Seguridad (PISE)">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaShieldHalved /> PISE
          </span>
        }
        title="Plan Integral de Seguridad"
        subtitle="Cultura preventiva y procedimientos de emergencia para el bienestar de nuestra comunidad escolar."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* INTRODUCCIÓN */}
        <Section spacing="py-0">
          <Card className="border-l-4 border-l-primary leading-relaxed text-gray-600 space-y-4">
            <h2 className="text-primary text-xl font-bold mb-4">
              Introducción
            </h2>
            <p>
              El Plan Integral de Seguridad Escolar (PISE) es una herramienta
              legal que privilegia la prevención y perfecciona los mecanismos de
              atención de accidentes y emergencias.
            </p>
            <p>
              Nuestro establecimiento ha desarrollado su Plan Específico 2024,
              abordando la diversidad de riesgos y facilitando el trabajo
              colaborativo entre profesores, apoderados, alumnos y organismos de
              emergencia (Bomberos, Carabineros, Salud).
            </p>
          </Card>
        </Section>

        {/* OBJETIVOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Objetivo General"
            className="bg-slate-300 text-black border-none shadow-xl"
          >
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex gap-3">
                <span className="shrink-0 text-secondary">•</span>
                Generar en la comunidad escolar una cultura preventiva con
                responsabilidad colectiva.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-secondary">•</span>
                Proporcionar un ambiente de seguridad integral durante las
                actividades académicas.
              </li>
            </ul>
          </Card>

          <Card
            title="Objetivos Específicos"
            className="bg-slate-200 text-black border-none shadow-xl"
          >
            <ul className="space-y-4 text-sm opacity-90">
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                Actualizar y evaluar procedimientos de evacuación ante
                emergencias.
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 text-primary">•</span>
                Fomentar actitudes de autoprotección y autocuidado en el vivir
                diario.
              </li>
            </ul>
          </Card>
        </div>

        {/* DEFINICIONES */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center italic">
            CONCEPTOS CLAVE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {definiciones.map((def, i) => (
              <Card
                key={i}
                className="hover:shadow-md transition-shadow h-full"
              >
                <h4 className="font-bold text-primary mb-2 uppercase text-xs tracking-wider">
                  {def.term}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {def.desc}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* RECURSOS Y DESCARGA */}
        <Card className="bg-yellow-50/50 border-yellow-100 text-center py-12">
          <h3 className="text-primary font-bold text-xl mb-6">
            Documentación Completa
          </h3>
          <div className="flex flex-col items-center gap-6">
            <a
              href={`${import.meta.env.BASE_URL}docs/reglamentos/reglamentos.pdf`}
              download
              className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-accent hover:scale-105 transition-all duration-300"
            >
              <FaFilePdf className="text-xl" /> Descargar RICE (PDF)
            </a>
            <p className="text-xs text-gray-400 max-w-sm italic">
              Contiene todos los protocolos de seguridad y convivencia
              actualizados al año escolar vigente.
            </p>
            <div className="pt-4 border-t border-yellow-200 w-full max-w-xs">
              <button
                onClick={() => navigate("/reglamentos")}
                className="text-primary font-bold text-sm hover:underline"
              >
                ← Volver a Regulaciones
              </button>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default PlanSeguridad;
