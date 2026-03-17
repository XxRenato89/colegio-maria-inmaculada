import { FaBook, FaChartLine } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";
import "../../App.css";

const PlanEstudio = () => {
  const navigate = useNavigate();

  const studyPlans = [
    {
      title: "Primer Ciclo Básico (1° a 4° año básico)",
      items: [
        { label: "Lenguaje y Comunicación", hours: 8 },
        { label: "Matemática", hours: 8 },
        { label: "Historia, Geografía y Ciencias Sociales", hours: 4 },
        { label: "Ciencias Naturales", hours: 4 },
        { label: "Educación Física y Salud", hours: 4 },
        { label: "Artes Visuales", hours: 2 },
        { label: "Música", hours: 2 },
        { label: "Religión", hours: 2 },
        { label: "Inglés", hours: 2 },
        { label: "Orientación", hours: 1 },
        { label: "Tecnología", hours: 1 },
      ],
    },
    {
      title: "Segundo Ciclo Básico (5° a 8° año básico)",
      items: [
        { label: "Lenguaje y Comunicación", hours: 7 },
        { label: "Matemática", hours: 6 },
        { label: "Historia, Geografía", hours: 4 },
        { label: "Ciencias Naturales", hours: 4 },
        { label: "Idioma Extranjero (Inglés)", hours: 3 },
        { label: "Artes Visuales", hours: 2 },
        { label: "Música", hours: 2 },
        { label: "Educación Física y Salud", hours: 2 },
        { label: "Orientación", hours: 2 },
        { label: "Tecnología", hours: 2 },
        { label: "Religión", hours: 2 },
      ],
    },
    {
      title: "Primero Medio",
      items: [
        { label: "Matemática", hours: 7 },
        { label: "Lengua y Literatura", hours: 6 },
        { label: "Historia, Geografía y Ciencias Sociales", hours: 4 },
        { label: "Idioma Extranjero (Inglés)", hours: 4 },
        { label: "Biología", hours: 2 },
        { label: "Química", hours: 2 },
        { label: "Física", hours: 2 },
        { label: "Música, Artes Visuales", hours: 2 },
        { label: "Educación Física y Salud", hours: 2 },
        { label: "Tecnología", hours: 2 },
        { label: "Religión", hours: 2 },
        { label: "PAES Matemáticas", hours: 2 },
        { label: "PAES Lenguaje", hours: 2 },
        { label: "Cocina/Salón", hours: 2 },
        { label: "Orientación", hours: 1 },
      ],
    },
    {
      title: "Segundo Medio",
      items: [
        { label: "Matemática", hours: 7 },
        { label: "Lengua y Literatura", hours: 6 },
        { label: "Historia, Geografía y Ciencias Sociales", hours: 4 },
        { label: "Idioma Extranjero (Inglés)", hours: 4 },
        { label: "Biología", hours: 2 },
        { label: "Química", hours: 2 },
        { label: "Física", hours: 2 },
        { label: "Artes Visuales (Música)", hours: 2 },
        { label: "Educación Física y Salud", hours: 2 },
        { label: "Tecnología", hours: 2 },
        { label: "Religión", hours: 2 },
        { label: "PAES Matemáticas", hours: 2 },
        { label: "PAES Lenguaje", hours: 2 },
        { label: "Cocina/Pedicura", hours: 2 },
        { label: "Orientación", hours: 1 },
      ],
    },
    {
      title: "Tercero Medio",
      items: [
        { label: "Biología de los ecosistemas", hours: 6 },
        { label: "Probabilidades y estadística", hours: 6 },
        { label: "Lectura y escritura especial", hours: 6 },
        { label: "Lengua y Literatura", hours: 3 },
        { label: "Matemática", hours: 3 },
        { label: "Idioma Extranjero (Inglés)", hours: 2 },
        { label: "Educación Ciudadana", hours: 2 },
        { label: "Ciencias para la ciudadanía", hours: 2 },
        { label: "Filosofía", hours: 2 },
        { label: "Educación Física y Salud", hours: 2 },
        { label: "Antropologia cristiana", hours: 2 },
        { label: "PAES Matemáticas", hours: 2 },
        { label: "PAES Lenguaje", hours: 2 },
        { label: "PAES Ciencias", hours: 2 },
      ],
    },
    {
      title: "Cuarto Medio",
      items: [
        { label: "Química", hours: 6 },
        { label: "Pensamiento computacional", hours: 6 },
        { label: "Economía y sociedad", hours: 6 },
        { label: "Lengua y Literatura", hours: 3 },
        { label: "Matemática", hours: 3 },
        { label: "Idioma Extranjero (Inglés)", hours: 2 },
        { label: "Educación Ciudadana", hours: 2 },
        { label: "Ciencias para la ciudadanía", hours: 2 },
        { label: "Filosofía", hours: 2 },
        { label: "Educación Física y Salud", hours: 2 },
        { label: "Liderazgo Educativo", hours: 2 },
        { label: "PAES Ciencias", hours: 2 },
        { label: "PAES Matemáticas", hours: 2 },
        { label: "PAES Lenguaje", hours: 2 },
      ],
    },
  ];

  return (
    <PageLayout title="Plan de Estudio">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaBook /> Propuesta Educativa
          </span>
        }
        title="Plan de Estudio"
        subtitle={`Una formación alineada con el Ministerio de Educación, que integra
aprendizaje académico, habilidades prácticas y desarrollo personal.`}
      />

      {/* CONTENIDO */}
      <div className="space-y-12 max-w-[1000px] mx-auto mt-12 pb-16 px-4">
        {/* Intro */}
        <Section spacing="py-0">
          <Card
            title="Planes de Estudio"
            subtitle="El Colegio María Inmaculada de Los Ángeles ha elaborado sus Planes de Estudio siguiendo la propuesta establecida por el Ministerio de Educación, asegurando coherencia curricular y cumplimiento de los estándares nacionales."
            className="bg-primary/5 border-none shadow-none"
          >
            <div className="mt-4 p-5 bg-white rounded-xl border border-primary/10 text-primary font-medium leading-relaxed">
              Nuestro enfoque educativo no se limita a contenidos, sino que
              busca formar estudiantes capaces de comprender, aplicar y
              proyectar lo aprendido.
            </div>
          </Card>
        </Section>

        {/* Sección de Horas Semanales */}
        <Section spacing="py-0">
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-8 text-center">
            Horas por semana de cada asignatura
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studyPlans.map((plan, idx) => (
              <Card key={idx} title={plan.title} className="h-full">
                <ul className="space-y-3 mt-4">
                  {plan.items.map((item, iIdx) => (
                    <li
                      key={iIdx}
                      className="flex justify-between items-center text-gray-700 text-sm py-1 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 rounded-sm transition-colors px-1"
                    >
                      <span className="font-medium pr-4">{item.label}</span>
                      <span className="shrink-0 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                        {item.hours} hrs
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Descarga */}
        <Section
          spacing="py-8"
          className="bg-accent/5 rounded-[32px] border border-accent/10 mt-12"
        >
          <div className="text-center space-y-6">
            <h3 className="text-primary text-xl font-bold">
              ¿Necesitas el detalle completo?
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Puedes descargar el archivo Excel con la información detallada de
              todos los niveles educativos.
            </p>
            <div className="pt-2">
              <a
                href={`${import.meta.env.BASE_URL}docs/planestudio/planestudio.xlsx`}
                download
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white no-underline rounded-xl font-bold transition-all duration-300 transform hover:bg-accent hover:text-primary hover:-translate-y-1 shadow-lg"
              >
                <FaChartLine /> Descarga el Plan de Estudio (Excel)
              </a>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
};

export default PlanEstudio;
