import { FaClipboardList } from "react-icons/fa6";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import CTA from "../components/CTA";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Postulaciones = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Admisión 2025">
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaClipboardList /> Admisión
          </span>
        }
        title="Proceso de Postulación"
        subtitle="Sigue estos pasos para postular a través del Sistema de Admisión Escolar (SAE)."
      />

      <div className="max-w-[900px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* Pasos del proceso */}
        <Section spacing="py-0">
          <Card className="bg-gray-50 border-gray-100">
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-6 border-b pb-4">
              Pasos a Seguir
            </h2>

            <ol className="list-decimal pl-6 space-y-8 text-[1.05rem]">
              <li>
                <strong className="text-lg block mb-3">
                  Paso 1: Ingrese al{" "}
                  <a
                    href="https://registropublicodigital.mineduc.gob.cl/rpd-app-registro-apoderado/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary underline decoration-2 underline-offset-4"
                  >
                    Portal de Registro Mineduc
                  </a>
                </strong>

                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong className="text-primary">Usuarios nuevos:</strong>{" "}
                    Si es la primera vez que postula, debe registrarse creando
                    una contraseña de 8 a 12 caracteres que incluya al menos una
                    letra mayúscula, una letra minúscula, un número y un
                    símbolo.
                  </p>
                  <p>
                    Si es extranjero, debe solicitar previamente su IPA y el IPE
                    de su estudiante en la página oficial del Ministerio de
                    Educación.
                  </p>
                  <p>
                    <strong className="text-primary">Usuarios antiguos:</strong>{" "}
                    Ingrese con su clave actual y la plataforma le pedirá
                    actualizarla.
                  </p>
                </div>
              </li>

              <li>
                <strong className="text-lg block mb-2">
                  Paso 2: Verifique la información del postulante
                </strong>
                <p className="text-gray-700">
                  {" "}
                  Revise que los datos del estudiante sean correctos.{" "}
                </p>
              </li>

              <li>
                <strong className="text-lg block mb-2">
                  Paso 3: Busque establecimientos
                </strong>
                <p className="text-gray-700">
                  {" "}
                  Ingrese a la Vitrina de establecimientos y agréguelos a su
                  lista de preferencia.{" "}
                </p>
              </li>

              <li>
                <strong className="text-lg block mb-2">
                  Paso 4: Envíe su postulación
                </strong>
                <p className="text-gray-700">
                  {" "}
                  Descargue el comprobante y no olvide cerrar su sesión.{" "}
                </p>
              </li>
            </ol>

            {/* Video de YouTube */}
            <div className="mt-12 text-center">
              <h3 className="text-primary text-xl md:text-2xl font-bold mb-6">
                Tutorial del Proceso de Postulación
              </h3>
              <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full rounded-2xl shadow-lg border border-gray-200">
                <iframe
                  src="https://www.youtube.com/embed/T5Bn3I7WzJI"
                  title="Tutorial Postulación"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-none"
                />
              </div>
            </div>

            {/* Botón oficial */}
            <div className="mt-10 text-center">
              <a
                href="https://registropublicodigital.mineduc.gob.cl/rpd-app-registro-apoderado/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary text-white no-underline rounded-xl font-bold transition-all duration-300 transform hover:bg-accent hover:text-primary hover:-translate-y-1 shadow-lg"
              >
                Ir al Portal de Registro Mineduc
              </a>
            </div>
          </Card>
        </Section>

        <CTA
          title="¿Tienes dudas sobre el proceso de postulación?"
          text="Si necesitas orientación sobre requisitos, documentación o plazos, contáctanos y te ayudamos."
          primaryLabel="Ir a Contacto"
          onPrimaryClick={() => navigate("/contacto")}
        />
      </div>
    </PageLayout>
  );
};

export default Postulaciones;
