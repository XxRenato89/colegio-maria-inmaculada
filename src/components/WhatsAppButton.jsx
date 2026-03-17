import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

const WhatsAppButton = () => {
  const phoneNumber = '+56939310070'; // Número del colegio
  const message = 'Hola, quiero información sobre el Colegio María Inmaculada Los Ángeles';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div 
      onClick={handleClick}
      className="fixed bottom-5 right-5 z-1000 cursor-pointer shadow-lg transition-all duration-200 hover:scale-110"
    >
      <div className="w-[60px] h-[60px] rounded-full bg-[#25D366] flex items-center justify-center border-3 border-white">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
    </div>
  );
};

export default WhatsAppButton;
