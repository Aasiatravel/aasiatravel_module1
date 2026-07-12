import { useState, useEffect } from 'react';

export function useImageSlideshow(imagesLength: number, interval: number = 4000) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imagesLength <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesLength);
    }, interval);

    return () => clearInterval(timer);
  }, [imagesLength, interval]);

  return {
    currentImageIndex,
    setCurrentImageIndex,
  };
}
