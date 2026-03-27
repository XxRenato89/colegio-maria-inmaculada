import { FaSchool, FaFilePdf, FaTriangleExclamation } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import CTA from "../components/CTA";
import BotonContacto from "../components/BotonContacto";
import { materialesData } from "../data/MaterialesData";
import "../App.css";

const MaterialesDynamic = () => {
  const { curso } = useParams();
  const navigate = useNavigate();
  const data = materialesData[curso.toLowerCase()];

  if (!data) {
    return (
      <PageLayout title="Página no encontrada">
        <div className="p-10 text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-primary mb-6">
            Página no encontrada
          </h1>
          <BotonContacto onClick={() => navigate("/materiales")}>
            Volver a Materiales
          </BotonContacto>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={data.title}>
      <SectionHero
        title={data.title}
        subtitle={data.subtitle}
        pill={
          <span className="flex items-center gap-2">
            <FaSchool /> Materiales
          </span>
        }
      />

      <div className="max-w-[900px] mx-auto mt-12 pb-20 space-y-12 px-4">
        <Section spacing="py-0">
          <Card className="bg-gray-50 border-gray-100">
            <h2 className="text-primary text-2xl font-bold mb-8 text-center">
              Lista de Útiles
            </h2>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-6 bg-gray-50 rounded-3xl border border-gray-100">
              <a
                href={`${import.meta.env.BASE_URL}${data.pdf.replace(/^\//, "")}`}
                download
                className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-accent hover:scale-105 transition-all duration-300"
              >
                <FaFilePdf className="text-xl" /> Descargar lista de útiles (PDF)
              </a>
            </div>

            <div className="space-y-8">
              {data.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-xs"
                >
                  <h3 className="text-primary text-xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-2 h-6 bg-accent rounded-full"></span>
                    {section.heading}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    {section.items.map((item, iIdx) => (
                      <li key={iIdx} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </Section>

        <Section spacing="py-0">
          <Card className="bg-yellow-50/50 border-yellow-100 font-medium">
            <h2 className="text-primary text-2xl font-bold mb-6 text-center flex items-center justify-center gap-3">
              <FaTriangleExclamation className="text-2xl text-accent" />{" "}
              Importante
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              {data.importante.map((item, index) => (
                <li key={index} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Section>

        <CTA
          title="¿Necesitas más información?"
          text="Si tienes dudas sobre la lista o la entrega de materiales, contáctanos y te orientamos."
          primaryLabel="Ir a Contacto"
          onPrimaryClick={() => navigate("/contacto")}
          secondaryLabel="Volver a Materiales"
          onSecondaryClick={() => navigate("/materiales")}
        />
      </div>
    </PageLayout>
  );
};

export default MaterialesDynamic;
