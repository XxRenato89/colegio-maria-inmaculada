import {
  FaBookOpen,
  FaFilePdf,
  FaEye,
  FaBullseye,
  FaHandshake,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../../App.css";

import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const RegulacionesGenerales = () => {
  const navigate = useNavigate();

  const regulacionesGenerales = [
    {
      categoria: "ARTÍCULO 1",
      descripcion: "Modificación, Revisión y Temporalidad",
      items: [
        "El reglamento se presenta para consulta todos los años en el Consejo Escolar. Propuestas de modificación se socializan con la comunidad y se incluyen previa difusión oficial.",
      ],
    },
    {
      categoria: "ARTÍCULO 2",
      descripcion: "Vigencia de las Modificaciones",
      items: [
        "Las modificaciones rigen a contar del día siguiente a la fecha de recepción en el Ministerio de Educación, tras aprobación formal de la Dirección.",
      ],
    },
    {
      categoria: "ARTÍCULO 3",
      descripcion: "Difusión Institucional",
      items: [
        "Disponible en Secretaría Académica y sitio web. Se entrega un extracto durante la matrícula y se informa en reuniones de apoderados cualquier cambio relevante.",
      ],
    },
    {
      categoria: "ARTÍCULO 4",
      descripcion: "Carácter de Circulares",
      items: [
        "Las circulares y comunicaciones tienen carácter difusivo y son obligatorias según los principios del PEI y este reglamento.",
      ],
    },
  ];

  return (
    <PageLayout title="RICE">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaBookOpen /> RICE
          </span>
        }
        title="Reglamento Interno"
        subtitle="Normativas y directrices que rigen la convivencia y el funcionamiento del Colegio María Inmaculada de Los Ángeles."
      />

      <div className="max-w-[1000px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* DESCARGA Y ACCIÓN RÁPIDA */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-6 bg-gray-50 rounded-3xl border border-gray-100">
          <a
            href={`${import.meta.env.BASE_URL}docs/reglamentos/reglamentos.pdf`}
            download
            className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-accent hover:scale-105 transition-all duration-300"
          >
            <FaFilePdf className="text-xl" /> Descargar RICE (PDF)
          </a>
          <p className="text-sm text-gray-500 font-medium italic">
            Versión actualizada 2024
          </p>
        </div>

        {/* MISIÓN Y VISIÓN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-yellow-50/50 border-yellow-100">
            <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
              <FaEye className="text-primary text-xl" /> NUESTRA VISIÓN
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aspiramos a ser una institución reconocida por su liderazgo,
              autonomía y desarrollo sustentable, fundamentada en la
              antropología cristiana y espiritualidad mariana.
            </p>
          </Card>
          <Card className="bg-yellow-50/50 border-yellow-100">
            <h3 className="text-primary font-bold mb-4 flex items-center gap-2">
              <FaBullseye className="text-primary text-xl" /> NUESTRA MISIÓN
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Formar agentes de cambio con alto componente valórico,
              comprometidos con su fe, espíritu crítico y libertad responsable
              para mejorar la sociedad.
            </p>
          </Card>
        </div>

        {/* PROPÓSITO */}
        <Section spacing="py-0">
          <Card className="bg-primary/5 border-none shadow-none text-center py-10">
            <h2 className="text-primary text-2xl font-bold mb-6">
              Propósito del Reglamento
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Establece la estructura normativa y los derechos y deberes de toda
              nuestra comunidad, promoviendo una relación colaborativa y
              constructiva para el desarrollo integral de los estudiantes.
            </p>
          </Card>
        </Section>

        {/* ARTÍCULOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {regulacionesGenerales.map((reg, i) => (
            <Card
              key={i}
              title={reg.categoria}
              subtitle={reg.descripcion}
              className="hover:shadow-md transition-shadow"
            >
              <ul className="mt-4 space-y-2">
                {reg.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-gray-600 leading-relaxed pl-4 border-l-2 border-primary/20"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* COMPROMISO FINAL */}
        <Card className="bg-primary text-white border-none shadow-xl">
          <div className="flex flex-col md:flex-row gap-8 items-center p-4">
            <FaHandshake className="text-5xl opacity-50 shrink-0" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Compromiso y Colaboración</h3>
              <p className="text-white opacity-90 text-sm leading-relaxed">
                Es deber de todos los miembros de la comunidad escolar conocer,
                adherir y velar por la correcta aplicación de las normas de
                convivencia contenidas en este Reglamento.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => navigate("/reglamentos")}
                  className="text-white border-b border-white/30 hover:border-white transition-colors text-sm font-bold pb-1"
                >
                  ← Volver a Regulaciones
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default RegulacionesGenerales;
