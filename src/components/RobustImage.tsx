import React, { useState, useEffect } from 'react';

interface RobustImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const RobustImage: React.FC<RobustImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc,
  onLoad,
  onError
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    console.log('Image loaded successfully:', src);
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    console.error('Image failed to load:', src);
    setHasError(true);
    setIsLoaded(false);
    
    // Try fallback if available
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      console.log('Trying fallback image:', fallbackSrc);
      setCurrentSrc(fallbackSrc);
    } else {
      onError?.();
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading Placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto mb-2"></div>
            <span className="text-xs">Loading...</span>
          </div>
        </div>
      )}

      {/* Main Image */}
      <img
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
      />

      {/* Error Fallback */}
      {hasError && !fallbackSrc && (
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

export default RobustImage; 