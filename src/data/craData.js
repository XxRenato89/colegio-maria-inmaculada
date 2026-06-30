// src/data/craData.js

// =========================================================================
// 1. CARGA DINÁMICA DE IMÁGENES CON VITE
// =========================================================================
const allImages = import.meta.glob("../images/img_CRA_noticias/**/*.{png,jpg,jpeg,webp}", { eager: true, import: 'default' });

/**
 * Filtra las imágenes de una subcarpeta bajo src/images/img_CRA_noticias/
 * y las ordena numéricamente de manera natural.
 */
const getImagesFromFolder = (folderName) => {
  const folderPath = `../images/img_CRA_noticias/${folderName}/`;
  return Object.keys(allImages)
    .filter((key) => key.startsWith(folderPath))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    .map((key) => allImages[key]);
};

// =========================================================================
// 2. COLECCIONES DE IMÁGENES POR EVENTO
// =========================================================================
const imagenesCuentacuentos = getImagesFromFolder("cuentacuentos");
const imagenesDebate = getImagesFromFolder("debate");
const imagenesApoderado = getImagesFromFolder("apoderada");
const imagenesMates = getImagesFromFolder("matematicas");
const imagenesLudoteca = getImagesFromFolder("ludoteca");
const imagenesLaboratorio = getImagesFromFolder("laboratorio");
const imagenesLimpiapies = getImagesFromFolder("limpiapies");

// =========================================================================
// 3. ESTRUCTURA DE DATOS PRINCIPAL DE LA BIBLIOTECA CRA
// =========================================================================
export const craData = {
  hero: {
    title: "Centro de Recursos para el Aprendizaje",
    subtitle: "El CRA impulsa la literacidad —lectura, escritura y oralidad— y fortalece habilidades de comprensión, razonamiento y aprendizaje interdisciplinario."
  },

  // Carousel News items
  newsItems: [
    {
      title: "Inauguración de nuestro nuevo Laboratorio Creativo",
      excerpt: "Un espacio innovador equipado con computadores de alto estándar que permitirá fortalecer el aprendizaje, la creatividad y la investigación.",
      image: imagenesLaboratorio[2],
      href: ""
    },
    {
      title: "Estudiantes de 3° Básico logran importante mejora para su sala gracias al trabajo en equipo",
      excerpt: "Los estudiantes de 3° Básico, junto a su profesora jefe Carolina Castillo, lideraron un proyecto colaborativo para adquirir un limpia pies para su sala.",
      image: imagenesLimpiapies[3],
      href: ""
    },
    {
      title: "Jornada de cuentacuentos en biblioteca",
      excerpt: "Docentes interpretaron el relato El almohadón de plumas en una puesta en escena expresiva.",
      image: imagenesCuentacuentos[0],
      href: ""
    },
    {
      title: "Jornada de debate y conversatorio",
      excerpt: "Estudiantes participaron activamente exponiendo ideas y argumentando con respeto.",
      image: imagenesDebate[0],
      href: ""
    },
    {
      title: "Semana de la Matemática",
      excerpt: "Estudiantes participaron en juegos matemáticos lúdicos organizados en estaciones.",
      image: imagenesMates[0],
      href: ""
    },
    {
      title: "Día de Ludoteca escolar",
      excerpt: "Habilidades de lectoescritura fortalecidas a través de dinámicas lúdicas y colaborativas.",
      image: imagenesLudoteca[0],
      href: ""
    }
  ],

  // Detailed News Articles
  noticiasDetalladas: [
    {
      category: "Noticia CRA",
      date: "28/06/2026 • Comunidad",
      title: "Inauguración de nuestro nuevo Laboratorio Creativo",
      description: '¡Hoy vivimos un hito para nuestra comunidad educativa!<br/><br/>Inauguramos oficialmente nuestro nuevo <strong class="text-primary">Laboratorio Creativo</strong>, un espacio innovador equipado con <strong class="text-primary">computadores de alto estándar</strong> que permitirá fortalecer el aprendizaje, la creatividad, la investigación y el desarrollo de habilidades esenciales para el futuro.<br/><br/>Esta significativa ceremonia fue liderada por nuestro <strong class="text-primary">Centro General de Estudiantes</strong>, acompañado por una comisión representativa de cada curso desde 6° Básico hasta IV° Medio, reafirmando el importante rol que tienen nuestros estudiantes en la construcción de una comunidad participativa y comprometida.<br/><br/>Uno de los aspectos más especiales de este proyecto fue que el nombre "Laboratorio Creativo" fue elegido por los propios estudiantes a través de un concurso en el que participaron jóvenes desde 7° Básico hasta IV° Medio, permitiéndoles ser protagonistas de este nuevo espacio desde sus inicios.<br/><br/>Creemos que educar también significa generar oportunidades para crear, innovar y soñar. Hoy no solo inauguramos una sala equipada con tecnología de calidad; inauguramos un lugar donde surgirán nuevas ideas, proyectos, aprendizajes y desafíos que prepararán a nuestros estudiantes para el mundo que les espera.<br/><br/>💡💻 Gracias a todos quienes hicieron posible este importante avance. ¡Sigamos construyendo juntos una educación que inspire, motive y transforme vidas!',
      images: imagenesLaboratorio,
      altPrefix: "Laboratorio Creativo"
    },
    {
      category: "Noticia CRA",
      date: "30/06/2026 • Comunidad",
      title: "Estudiantes de 3° Básico logran importante mejora para su sala gracias al trabajo en equipo",
      description: 'Los estudiantes de 3° Básico, junto a su profesora jefe, Carolina Castillo, llevaron adelante un proyecto colaborativo para adquirir un limpia pies para su sala de clases, respondiendo a una necesidad detectada por el propio curso.<br/><br/>La directiva, integrada por Sofía Morales (presidenta), Alonso Campos (tesorero) y Xavier Moreno (secretario), organizó a sus compañeros para reunir los fondos necesarios. Gracias al compromiso, esfuerzo y colaboración de las familias, lograron alcanzar la meta propuesta.<br/><br/>Como resultado de este trabajo conjunto, la estudiante Sofía, con apoyo de su familia, realizó la compra del limpia pies, contribuyendo a mantener un espacio más limpio y ordenado para toda la comunidad del curso.<br/><br/>Esta iniciativa destaca el valor del trabajo en equipo, la organización y la participación activa de los estudiantes y sus familias en el mejoramiento de su entorno escolar.',
      images: imagenesLimpiapies,
      altPrefix: "Trabajo en equipo 3 Basico"
    },
    {
      category: "Noticia CRA",
      date: "23/09/2025 • Biblioteca",
      title: "Jornada de cuentacuentos en biblioteca",
      description: 'Jornada de cuentacuentos realizada en la biblioteca, en la que docentes interpretaron el relato <strong class="text-primary">El almohadón de plumas</strong>. La actividad contó con el apoyo de profes PIE y se caracterizó por una puesta en escena expresiva, que favoreció la comprensión del texto y la participación de los estudiantes.',
      images: imagenesCuentacuentos,
      altPrefix: "Cuentacuentos"
    },
    {
      category: "Noticia CRA",
      date: "23/09/2025 • Comunidad",
      title: "Apoderada presenta cuentos a alumnos",
      description: 'En una emotiva actividad escolar, una apoderada sorprendió a los estudiantes al leerles un cuento infantil vestida de perrito, creando un ambiente cercano, divertido y lleno de imaginación. La iniciativa buscó <strong class="text-primary">fomentar la lectura</strong> y fortalecer el <strong class="text-primary">vínculo entre familia y escuela</strong>.',
      images: imagenesApoderado,
      altPrefix: "Apoderada Cuentacuentos"
    },
    {
      category: "Noticia CRA",
      date: "03/10/2025 • Debate",
      title: "Jornada de debate y conversatorio",
      description: 'Se realizó una jornada de <strong class="text-primary">debate y conversatorio</strong> en el CRA, donde estudiantes participaron activamente exponiendo ideas, argumentando con respeto y escuchando distintos puntos de vista.',
      images: imagenesDebate,
      altPrefix: "Debate CRA"
    },
    {
      category: "Noticia CRA",
      date: "14/04/2026 • Matemática",
      title: "Semana de la Matemática",
      description: 'Durante la <strong class="text-primary">Semana de la Matemática</strong>, los estudiantes de los niveles de transición hasta cuarto básico participaron en <strong class="text-primary">juegos matemáticos</strong> preparados en diversas estaciones. Juegos de conteo, clasificación, motricidad fina y cálculo mental fueron los motores de la entretención. Estas actividades preparadas y planificadas por los equipos de aula tenían como objetivo <strong class="text-primary">reforzar los aprendizajes</strong> de forma entretenida, promoviendo la participación, el trabajo en equipo y la <strong class="text-primary">sana convivencia</strong> entre los participantes de todos los niveles.',
      images: imagenesMates,
      altPrefix: "Mates CRA"
    },
    {
      category: "Noticia CRA",
      date: "08/04/2026 • Ludoteca",
      title: "Ludoteca",
      description: 'Nuestro 2º básico vivió una jornada llena de aprendizaje y diversión, fortaleciendo las habilidades de <strong class="text-primary">lectoescritura a través del juego</strong>. En cada estación se comparten ideas, colaborando y descubriendo que <strong class="text-primary">aprender también puede ser entretenido</strong>. Cada actividad fue una oportunidad para leer, escribir y expresarse de manera creativa, desarrollando la confianza y el <strong class="text-primary">gusto por aprender</strong>. ¡Seguimos creciendo juntos a través del juego!',
      images: imagenesLudoteca,
      altPrefix: "Ludoteca CRA"
    }
  ],

  // CRA Program Description
  descripcionPrograma: {
    title: "Descripción del Programa CRA",
    text: "El Plan Anual CRA busca reactivar la literacidad fomentando el desarrollo de habilidades de comprensión lectoescritura y razonamiento lógico, alineado al currículum nacional.",
    enfoque: "aprendizaje interdisciplinario, evaluación formativa y participación activa."
  },

  // Specific Objectives
  objetivosEspecificos: [
    "Promover el trabajo autónomo y colaborativo.",
    "Crear el hábito de utilizar textos y materiales C.R.A.",
    "Fomentar la puntualidad en la devolución de materiales.",
    "Motivar la participación activa en actividades CRA.",
    "Fomentar la lectura presencial y domiciliaria.",
    "Generar un impacto en el mejoramiento de aprendizajes."
  ],

  // Schedules
  horarios: {
    basica: {
      titulo: "Educación Básica",
      items: [
        "Lunes a Jueves: 08:30 a 15:55 hrs.",
        "Viernes: 08:30 a 14:15 hrs."
      ]
    },
    media: {
      titulo: "Educación Media",
      items: [
        "Lunes y Martes: 08:30 a 15:55 hrs.",
        "Miércoles y Jueves: 08:30 a 17:30 hrs.",
        "Viernes: 08:30 a 14:15 hrs."
      ]
    }
  },

  // Activities lists
  principalesActividades: [
    "Préstamo individual y colectivo de libros.",
    "Lectura oral y guiada.",
    "Formación de lectores.",
    "Extensión cultural de la comunidad educativa.",
    "Centro de recursos funcionales y creativos.",
    "Comprensión lectora crítica y reflexiva.",
    "Apoyo con recursos tecnológicos para la investigación.",
    "Uso activo de material para actividades creativas."
  ],

  actividadesProgramadas: [
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
    "Investigación de efemérides."
  ]
};
