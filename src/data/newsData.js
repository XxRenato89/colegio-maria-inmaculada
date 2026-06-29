import { craData } from "./craData";

// Orden específico de visualización de las noticias en la página de Inicio:
// 0 = Cuentacuentos (destacada), 1 = Debate, 2 = Matemáticas
const displayIndices = [0, 1, 2];

/**
 * Convierte un formato de fecha tipo "DD/MM/YYYY • Categoría" a "DD de Mes YYYY" en español.
 * Ejemplo: "23/09/2025 • Biblioteca" -> "23 de septiembre 2025"
 */
const formatEventDate = (dateStr) => {
  if (!dateStr) return "Fecha reciente";
  const cleanDate = dateStr.split("•")[0].trim();
  const parts = cleanDate.split("/");
  if (parts.length === 3) { 
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    const day = parseInt(parts[0], 10);
    const monthIndex = parseInt(parts[1], 10) - 1;
    const year = parts[2];
    if (monthIndex >= 0 && monthIndex < 12) {
      return `${day} de ${months[monthIndex]} ${year}`;
    }
  }
  return cleanDate;
};

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

// Genera dinámicamente la lista de noticias a partir de craData
export const newsData = displayIndices.map((idx, index) => {
  const item = craData.newsItems[idx];
  
  if (!item) {
    // Salvaguarda por si el índice no existe
    return {
      id: index + 1,
      category: "CRA (Biblioteca)",
      categoryClass: "comunidad",
      title: "Noticia no encontrada",
      content: "",
      date: "",
      link: "/cra",
      image: null,
      featured: index === 0
    };
  }

  // Buscar artículo detallado equivalente por título para extraer la fecha y categoría reales
  const detail = craData.noticiasDetalladas.find(
    (d) => d.title.toLowerCase().trim() === item.title.toLowerCase().trim()
  );

  return {
    id: index + 1,
    category: "CRA (Biblioteca)",
    categoryClass: "comunidad",
    title: item.title,
    content: item.excerpt,
    date: detail ? formatEventDate(detail.date) : "23 de septiembre 2025",
    link: `/cra#${slugify(item.title)}`,
    image: item.image,
    featured: index === 0
  };
});
