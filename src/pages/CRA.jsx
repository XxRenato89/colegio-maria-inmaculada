import { useState } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import NewsCarousel from "../components/CarruselCRA";
import CTA from "../components/CTA";
import { craData } from "../data/craData";

/**
 * Componente InlineImageCarousel
 *
 * Un carrusel simple y ligero para mostrar una única galería de imágenes en línea.
 * Se utiliza dentro de las tarjetas de noticias para mostrar fotos de eventos.
 *
 * @param {string[]} images - Array de URLs de imágenes
 * @param {string} altPrefix - Prefijo para las etiquetas alt de las imágenes
 */
const InlineImageCarousel = ({ images = [], altPrefix = "Imagen" }) => {
  const [idx, setIdx] = useState(0);

  if (!images.length) return null;

  // Lógica simple de rotación
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <div className="mt-4">
      <div className="relative w-full rounded-none md:rounded-2xl overflow-hidden border-x-0 md:border border-gray-100 shadow-none md:shadow-xl group aspect-video bg-white">
        {/* Imagen responsiva con posicionamiento absoluto para evitar líneas grises */}
        <img
          src={images[idx]}
          alt={`${altPrefix} ${idx + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Botones de Navegación: Visibles al pasar el mouse o al tocar */}
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 bg-black/30 text-white text-2xl flex items-center justify-center backdrop-blur-md md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full border border-white/30 bg-black/30 text-white text-2xl flex items-center justify-center backdrop-blur-md md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/50"
        >
          ›
        </button>

        {/* Indicador de Contador de Diapositivas */}
        <div className="absolute bottom-4 right-4 bg-black/40 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
          {idx + 1} / {images.length}
        </div>
      </div>

      {/* Puntos de Selección Manual */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Ir a imagen ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-primary" : "w-2 bg-primary/20 hover:bg-primary/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

const NewsHeader = ({ category, date }) => (
  <div className="flex items-center gap-3 mb-4 flex-wrap">
    <span className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-primary text-xs font-bold uppercase tracking-wider">
      {category}
    </span>
    <span className="text-gray-400 text-sm">•</span>
    <span className="text-gray-500 text-sm italic">{date}</span>
  </div>
);

const slugify = (text) => {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

const CRA = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Biblioteca CRA">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaBookBookmark /> Biblioteca CRA
          </span>
        }
        title={craData.hero.title}
        subtitle={craData.hero.subtitle}
      />

      <div className="max-w-[1000px] mx-auto space-y-12 pb-20 mt-8 px-4">
        {/* Carrusel de noticias principal */}
        <section>
          <NewsCarousel items={craData.newsItems} interval={5000} />
        </section>

        {/* NOTICIAS DETALLADAS */}
        <div className="grid grid-cols-1 gap-12">
          {craData.noticiasDetalladas.map((noticia, index) => {
            const cardId = slugify(noticia.title);
            return (
              <div key={index} id={cardId} className="scroll-mt-[150px]">
                <Card className="hover:shadow-xl transition-shadow border-none bg-gray-50/30">
                  <NewsHeader category={noticia.category} date={noticia.date} />
                  <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {noticia.title}
                  </h2>
                  <p
                    className="text-gray-600 text-lg leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: noticia.description }}
                  />
                  <InlineImageCarousel
                    images={noticia.images}
                    altPrefix={noticia.altPrefix}
                  />
                </Card>
              </div>
            );
          })}
        </div>

        {/* INFO DEL PROGRAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section spacing="py-0">
            <Card
              title={craData.descripcionPrograma.title}
              className="h-full bg-primary/5 border-none"
            >
              <p className="text-gray-700 leading-relaxed">
                {craData.descripcionPrograma.text}
              </p>
              <div className="mt-6 p-4 bg-white rounded-xl border border-primary/10 text-primary font-medium text-sm">
                <span className="font-bold">Enfoque:</span> {craData.descripcionPrograma.enfoque}
              </div>
            </Card>
          </Section>

          <Section spacing="py-0">
            <Card
              title="Objetivos del Centro"
              className="h-full border-accent/20 bg-accent/5"
            >
              <ul className="space-y-3">
                {craData.objetivosEspecificos.map((o, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="text-accent">●</span> {o}
                  </li>
                ))}
              </ul>
            </Card>
          </Section>
        </div>

        {/* HORARIOS */}
        <Section spacing="py-0">
          <Card title="Horarios de Funcionamiento">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                  {craData.horarios.basica.titulo}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                  {craData.horarios.basica.items.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                  {craData.horarios.media.titulo}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                  {craData.horarios.media.items.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        {/* ACTIVIDADES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Principales Actividades">
            <ul className="space-y-2 mt-2">
              {craData.principalesActividades.map((a, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-700 flex items-start gap-2"
                >
                  <span className="text-primary mt-1">✓</span> {a}
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Plan Estratégico (Resumen)">
            <ul className="space-y-2 mt-2 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
              {craData.actividadesProgramadas.map((a, i) => (
                <li
                  key={i}
                  className="text-xs text-gray-600 flex items-start gap-2 py-1 border-b border-gray-50 last:border-0"
                >
                  <span className="text-accent font-bold">»</span> {a}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* CTA FINAL */}
        <CTA
          title="¿Quieres conocer más del CRA?"
          text="Si necesitas información sobre horarios, préstamos, actividades o apoyo académico, contáctanos y te orientamos."
          primaryLabel="Ir a Contacto"
          onPrimaryClick={() => navigate("/contacto")}
          secondaryLabel="Volver al Inicio"
          onSecondaryClick={() => navigate("/")}
        />
      </div>
    </PageLayout>
  );
};

export default CRA;
