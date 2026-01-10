
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://picsum.photos/id/1027/800/800",
    "https://picsum.photos/id/1012/800/1200",
    "https://picsum.photos/id/1006/1200/800",
    "https://picsum.photos/id/1011/800/800",
    "https://picsum.photos/id/1015/800/1200",
    "https://picsum.photos/id/1016/1200/800"
  ];

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Nuestros Momentos</h2>
          <p className="text-gray-500 font-script text-2xl">Viviendo nuestro sueño...</p>
        </div>
        
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="relative group overflow-hidden">
              <img 
                src={img} 
                alt={`Gallery ${idx}`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
