
import React from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa6";

const Botones = () => {
  const appStoreLink = "https://apps.apple.com/cl/app/appoderado/id986014721";
  const playStoreLink = "https://play.google.com/store/search?q=appoderados&c=apps&hl=es_CL";

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <a
        href={appStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300 w-48 shrink-0"
      >
        <FaApple className="text-2xl" />
        <div className="text-left leading-tight">
          <span className="text-[10px] block opacity-70 font-normal">Descarga en</span>
          <span className="text-sm">App Store</span>
        </div>
      </a>

      <a
        href={playStoreLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-white text-black border border-gray-200 rounded-xl font-bold shadow-lg hover:scale-105 transition-all duration-300 w-48 shrink-0"
      >
        <FaGooglePlay className="text-2xl" />
        <div className="text-left leading-tight">
          <span className="text-[10px] block opacity-70 font-normal">Disponible en</span>
          <span className="text-sm">Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default Botones;
