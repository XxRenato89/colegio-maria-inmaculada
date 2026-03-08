// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="nav-main">
      <div className="navbar-inner">

        {/* BOTON HAMBURGUESA */}
        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${mobileOpen ? "nav-open" : ""}`}>

          <Link
            to="/"
            onClick={closeMobile}
            className={`nav-link-base ${isActive("/", true) ? "nav-link-active" : ""}`}
          >
            Inicio
          </Link>

          <Link
            to="/postulaciones"
            onClick={closeMobile}
            className={`nav-link-base ${isActive("/postulaciones") ? "nav-link-active" : ""}`}
          >
            Postulaciones
          </Link>

          <Link
            to="/quienes-somos"
            onClick={closeMobile}
            className={`nav-link-base ${isActive("/quienes-somos") ? "nav-link-active" : ""}`}
          >
            ¿Quiénes somos?
          </Link>

          <Link
            to="/appoderados"
            onClick={closeMobile}
            className={`nav-link-base ${isActive("/appoderados") ? "nav-link-active" : ""}`}
          >
            Appoderado
          </Link>

          <Link
            to="/contacto"
            onClick={closeMobile}
            className={`nav-link-base ${isActive("/contacto") ? "nav-link-active" : ""}`}
          >
            Contacto
          </Link>

          {/* DROPDOWN */}
          <div
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter("mas")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link-base dropdown-trigger">
              Más ▾
            </span>

            {openDropdown === "mas" && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">

                  <li>
                    <Link to="/reglamentos" className="dropdown-link" onClick={closeMobile}>
                      Reglamentos
                    </Link>
                  </li>

                  <li>
                    <Link to="/cra" className="dropdown-link" onClick={closeMobile}>
                      CRA
                    </Link>
                  </li>

                  <li>
                    <Link to="/materiales" className="dropdown-link" onClick={closeMobile}>
                      Lista de Útiles
                    </Link>
                  </li>

                  <li>
                    <Link to="/actividades" className="dropdown-link" onClick={closeMobile}>
                      Actividades
                    </Link>
                  </li>

                  <li>
                    <Link to="/transporte" className="dropdown-link" onClick={closeMobile}>
                      Transporte
                    </Link>
                  </li>

                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;