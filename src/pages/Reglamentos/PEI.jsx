import { FaBullseye, FaFilePdf, FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const PEI = () => {
  const navigate = useNavigate();
  return (
    <PageLayout title="PEI">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaBullseye /> PEI
          </span>
        }
        title="Proyecto Educativo Institucional"
        subtitle="Ideario que integra los valores y actitudes que emanan de nuestra naturaleza Católica y espiritualidad Mariana."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* DESCARGA Y ACCIÓN RÁPIDA */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-6 bg-gray-50 rounded-3xl border border-gray-100">
          <a
            href={`${import.meta.env.BASE_URL}docs/reglamentos/pei.pdf`}
            download
            className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <FaFilePdf className="text-xl" /> Descargar PEI (PDF)
          </a>
          <p className="text-sm text-gray-500 font-medium italic text-center md:text-left">
            Documento de Gestión Estratégica
          </p>
        </div>

        {/* PRESENTACIÓN */}
        <Section spacing="py-0">
          <Card title="Presentación" className="border-l-4 border-l-primary">
            <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
              <p>
                El Colegio María Inmaculada de Los Ángeles cuenta con un
                Proyecto Educativo Institucional (PEI) entendido como ideario
                que trata de integrar y explicar los valores y actitudes de
                nuestra espiritualidad.
              </p>
              <p>
                Respondiendo a las transformaciones tecnológicas y sociales,
                hemos elaborado nuestro Proyecto 2025 bajo el paradigma
                Socio-Cognitivo, buscando articular efectivamente las demandas
                del mundo actual con los procesos de formación.
              </p>
              <p>
                Nuestro propósito es fomentar una educación que aliente a pensar
                por sí mismo, propicie el autoanálisis y la resolución de
                problemas cotidianos de manera transformadora y creativa.
              </p>
            </div>
          </Card>
        </Section>

        {/* MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-primary text-white border-none shadow-xl">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-xl">
              <FaBullseye className="opacity-80" /> NUESTRA MISIÓN
            </h3>
            <p className="text-primary-foreground text-sm leading-relaxed opacity-90">
              Formar estudiantes agentes de cambio, personas exitosas en el
              mundo laboral y ciudadanos con un alto componente ético,
              comprometidos con su fe y libertad responsable.
            </p>
          </Card>
          <Card className="bg-secondary text-white border-none shadow-xl">
            <h3 className="font-bold mb-4 flex items-center gap-2 text-xl">
              <FaEye className="opacity-80" /> NUESTRA VISIÓN
            </h3>
            <p className="text-secondary-foreground text-sm leading-relaxed opacity-90">
              Ser una institución reconocida por su liderazgo y desarrollo
              sustentable, en conexión con empresas y universidades,
              fundamentada en la educación católica mariana.
            </p>
          </Card>
        </div>

        {/* PILARES Y ENFOQUE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card
            title="Innovación Pedagógica"
            className="bg-gray-50/50 border-none"
          >
            <p className="text-sm text-gray-600 leading-relaxed">
              Implementamos modalidades híbridas, priorización curricular y
              grupos de aprendizaje atendidos por equipos multidisciplinarios.
            </p>
          </Card>
          <Card
            title="Conexión con la Vida"
            className="bg-gray-50/50 border-none"
          >
            <p className="text-sm text-gray-600 leading-relaxed">
              Pilar fundamental es la educación financiera y oficios como
              Cuidado del Adulto Mayor, Estética y Cocina Saludable.
            </p>
          </Card>
        </div>

        {/* FORMACIÓN CRISTIANA */}
        <Card className="bg-yellow-50/50 border-yellow-100 text-center py-10">
          <h3 className="text-primary font-bold text-xl mb-4">
            Formación Valórica y Cristiana
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed italic">
            "Nuestra doctrina cristiana católica inspira el quehacer
            institucional, generando encuentros de formación espiritual que
            rigen nuestro panel de valores."
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => navigate("/reglamentos")}
              className="px-6 py-2 border border-primary/20 rounded-full text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 text-sm"
            >
              ← Volver a Regulaciones
            </button>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default PEI;
