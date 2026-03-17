import { FaCalendarDays } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";
import BotonContacto from "../../components/BotonContacto";
import "../../App.css";

const Efemerides = () => {
  const navigate = useNavigate();

  const efemerides = [
    {
      titulo: "Bienvenida de Estudiantes",
      descripcion:
        "Celebración especial para dar la bienvenida a todos nuestros estudiantes al nuevo año escolar.",
    },
    {
      titulo: "Día del Carabinero",
      descripcion:
        "Reconocimiento a los carabineros por su labor y servicio a la comunidad.",
    },
    {
      titulo: "Natalicio de Bernardo O'Higgins",
      descripcion:
        "Homenaje al Libertador Bernardo O'Higgins en su fecha de nacimiento.",
    },
    {
      titulo: "Día del Estudiante",
      descripcion:
        "Celebración dedicada a reconocer el esfuerzo y dedicación de nuestros estudiantes.",
    },
    {
      titulo: "Día del Profesor",
      descripcion:
        "Reconocimiento a nuestros docentes por su invaluable labor educativa.",
    },
    {
      titulo: "Día del Asistente",
      descripcion:
        "Agradecimiento al personal de apoyo que contribuye al buen funcionamiento del colegio.",
    },
    {
      titulo: "Fiestas Patrias",
      descripcion:
        "Celebración de las fiestas nacionales con actividades patrióticas y culturales.",
    },
    {
      titulo: "Premiación Cuadro de Honor",
      descripcion:
        "Ceremonia especial para reconocer el mérito académico de nuestros estudiantes.",
    },
    {
      titulo: "English Day",
      descripcion:
        "Día dedicado a fomentar el uso del idioma inglés mediante actividades lúdicas.",
    },
    {
      titulo: "Encuentro de Dos Mundos",
      descripcion:
        "Conmemoración del encuentro de civilizaciones en la historia americana.",
    },
    {
      titulo: "Aniversario Colegio",
      descripcion:
        "Celebración del aniversario fundacional de nuestro colegio.",
    },
    {
      titulo: "Semana de la Inclusión",
      descripcion:
        "Actividades destinadas a promover la diversidad y la inclusión educativa.",
    },
    {
      titulo: "Paso a Pasito Leo Solito",
      descripcion:
        "Evento para los más pequeños que inician su proceso lector.",
    },
    {
      titulo: "Ya Soy Grande",
      descripcion:
        "Celebración para estudiantes que avanzan en su desarrollo escolar.",
    },
    {
      titulo: "Ceremonia de Transición 8° Básico",
      descripcion: "Ceremonia para quienes concluyen la enseñanza básica.",
    },
    {
      titulo: "Licenciatura IV° Medio",
      descripcion: "Ceremonia solemne de egreso de la enseñanza media.",
    },
  ];

  return (
    <PageLayout title="Efemérides">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaCalendarDays /> Vida Escolar
          </span>
        }
        title="Efemérides Escolares"
        subtitle={`Fechas y celebraciones que fortalecen la identidad, la convivencia
y el sentido de comunidad a lo largo del año escolar.`}
      />

      {/* CONTENIDO */}
      <div className="space-y-8 max-w-[1000px] mx-auto mt-12 pb-16">
        {/* Intro */}
        <Section spacing="py-0">
          <Card
            title="Celebrar también es educar"
            subtitle="Las efemérides son instancias formativas que promueven valores, participación y memoria colectiva. Cada celebración aporta a la construcción de una comunidad educativa más cercana y consciente."
            className="bg-primary/5 border-none"
          >
            <div className="mt-4 p-4 bg-white/50 rounded-xl border border-primary/10 text-primary text-sm font-medium">
              <span className="font-bold">Enfoque:</span> identidad, respeto y
              participación activa.
            </div>
          </Card>
        </Section>

        {/* Lista de efemérides en Grid */}
        <Section spacing="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {efemerides.map((e, i) => (
              <Card
                key={i}
                title={e.titulo}
                subtitle={e.descripcion}
                className="h-full"
              />
            ))}
          </div>
        </Section>

        {/* Cierre */}
        <Section spacing="py-0">
          <Card
            title="Calendario y actividades"
            subtitle="Las fechas específicas y actividades asociadas se informan durante el año escolar. Para conocer el calendario actualizado y las próximas celebraciones, contáctanos."
            className="border-accent/20 bg-accent/5"
          >
            <div className="mt-4 p-5 bg-white/80 rounded-xl border border-accent/20 text-primary italic font-medium">
              "Las tradiciones crean recuerdos; los recuerdos construyen
              comunidad."
            </div>

            <div className="mt-8">
              <BotonContacto onClick={() => navigate("/contacto")}>
                Consultar Efemérides
              </BotonContacto>
            </div>
          </Card>
        </Section>
      </div>
    </PageLayout>
  );
};

export default Efemerides;
