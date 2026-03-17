import { useState } from "react";
import { FaBookBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import Section from "../components/Section";
import Card from "../components/Card";
import SectionHero from "../components/SectionHero";
import NewsCarousel from "../components/CarruselCRA";
import CTA from "../components/CTA";

// Import images
import cuentos1 from "../images/img_CRA_noticias/cuentos1.webp";
import cuentos2 from "../images/img_CRA_noticias/cuentos2.webp";
import cuentos3 from "../images/img_CRA_noticias/cuentos3.webp";
import cuentos4 from "../images/img_CRA_noticias/cuentos4.webp";
import debate1 from "../images/img_CRA_noticias/debate1.webp";
import debate2 from "../images/img_CRA_noticias/debate2.webp";
import debate4 from "../images/img_CRA_noticias/debate4.webp";
import debate5 from "../images/img_CRA_noticias/debate5.webp";
import apo2 from "../images/img_CRA_noticias/apo2.webp";
import apo3 from "../images/img_CRA_noticias/apo3.webp";
import apo4 from "../images/img_CRA_noticias/apo4.webp";

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
      <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-xl group aspect-video sm:aspect-auto">
        {/* Imagen responsiva con alturas dinámicas */}
        <img
          src={images[idx]}
          alt={`${altPrefix} ${idx + 1}`}
          className="w-full h-full min-h-[220px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
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

const CRA = () => {
  const navigate = useNavigate();

  const horariosBasica = [
    "Lunes a Jueves: 08:30 a 15:55 hrs.",
    "Viernes: 08:30 a 14:15 hrs.",
  ];

  const horariosMedia = [
    "Lunes y Martes: 08:30 a 15:55 hrs.",
    "Miércoles y Jueves: 08:30 a 17:30 hrs.",
    "Viernes: 08:30 a 14:15 hrs.",
  ];

  const principalesActividades = [
    "Préstamo individual y colectivo de libros.",
    "Lectura oral y guiada.",
    "Formación de lectores.",
    "Extensión cultural de la comunidad educativa.",
    "Centro de recursos funcionales y creativos.",
    "Comprensión lectora crítica y reflexiva.",
    "Apoyo con recursos tecnológicos para la investigación.",
    "Uso activo de material para actividades creativas.",
  ];

  const objetivosEspecificos = [
    "Promover el trabajo autónomo y colaborativo.",
    "Crear el hábito de utilizar textos y materiales C.R.A.",
    "Fomentar la puntualidad en la devolución de materiales.",
    "Motivar la participación activa en actividades CRA.",
    "Fomentar la lectura presencial y domiciliaria.",
    "Generar un impacto en el mejoramiento de aprendizajes.",
  ];

  const actividadesProgramadas = [
    "Asistencia a biblioteca central (NT1 a 4° medio).",
    "Club Literario en patios centrales.",
    "Día del Libro: lectura y redacción.",
    "Búsqueda de significado de palabras desconocidas.",
    "Palabra clave de la semana con su significado.",
    "Préstamo de libros en biblioteca móvil.",
    "Dramatizaciones de libros leídos.",
    "Conversatorio de textos leídos.",
    "Olimpiadas Académicas.",
    "Debates y conversatorios.",
    "Concurso de deletreo (español e inglés).",
    "Revista escolar MIDLA 2024.",
    "Roles de liderazgo como monitores CRA.",
    "Tutorías de aprendizaje entre pares.",
    "Investigación de efemérides.",
  ];

  const newsItems = [
    {
      title: "Jornada de cuentacuentos en biblioteca",
      excerpt:
        "Docentes interpretaron el relato El almohadón de plumas en una puesta en escena expresiva.",
      image: cuentos1,
      href: "",
    },
    {
      title: "Jornada de debate y conversatorio",
      excerpt:
        "Estudiantes participaron activamente exponiendo ideas y argumentando con respeto.",
      image: debate1,
      href: "",
    },
  ];

  const imagenesCuentacuentos = [cuentos1, cuentos2, cuentos3, cuentos4];
  const imagenesDebate = [debate1, debate2, debate4, debate5];
  const imagenesApoderado = [apo2, apo3, apo4];

  const NewsHeader = ({ category, date }) => (
    <div className="flex items-center gap-3 mb-4 flex-wrap">
      <span className="px-3 py-1 rounded-full bg-yellow-50 border border-yellow-200 text-primary text-xs font-bold uppercase tracking-wider">
        {category}
      </span>
      <span className="text-gray-400 text-sm">•</span>
      <span className="text-gray-500 text-sm italic">{date}</span>
    </div>
  );

  return (
    <PageLayout title="Biblioteca CRA">
      {/* HERO */}
      <SectionHero
        pill={
          <span className="flex items-center gap-2">
            <FaBookBookmark /> Biblioteca CRA
          </span>
        }
        title="Centro de Recursos para el Aprendizaje"
        subtitle={`El CRA impulsa la literacidad —lectura, escritura y oralidad— y fortalece habilidades de comprensión,
razonamiento y aprendizaje interdisciplinario.`}
      />

      <div className="max-w-[1000px] mx-auto space-y-12 pb-20 mt-8 px-4">
        {/* Carrusel de noticias principal */}
        <section>
          <NewsCarousel items={newsItems} interval={5000} />
        </section>

        {/* NOTICIAS DETALLADAS */}
        <div className="grid grid-cols-1 gap-12">
          {/* Noticia 1 */}
          <Card className="hover:shadow-xl transition-shadow border-none bg-gray-50/30">
            <NewsHeader category="Noticia CRA" date="23/09/2025 • Biblioteca" />
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Jornada de cuentacuentos en biblioteca
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Jornada de cuentacuentos realizada en la biblioteca, en la que
              docentes interpretaron el relato{" "}
              <strong className="text-primary">El almohadón de plumas</strong>.
              La actividad contó con el apoyo de profes PIE y se caracterizó por
              una puesta en escena expresiva, que favoreció la comprensión del
              texto y la participación de los estudiantes.
            </p>
            <InlineImageCarousel
              images={imagenesCuentacuentos}
              altPrefix="Cuentacuentos"
            />
          </Card>

          {/* Noticia 2 */}
          <Card className="hover:shadow-xl transition-shadow border-none bg-gray-50/30">
            <NewsHeader category="Noticia CRA" date="23/09/2025 • Comunidad" />
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Apoderada presenta cuentos a alumnos
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              En una emotiva actividad escolar, una apoderada sorprendió a los
              estudiantes al leerles un cuento infantil vestida de perrito,
              creando un ambiente cercano, divertido y lleno de imaginación. La
              iniciativa buscó fomentar la lectura y fortalecer el vínculo entre
              familia y escuela.
            </p>
            <InlineImageCarousel
              images={imagenesApoderado}
              altPrefix="Apoderada Cuentacuentos"
            />
          </Card>

          {/* Noticia 3 */}
          <Card className="hover:shadow-xl transition-shadow border-none bg-gray-50/30">
            <NewsHeader category="Noticia CRA" date="03/10/2025 • Debate" />
            <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4 leading-tight">
              Jornada de debate y conversatorio
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Se realizó una jornada de{" "}
              <strong className="text-primary">debate y conversatorio</strong>{" "}
              en el CRA, donde estudiantes participaron activamente exponiendo
              ideas, argumentando con respeto y escuchando distintos puntos de
              vista.
            </p>
            <InlineImageCarousel
              images={imagenesDebate}
              altPrefix="Debate CRA"
            />
          </Card>
        </div>

        {/* INFO DEL PROGRAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Section spacing="py-0">
            <Card
              title="Descripción del Programa CRA"
              className="h-full bg-primary/5 border-none"
            >
              <p className="text-gray-700 leading-relaxed">
                El Plan Anual CRA busca reactivar la literacidad fomentando el
                desarrollo de habilidades de comprensión lectoescritura y
                razonamiento lógico, alineado al currículum nacional.
              </p>
              <div className="mt-6 p-4 bg-white rounded-xl border border-primary/10 text-primary font-medium text-sm">
                <span className="font-bold">Enfoque:</span> aprendizaje
                interdisciplinario, evaluación formativa y participación activa.
              </div>
            </Card>
          </Section>

          <Section spacing="py-0">
            <Card
              title="Objetivos del Centro"
              className="h-full border-accent/20 bg-accent/5"
            >
              <ul className="space-y-3">
                {objetivosEspecificos.map((o, i) => (
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
                  Educación Básica
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                  {horariosBasica.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-bold mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>{" "}
                  Educación Media
                </h4>
                <ul className="space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-100">
                  {horariosMedia.map((h, i) => (
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
              {principalesActividades.map((a, i) => (
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
              {actividadesProgramadas.map((a, i) => (
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
