"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const galleryImages = [
  {
    src: "/images/Photo Jan 25 2025, 19 48 13.jpg",
    alt: "The JB Experience performing live",
    caption: "Live performance at wedding reception"
  },
  {
    src: "/images/Photo Jan 25 2025, 19 48 59.jpg",
    alt: "Band setup and performance",
    caption: "Full band setup in action"
  },
  {
    src: "/images/Photo Jan 25 2025, 19 49 20.jpg",
    alt: "Joe performing with guitar",
    caption: "Joe performing acoustic set"
  },
  {
    src: "/images/Photo Jan 25 2025, 19 49 40.jpg",
    alt: "Band performance",
    caption: "High-energy live show"
  },
  {
    src: "/images/Photo Jan 25 2025, 19 49 53.jpg",
    alt: "Live music performance",
    caption: "Engaging the crowd"
  },
  {
    src: "/images/Photo Jan 31 2025, 18 41 16 (1).jpg",
    alt: "The JB Experience band",
    caption: "Professional band setup"
  },
  {
    src: "/images/Photo Jan 31 2025, 18 41 16.jpg",
    alt: "Band performing live",
    caption: "Creating unforgettable moments"
  },
  {
    src: "/images/band-performing.jpg",
    alt: "Band performance",
    caption: "Professional live entertainment"
  },
  {
    src: "/images/band-profile.jpg",
    alt: "Band profile photo",
    caption: "The JB Experience team"
  }
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Live in Action
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See us perform at weddings, corporate events & private parties
          </p>
        </div>

        {/* Main Gallery Slider */}
        <div className="mb-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            navigation={{
              prevEl: '.gallery-prev',
              nextEl: '.gallery-next',
            }}
            pagination={{ 
              clickable: true,
              bulletClass: 'gallery-bullet',
              bulletActiveClass: 'gallery-bullet-active',
            }}
            autoplay={{ 
              delay: 4000, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-[4/3] relative overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
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
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
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
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-white text-lg font-medium bg-black/50 rounded-lg p-2">
                  {galleryImages[selectedImage].caption}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        .gallery-bullet {
          width: 12px;
          height: 12px;
          background: rgba(156, 163, 175, 0.5);
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s;
        }
        .gallery-bullet-active {
          background: rgb(79, 70, 229);
          transform: scale(1.2);
        }
        .gallery-swiper .swiper-slide {
          transition: all 0.3s;
        }
        .gallery-swiper .swiper-slide:not(.swiper-slide-active) {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
}