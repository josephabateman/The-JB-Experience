"use client";

import { useState } from "react";
import Image from "next/image";

const NewAbout: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/images/band-performing.jpg",
    "/images/band-profile.jpg", 
    "/images/Photo Jan 25 2025, 19 48 13.jpg",
    "/images/Photo Jan 25 2025, 19 48 59.jpg",
    "/images/Photo Jan 25 2025, 19 49 20.jpg",
    "/images/Photo Jan 25 2025, 19 49 40.jpg",
    "/images/Photo Jan 25 2025, 19 49 53.jpg",
    "/images/Photo Jan 31 2025, 18 41 16 (1).jpg",
    "/images/Photo Jan 31 2025, 18 41 16.jpg",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            The JB Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            High-Energy Pop, Rock, Folk & Funk Band for Weddings, Parties & Events
          </p>
          <div className="flex items-center justify-center space-x-2 text-purple-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-lg">Based in East London | Available UK-wide</span>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Solo Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎤</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Solo Performance</h3>
                <p className="text-gray-300 mb-6">Perfect for intimate events</p>
                <div className="text-4xl font-bold text-white mb-2">£499</div>
                <p className="text-sm text-gray-400 mb-6">Starting price, before travel costs</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Live looping with stompbox
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Acoustic guitar & vocals
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom song requests
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Band Package */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎸</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Full Band</h3>
                <p className="text-gray-300 mb-6">High-energy live entertainment</p>
                <div className="text-4xl font-bold text-white mb-2">£1,199</div>
                <p className="text-sm text-gray-400 mb-6">Starting price, before travel costs</p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Guitar, Bass, Drums, Vocals
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional sound system
                  </div>
                  <div className="flex items-center text-gray-300">
                    <svg className="w-5 h-5 text-purple-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Optional saxophone player (+£200)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium Experience</h3>
            <p className="text-gray-300">Performed at Isle of Wight Festival, BBC Radio London, millions of Spotify streams</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Versatile Setlists</h3>
            <p className="text-gray-300">From acoustic ballads to high-energy dance hits - tailored to your event</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
            <p className="text-gray-300">Hundreds of weddings, corporate events. Clients include Hilton Hotels & Financial Times</p>
          </div>
        </div>

        {/* Photo Gallery - Horizontal Swipe */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            <span className="mr-3">📸</span>See Us In Action
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src={images[currentImageIndex]}
                alt={`The JB Experience Photo ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              {/* Image Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Thumbnail Strip - Mobile Swipe */}
            <div className="flex overflow-x-auto space-x-4 mt-4 pb-2 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                    index === currentImageIndex ? 'ring-2 ring-white scale-105' : 'opacity-70'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Setlist */}
        {isVisible && (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              <span className="mr-3">🎵</span>Our Setlist Highlights
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm max-h-64 overflow-y-auto">
              {[
                "I'm A Believer", "Budapest", "Shotgun", "Fast Car", "Cake By The Ocean", "Valerie",
                "Castle On The Hill", "Get Lucky", "Happy", "Shape Of You", "Hey Jude", "Shut Up And Dance",
                "Sex On Fire", "Wonderwall", "Locked Out Of Heaven", "Don't Look Back In Anger",
                "Superstition", "Thinking Out Loud", "Uptown Funk", "Use Somebody", "Mr Brightside",
                "Don't Stop Me Now", "Your Song", "Sweet Caroline", "Rolling In The Deep", "Yellow"
              ].map((song, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-2 text-gray-300 text-center hover:bg-white/10 transition-colors">
                  {song}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-4">+ 20 more songs & custom requests welcome!</p>
          </div>
        )}

        {/* Show More Button */}
        <div className="text-center mb-16">
          <button
            onClick={toggleVisibility}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {isVisible ? "Hide Setlist" : "View Our Setlist"}
            <svg className={`ml-2 w-5 h-5 inline transition-transform duration-300 ${isVisible ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Book?</h2>
            <p className="text-xl text-gray-200 mb-8">Get your personalized quote with travel costs included</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+447939000446"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="mr-2">📞</span>
                Call: +447939000446
              </a>
              <a
                href="#inquiry"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <span className="mr-2">📧</span>
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;