// src/pages/Materiales.jsx
import React from "react";
import { FaSchool } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { cursosList } from "../data/MaterialesData";

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import CTA from "../components/CTA";

const Materiales = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Lista de Útiles">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaSchool /> Materiales
          </span>
        }
        title="Listas de Útiles Escolares"
        subtitle="Recursos y materiales organizados por cada nivel educativo para el año académico."
      />

      {/* CUADRÍCULA DE CURSOS */}
      <Section spacing="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cursosList.map((curso, index) => (
            <Card
              key={index}
              variant="image-overlay"
              title={curso.titulo}
              subtitle={curso.descripcion}
              image={curso.imagen}
              className="h-[320px]"
              onClick={() => navigate(curso.path)}
            >
              <button className="mt-4 px-6 py-2 bg-white/10 border-2 border-white rounded-lg text-white font-bold transition-all duration-300 hover:bg-white hover:text-primary">
                Ver Materiales
              </button>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <CTA
        title="¿Necesitas más información?"
        text="Si tienes dudas sobre los materiales o recursos por nivel, contáctanos y te orientamos."
        primaryLabel="Ir a Contacto"
        onPrimaryClick={() => navigate("/contacto")}
      />
    </PageLayout>
  );
};

export default Materiales;
