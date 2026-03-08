// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#1E69B3',
      color: 'white',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '900px', margin: 'auto' }}>
        {/* Información del colegio */}
        <p style={{ margin: '0.5rem 0' }}>
          &copy; {new Date().getFullYear()} Colegio María Inmaculada Los Ángeles
        </p>
        <p style={{ margin: '0.5rem 0' }}>
          Dirección: Avenida Las Quintas N°188
          Los Ángeles. | Teléfono: (43) 2658332 | Whatsapp: +569-39310070
        </p>

        {/* Redes Sociales */}
        <div style={{ margin: '1rem 0' }}>
          <a href="https://web.facebook.com/maria.inmaculada.35/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54v-2.54h2.54V10.28c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.441 2.54h-2.332v6.988C18.343 21.129 22 16.99 22 12z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/mariainmaculadalosangeles?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
