// Este es el estilo para los titulos como el de la pagina de Actividades
import React from 'react';

const SectionHero = ({
  pill,
  title,
  subtitle,
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick
}) => {
  return (
    <section className="act-hero">
      <div className="act-hero-inner">
        {pill && <div className="act-pill">{pill}</div>}

        <h1 className="act-title">{title}</h1>

        {subtitle && (
          <p className="act-subtitle">{subtitle}</p>
        )}

        <div className="act-hero-actions">
          {primaryLabel && (
            <button
              className="act-btn-ghost"
              onClick={onPrimaryClick}
            >
              {primaryLabel}
            </button>
          )}

          {secondaryLabel && (
            <button
              className="btn-primary"
              onClick={onSecondaryClick}
            >
              {secondaryLabel}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
