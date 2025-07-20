// Utility to preload images and handle errors gracefully
export const preloadImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => {
      console.warn(`Failed to preload image: ${src}`);
      resolve(false);
    };
    img.src = src;
  });
};

// Utility to filter out broken images from an array
export const filterWorkingImages = async (imageUrls: string[]): Promise<string[]> => {
  const results = await Promise.allSettled(
    imageUrls.map(url => preloadImage(url))
  );
  
  return imageUrls.filter((_, index) => {
    const result = results[index];
    return result.status === 'fulfilled' && result.value === true;
  });
};

// Check if a URL is likely to be problematic
export const isProblematicUrl = (url: string): boolean => {
  // Check for known problematic patterns
  const problematicPatterns = [
    /github\.com.*\.raw.*true/,  // GitHub raw files can be rate limited
    /xforgeassets.*xboxlive\.com.*3b3b3b/, // Known broken Xbox Live assets
    /githubusercontent\.com/, // Can be rate limited
  ];
  
  return problematicPatterns.some(pattern => pattern.test(url));
};
