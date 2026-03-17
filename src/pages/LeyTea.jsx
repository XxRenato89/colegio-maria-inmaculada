import { FaBookOpen } from "react-icons/fa6";
import BotonContacto from "../components/BotonContacto";

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";

const LeyTea = () => {
  return (
    <PageLayout title="Ley TEA">
      {/* HERO */}
      <SectionHero
        title="Ley TEA"
        subtitle="ESTABLECE LA PROMOCIÓN DE LA INCLUSIÓN, LA ATENCIÓN INTEGRAL, Y LA PROTECCIÓN DE LOS DERECHOS DE LAS PERSONAS CON TRASTORNO DEL ESPECTRO AUTISTA."
      />

      {/* CONTENIDO */}
      <div className="max-w-[900px] mx-auto mt-12 pb-20 space-y-12 px-4">
        {/* Introducción */}
        <Section spacing="py-0">
          <Card className="bg-primary/5 border-none shadow-none text-center py-10">
            <h2 className="text-primary text-2xl font-bold mb-4 uppercase tracking-tighter">
              LEY NÚM. 21.545
            </h2>
            <p className="text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed italic">
              "Promoción de la inclusión, atención integral y protección de los
              derechos en el ámbito social, salud y educación."
            </p>
          </Card>
        </Section>

        {/* Artículos Principales */}
        <div className="space-y-8">
          {/* Artículo 1 */}
          <Section spacing="py-0">
            <Card
              title="Artículo 1: Disposiciones Generales"
              className="border-l-4 border-l-primary"
            >
              <p className="text-gray-600 leading-relaxed text-[0.95rem]">
                Asegurar el derecho a la igualdad de oportunidades y resguardar
                la inclusión social de los niños, niñas, adolescentes y adultos
                con trastorno del espectro autista; eliminar cualquier forma de
                discriminación; promover un abordaje integral y concientizar a
                la sociedad.
                <span className="block mt-4 font-medium text-primary/80 italic">
                  El TEA abarca todo el ciclo vital de las personas.
                </span>
              </p>
            </Card>
          </Section>

          {/* Artículo 2 */}
          <Section spacing="py-0">
            <Card
              title="Artículo 2: Definiciones Claves"
              className="border-l-4 border-l-primary"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                    Personas con TEA
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l border-gray-100">
                    Aquellas que presentan una diferencia o diversidad en el
                    neurodesarrollo típico, con dificultades significativas en
                    la interacción y comunicación social, así como conductas
                    restrictivas o repetitivas. Corresponde a una{" "}
                    <strong className="text-gray-800 underline decoration-accent/30">
                      condición del neurodesarrollo
                    </strong>{" "}
                    que requiere diagnóstico.
                  </p>
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>{" "}
                    Persona Cuidadora
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed pl-4 border-l border-gray-100">
                    Quien proporcione asistencia o cuidado en los términos
                    previstos por la ley de derechos y deberes del paciente.
                  </p>
                </div>
              </div>
            </Card>
          </Section>

          {/* Artículo 3 */}
          <Section spacing="py-0">
            <Card
              title="Artículo 3: Principios Rectores"
              className="border-l-4 border-l-primary bg-gray-50/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {[
                  {
                    t: "Trato Digno",
                    d: "Respeto mutuo y lenguaje claro en toda atención.",
                  },
                  {
                    t: "Autonomía Progresiva",
                    d: "Ejercicio de derechos según edad y madurez.",
                  },
                  {
                    t: "Perspectiva de Género",
                    d: "Considerar variable de género en toda medida.",
                  },
                  {
                    t: "Intersectorialidad",
                    d: "Coordinación entre diversos órganos del Estado.",
                  },
                  {
                    t: "Neurodiversidad",
                    d: "Variabilidad natural en el funcionamiento cerebral.",
                  },
                  {
                    t: "Detección Temprana",
                    d: "Diagnóstico oportuno en los primeros años.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
                  >
                    <h5 className="text-primary font-bold mb-1 text-sm">
                      {item.t}
                    </h5>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </Section>
        </div>

        {/* Artículo 4 y 5 Resumidos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Artículo 4: Aplicación"
            className="bg-accent/5 border-none"
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              Las disposiciones de la{" "}
              <strong className="text-primary">Ley N° 20.422</strong> sobre
              igualdad de oportunidades también son aplicables a personas con
              TEA certificadas.
            </p>
          </Card>
          <Card
            title="Artículo 5: Protección"
            className="bg-accent/5 border-none"
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              Legitimación activa para interponer acciones legales ante
              discriminación arbitraria o amenazas a sus derechos fundamentales.
            </p>
          </Card>
        </div>

        {/* Sección de información adicional */}
        <Section
          spacing="py-8"
          className="bg-primary/5 rounded-[40px] border border-primary/10 text-center"
        >
          <div className="max-w-md mx-auto space-y-6">
            <h3 className="text-primary text-xl font-bold">
              ¿Necesitas conocer el texto íntegro?
            </h3>
            <p className="text-gray-600 text-sm">
              Consulta la publicación oficial en el Diario Oficial para obtener
              todos los detalles técnicos y legales actualizados.
            </p>
            <BotonContacto
              onClick={() =>
                window.open(
                  "https://www.bcn.cl/leychile/navegar?idNorma=1190123",
                  "_blank",
                )
              }
            >
              <FaBookOpen /> Leer Ley Completa en BCN
            </BotonContacto>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default LeyTea;
