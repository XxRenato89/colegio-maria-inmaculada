/**
 * Página de Inicio
 *
 * La página de aterrizaje principal de la aplicación.
 * Presenta un carrusel hero de alto impacto, un mensaje de bienvenida institucional
 * y botones de acceso rápido a secciones clave.
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/Carousel";
import { carouselImages } from "../data/carouselImages";
import "../App.css";

import Section from "../components/Section";
import Card from "../components/Card";
import BotonContacto from "../components/BotonContacto";

import PageLayout from "../components/PageLayout";

const Home = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      title="Inicio"
      className="p-0 md:p-0"
      description="Bienvenidos al sitio oficial del Colegio María Inmaculada de Los Ángeles. Conoce nuestro proyecto educativo, procesos de postulación y actividades institucionales."
    >
      {/* Carrusel Principal */}
      <section className="p-4 md:p-8">
        <Carousel images={carouselImages} interval={5000} />
      </section>

      {/* Bienvenida */}
      <Section className="px-4">
        <div className="max-w-[980px] mx-auto bg-gray-50 border border-gray-100 rounded-[32px] overflow-hidden shadow-xl">
          <div className="bg-linear-to-r from-primary to-secondary p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight italic drop-shadow-md">
              "Sembrando sueños e innovando para servir"
            </h2>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-12 text-justify md:text-left">
              Somos una institución humanista basada en una antropología
              cristiana, que proyecta al estudiante desde una formación
              holística, siguiendo el perfil de egreso del estudiante del año
              2030 dada por la OCDE. Se perfila una persona de fe cristiana, con
              fuerte carácter ético, demócrata, con capacidad de trabajo en
              equipo, liderazgo autosustentable, flexibilidad, inventiva, con
              capacidad de resolver problemas ecológicos, adaptarse al cambio y
              a la contingencia de la sociedad futura.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                title="¿Cuál es nuestra Concepción Educativa?"
                subtitle="Establecer estrategias que favorezcan un aprendizaje constructivo - significativo, permanente y continuo, en el colegio, en la familia y en los proyectos pedagógicos de tal modo que, los estudiantes sean los actores principales de su proceso educativo."
                className="bg-white"
              />
              <Card
                title="¿Cuál es nuestro objetivo social?"
                subtitle="Establecer en el Colegio, un ambiente de fe, donde la confianza, la cordialidad y la comunicación sean un nexo permanente entre: profesores, estudiantes, apoderados, personal asistente de la educación del Establecimiento y el resto de la sociedad."
                className="bg-white"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Botones principales */}
      <Section className="bg-gray-50/50" spacing="py-16">
        <div className="flex justify-center gap-6 flex-wrap">
          <BotonContacto onClick={() => navigate("/postulaciones")}>
            Ir a Postulaciones
          </BotonContacto>
          <BotonContacto
            onClick={() => navigate("/reglamentos")}
            variant="secondary"
          >
            Ver Reglamentos
          </BotonContacto>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
