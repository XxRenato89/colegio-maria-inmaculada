import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Componente Laurel (DISEÑO)
function Laurel({ flip }) {
  return (
    <svg
      viewBox="0 0 80 120"
      width="60"
      style={{ transform: flip ? "scaleX(-1)" : "none", opacity: 0.95 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = -30 + i * 14;
        const rad = (angle * Math.PI) / 180;
        const cx = 38 + Math.cos(rad) * (18 + i * 3);
        const cy = 105 - i * 15;
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="10"
            ry="6"
            fill="#C9A227"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            opacity={0.85 + i * 0.02}
          />
        );
      })}
      <line
        x1="40"
        y1="110"
        x2="40"
        y2="10"
        stroke="#C9A227"
        strokeWidth="2.5"
        opacity="0.6"
      />
    </svg>
  );
}

export default function PromoModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setOpen(true);
    setTimeout(() => setVisible(true), 10);
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 350);
  };

  // Auto-open on mount (first time per session)
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("promo_viewed");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        openModal();
        sessionStorage.setItem("promo_viewed", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={closeModal}
          className={`fixed inset-0 z-1000 bg-black/80 flex items-center justify-center p-5 
                     transition-opacity duration-350 ease-in-out backdrop-blur-sm
                     ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative rounded-3xl overflow-hidden w-full max-w-[460px] pb-8
                       bg-radial from-white via-[#e2efff] to-[#c4ddff]
                       shadow-[0_30px_100px_rgba(0,0,0,0.8),0_0_0_2px_rgba(201,162,39,0.5)]
                       transition-all duration-500 cubic-bezier(0.34,1.56,0.64,1)
                       ${
                         visible
                           ? "scale-100 translate-y-0 opacity-100"
                           : "scale-85 translate-y-10 opacity-0"
                       }`}
          >
            <div className="h-1.5 bg-linear-to-r from-[#C9A227] via-modal to-[#C9A227]" />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full w-9 h-9 
                         cursor-pointer text-2xl leading-none text-primary z-10 
                         shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center"
            >
              ×
            </button>

            <div className="relative z-1 text-center pt-8 px-7">
              <div
                className="w-[84px] h-[84px] rounded-full bg-white mx-auto mb-3 
                           flex items-center justify-center shadow-[0_6px_20px_rgba(37,99,235,0.2)] 
                           border-4 border-modal p-1"
              >
                <img
                  src="/logo.png"
                  alt="Logo Colegio"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="m-0 mb-0.5 text-[10px] tracking-[0.25em] text-primary uppercase font-bold opacity-80">
                Colegio
              </p>
              <h2 className="m-0 mb-0.5 text-2xl font-black text-primary tracking-tight leading-tight">
                MARÍA INMACULADA
              </h2>
              <p className="m-0 mb-4.5 text-xs tracking-[0.3em] text-secondary uppercase font-semibold">
                LOS ÁNGELES
              </p>
              <div
                className="text-4xl font-black text-primary mb-3.5 tracking-tight 
                           drop-shadow-[2px_2px_0_rgba(255,255,255,0.8)] 
                           shadow-modal/30"
              >
                ¡LO LOGRAMOS!
              </div>
              <p className="m-0 mb-5 text-sm text-slate-700 leading-relaxed">
                Con orgullo y alegría, compartimos con
                <br />
                <strong>toda nuestra comunidad...</strong>
                <br />
                que hemos sido <strong>distinguidos</strong> con la
              </p>

              <div className="relative mx-[-20px] flex items-center justify-center scale-105">
                <Laurel />
                <div className="flex-1 text-center z-2">
                  <div
                    className="bg-linear-to-br from-[#C9A227] via-modal to-[#C9A227] 
                               rounded-t-lg pt-2.5 px-4 pb-2 shadow-[0_4px_16px_rgba(201,162,39,0.4)]"
                  >
                    <p className="m-0 text-[9px] tracking-widest text-[#5c3d00] uppercase font-extrabold">
                      Distinción
                    </p>
                    <h3 className="m-0 mt-0.5 text-lg font-black text-[#1a1a1a] tracking-tight uppercase">
                      Excelencia Académica
                    </h3>
                    <p className="m-0 text-xs font-extrabold text-[#3b2000]">
                      (SNED)
                    </p>
                  </div>
                  <div
                    className="bg-linear-to-br from-primary to-secondary 
                               rounded-b-lg py-2 px-4 shadow-[0_4px_12px_rgba(24,23,96,0.3)]"
                  >
                    <p className="m-0 text-xl font-black text-modal tracking-widest drop-shadow-md">
                      ★ 2026 – 2027 ★
                    </p>
                  </div>
                </div>
                <Laurel flip />
              </div>
              <div className="bg-linear-to-br from-primary to-secondary rounded-xl mt-8 py-3 px-5 shadow-[0_6px_15px_rgba(24,23,96,0.2)] mx-2.5 cursor-pointer">
                <Link
                  to="/postulaciones"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <p className="m-0 text-xl font-black text-modal tracking-widest drop-shadow-md">
                    ¡POSTULA AQUÍ!
                  </p>
                </Link>
              </div>
            </div>

            <div className="h-1.5 mt-8 bg-linear-to-r from-[#C9A227] via-modal to-[#C9A227]" />
          </div>
        </div>
      )}

      <style>{`
        @keyframes customPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </>
  );
}
