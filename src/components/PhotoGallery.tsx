"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const galleryImages = [
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

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Photo Gallery
          </h2>
        </div>

        {/* Main Gallery Slider */}
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
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
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
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={galleryImages[selectedImage]}
                alt="The JB Experience performance"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

    </section>
  );
}