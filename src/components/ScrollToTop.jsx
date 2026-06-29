// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function forceScrollTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const containers = [
    document.querySelector('.page-surface'),
    document.querySelector('.page-shell'),
    document.querySelector('#app-scroll'),
  ].filter(Boolean);

  containers.forEach((el) => {
    el.scrollTop = 0;
  });
}

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.replace('#', ''));
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 150; // Compensar la cabecera fija
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        } else {
          forceScrollTop();
        }
      }, 150); // Tiempo para asegurar renderizado de componentes perezosos
      return () => clearTimeout(timer);
    } else {
      requestAnimationFrame(() => forceScrollTop());
    }
  }, [location.key, location.hash]);

  return null;
};

export default ScrollToTop;
