// src/utils/videoHelper.ts
export const getVideoSource = (): string => {
    const connection = navigator.connection;
    if (connection && connection.effectiveType) {
      const type = connection.effectiveType;
      if (type === 'slow-2g' || type === '2g') {
        return 'videos/video-low.mp4'; // Lower-quality video for slow connections
      } else if (type === '3g') {
        return 'videos/video-medium.mp4'; // Medium-quality video
      } else if (type === '4g') {
        return 'videos/video-high.mp4'; // High-quality video for fast connections
      }
    }
    // Fallback if connection info isn't available
    return 'videos/video-medium.mp4';
  };
  