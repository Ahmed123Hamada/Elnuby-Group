import { useEffect } from 'react';

interface ImagePreloaderProps {
  images: string[];
  priority?: boolean;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ images, priority = false }) => {
  useEffect(() => {
    if (!priority) {
      // Preload images after initial render to avoid blocking
      const timer = setTimeout(() => {
        images.forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      // Preload priority images immediately
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [images, priority]);

  return null;
};

export default ImagePreloader;
