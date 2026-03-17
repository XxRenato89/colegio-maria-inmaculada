/**
 * Componente CTA (Call-To-Action)
 * 
 * Una sección de banner atractiva utilizada en la parte inferior de las páginas para fomentar la participación del usuario.
 * Presenta un fondo degradado sutil y botones de acción personalizables.
 * 
 * @param {Object} props
 * @param {string} props.title - El título en negrita para la llamada a la acción
 * @param {string} props.text - Texto descriptivo o instrucciones
 * @param {string} props.primaryLabel - Texto para el botón principal
 * @param {Function} props.onPrimaryClick - Acción cuando se hace clic en el botón principal
 * @param {string} props.secondaryLabel - Texto para el segundo botón opcional
 * @param {Function} props.onSecondaryClick - Acción cuando se hace clic en el segundo botón
 */
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
    <section className="py-7 pb-2 px-4 md:px-8">
      <div className="max-w-[1100px] mx-auto bg-linear-to-r from-[rgba(24,23,96,0.08)] to-[rgba(255,251,230,0.9)] border border-[#ececec] rounded-2xl p-6 md:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        <h3 className="m-0 mb-3 text-primary text-2xl font-bold">{title}</h3>
        <p className="m-0 mb-6 text-[#444] leading-[1.7] text-lg">{text}</p>

        <div className="flex gap-3 flex-wrap">
          <BotonContacto
            variant="primary"
            onClick={onPrimaryClick}
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
