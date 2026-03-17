import { FaScroll } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import riceImg from "../../images/reglamentos/RICE.webp";
import leyteaImg from "../../images/reglamentos/LeyTEA.webp";
import peiImg from "../../images/reglamentos/PEI.webp";

import apoderadosImg from "../../images/reglamentos/Apoderados.webp";
import vestimentaImg from "../../images/reglamentos/vestimenta.webp";
import pdiImg from "../../images/reglamentos/PDI.webp";

import PageLayout from "../../components/PageLayout";
import Section from "../../components/Section";
import Card from "../../components/Card";
import SectionHero from "../../components/SectionHero";

const Reglamentos = () => {
  const navigate = useNavigate();

  const reglamentos = [
    {
      titulo: "RICE",
      descripcion: "Reglamento Interno de Convivencia Escolar",
      imagen: riceImg,
      path: "/rice",
    },
    {
      titulo: "PEI",
      descripcion: "Proyecto Educativo Institucional",
      imagen: peiImg,
      path: "/pei",
    },
    {
      titulo: "Reglamento de Evaluación",
      descripcion: "Normativa de promoción y evaluación académica",
      imagen: apoderadosImg,
      path: "/reglamento-evaluacion",
    },
    {
      titulo: "Ley TEA",
      descripcion: "Marco legal para Trastornos del Espectro Autista",
      imagen: leyteaImg,
      path: "/ley-tea",
    },
    {
      titulo: "Reglamento de Vestimenta",
      descripcion: "Normas sobre uniforme y presentación personal",
      imagen: vestimentaImg,
      path: "/reglamento-vestimenta",
    },
    {
      titulo: "Seguridad Integral",
      descripcion: "Plan de seguridad y responsabilidades",
      imagen: pdiImg,
      path: "/plan-seguridad",
    },
  ];

  return (
    <PageLayout title="Reglamentos">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaScroll /> Normativas
          </span>
        }
        title="Reglamentos del Colegio"
        subtitle="Conoce las normas y proyectos que guían nuestra convivencia y excelencia educativa."
      />

      {/* GRID DE REGLAMENTOS */}
      <Section spacing="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {reglamentos.map((reglamento, index) => (
            <Card
              key={index}
              variant="image-overlay"
              title={reglamento.titulo}
              subtitle={reglamento.descripcion}
              image={reglamento.imagen}
              className="h-[300px]"
              onClick={() => navigate(reglamento.path)}
            />
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default Reglamentos;
