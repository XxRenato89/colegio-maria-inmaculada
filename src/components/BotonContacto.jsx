//Este es el estilo para el banner que redirige a contacto
import React from 'react';
import '../App.css';

const BotonContacto = ({ variant = 'primary', children, ...props }) => {
  const className = variant === 'secondary'
    ? 'btn-secondary'
    : 'btn-primary';

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default BotonContacto;
