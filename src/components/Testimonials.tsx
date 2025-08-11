"use client";

import { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CTAButton from "./CTAButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Review {
  id?: string;
  name: string;
  event: string;
  text: string;
  rating?: number;
}

// Fallback reviews (original data)
const fallbackReviews = [
  {
    name: "Richard C",
    event: "Corporate Event - Hilton, London",
    text: "Joe and the band were a huge hit at our event! I kept hearing fantastic feedback throughout the night about how talented and engaging they were. They brought great energy and professionalism, making the evening truly memorable. Would highly recommend!",
  },
  {
    name: "Fiona E",
    event: "Wedding - London",
    text: "They were fantastic! The music was lively and engaging, and the way they interacted with the crowd made the evening so enjoyable. I got tons of compliments from our guests about how talented the band was, and it really added a special touch to our event. They definitely made the night a highlight for everyone involved.",
  },
  {
    name: "Olivia H",
    event: "Wedding - Surrey",
    text: "Our wedding was unforgettable thanks to Joe and his band! Their setlist perfectly included our favourite songs, and they had a great way of reading the crowd. The band was not only professional but also friendly and approachable. We're so grateful they were part of our special day and can't recommend them enough!",
  },
  {
    name: "Nathan C",
    event: "Private Event - London",
    text: "They did not disappoint! The band was super easy to work with and arrived early, which helped everything run smoothly. They brought so much energy to the night, and everyone kept raving about how great the music was. I was especially impressed when they got my friends—who usually never dance—up on the floor! I highly recommend them for any event!",
  },
  {
    name: "Francesca D",
    event: "Wedding - London",
    text: "We had Joe play at our wedding, and he was amazing! The entire band created a wonderful atmosphere. They were really accommodating with our song requests and kept the dance floor packed all night. We received so many compliments from our guests about how great they were!",
  },
  {
    name: "Felicity B",
    event: "Wedding - London",
    text: "Joe and the band were amazing! We had a very specific style of music we wanted for our wedding, and they absolutely delivered. The band created such a beautiful atmosphere during the day. When the evening hit, they kept the energy high, and the dance floor was packed all night. We couldn't have asked for more!",
  },
  {
    name: "Adam P",
    event: "Private Event - London",
    text: "I hired this band for a recent event, and I was really impressed. They struck the perfect balance between laid-back background music and lively dance tracks. The band played flawlessly, and they were a fantastic choice for our gathering.",
  },
  {
    name: "Michael H",
    event: "Corporate Event - London",
    text: "The band was the highlight of our corporate event. Their versatility shone through as they moved effortlessly between laid-back acoustic numbers and more upbeat tracks. Our guests kept commenting on how much they enjoyed the music. The band was polished, professional, and incredibly easy to work with!",
  },
  {
    name: "Bethany F",
    event: "New Year's Eve Party - London",
    text: "Hired for our New Year's Eve party, and they completely blew us away! The band was super tight, and the performance was unforgettable. It was the perfect way to ring in the new year!",
  },
  {
    name: "Francesca D",
    event: "Company Christmas Party - London",
    text: "We hired Joe and his band for our company's Christmas party, and they really got everyone in the festive spirit! The energy was fantastic, and they nailed a great mix of Christmas classics and crowd favourites. Everyone was up dancing from the moment they started playing, and it really made the night special. Can't recommend them enough!",
  },
  {
    name: "Rebecca C",
    event: "Birthday Party - London",
    text: "Joe's performance was the highlight of the evening at my husband's birthday. The band really brought the party to life, and everyone loved the mix of covers and originals. By the end, the dance floor was packed! The whole experience—the looping, the musicianship—made it extra special.",
  },
  {
    name: "Sarah D",
    event: "Wedding - London",
    text: "Joe Bateman and his band were exceptional at our wedding! The energy was through the roof, and the whole band had the crowd dancing non-stop. We couldn't have asked for a more perfect performance to cap off our day. Highly recommend!",
  },
];

export default function ReviewsSlider() {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('/api/testimonials');
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setReviews(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
        // Keep fallback reviews
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);
  return (
    <>
      {/* Review Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The JB Experience",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": reviews.length,
              "bestRating": "5",
              "worstRating": "5"
            },
            "review": reviews.slice(0, 5).map(review => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": review.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": review.text,
              "datePublished": "2024-01-01"
            }))
          })
        }}
      />
      
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
            Real feedback from weddings, corporate events & parties across London
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ← Swipe or use arrows to see all reviews →
          </p>
        </div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={false}
          grabCursor={true}
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
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
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          autoplay={{ 
            delay: 4000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          className="testimonials-swiper mb-8"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-auto min-h-[280px] flex flex-col">
                <div className="flex-1">
                  <div className="flex mb-4">
                    <span className="text-yellow-400 text-lg">
                      {'★'.repeat(review.rating || 5)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{review.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{review.event}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center space-x-2 mb-6"></div>
        
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="swiper-button-prev-custom w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <span className="text-xl">←</span>
          </button>
          <button className="swiper-button-next-custom w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105">
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* CTA after testimonials */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-indigo-200 dark:border-indigo-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Join Our Happy Clients
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Book direct for personalized service and better communication
            </p>
            <CTAButton 
              variant="outline" 
              size="lg" 
              text="Start Your Quote"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}