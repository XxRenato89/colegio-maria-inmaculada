import React from "react";
import { useNavigate } from "react-router-dom";
import { TbArrowRight, TbCalendarEvent, TbPhoto } from "react-icons/tb";
import { newsData } from "../data/newsData";

// ─── Placeholder de imagen reutilizable ───────────────────────────────────────
const ImgPlaceholder = ({ className = "" }) => (
  <div className={`w-full flex flex-col items-center justify-center gap-1.5 bg-slate-100 ${className}`}>
    <TbPhoto className="w-7 h-7 text-[#8c9ac7] stroke-[1.5]" />
    <span className="text-[10px] font-bold tracking-[1px] uppercase text-[#8c9ac7]">
      600 × 340 px
    </span>
  </div>
);

const NewsSection = () => {
  const navigate = useNavigate();
  const [featured, ...rest] = newsData;

  return (
    <section className="relative overflow-hidden bg-white py-16 px-4 md:px-12">
      {/* Círculos decorativos de fondo */}
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-primary opacity-[0.04] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[240px] h-[240px] rounded-full bg-primary opacity-[0.03] pointer-events-none" />

      <div className="relative z-10 max-w-[1040px] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4 pb-6 border-b border-gray-100">
          <div>
            <span className="text-[11px] md:text-[12px] font-bold tracking-[3px] uppercase text-gray-400 block mb-1">
              Colegio María Inmaculada
            </span>
            <h2 className="text-[32px] md:text-[40px] font-bold text-primary leading-none m-0">
              Últimas Noticias
            </h2>
          </div>
          <button
            onClick={() => navigate("/CRA")}
            className="flex items-center gap-1.5 text-[14px] md:text-[15px] font-bold text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary cursor-pointer bg-transparent border-none transition-all"
          >
            Ver más noticias <TbArrowRight className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Layout split */}
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_1fr] lg:grid-cols-[1.55fr_1fr] gap-8">
          {/* Noticia destacada */}
          <div
            className="group flex flex-col rounded-2xl overflow-hidden border-l-[6px] border-l-secondary shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
            onClick={() => navigate(featured.link)}
          >
            <div className="relative h-[280px] sm:h-[340px] md:h-[360px] lg:h-[380px] bg-[#dde1f0] flex-shrink-0">
              {featured.image ? (
                <img src={featured.image} alt={featured.title} loading="lazy" className="w-full h-full object-cover" />
              ) : (
                <ImgPlaceholder className="h-full" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] md:text-[11px] font-bold tracking-[1.5px] uppercase text-white bg-primary/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                {featured.category}
              </span>
            </div>
            <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
              <h3 className="font-serif text-[20px] md:text-[25px] font-bold text-primary leading-[1.3] mb-3 group-hover:text-primary/80 transition-colors">
                {featured.title}
              </h3>
              <p className="text-[14.5px] md:text-[15.5px] text-gray-500 leading-relaxed flex-1 mb-5">
                {featured.content}
              </p>
              <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                <span className="text-[12px] md:text-[13px] text-gray-400 flex items-center gap-1.5">
                  <TbCalendarEvent className="w-4 h-4" /> {featured.date}
                </span>
                <span className="text-[13px] md:text-[14.5px] font-bold text-primary flex items-center gap-1">
                  Leer más <TbArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          </div>
 
          {/* Noticias secundarias apiladas */}
          <div className="flex flex-col gap-5">
            {rest.map((item) => (
              <div
                key={item.id}
                className="group flex gap-5 rounded-xl overflow-hidden border-l-4 border-l-gray-200 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer bg-white"
                onClick={() => navigate(item.link)}
              >
                <div className="relative w-[130px] md:w-[150px] flex-shrink-0 bg-[#dde1f0]">
                  {item.image ? (
                    <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <ImgPlaceholder className="h-full w-full" />
                  )}
                  <span className="absolute bottom-2 left-2 text-[8px] md:text-[9px] font-bold tracking-[1px] uppercase text-white bg-primary px-2.5 py-[3px] rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="py-4 pr-4 flex flex-col justify-between flex-1">
                  <h3 className="text-[14px] md:text-[16px] font-bold text-primary leading-[1.4] group-hover:text-primary/80 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-col items-start justify-between mt-3">
                    <span className="text-[11px] md:text-[12px] text-gray-400 flex items-center gap-1.5">
                      <TbCalendarEvent className="w-4 h-4" /> {item.date}
                    </span>
                    <span className="text-[12px] md:text-[13px] font-bold text-primary flex items-center gap-0.5">
                      Leer más <TbArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bloque CTA integrado */}
            <div className="rounded-xl bg-primary p-6 md:p-7 flex flex-col gap-4 relative overflow-hidden mt-2">
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-white opacity-[0.06]" />
              <p className="text-white text-[16px] md:text-[19px] font-bold leading-snug">
                ¿Quieres ser parte de nuestra comunidad?
              </p>
              <button
                onClick={() => navigate("/postulaciones")}
                className="self-start flex items-center gap-1.5 text-[13px] md:text-[14px] font-bold text-primary bg-white px-5 py-2.5 rounded-full hover:bg-white/90 transition-colors cursor-pointer border-none shadow-xs"
              >
                Postulaciones abiertas <TbArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;