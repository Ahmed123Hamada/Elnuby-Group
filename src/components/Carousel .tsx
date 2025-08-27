import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import Button from './Button';

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

  const nextSlide = useCallback(() => setCurrent((prev) => (prev + 1) % slides.length), [slides.length]);
  const prevSlide = useCallback(() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length), [slides.length]);

    useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [nextSlide]);

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
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-[95vh] overflow-hidden bg-white dark:bg-black text-black dark:text-white">
      <AnimatePresence>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
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
          <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 text-[#ED8823] dark:text-white leading-tight"
            >
              {slide.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-6 sm:mb-8 text-white/90 leading-relaxed px-2"
            >
              {slide.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="glass"
                size="lg"
                icon="arrow-right"
                href="/projects"
                className="uppercase tracking-wider text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 mb-4  "
              >
                {t('viewAllProjects')}
              </Button>
            </motion.div>
          </div>

          {/* Next Preview removed as requested */}

          {/* Controls */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 lg:right-10 flex items-center gap-3 sm:gap-4 lg:gap-6 z-10">
            <button 
              onClick={prevSlide} 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white border border-white/30"
              aria-label="Previous slide"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <span className="w-8 sm:w-12 lg:w-20 h-px bg-white/40" />
            <button 
              onClick={nextSlide} 
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 text-white border border-white/30"
              aria-label="Next slide"
            >
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Mobile Slide Indicators */}
          <div className="flex md:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>


        </motion.div>
      </AnimatePresence>
    </div>
  );
}
