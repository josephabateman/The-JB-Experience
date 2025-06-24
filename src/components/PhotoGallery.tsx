"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // List of potential images - add/remove from here as needed
  const potentialImages = [
    "/images/Photo Jan 25 2025, 19 48 13.jpg",
    "/images/Photo Jan 25 2025, 19 48 59.jpg",
    "/images/Photo Jan 25 2025, 19 49 20.jpg",
    "/images/Photo Jan 25 2025, 19 49 40.jpg",
    "/images/Photo Jan 25 2025, 19 49 53.jpg",
    "/images/Photo Jan 31 2025, 18 41 16 (1).jpg",
    "/images/Photo Jan 31 2025, 18 41 16.jpg",
    "/images/band-performing.jpg",
    "/images/band-profile.jpg"
  ];

  useEffect(() => {
    // Check which images actually exist by trying to load them
    const checkImages = async () => {
      const existingImages: string[] = [];
      
      for (const imagePath of potentialImages) {
        try {
          const response = await fetch(imagePath, { method: 'HEAD' });
          if (response.ok) {
            existingImages.push(imagePath);
          }
        } catch {
          // Image doesn't exist, skip it
        }
      }
      
      setAvailableImages(existingImages);
    };

    checkImages();
  }, []);

  const handleImageLoad = (imagePath: string) => {
    setLoadedImages(prev => new Set([...prev, imagePath]));
  };

  const handleImageError = (imagePath: string) => {
    // Remove failed image from available images
    setAvailableImages(prev => prev.filter(img => img !== imagePath));
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
        </div>

        {/* Main Gallery Slider */}
        {availableImages.length > 0 && (
          <div className="mb-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              navigation={{
                prevEl: '.gallery-prev',
                nextEl: '.gallery-next',
              }}
              pagination={{ 
                clickable: true,
              }}
              autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false,
              }}
              className="gallery-swiper"
            >
              {availableImages.map((image, index) => (
                <SwiperSlide key={image}>
                  <div 
                    className="relative group cursor-pointer"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image}
                        alt="The JB Experience performance"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        quality={75}
                        loading={index < 4 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH8U7hOKUXKcJN2IRVGCAw5ExmDwWbMa6vl3Zw+GjxnfOslNlMEH5rJCLN7GbSgbF9fgNRXhCFvIpVeCRIXhiYBdCRHOGNzWvOGKkJOWFvlOL9+k6pHg5sYQAJAB3j3yVhQEH3zxoRZxNEhupPnBg8MmVFCLPTKYB9Q6QGxNQgOg7DfCkVGf86VNnlSiUbE5A39dJ1TZA6cjkOCNKk7HGb1W4P8wCLs+OKrxAVFJrPfnMWfGf8KrrpnVR3BUVRA7ZyPDgkG+vNDMnM4kMNDKnDuN/PEKo/9k="
                        onLoad={() => handleImageLoad(image)}
                        onError={() => handleImageError(image)}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation */}
            <div className="flex justify-center mt-8 space-x-4">
              <button className="gallery-prev w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-600 transition-colors">
                <span className="text-xl">←</span>
              </button>
              <button className="gallery-next w-12 h-12 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-full flex items-center justify-center shadow-lg border border-gray-200 dark:border-gray-600 transition-colors">
                <span className="text-xl">→</span>
              </button>
            </div>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && availableImages[selectedImage] && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={availableImages[selectedImage]}
                alt="The JB Experience performance"
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                quality={85}
                priority
                sizes="90vw"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
              
              {/* Navigation arrows in lightbox */}
              {availableImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === null ? 0 : (prev - 1 + availableImages.length) % availableImages.length
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setSelectedImage(prev => 
                      prev === null ? 0 : (prev + 1) % availableImages.length
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}