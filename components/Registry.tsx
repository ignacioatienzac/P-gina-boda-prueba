
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const Registry: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="registry" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-serif mb-8 text-gray-800">{t.registry.heading}</h2>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto text-justify">
          {t.registry.text}
        </p>

        <div className="p-8 bg-[#fdfbf7] border border-amber-100 inline-block">
          <p className="text-gray-600 text-sm">Banco: International Bank | CLABE: 0123 4567 8901 2345 67</p>
        </div>
      </div>
    </section>
  );
};

export default Registry;
