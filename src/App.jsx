// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import Fondo from './images/fondo.webp';
import './App.css';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const Postulaciones = lazy(() => import('./pages/Postulaciones'));
const Reglamentos = lazy(() => import('./pages/Reglamentos/Reglamentos'));
const ReglamentoEvaluacion = lazy(() => import('./pages/Reglamentos/ReglamentoEvaluacion'));
const ReglamentoVestimenta = lazy(() => import('./pages/Reglamentos/ReglamentoVestimenta'));
const PlanSeguridad = lazy(() => import('./pages/Reglamentos/PlanSeguridad'));
const LeyTea = lazy(() => import('./pages/LeyTea'));
const RICE = lazy(() => import('./pages/Reglamentos/RICE'));
const PEI = lazy(() => import('./pages/Reglamentos/PEI'));
const QuienesSomos = lazy(() => import('./pages/QuienesSomos'));
const Transporte = lazy(() => import('./pages/Transporte'));
const Materiales = lazy(() => import('./pages/Materiales'));
const MaterialesDynamic = lazy(() => import('./pages/MaterialesDynamic'));
const Appoderados = lazy(() => import('./pages/Appoderados'));
const Actividades = lazy(() => import('./pages/Actividades'));
const PlanEstudio = lazy(() => import('./pages/Actividades/PlanEstudio'));
const Talleres = lazy(() => import('./pages/Actividades/Talleres'));
const Concursos = lazy(() => import('./pages/Actividades/Concursos'));
const Efemerides = lazy(() => import('./pages/Actividades/Efemerides'));
const CRA = lazy(() => import('./pages/CRA'));
const Contacto = lazy(() => import('./pages/Contacto'));

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* TOPBAR FIJA */}
      <div className="topbar">
        <div className="topbar-shell">
          <div className="topbar-surface">
            <Header />
            <Navbar />
          </div>
        </div>
      </div>

      {/* FONDO GENERAL */}
      <div
        className="app-container"
        style={{ backgroundImage: `url(${Fondo})` }}
      >
        <div className="page-shell">
          <div className="page-surface">
            <Suspense fallback={<div className="loading-fallback">Cargando...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/postulaciones" element={<Postulaciones />} />

                <Route path="/reglamentos/*" element={<Reglamentos />} />
                <Route path="/reglamento-evaluacion" element={<ReglamentoEvaluacion />} />
                <Route path="/plan-seguridad" element={<PlanSeguridad />} />
                <Route path="/reglamento-vestimenta" element={<ReglamentoVestimenta />} />

                <Route path="/ley-tea" element={<LeyTea />} />
                <Route path="/rice/*" element={<RICE />} />
                <Route path="/pei" element={<PEI />} />

                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/transporte" element={<Transporte />} />

                {/* Rutas de Materiales consolidated into a single dynamic route */}
                <Route path="/materiales" element={<Materiales />} />
                <Route path="/materiales/:curso" element={<MaterialesDynamic />} />

                {/* Se mantiene el nombre 'appoderados' por requerimiento explícito del usuario */}
                <Route path="/appoderados" element={<Appoderados />} />

                <Route path="/cra/*" element={<CRA />} />

                <Route path="/actividades/*" element={<Actividades />} />
                <Route path="/actividades/plan-estudio" element={<PlanEstudio />} />
                <Route path="/actividades/talleres" element={<Talleres />} />
                <Route path="/actividades/concursos" element={<Concursos />} />
                <Route path="/actividades/efemerides" element={<Efemerides />} />

                <Route path="/contacto" element={<Contacto />} />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </div>
      </div>

      {/* ✅ BOTÓN WHATSAPP GLOBAL */}
      <WhatsAppButton />
    </Router>
  );
}

export default App;
