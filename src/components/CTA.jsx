import React from 'react';
import '../App.css';
import BotonContacto from './BotonContacto';

const CTA = ({
  title,
  text,
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick
}) => {
  return (
    <section className="qs-cta">
      <div className="qs-container qs-cta-card">
        <h3 className="qs-cta-title">{title}</h3>
        <p className="qs-cta-text">{text}</p>

        <div className="qs-cta-actions">
          <BotonContacto
            variant="primary"
            onClick={onPrimaryClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#FFD700')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#181760')}
          >
            {primaryLabel}
          </BotonContacto>

          {secondaryLabel && (
            <BotonContacto variant="secondary" onClick={onSecondaryClick}>
              {secondaryLabel}
            </BotonContacto>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
