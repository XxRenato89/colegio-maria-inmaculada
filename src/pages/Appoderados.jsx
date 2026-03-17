import { FaMobileScreenButton, FaGlobe } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Botones from "../components/Botones";
import BotonContacto from "../components/BotonContacto";
import CTA from "../components/CTA";
import "../App.css";

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";

const Appoderados = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Appoderado">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaMobileScreenButton /> Comunicación
          </span>
        }
        title="¿Qué es Appoderado?"
        subtitle="Una aplicación escolar pensada para padres y apoderados para seguir la vida académica de sus hijos de forma simple, segura y actualizada."
      />

      {/* CONTENIDO */}
      <div className="max-w-[900px] mx-auto mt-12 pb-16 space-y-12">
        {/* TUTORIAL DE ACCESO */}
        <Section spacing="py-0">
          <Card
            title="¿Cómo ingresar por primera vez?"
            className="bg-gray-50 border-gray-100 shadow-md"
          >
            <ol className="mt-4 space-y-4 text-gray-700 text-lg">
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0 shadow-sm border border-white/20">
                  1
                </span>
                <span>
                  Ingresar el{" "}
                  <strong className="text-primary">RUT del estudiante</strong>.
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0 shadow-sm border border-white/20">
                  2
                </span>
                <span>
                  Digitar la{" "}
                  <strong className="text-primary">
                    contraseña provisoria: 0000
                  </strong>
                  .
                </span>
              </li>
              <li className="flex gap-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold shrink-0 shadow-sm border border-white/20">
                  3
                </span>
                <span>
                  Presionar <strong className="text-primary">Ingresar</strong>{" "}
                  para acceder a la plataforma.
                </span>
              </li>
            </ol>
          </Card>
        </Section>

        {/* DESCARGA */}
        <Section spacing="py-0" className="text-center">
          <h2 className="text-primary text-2xl font-bold mb-6">
            Descarga aquí
          </h2>
          <div className="flex justify-center transform scale-110 md:scale-125">
            <Botones />
          </div>
        </Section>

        {/* ACCESO WEB */}
        <Section spacing="py-0" className="text-center">
          <BotonContacto
            onClick={() =>
              window.open("https://appoderado.cl/sistema/index-login", "_blank")
            }
          >
            <span className="flex items-center gap-2">
              <FaGlobe /> Acceso Appoderado.com
            </span>
          </BotonContacto>
        </Section>

        {/* VIDEO */}
        <Section spacing="py-0">
          <Card title="Tutorial Appoderado" className="overflow-hidden p-0">
            <div className="p-6">
              <p className="text-gray-600 mb-6">
                Aprende a usar todas las funciones de la aplicación con este
                video explicativo.
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/9EMF7cYkgoM"
                  title="Tutorial Appoderado"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-none"
                />
              </div>
            </div>
          </Card>
        </Section>

        {/* CTA */}
        <CTA
          title="¿Necesitas más información?"
          text="Si tienes dudas sobre la instalación o el uso de Appoderado, contáctanos. Te orientamos de forma clara y directa."
          primaryLabel="Ir a Contacto"
          onPrimaryClick={() => navigate("/contacto")}
        />
      </div>
    </PageLayout>
  );
};

export default Appoderados;
