"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// List of available images - only include existing files
const AVAILABLE_IMAGES = [
  "/images/Photo Jan 25 2025, 19 48 13.jpg",
  "/images/Photo Jan 25 2025, 19 48 59.jpg",
  "/images/Photo Jan 25 2025, 19 49 20.jpg",
  "/images/Photo Jan 25 2025, 19 49 40.jpg",
  "/images/Photo Jan 25 2025, 19 49 53.jpg",
  "/images/Photo Jan 31 2025, 18 41 16 (1).jpg"
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [availableImages, setAvailableImages] = useState<string[]>([]);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Use the known available images directly for faster loading
    setAvailableImages(AVAILABLE_IMAGES);
    
    // Immediately start preloading the first few images
    AVAILABLE_IMAGES.slice(0, 4).forEach(imagePath => {
      const img = new window.Image();
      img.onload = () => {
        setPreloadedImages(prev => {
          const newSet = new Set(prev);
          newSet.add(imagePath);
          return newSet;
        });
      };
      img.src = imagePath;
    });
  }, []);

  // Preload images for faster lightbox loading
  const preloadImage = (src: string) => {
    if (preloadedImages.has(src)) return;
    
    const img = new window.Image();
    img.onload = () => {
      setPreloadedImages(prev => {
        const newSet = new Set(prev);
        newSet.add(src);
        return newSet;
      });
    };
    img.src = src;
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
    
    // Preload current and adjacent images
    const currentImage = availableImages[index];
    const nextImage = availableImages[index + 1];
    const prevImage = availableImages[index - 1];
    
    preloadImage(currentImage);
    if (nextImage) preloadImage(nextImage);
    if (prevImage) preloadImage(prevImage);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const newIndex = selectedImage === 0 ? availableImages.length - 1 : selectedImage - 1;
    setSelectedImage(newIndex);
    
    // Preload adjacent images
    const nextImage = availableImages[newIndex + 1];
    const prevImage = availableImages[newIndex - 1];
    if (nextImage) preloadImage(nextImage);
    if (prevImage) preloadImage(prevImage);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage === null) return;
    const newIndex = selectedImage === availableImages.length - 1 ? 0 : selectedImage + 1;
    setSelectedImage(newIndex);
    
    // Preload adjacent images
    const nextImage = availableImages[newIndex + 1];
    const prevImage = availableImages[newIndex - 1];
    if (nextImage) preloadImage(nextImage);
    if (prevImage) preloadImage(prevImage);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = selectedImage === 0 ? availableImages.length - 1 : selectedImage - 1;
          setSelectedImage(prevIndex);
          break;
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = selectedImage === availableImages.length - 1 ? 0 : selectedImage + 1;
          setSelectedImage(nextIndex);
          break;
      }
    };

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedImage, availableImages.length]);

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
                    onClick={() => openLightbox(index)}
                  >
                    <div className="aspect-square relative overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={image}
                        alt="The JB Experience performance"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        quality={40}
                        loading="eager"
                        onLoad={() => preloadImage(image)}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH8U7hOKUXKcJN2IRVGCAw5ExmDwWbMa6vl3Zw+GjxnfOslNlMEH5rJCLN7GbSgbF9fgNRXhCFvIpVeCRIXhiYBdCRHOGNzWvOGKkJOWFvlOL9+k6pHg5sYQAJAB3j3yVhQEH3zxoRZxNEhupPnBg8MmVFCLPTKYB9Q6QGxNQgOg7DfCkVGf86VNnlSiUbE5A39dJ1TZA6cjkOCNKk7HGb1W4P8wCLs+OKrxAVFJrPfnMWfGf8KrrpnVR3BUVRA7ZyPDgkG+vNDMnM4kMNDKnDuN/PEKo/9k="
                      />
                      {/* Overlay to indicate clickable */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
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
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Main image container */}
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* The image */}
              <Image
                src={availableImages[selectedImage]}
                alt="The JB Experience performance"
                width={800}
                height={600}
                className="w-full h-full object-contain"
                quality={85}
                priority
                sizes="(max-width: 768px) 95vw, 80vw"
                onLoad={() => preloadImage(availableImages[selectedImage])}
                loading="eager"
              />

              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Previous button */}
              {availableImages.length > 1 && (
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              {/* Next button */}
              {availableImages.length > 1 && (
                <button
                  onClick={goToNext}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}

              {/* Image counter */}
              {availableImages.length > 1 && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {availableImages.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}