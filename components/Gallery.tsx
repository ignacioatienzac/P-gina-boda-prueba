
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface GalleryItemProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, className = '', imgClassName = '' }) => (
  <div className={`relative group overflow-hidden ${className}`}>
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imgClassName}`}
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
  </div>
);

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">{t.gallery.heading}</h2>
          <p className="text-gray-500 font-script text-2xl">{t.gallery.subtitle}</p>
        </div>

        {/* ===== MOBILE LAYOUT (visible < md) ===== */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {/* Fila 1: image_1 full width */}
          <GalleryItem src="./images/image_1.jpeg" alt="Momento 1" className="col-span-2 h-[55vw]" />

          {/* Fila 2: image_2 + image_3 */}
          <GalleryItem src="./images/image_2.jpeg" alt="Momento 2" className="col-span-1 h-[55vw]" imgClassName="object-top" />
          <GalleryItem src="./images/image_3.jpeg" alt="Momento 3" className="col-span-1 h-[55vw]" imgClassName="object-left" />

          {/* Fila 3: image_4 + image_8 */}
          <GalleryItem src="./images/image_4.png"  alt="Momento 4" className="col-span-1 h-[55vw]" imgClassName="object-[center_15%]" />
          <GalleryItem src="./images/image_8.jpeg" alt="Momento 8" className="col-span-1 h-[55vw]" imgClassName="object-[75%]" />

          {/* Fila 4: image_5 full width */}
          <GalleryItem src="./images/image_5.jpeg" alt="Momento 5" className="col-span-2 h-[55vw]" />

          {/* Fila 5: image_6 + image_7 */}
          <GalleryItem src="./images/image_6.jpeg" alt="Momento 6" className="col-span-1 h-[55vw]" />
          <GalleryItem src="./images/image_7.jpeg" alt="Momento 7" className="col-span-1 h-[55vw]" />

          {/* Fila 6: image_10 full width */}
          <GalleryItem src="./images/image_10.png" alt="Momento 10" className="col-span-2 h-[55vw]" imgClassName="object-[center_20%]" />

          {/* Fila 7: image_9 full width */}
          <GalleryItem src="./images/image_9.jpeg" alt="Momento 9" className="col-span-2 h-[55vw]" />
        </div>

        {/* ===== DESKTOP LAYOUT (visible >= md) ===== */}
        <div className="hidden md:grid grid-cols-[4fr_1fr] gap-6">
          <div className="grid grid-cols-3 gap-6">
            <GalleryItem src="./images/image_1.jpeg" alt="Momento 1" className="col-span-2 h-72" />
            <GalleryItem src="./images/image_2.jpeg" alt="Momento 2" className="col-span-1 h-72" imgClassName="object-top" />

            <GalleryItem src="./images/image_3.jpeg" alt="Momento 3" className="col-span-1 h-64" imgClassName="object-left" />
            <GalleryItem src="./images/image_4.png"  alt="Momento 4" className="col-span-1 h-64" imgClassName="object-[center_15%]" />
            <GalleryItem src="./images/image_5.jpeg" alt="Momento 5" className="col-span-1 h-64" />

            <GalleryItem src="./images/image_6.jpeg" alt="Momento 6" className="col-span-1 h-72" />
            <GalleryItem src="./images/image_7.jpeg" alt="Momento 7" className="col-span-2 h-72" />

            <GalleryItem src="./images/image_10.png" alt="Momento 10" className="col-span-2 h-72" imgClassName="object-[center_20%]" />
            <GalleryItem src="./images/image_9.jpeg" alt="Momento 9" className="col-span-1 h-72" />
          </div>

          <GalleryItem src="./images/image_8.jpeg" alt="Momento 8" className="h-full" imgClassName="object-[75%]" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
