import React from "react";
import { FaSitemap } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import quienesSomosImg from "../images/reglamentos/Institucional.webp";
import CTA from "../components/CTA";
import BotonContacto from "../components/BotonContacto";
import organigrama from "../images/Organigrama.webp";

import "../App.css";

/** Lista de cargos institucionales y sus descripciones */
const cargos = [
  {
    titulo: "Directora",
    descripcion:
      "Responsable de la dirección, organización, control y funcionamiento del establecimiento, de acuerdo a las normas legales y reglamentarias vigentes y a los objetivos y directrices de la Corporación María Inmaculada de Los Ángeles.",
  },
  {
    titulo: "Subdirectora",
    descripcion:
      "Subroga a la Directora en caso de ausencia y colabora en la dirección, organización y control del establecimiento conforme a las normas vigentes y directrices institucionales.",
  },
  {
    titulo: "Inspector General",
    descripcion:
      "Responsable de las funciones organizativas necesarias para el cumplimiento del Reglamento Interno y de Convivencia Escolar del Colegio María Inmaculada de Los Ángeles.",
  },
  {
    titulo: "Jefe de Unidad Técnico Pedagógica (UTP)",
    descripcion:
      "Responsable del asesoramiento, supervisión y evaluación del desarrollo del currículum, conforme a los planes y programas del Ministerio de Educación y las políticas de la Corporación María Inmaculada de Los Ángeles.",
  },
  {
    titulo: "Docente",
    descripcion:
      "Profesor titulado o autorizado que cumple funciones docentes conforme a los objetivos ministeriales e institucionales, orientando su labor a la formación integral de los estudiantes.",
  },
  {
    titulo: "Profesor Jefe",
    descripcion:
      "Profesor responsable de las funciones docentes y administrativas asociadas a la jefatura de curso, de acuerdo con los reglamentos internos y disposiciones de la Dirección.",
  },
  {
    titulo: "Asistente de la Educación",
    descripcion:
      "Personal que apoya el proceso educativo en funciones profesionales, de paradocencia y de servicios auxiliares.\n\n" +
      "Incluye:\n" +
      "• Inspector Educacional\n" +
      "• Técnico en Educación de Párvulos\n" +
      "• Técnico en Educación Diferencial\n" +
      "• Asistente de Aula\n" +
      "• Personal Auxiliar (aseo, cuidado y mantención del establecimiento)",
  },
];

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";

const QuienesSomos = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="¿Quiénes somos?">
      {/* HERO */}
      <Section className="py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="m-0 mb-4 text-primary text-[2rem] md:text-[2.8rem] font-bold leading-tight">
              ¿Quiénes Somos?
            </h1>
            <p className="m-0 text-[#444] text-[1.1rem] leading-[1.7]">
              Aquí lo importante no es solo “pasar materia”. Es acompañar a cada
              estudiante para que crezca con confianza, valores y herramientas
              reales para la vida.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-3 flex-wrap">
              <BotonContacto onClick={() => navigate("/postulaciones")}>
                Postulaciones
              </BotonContacto>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={quienesSomosImg}
              alt="Colegio María Inmaculada Los Ángeles"
              className="w-full max-w-[420px] h-auto md:h-[320px] object-cover rounded-2xl shadow-xl border border-gray-100"
            />
          </div>
        </div>
      </Section>

      {/* 🔥 ORGANIGRAMA */}
      <Section
        title={
          <span className="flex items-center justify-center gap-3">
            <FaSitemap /> Organigrama
          </span>
        }
        subtitle="Estructura organizacional del Colegio María Inmaculada de Los Ángeles."
        containerClassName="text-center"
      >
        <div className="mt-4 flex justify-center">
          <img
            src={organigrama}
            alt="Organigrama Colegio María Inmaculada"
            className="max-w-full rounded-2xl shadow-lg border border-gray-100"
          />
        </div>
      </Section>

      {/* EQUIPO Y CARGOS */}
      <Section
        title="Nuestro equipo educativo"
        subtitle="El colegio está conformado por profesionales y asistentes que cumplen roles fundamentales para el desarrollo académico, formativo y humano de nuestros estudiantes."
        className="bg-gray-50/50 rounded-3xl"
      >
        <div className="grid grid-cols-1 gap-4">
          {cargos.map((c, i) => (
            <Card
              key={i}
              title={c.titulo}
              subtitle={c.descripcion}
              variant="profile"
              icon="Imagen cargo"
            />
          ))}
        </div>
      </Section>

      {/* LO QUE VIVIMOS */}
      <Section
        title="Lo que vivimos día a día"
        subtitle="Este espacio está pensado para que estudiantes y familias entiendan qué tipo de experiencia ofrece el colegio: cercana, exigente y humana."
        spacing="py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Acompañamiento cercano"
            subtitle="Cada estudiante es visto y escuchado. Nos importa cómo aprende, cómo se siente y cómo se relaciona."
          />
          <Card
            title="Convivencia con respeto"
            subtitle="Promovemos una convivencia basada en el respeto, la responsabilidad y el cuidado mutuo."
          />
          <Card
            title="Aprendizaje con sentido"
            subtitle="Conectamos lo aprendido con la vida real y el futuro de cada estudiante."
          />
          <Card
            title="Identidad y valores"
            subtitle="Formación inspirada en valores cristianos y la espiritualidad mariana."
          />
          <Card
            title="Participación y pertenencia"
            subtitle="Cuando el estudiante se siente parte, aprende con mayor compromiso."
          />
          <Card
            title="Preparación para la vida"
            subtitle="Herramientas reales para un futuro autónomo y responsable."
          />
        </div>
      </Section>

      <CTA
        title="¿Quieres conocer más?"
        text="Si tienes dudas sobre el proyecto educativo o admisión, conversemos."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate("/contacto")}
      />
    </PageLayout>
  );
};

export default QuienesSomos;
