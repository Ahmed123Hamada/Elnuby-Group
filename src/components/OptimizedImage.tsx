import React, { useState, useCallback, useRef } from 'react';
import { PerformanceMonitor } from '../utils/performance-monitor';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  style,
  loading = 'lazy',
  sizes,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const loadStartTime = useRef<number>(0);
  const performanceMonitor = PerformanceMonitor.getInstance();

  // Generate WebP version if possible
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.jpg') || originalSrc.includes('.jpeg') || originalSrc.includes('.png')) {
      return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return originalSrc;
  };

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    if (loadStartTime.current > 0) {
      performanceMonitor.trackImageLoad(src, loadStartTime.current);
    }
    onLoad?.();
  }, [onLoad, src, performanceMonitor]);

  const handleError = useCallback(() => {
    setHasError(true);
    onError?.();
  }, [onError]);

  const webpSrc = getWebPSrc(src);

  // Start timing when component mounts
  React.useEffect(() => {
    loadStartTime.current = performance.now();
  }, [src]);

  return (
    <div className="relative">
      {!isLoaded && !hasError && (
        <div 
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
          style={style}
        />
      )}
      
      <picture>
        {webpSrc !== src && (
          <source srcSet={webpSrc} type="image/webp" sizes={sizes} />
        )}
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={style}
          loading={loading}
          decoding="async"
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
      
      {hasError && (
        <div 
          className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${className}`}
          style={style}
        >
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;