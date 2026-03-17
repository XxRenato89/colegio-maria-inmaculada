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
    <nav className="bg-white border-b border-gray-200 font-sans text-[1rem]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* BOTON HAMBURGUESA */}
        <button
          className="md:hidden text-[1.8rem] bg-none border-none cursor-pointer text-primary p-2 block"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FaXmark /> : <FaBars />}
        </button>

        <div
          className={`${mobileOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-1 w-full md:w-auto transition-all duration-300`}
        >
          {mainNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMobile}
              className={`w-full md:w-auto text-primary no-underline px-[15px] py-[12px] inline-block relative cursor-pointer transition-all duration-300 border-b-[3px] hover:bg-nav-active ${isActive(item.path, item.exact) ? "bg-nav-active font-bold border-primary" : "border-transparent"}`}
            >
              {item.label}
            </Link>
          ))}

          {/* DROPDOWN */}
          <div
            className="relative inline-block w-full md:w-auto"
            onMouseEnter={() => handleMouseEnter("mas")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="w-full md:w-auto text-primary no-underline px-[15px] py-[12px] flex items-center gap-2 cursor-pointer transition-all duration-300 border-b-[3px] border-transparent hover:bg-nav-active dropdown-trigger select-none">
              Más <FaChevronDown className="text-xs opacity-70" />
            </span>

            {openDropdown === "mas" && (
              <div className="md:absolute static bg-white md:border md:border-gray-200 z-1000 min-w-[220px] md:shadow-lg w-full md:w-auto rounded-b-xl overflow-hidden">
                <ul className="list-none m-0 p-0">
                  {moreNav.map((item) => (
                    <li
                      key={item.path}
                      className="border-b border-gray-100 md:border-none last:border-none"
                    >
                      <Link
                        to={item.path}
                        className={`block px-[20px] py-[12px] no-underline text-primary transition-colors duration-200 hover:bg-nav-active ${isActive(item.path) ? "bg-nav-active font-bold" : ""}`}
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
