import React from 'react';

const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4 text-gray-800">Vestimenta</h2>
          <div className="w-16 h-px bg-amber-300 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
            No hay un código de vestimenta para el evento. Sin embargo, os explicamos aquí cómo se visten los andaluces en estas ocasiones por si queréis adaptaros a la vestimenta local.
          </p>
        </div>

        {/* Desktop: two columns side by side. Mobile: stacked (grid-cols-1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Hombres */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif text-amber-900 mb-5">Hombres</h3>
            <div className="relative group overflow-hidden shadow-lg mb-5">
              <img
                src="https://picsum.photos/id/1005/600/900"
                alt="Vestimenta hombres"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              Lo más habitual es llevar traje y corbata, sobre todo en bodas de día. En las de tarde o noche, es frecuente optar por trajes oscuros o incluso chaqué si la boda es muy formal. Los andaluces suelen cuidar mucho los complementos (pañuelo, gemelos, zapatos elegantes).
            </p>
          </div>

          {/* Mujeres */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-serif text-amber-900 mb-5">Mujeres</h3>
            <div className="relative group overflow-hidden shadow-lg mb-5">
              <img
                src="https://picsum.photos/id/1024/600/900"
                alt="Vestimenta mujeres"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
            <p className="text-gray-600 text-base leading-relaxed text-justify">
              Los vestidos de cóctel o largos son lo más común, dependiendo de la hora de la boda. En bodas de día es muy típico el uso de tocados, pamelas o diademas, que aportan un toque elegante y festivo. En bodas de noche suelen llevar vestidos largos o más sofisticados, acompañados de joyas y bolsos de mano pequeños.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Accommodation;
