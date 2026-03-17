/**
 * Configuración de Navegación y Rutas
 * 
 * Este archivo centraliza todos los enlaces y rutas del sitio.
 * Se utiliza para generar dinámicamente el Navbar y las rutas en App.jsx.
 */

export const mainNav = [
  { label: 'Inicio', path: '/', exact: true, component: 'Home' },
  { label: 'Postulaciones', path: '/postulaciones', component: 'Postulaciones' },
  { label: '¿Quiénes somos?', path: '/quienes-somos', component: 'QuienesSomos' },
  { label: 'Appoderado', path: '/appoderados', component: 'Appoderados' },
  { label: 'Contacto', path: '/contacto', component: 'Contacto' },
];

export const moreNav = [
  { label: 'Reglamentos', path: '/reglamentos', component: 'Reglamentos' },
  { label: 'CRA', path: '/cra', component: 'CRA' },
  { label: 'Lista de Útiles', path: '/materiales', component: 'Materiales' },
  { label: 'Actividades', path: '/actividades', component: 'Actividades' },
  { label: 'Transporte', path: '/transporte', component: 'Transporte' },
];

/**
 * Todas las rutas de la aplicación, incluyendo las que no están en el menú principal.
 * Se usa en App.jsx para generar los componentes <Route />.
 */
export const allRoutes = [
  ...mainNav,
  ...moreNav,
  { path: '/reglamento-evaluacion', component: 'ReglamentoEvaluacion' },
  { path: '/plan-seguridad', component: 'PlanSeguridad' },
  { path: '/reglamento-vestimenta', component: 'ReglamentoVestimenta' },
  { path: '/ley-tea', component: 'LeyTea' },
  { path: '/rice/*', component: 'RICE' },
  { path: '/pei', component: 'PEI' },
  { path: '/materiales/:curso', component: 'MaterialesDynamic' },
  { path: '/actividades/plan-estudio', component: 'PlanEstudio' },
  { path: '/actividades/talleres', component: 'Talleres' },
  { path: '/actividades/concursos', component: 'Concursos' },
  { path: '/actividades/efemerides', component: 'Efemerides' },
];
