import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("hasSeenPromoModal");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); // Aparece después de 1 segundo
      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPromoModal", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-2000 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabecera con color institucional */}
        <div className="bg-primary p-6 text-center">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <IoMdClose size={24} />
          </button>

          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-primary text-3xl font-bold">!</span>
          </div>

          <h2 className="text-white text-2xl font-bold leading-tight">
            Excelencia académica <br />
            <span className="text-accent">2026-2027</span>
          </h2>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-8 text-center">
          <p className="text-primary/80 text-lg mb-8 font-medium">
            ¡Ya están abiertas las vacantes! <br />
            No pierdas la oportunidad de formar parte de nuestra comunidad.
          </p>

          <div className="space-y-4">
            <p className="text-primary font-bold text-xl uppercase tracking-wider">
              Matrícula con nosotros
            </p>

            <button
              onClick={() => {
                navigate("/postulaciones");
                closeModal();
              }}
              className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-md"
            >
              Ver más información
            </button>
            <button
              onClick={closeModal}
              className="w-full bg-transparent hover:bg-primary/5 text-primary/60 hover:text-primary font-semibold py-2 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
