import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '100vw',
  placeholder,
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version if possible
  const getWebPSrc = (originalSrc: string) => {
    if (originalSrc.includes('.webp')) return originalSrc;
    return originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  };

  // Generate responsive srcset
  const getSrcSet = (originalSrc: string) => {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${originalSrc}?w=${size} ${size}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && placeholder && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{ backgroundImage: `url(${placeholder})`, backgroundSize: 'cover' }}
        />
      )}

      {/* Optimized Image */}
      <picture>
        {/* WebP format for modern browsers */}
        <source
          srcSet={getSrcSet(getWebPSrc(src))}
          sizes={sizes}
          type="image/webp"
        />
        
        {/* Fallback to original format */}
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          sizes={sizes}
        />
      </picture>

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-500 dark:text-gray-400">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center mb-2 mx-auto">
              <span className="text-lg">📷</span>
            </div>
            <p className="text-sm">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage; 