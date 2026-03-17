import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";
import BotonContacto from "../../components/BotonContacto";
import "../../App.css";
import { FaTrophy } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Concursos = () => {
  const navigate = useNavigate();

  const concursos = [
    {
      titulo: "Cueca",
      descripcion:
        "Competencia cultural donde los estudiantes demuestran sus habilidades en la danza tradicional chilena, celebrando nuestra identidad nacional a través del folklore.",
    },
    {
      titulo: "Ajedrez",
      descripcion:
        "Torneo de ajedrez que fomenta el pensamiento estratégico, la concentración y el desarrollo de habilidades cognitivas en nuestros estudiantes.",
    },
    {
      titulo: "Festival de la Voz",
      descripcion:
        "Concurso vocal donde los estudiantes compiten demostrando su talento musical y artístico, promoviendo la expresión artística y la confianza en público.",
    },
    {
      titulo: "Show de Talentos",
      descripcion:
        "Evento multidisciplinario donde los estudiantes muestran sus diversos talentos artísticos, fomentando la creatividad y el espíritu de participación.",
    },
    {
      titulo: "Spelling Bee",
      descripcion:
        "Competencia de ortografía en inglés que desafía a los estudiantes a demostrar su dominio del vocabulario y la precisión lingüística en el idioma extranjero.",
    },
  ];

  return (
    <PageLayout title="Concursos">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaTrophy /> Vida Escolar
          </span>
        }
        title="Concursos Escolares"
        subtitle={`Eventos que impulsan participación, talento y confianza.
Actividades pensadas para que cada estudiante encuentre un espacio donde destacar.`}
      />

      {/* CONTENIDO */}
      <div className="space-y-8 max-w-[900px] mx-auto mt-12 pb-16">
        {/* Intro */}
        <Section spacing="py-0">
          <Card
            title="Participar es crecer"
            subtitle="Nuestros concursos promueven habilidades artísticas, cognitivas y sociales, fortaleciendo la convivencia y el sentido de pertenencia."
            className="bg-primary/5 border-none"
          >
            <div className="mt-4 p-4 bg-white/50 rounded-xl border border-primary/10 text-primary text-sm">
              <span className="font-bold">Tip:</span> no se trata solo de
              competir, sino de aprender, compartir y atreverse.
            </div>
          </Card>
        </Section>

        {/* Lista de concursos */}
        <Section spacing="py-0">
          <div className="grid grid-cols-1 gap-6">
            {concursos.map((concurso, index) => (
              <Card
                key={index}
                title={concurso.titulo}
                subtitle={concurso.descripcion}
              />
            ))}
          </div>
        </Section>

        {/* Cierre */}
        <Section spacing="py-0">
          <Card
            title="Inscripciones y fechas"
            subtitle="Las fechas y bases pueden variar durante el año escolar. Para conocer requisitos, cupos y calendario actualizado, contáctanos."
            className="border-accent/20 bg-accent/5"
          >
            <div className="mt-4 p-4 bg-white/80 rounded-xl border border-accent/20 text-gray-700 italic text-sm">
              <span className="font-bold text-primary not-italic">
                Recuerda:
              </span>{" "}
              participar es una oportunidad para practicar, mejorar y ganar
              confianza.
            </div>

            <div className="mt-8">
              <BotonContacto onClick={() => navigate("/contacto")}>
                Consultar por Concursos
              </BotonContacto>
            </div>
          </Card>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Concursos;
