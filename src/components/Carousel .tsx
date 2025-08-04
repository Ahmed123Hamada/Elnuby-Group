import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroCarousel() {
  const { t } = useTranslation();
  
  // Use direct public URLs instead of imports
  const slides = [
    {
      id: 1,
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      image: '/images/Slider_Home_S3.jpg',
      nextProject: t('healthcare'),
    },
    {
      id: 2,
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      image: '/images/Slider_Home_S1.jpg',
      nextProject: t('infrastructure'),
    },
    {
      id: 3,
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      image: '/images/infrastructure-project.jpg',
      nextProject: t('educational'),
    },
    {
      id: 4,
      title: t('heroTitle'),
      subtitle: t('heroSubtitle'),
      image: '/images/Slider_Home_S2-scaled.jpg',
      nextProject: t('healthcare'),
    },
    ];
  
  const [current, setCurrent] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Set<number>>(new Set());
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleImageLoad = (slideId: number) => {
    console.log('Image loaded for slide:', slideId);
    setImagesLoaded(prev => new Set(prev).add(slideId));
    setImageErrors(prev => {
      const newSet = new Set(prev);
      newSet.delete(slideId);
      return newSet;
    });
  };

  const handleImageError = (slideId: number, imageSrc: string) => {
    console.error('Image failed to load:', imageSrc, 'for slide:', slideId);
    setImageErrors(prev => new Set(prev).add(slideId));
  };

  const slide = slides[current];
  const isImageLoaded = imagesLoaded.has(slide.id);
  const hasImageError = imageErrors.has(slide.id);

  return (
    <div className="relative w-full h-[95vh] overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <AnimatePresence>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12"
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            {!hasImageError ? (
              <img
                src={slide.image}
                alt="Slide background"
                className="w-full h-full object-cover scale-105"
                onLoad={() => handleImageLoad(slide.id)}
                onError={() => handleImageError(slide.id, slide.image)}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-2xl">🏗️</span>
                  </div>
                  <h3 className="text-lg font-semibold">{slide.title}</h3>
                </div>
              </div>
            )}
          </div>
          
          {/* Loading Placeholder */}
          {!isImageLoaded && !hasImageError && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-2"></div>
                <span className="text-xs">Loading...</span>
              </div>
            </div>
          )}
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Text Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-[#ED8823] dark:text-white">{slide.title}</h1>
            <p className="text-lg sm:text-xl font-light mb-8 text-white">{slide.subtitle}</p>
            <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-gray-900 text-white hover:bg-black/90 transition">
              {t('viewAllProjects')}
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Next Preview */}
          <div className="absolute bottom-24 sm:bottom-16 left-1/2 transform -translate-x-1/2 flex items-end gap-4 sm:gap-6 z-10">
            <div className="relative">
              {!hasImageError ? (
                <img
                  src={slide.image}
                  alt="Next project preview"
                  className="w-20 h-28 sm:w-28 sm:h-44 object-cover rounded-md shadow-lg"
                  onLoad={() => console.log('Preview image loaded:', slide.image)}
                  onError={() => handleImageError(slide.id, slide.image)}
                />
              ) : (
                <div className="w-20 h-28 sm:w-28 sm:h-44 bg-gray-200 dark:bg-gray-700 rounded-md shadow-lg flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mb-1 mx-auto">
                      <span className="text-sm">📷</span>
                    </div>
                    <span className="text-xs">Preview</span>
                  </div>
                </div>
              )}
            </div>
            <div className="text-left text-sm sm:text-base">
              <p className="uppercase text-gray-300 tracking-widest">{t('nextProject')}</p>
              <p className="font-medium text-white">{slide.nextProject}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="absolute bottom-8 right-6 sm:right-10 flex items-center gap-6 z-10">
            <button onClick={prevSlide} className="hover:opacity-60 transition text-white">
              <ArrowLeft />
            </button>
            <span className="w-20 h-px bg-gray-400" />
            <button onClick={nextSlide} className="hover:opacity-60 transition text-white">
              <ArrowRight />
            </button>
          </div>

          {/* Slide Indicator */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-4 text-xs tracking-wider font-medium text-gray-300 z-10">
            {slides.map((_, idx) => (
              <span key={idx} className={idx === current ? 'text-white' : 'opacity-50'}>
                0{idx + 1}
              </span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
