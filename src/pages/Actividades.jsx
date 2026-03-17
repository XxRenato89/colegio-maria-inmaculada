import React from "react";
import {
  FaBook,
  FaPuzzlePiece,
  FaTrophy,
  FaCalendarDays,
  FaStar,
} from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import SectionHero from "../components/SectionHero";
import CTA from "../components/CTA";
import "../App.css";

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";

const Actividades = () => {
  const navigate = useNavigate();

  const actividades = [
    {
      titulo: "Plan de Estudio",
      descripcion: "Conoce nuestro currículum y planificación académica.",
      path: "/actividades/plan-estudio",
      icon: <FaBook />,
    },
    {
      titulo: "Talleres",
      descripcion: "Programas extracurriculares y actividades complementarias.",
      path: "/actividades/talleres",
      icon: <FaPuzzlePiece />,
    },
    {
      titulo: "Concursos",
      descripcion: "Participación en competencias académicas y culturales.",
      path: "/actividades/concursos",
      icon: <FaTrophy />,
    },
    {
      titulo: "Efemérides",
      descripcion: "Celebraciones y eventos especiales del calendario escolar.",
      path: "/actividades/efemerides",
      icon: <FaCalendarDays />,
    },
  ];

  return (
    <PageLayout title="Actividades">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaStar /> Vida Escolar • Actividades
          </span>
        }
        title="Actividades Escolares"
        subtitle={`Programas y eventos que fortalecen talentos, convivencia y participación.
Entra a cada sección para ver detalles y recursos.`}
        primaryLabel="Consultar información"
        onPrimaryClick={() => navigate("/contacto")}
        secondaryLabel="Ver Postulaciones"
        onSecondaryClick={() => navigate("/postulaciones")}
      />

      {/* CARDS */}
      <Section spacing="py-12 mb-16 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {actividades.map((a, idx) => (
            <Card
              key={idx}
              title={a.titulo}
              subtitle={a.descripcion}
              icon={a.icon}
              onClick={() => navigate(a.path)}
              footer={
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  Explorar <span>→</span>
                </div>
              }
              className="h-full flex flex-col justify-between group"
            />
          ))}
        </div>
      </Section>

      {/* CTA final */}
      <CTA
        title="¿Quieres saber más sobre nuestras actividades?"
        text="Si deseas información detallada sobre talleres, concursos o actividades formativas, nuestro equipo estará disponible para orientarte."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate("/contacto")}
      />
    </PageLayout>
  );
};

export default Actividades;
