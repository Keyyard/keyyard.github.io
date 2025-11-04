import React, { useState, memo } from 'react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onError?: () => void;
  showPlaceholderOnError?: boolean;
}

const SafeImage: React.FC<SafeImageProps> = memo(({ 
  src, 
  alt, 
  className = "", 
  fallbackSrc = "/image-placeholder.svg",
  onError,
  showPlaceholderOnError = true
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      if (showPlaceholderOnError && fallbackSrc) {
        setImgSrc(fallbackSrc);
      }
      // Only log warning, don't spam console
      console.warn(`Failed to load image: ${src}`);
      if (onError) {
        onError();
      }
    }
  };

  // Don't render anything if there's an error and no fallback should be shown
  if (hasError && !showPlaceholderOnError) {
    return null;
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
});

SafeImage.displayName = 'SafeImage';

export default SafeImage;
