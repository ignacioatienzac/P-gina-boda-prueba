import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Accommodation: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="accommodation" className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-gray-800">{t.dressCode.heading}</h2>
          <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
            {t.dressCode.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Men */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif text-amber-900 mb-5">{t.dressCode.men}</h3>
            <div className="relative group overflow-hidden shadow-lg mb-5">
              <img
                src="https://picsum.photos/id/1005/600/900"
                alt={t.dressCode.men}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              {t.dressCode.menText}
            </p>
          </div>

          {/* Women */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif text-amber-900 mb-5">{t.dressCode.women}</h3>
            <div className="relative group overflow-hidden shadow-lg mb-5">
              <img
                src="https://picsum.photos/id/1024/600/900"
                alt={t.dressCode.women}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              {t.dressCode.womenText}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Accommodation;
