import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 px-6 mt-auto">
      <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        
        {/* Logo/Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold border-b border-white/20 pb-2 inline-block">Colegio María Inmaculada</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Formando personas íntegras con valores cristianos y excelencia académica en Los Ángeles.
          </p>
          <p className="text-white/60 text-xs mt-6">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Contacto</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-accent shrink-0" />
              <span>Avenida Las Quintas N°188, Los Ángeles</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-accent shrink-0" />
              <span>(43) 2658332</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaWhatsapp className="text-accent shrink-0 text-lg" />
              <span>+56 9 3931 0070</span>
            </li>
          </ul>
        </div>

        {/* Social & Enlaces */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">Síguenos</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a 
              href="https://web.facebook.com/maria.inmaculada.35/?_rdc=1&_rdr#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1 text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/mariainmaculadalosangeles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:-translate-y-1 text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
