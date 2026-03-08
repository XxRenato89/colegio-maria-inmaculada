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
    requestAnimationFrame(() => forceScrollTop());
  }, [location.key]);

  return null;
};

export default ScrollToTop;
