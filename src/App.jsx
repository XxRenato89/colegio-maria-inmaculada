// src/App.js
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import PromoModal from "./components/PromoModal";
import Fondo from "./images/fondo.webp";
import "./App.css";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const Postulaciones = lazy(() => import("./pages/Postulaciones"));
const Reglamentos = lazy(() => import("./pages/Reglamentos/Reglamentos"));
const ReglamentoEvaluacion = lazy(
  () => import("./pages/Reglamentos/ReglamentoEvaluacion"),
);
const ReglamentoVestimenta = lazy(
  () => import("./pages/Reglamentos/ReglamentoVestimenta"),
);
const PlanSeguridad = lazy(() => import("./pages/Reglamentos/PlanSeguridad"));
const LeyTea = lazy(() => import("./pages/LeyTea"));
const RICE = lazy(() => import("./pages/Reglamentos/RICE"));
const PEI = lazy(() => import("./pages/Reglamentos/PEI"));
const QuienesSomos = lazy(() => import("./pages/QuienesSomos"));
const Transporte = lazy(() => import("./pages/Transporte"));
const Materiales = lazy(() => import("./pages/Materiales"));
const MaterialesDynamic = lazy(() => import("./pages/MaterialesDynamic"));
const Appoderados = lazy(() => import("./pages/Appoderados"));
const Actividades = lazy(() => import("./pages/Actividades"));
const PlanEstudio = lazy(() => import("./pages/Actividades/PlanEstudio"));
const Talleres = lazy(() => import("./pages/Actividades/Talleres"));
const Concursos = lazy(() => import("./pages/Actividades/Concursos"));
const Efemerides = lazy(() => import("./pages/Actividades/Efemerides"));
const CRA = lazy(() => import("./pages/CRA"));
const Contacto = lazy(() => import("./pages/Contacto"));

import { allRoutes } from "./config/navigation";

// Mapping component names to lazy loaded components
const componentMap = {
  Home,
  Postulaciones,
  Reglamentos,
  ReglamentoEvaluacion,
  PlanSeguridad,
  ReglamentoVestimenta,
  LeyTea,
  RICE,
  PEI,
  QuienesSomos,
  Transporte,
  Materiales,
  MaterialesDynamic,
  Appoderados,
  Actividades,
  PlanEstudio,
  Talleres,
  Concursos,
  Efemerides,
  CRA,
  Contacto,
};

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* TOPBAR FIJA */}
      <div className="fixed top-0 left-0 right-0 z-1000">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="bg-white rounded-b-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] overflow-visible">
            <Header />
            <Navbar />
          </div>
        </div>
      </div>

      {/* FONDO GENERAL */}
      <div
        className="bg-cover bg-fixed bg-center min-h-screen pt-[130px] font-sans flex flex-col"
        style={{ backgroundImage: `url(${Fondo})` }}
      >
        <div className="max-w-[1200px] mx-auto w-full p-6 px-4 grow flex flex-col">
          <div className="bg-white rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.08)] grow flex flex-col">
            <Suspense
              fallback={
                <div className="p-8 text-center text-primary">Cargando...</div>
              }
            >
              <Routes>
                {allRoutes.map((route) => {
                  // If it's a menu item, we infer the component name from the label (slugified)
                  // or we can use a component property if present.
                  const Component =
                    componentMap[route.component] ||
                    componentMap[route.label?.replace(/\s+/g, "")] ||
                    (route.path === "/" ? Home : null);

                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        Component ? (
                          <Component />
                        ) : (
                          <div className="p-8">
                            Componente no encontrado para {route.path}
                          </div>
                        )
                      }
                    />
                  );
                })}
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </div>
      </div>

      {/* BOTÓN WHATSAPP GLOBAL */}
      <WhatsAppButton />

      {/* MODAL PROMOCIONAL */}
      <PromoModal />
    </Router>
  );
}

export default App;
