import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from 'lucide-react';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isFullscreen) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isFullscreen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        switch (e.key) {
          case 'ArrowLeft':
            prevSlide();
            break;
          case 'ArrowRight':
            nextSlide();
            break;
          case 'Escape':
            setIsFullscreen(false);
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <>
      {/* Main Carousel */}
      <div className="relative group">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`${title} - صورة ${currentIndex + 1}`}
              className="w-full h-96 object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setIsFullscreen(true)}
            className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-800 dark:text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Maximize2 size={16} />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="flex justify-center space-x-2 rtl:space-x-reverse mt-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  currentIndex === index
                    ? 'border-primary-600 scale-110'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary-400'
                }`}
              >
                <img
                  src={image}
                  alt={`${title} - مصغرة ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <X size={24} />
            </button>

            {/* Minimize Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              <Minimize2 size={24} />
            </button>

            {/* Fullscreen Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt={`${title} - صورة ${currentIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Fullscreen Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-200"
              >
                <ChevronRight size={32} />
              </button>

              {/* Fullscreen Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-lg font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectImageCarousel; 