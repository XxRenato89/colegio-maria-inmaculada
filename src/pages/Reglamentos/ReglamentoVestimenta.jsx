import { FaShirt, FaVenus, FaMars, FaChild } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const ReglamentoVestimenta = () => {
  const navigate = useNavigate();

  const uniformes = [
    {
      nivel: "NT1 a Cuarto Básico",
      damas: {
        diario: [
          "Buzo Institucional",
          "Polera Institucional",
          "Zapatillas",
          "Delantal",
        ],
        fisica: "No se utiliza delantal o cotona",
      },
      varones: {
        diario: [
          "Buzo Institucional",
          "Polera Institucional",
          "Zapatillas",
          "Cotona",
        ],
        fisica: "No se utiliza delantal o cotona",
      },
    },
    {
      nivel: "Quinto Básico a Cuarto Medio",
      damas: {
        diario: [
          "Blusa Blanca",
          "Corbata institucional",
          "Falda (5cm sobre rodilla) o pantalón azul",
          "Polerón Institucional",
          "Zapatos negros",
        ],
        formal: [
          "Blusa Blanca",
          "Corbata institucional",
          "Falda (5cm sobre rodilla)",
          "Blazer con insignia",
          "Zapatos negros",
        ],
        fisica: ["Buzo Institucional", "Polera institucional", "Zapatillas"],
      },
      varones: {
        diario: [
          "Camisa Blanca",
          "Corbata Institucional",
          "Pantalón Gris",
          "Polerón Institucional",
          "Zapatos negros",
        ],
        formal: [
          "Camisa Blanca",
          "Corbata Institucional",
          "Pantalón Gris",
          "Vestón con insignia",
          "Zapatos negros",
        ],
        fisica: ["Buzo Institucional", "Polera institucional", "Zapatillas"],
      },
    },
  ];

  return (
    <PageLayout title="Reglamento de Vestimenta">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaShirt /> Vestimenta
          </span>
        }
        title="Reglamento de Vestimenta"
        subtitle="Normas de uniforme y presentación personal que promueven la identidad y el respeto institucional."
      />

      <div className="max-w-[1100px] mx-auto mt-12 pb-20 space-y-16 px-4">
        {/* PRESENTACIÓN */}
        <Section spacing="py-0">
          <Card className="border-l-4 border-l-primary bg-gray-50/30">
            <h2 className="text-primary text-xl font-bold mb-4 uppercase tracking-tight">
              Presentación Personal
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Establecemos normas que favorecen un ambiente propicio para el
              aprendizaje. El uso del uniforme es <strong>obligatorio</strong> y
              debe mantenerse en buen estado, limpio y completo todos los días.
            </p>
          </Card>
        </Section>

        {/* UNIFORMES POR NIVEL */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest">
            GUÍA DE UNIFORME
          </h2>
          <div className="space-y-12">
            {uniformes.map((item, i) => (
              <div key={i} className="space-y-6">
                <h3 className="text-secondary font-bold text-lg border-b border-secondary/20 pb-2">
                  {item.nivel}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* DAMAS */}
                  <Card
                    title={
                      <span className="flex items-center gap-2">
                        <FaVenus className="text-pink-500" /> Damas
                      </span>
                    }
                    className="h-full border-none shadow-md bg-white"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-primary text-xs uppercase mb-2">
                          Tenida Diaria/Formal
                        </h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {Array.isArray(item.damas.diario) ? (
                            item.damas.diario.map((v, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-500 flex gap-2"
                              >
                                <span className="text-secondary">•</span> {v}
                              </li>
                            ))
                          ) : (
                            <li className="text-sm text-gray-500">
                              {item.damas.diario}
                            </li>
                          )}
                        </ul>
                      </div>
                      {item.damas.formal && (
                        <div>
                          <h4 className="font-bold text-primary text-xs uppercase mb-2">
                            Gala (Si aplica)
                          </h4>
                          <ul className="grid grid-cols-1 gap-1">
                            {item.damas.formal.map((v, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-500 flex gap-2"
                              >
                                <span className="text-secondary">•</span> {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="p-3 bg-secondary/5 rounded-xl border border-secondary/10">
                        <h4 className="font-bold text-secondary text-xs uppercase mb-1">
                          Educación Física
                        </h4>
                        <p className="text-xs text-secondary/80 italic">
                          {Array.isArray(item.damas.fisica)
                            ? item.damas.fisica.join(", ")
                            : item.damas.fisica}
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* VARONES */}
                  <Card
                    title={
                      <span className="flex items-center gap-2">
                        <FaMars className="text-blue-500" /> Varones
                      </span>
                    }
                    className="h-full border-none shadow-md bg-white"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-primary text-xs uppercase mb-2">
                          Tenida Diaria/Formal
                        </h4>
                        <ul className="grid grid-cols-1 gap-1">
                          {Array.isArray(item.varones.diario) ? (
                            item.varones.diario.map((v, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-500 flex gap-2"
                              >
                                <span className="text-secondary">•</span> {v}
                              </li>
                            ))
                          ) : (
                            <li className="text-sm text-gray-500">
                              {item.varones.diario}
                            </li>
                          )}
                        </ul>
                      </div>
                      {item.varones.formal && (
                        <div>
                          <h4 className="font-bold text-primary text-xs uppercase mb-2">
                            Gala (Si aplica)
                          </h4>
                          <ul className="grid grid-cols-1 gap-1">
                            {item.varones.formal.map((v, idx) => (
                              <li
                                key={idx}
                                className="text-sm text-gray-500 flex gap-2"
                              >
                                <span className="text-secondary">•</span> {v}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="p-3 bg-secondary/5 rounded-xl border border-secondary/10">
                        <h4 className="font-bold text-secondary text-xs uppercase mb-1">
                          Educación Física
                        </h4>
                        <p className="text-xs text-secondary/80 italic">
                          {Array.isArray(item.varones.fisica)
                            ? item.varones.fisica.join(", ")
                            : item.varones.fisica}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* NORMATIVAS Y PROCEDIMIENTOS */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl font-bold mb-8 text-center uppercase tracking-widest">
            Protocolos de Vestimenta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card title="24.1 Uso Obligatorio" className="bg-gray-50/50">
              <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                <li>• Uso diario completo sin variaciones por moda.</li>
                <li>
                  • Uniforme deportivo exclusivo para clases de Ed. Física.
                </li>
                <li>
                  • Identificación obligatoria (nombre y curso) en cada prenda.
                </li>
                <li>• Responsabilidad de custodia recae en el estudiante.</li>
              </ul>
            </Card>

            <Card title="24.3 Incumplimiento" className="bg-gray-50/50">
              <ul className="text-xs text-gray-600 space-y-2 leading-relaxed">
                <li>1. Diálogo reflexivo con el Profesor Jefe.</li>
                <li>2. Comunicación escrita o telefónica al apoderado.</li>
                <li>3. Citación presencial al apoderado.</li>
                <li>
                  4. Derivación a Inspectoría General en casos persistentes.
                </li>
              </ul>
            </Card>

            <Card title="24.4 Casos Especiales" className="bg-gray-50/50">
              <p className="text-xs text-gray-600 leading-relaxed italic border-l-2 border-secondary pl-4">
                "Estudiantes embarazadas o transgénero tienen derecho a adecuar
                su uniforme según su condición e identidad, resguardando su
                dignidad de acuerdo a la normativa legal vigente."
              </p>
            </Card>

            <Card title="24.5 Cuidado Corporal" className="bg-gray-50/50">
              <div className="space-y-4 text-[11px] text-gray-600 uppercase font-bold tracking-tight">
                <div className="flex justify-between border-b pb-1">
                  <span>Varones</span>
                  <span className="text-secondary">
                    Cabello Corto / Sin Aretes
                  </span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Damas</span>
                  <span className="text-secondary">
                    Sin Maquillaje / Aros Pequeños
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Uñas</span>
                  <span className="text-secondary">Cortas y Limpias</span>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        {/* PARVULARIA */}
        <Card className="bg-primary text-white border-none shadow-2xl overflow-hidden relative">
          <div className="relative z-10 py-10 px-8 text-center space-y-4">
            <h3 className="text-xl font-bold flex items-center justify-center gap-3">
              <FaChild className="text-2xl" /> Educación Parvularia
            </h3>
            <p className="text-sm opacity-80 max-w-2xl mx-auto">
              Protocolo de recambio de ropa: Ante situaciones de emergencia, el
              personal asistirá al párvulo cubriéndolo con mantas o ropa
              disponible. El apoderado será notificado para asistir con recambio
              de inmediato.
            </p>
            <div className="pt-6">
              <button
                onClick={() => navigate("/reglamentos")}
                className="px-8 py-2 bg-secondary text-white rounded-full font-bold shadow-lg hover:bg-accent transition-all"
              >
                Reglamentos
              </button>
            </div>
          </div>
          {/* Decorativo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -ml-12 -mb-12"></div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default ReglamentoVestimenta;
