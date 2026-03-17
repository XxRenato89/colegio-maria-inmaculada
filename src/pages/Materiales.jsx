// src/pages/Materiales.jsx
import React from "react";
import { FaSchool } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import "../App.css";
import materialesTIMG from "../images/materiales/MaterialesT.webp";
import riceImg from "../images/reglamentos/RICE.webp";
import leyteaImg from "../images/reglamentos/LeyTEA.webp";
import peiImg from "../images/reglamentos/PEI.webp";
import apoderadosImg from "../images/reglamentos/Apoderados.webp";
import vestimentaImg from "../images/reglamentos/vestimenta.webp";
import pdiImg from "../images/reglamentos/PDI.webp";

import img1 from "../images/carousel/img1.webp";
import img2 from "../images/carousel/img2.webp";
import img3 from "../images/carousel/img3.webp";

import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import CTA from "../components/CTA";

const Materiales = () => {
  const navigate = useNavigate();

  const cursos = [
    {
      titulo: "1° Básico",
      descripcion:
        "Materiales y recursos para el primer año de educación básica.",
      imagen: pdiImg,
      path: "/materiales/primero",
    },
    {
      titulo: "2° Básico",
      descripcion:
        "Materiales y recursos para el segundo año de educación básica.",
      imagen: riceImg,
      path: "/materiales/segundo",
    },
    {
      titulo: "3° Básico",
      descripcion:
        "Materiales y recursos para el tercer año de educación básica.",
      imagen: leyteaImg,
      path: "/materiales/tercero",
    },
    {
      titulo: "4° Básico",
      descripcion:
        "Materiales y recursos para el cuarto año de educación básica.",
      imagen: peiImg,
      path: "/materiales/cuarto",
    },
    {
      titulo: "5° Básico",
      descripcion:
        "Materiales y recursos para el quinto año de educación básica.",
      imagen: apoderadosImg,
      path: "/materiales/quinto",
    },
    {
      titulo: "6° Básico",
      descripcion:
        "Materiales y recursos para el sexto año de educación básica.",
      imagen: vestimentaImg,
      path: "/materiales/sexto",
    },
    {
      titulo: "7° Básico",
      descripcion:
        "Materiales y recursos para el séptimo año de educación básica.",
      imagen: img1,
      path: "/materiales/septimo",
    },
    {
      titulo: "8° Básico",
      descripcion:
        "Materiales y recursos para el octavo año de educación básica.",
      imagen: img2,
      path: "/materiales/octavo",
    },
    {
      titulo: "Enseñanza Media",
      descripcion: "Materiales y recursos para educación media.",
      imagen: img3,
      path: "/materiales/media",
    },
    {
      titulo: "Pre-Kinder y Kinder",
      descripcion: "Materiales y recursos para educación parvularia.",
      imagen: materialesTIMG,
      path: "/materiales/T",
    },
  ];

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
          {cursos.map((curso, index) => (
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
