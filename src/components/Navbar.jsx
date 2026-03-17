// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark, FaChevronDown } from "react-icons/fa6";

import { mainNav, moreNav } from "../config/navigation";

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
    if (window.innerWidth >= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setOpenDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 200);
    }
  };

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200 font-sans text-[1rem] relative z-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* ENCABEZADO MÓVIL */}
        <div className="flex justify-start md:hidden py-3">
          <button
            className="text-[1.8rem] bg-none border-none cursor-pointer text-primary p-2 focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* CONTENEDOR DE ENLACES CON SCROLL Y LÍMITE DE ALTURA EN MÓVIL */}
        <div
          className={`${
            mobileOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center w-full absolute md:static top-full left-0 bg-white md:bg-transparent shadow-xl md:shadow-none transition-all duration-300 
          max-h-[60vh] md:max-h-none overflow-y-auto md:overflow-visible`}
        >
          {mainNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              // Reducimos el padding de py-4 a py-3 para compactar
              className={`w-full md:w-auto text-primary no-underline px-6 md:px-[15px] py-3 md:py-[7px] block md:inline-block relative cursor-pointer transition-all duration-300 border-b border-gray-100 md:border-b-[3px] md:border-t-0 hover:bg-nav-active 
              ${isActive(item.path, item.exact) ? "bg-nav-active font-bold border-l-4 md:border-l-0 border-primary md:border-b-primary" : "md:border-transparent"}`}
            >
              {item.label}
            </Link>
          ))}

          {/* DROPDOWN 'MÁS' */}
          <div
            className="relative w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("mas")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("mas")}
              // Reducimos el padding aquí también
              className="w-full md:w-auto text-left text-primary no-underline px-6 md:px-[15px] py-3 md:py-[7px] flex items-center justify-between md:justify-start gap-2 cursor-pointer transition-all duration-300 border-b border-gray-100 md:border-b-[3px] md:border-transparent hover:bg-nav-active focus:outline-none"
            >
              Más
              <FaChevronDown
                className={`text-xs opacity-70 transition-transform duration-300 ${openDropdown === "mas" ? "rotate-180 md:rotate-0" : ""}`}
              />
            </button>

            {openDropdown === "mas" && (
              <div className="md:absolute static bg-gray-50 md:bg-white md:border md:border-gray-200 min-w-[220px] md:shadow-lg w-full md:w-auto md:rounded-b-xl overflow-hidden">
                <ul className="list-none m-0 p-0">
                  {moreNav.map((item) => (
                    <li
                      key={item.path}
                      className="border-b border-gray-200 md:border-none last:border-none"
                    >
                      <Link
                        to={item.path}
                        // Opciones del submenú más compactas con py-2.5
                        className={`block pl-10 pr-6 md:px-[20px] py-2.5 md:py-[7px] no-underline text-primary transition-colors duration-200 hover:bg-nav-active ${isActive(item.path) ? "bg-nav-active font-bold" : ""}`}
                        onClick={closeMobile}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
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
