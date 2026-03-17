// src/pages/Transporte.jsx
import React from "react";
import { FaBus, FaClock, FaHeart, FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import BotonContacto from "../components/BotonContacto";
import SectionHero from "../components/SectionHero";
import "../App.css";

import PageLayout from "../components/PageLayout";

const Transporte = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Transporte Escolar">
      <SectionHero
        title="Transporte Escolar"
        subtitle="Un servicio pensado para la seguridad, puntualidad y tranquilidad de nuestras familias."
        primaryLabel={"Consultar recorridos"}
        onPrimaryClick={() => navigate("/contacto")}
      />

      {/* TARJETAS ESTILO 1 */}
      <section className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="rounded-[20px] p-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group cursor-pointer">
          {/* Hover Border Effect */}
          <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1.5px] rounded-[20px]">
            <div className="bg-white w-full h-full rounded-[19px]" />
          </div>

          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-primary text-3xl shrink-0 shadow-xs">
              <FaBus />
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold mb-2">
                Servicio seguro
              </h3>
              <p className="text-gray-600 leading-relaxed text-[0.98rem]">
                El transporte escolar funciona bajo criterios de
                responsabilidad, puntualidad y seguridad, asegurando un traslado
                confiable desde y hacia el colegio.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] p-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1.5px] rounded-[20px]">
            <div className="bg-white w-full h-full rounded-[19px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-primary text-3xl shrink-0 shadow-xs">
              <FaClock />
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold mb-2">
                Puntualidad diaria
              </h3>
              <p className="text-gray-600 leading-relaxed text-[0.98rem]">
                Los recorridos están organizados para facilitar la asistencia
                regular, evitando atrasos y mejorando la organización familiar.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] p-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1.5px] rounded-[20px]">
            <div className="bg-white w-full h-full rounded-[19px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-primary text-3xl shrink-0 shadow-xs">
              <FaHeart />
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold mb-2">
                Apoyo al bienestar
              </h3>
              <p className="text-gray-600 leading-relaxed text-[0.98rem]">
                Este servicio complementa el proyecto educativo, aportando
                tranquilidad a los apoderados y comodidad a los estudiantes.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[20px] p-6 bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 p-[1.5px] rounded-[20px]">
            <div className="bg-white w-full h-full rounded-[19px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 rounded-2xl bg-yellow-50 border border-yellow-100 flex items-center justify-center text-primary text-3xl shrink-0 shadow-xs">
              <FaLocationDot />
            </div>
            <div>
              <h3 className="text-primary text-xl font-bold mb-2">
                Recorridos disponibles
              </h3>
              <p className="text-gray-600 leading-relaxed text-[0.98rem]">
                Para conocer horarios, cobertura y proceso de inscripción,
                comunícate con la administración del colegio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12 py-8">
        <BotonContacto onClick={() => navigate("/contacto")}>
          Consultar por el servicio de transporte
        </BotonContacto>
      </div>
    </PageLayout>
  );
};

export default Transporte;
