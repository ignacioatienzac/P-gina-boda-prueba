
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  { src: './images/image_8.jpeg', alt: 'Momento 8' },
  { src: './images/image_10.JPG', alt: 'Momento 10' },
  { src: './images/image_9.jpeg', alt: 'Momento 9' },
  { src: './images/image_2.jpeg', alt: 'Momento 2' },
  { src: './images/image_1.jpeg', alt: 'Momento 1' },
  { src: './images/image_5.jpeg', alt: 'Momento 5' },
  { src: './images/image_6.jpeg', alt: 'Momento 6' },
  { src: './images/image_3.jpeg', alt: 'Momento 3' },
  { src: './images/image_7.jpeg', alt: 'Momento 7' },
  { src: './images/image_11.png', alt: 'Momento 11' },
  { src: './images/image_4.png', alt: 'Momento 4' },
];

const preloadedImages = new Set<string>();

const preloadImage = (src: string) => {
  if (preloadedImages.has(src)) {
    return;
  }

  const image = new Image();
  image.src = src;
  preloadedImages.add(src);
};

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = galleryImages[currentIndex];

  useEffect(() => {
    preloadImage(currentImage.src);

    const nextImage = galleryImages[(currentIndex + 1) % galleryImages.length];
    const previousImage = galleryImages[(currentIndex - 1 + galleryImages.length) % galleryImages.length];

    preloadImage(nextImage.src);
    preloadImage(previousImage.src);
  }, [currentImage.src, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">{t.gallery.heading}</h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative flex items-center justify-center h-[78vw] min-h-[18rem] max-h-[28rem] sm:h-[30rem] sm:max-h-none lg:h-[38rem] bg-white">
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              decoding="async"
              className="h-full w-full object-contain bg-white p-3 sm:p-5 lg:p-8"
            />

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Ver imagen anterior"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-amber-900 shadow-lg transition hover:bg-white sm:left-5 sm:h-12 sm:w-12"
            >
              <span className="text-2xl leading-none">&#8249;</span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Ver imagen siguiente"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-amber-900 shadow-lg transition hover:bg-white sm:right-5 sm:h-12 sm:w-12"
            >
              <span className="text-2xl leading-none">&#8250;</span>
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2 overflow-x-auto pb-1">
            {galleryImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a ${image.alt}`}
                className={`h-2.5 rounded-full transition-all ${index === currentIndex ? 'w-10 bg-amber-700' : 'w-2.5 bg-amber-200 hover:bg-amber-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
