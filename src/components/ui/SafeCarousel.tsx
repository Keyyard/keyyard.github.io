import React, { useState, useEffect } from 'react';
import { Carousel } from "react-responsive-carousel";
import SafeImage from './SafeImage';
import { filterWorkingImages } from '../../utils/imageUtils';

interface SafeCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

const SafeCarousel: React.FC<SafeCarouselProps> = ({ images, alt, className = "" }) => {
  const [workingImages, setWorkingImages] = useState<string[]>(images);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkImages = async () => {
      setIsLoading(true);
      // For now, just use all images and let SafeImage handle errors
      // In production, you might want to preload and filter
      setWorkingImages(images);
      setIsLoading(false);
    };

    checkImages();
  }, [images]);

  if (isLoading) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-800 rounded`}>
        <div className="text-gray-400 text-sm">Loading images...</div>
      </div>
    );
  }

  if (workingImages.length === 0) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-800 rounded`}>
        <div className="text-gray-400 text-sm">No images available</div>
      </div>
    );
  }

  return (
    <Carousel
      className={className}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showIndicators={workingImages.length > 1}
    >
      {workingImages.map((img, imgIndex) => (
        <div key={imgIndex} className="aspect-video">
          <SafeImage
            src={img}
            alt={`${alt} image ${imgIndex + 1}`}
            className="w-full h-full object-cover rounded"
            showPlaceholderOnError={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SafeCarousel;
