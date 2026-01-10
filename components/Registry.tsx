
import React from 'react';

const Registry: React.FC = () => {
  return (
    <section id="registry" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-4xl font-serif mb-8 text-gray-800">Mesa de Regalos</h2>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed max-w-2xl mx-auto">
          Su presencia en nuestra boda es el mejor regalo que podríamos pedir. Si desean obsequiarnos algo más, hemos seleccionado algunas opciones para nuestro nuevo hogar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Amazon Wedding', icon: '📦', link: '#' },
            { name: 'Viaje de Novios', icon: '✈️', link: '#' },
            { name: 'Liverpool', icon: '🛍️', link: '#' }
          ].map((item) => (
            <a 
              key={item.name}
              href={item.link}
              className="p-8 border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="font-serif text-xl mb-2">{item.name}</h3>
              <span className="text-xs text-amber-600 uppercase tracking-widest font-bold">Ver Lista</span>
            </a>
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-[#fdfbf7] border border-amber-100">
          <h3 className="font-serif text-2xl mb-4">¿Prefieres transferencia?</h3>
          <p className="text-gray-600 mb-4 text-sm">Banco: International Bank | CLABE: 0123 4567 8901 2345 67</p>
          <p className="text-gray-400 text-xs italic">Agradecemos profundamente cada detalle.</p>
        </div>
      </div>
    </section>
  );
};

export default Registry;
