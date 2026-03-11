
import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
  className?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, className = '' }) => (
  <div className={`relative group overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Nuestros Momentos</h2>
          <p className="text-gray-500 font-script text-2xl">Viviendo nuestro sueño...</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Fila 1: ancha + cuadrada */}
          <GalleryItem src="/images/image_1.jpeg" alt="Momento 1" className="col-span-2 h-72" />
          <GalleryItem src="/images/image_2.jpeg" alt="Momento 2" className="col-span-1 h-72" />

          {/* Fila 2: tres iguales */}
          <GalleryItem src="/images/image_3.jpeg" alt="Momento 3" className="col-span-1 h-64" />
          <GalleryItem src="/images/image_4.png"  alt="Momento 4" className="col-span-1 h-64" />
          <GalleryItem src="/images/image_5.jpeg" alt="Momento 5" className="col-span-1 h-64" />

          {/* Fila 3: cuadrada + ancha */}
          <GalleryItem src="/images/image_6.jpeg" alt="Momento 6" className="col-span-1 h-72" />
          <GalleryItem src="/images/image_7.jpeg" alt="Momento 7" className="col-span-2 h-72" />

          {/* Fila 4: ancha + cuadrada */}
          <GalleryItem src="/images/image_8.jpeg" alt="Momento 8" className="col-span-2 h-72" />
          <GalleryItem src="/images/image_9.jpeg" alt="Momento 9" className="col-span-1 h-72" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
