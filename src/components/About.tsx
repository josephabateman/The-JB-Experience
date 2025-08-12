"use client";

import { useState } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";
import { PRICING, PERFORMANCE_DESCRIPTIONS, ADDITIONAL_PERFORMANCE_DESCRIPTIONS } from "../config/pricing";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <section className="py-8 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        {/* Main content area */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center lg:text-left space-y-3">
            <h2 className="dark:invert text-gray-900 text-3xl font-bold">
              The JB Experience
            </h2>
            <p className="dark:invert text-gray-600 text-lg">
              Wedding Band & Corporate Entertainment • London, Essex & Hertfordshire
            </p>
          </div>

          {/* Pricing Tiles with Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎸🥁🎤</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Band</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">£{PRICING.trioPrice.toLocaleString()}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{PERFORMANCE_DESCRIPTIONS.trio}</p>
              
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/b7RNiZ3eUxc"
                  title="The JB Experience - Full Band Performance"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-xl border border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎸🪕</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Duo</h3>
              </div>
              <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">£{PRICING.duoPrice.toLocaleString()}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{PERFORMANCE_DESCRIPTIONS.duo}</p>
              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/images/joe-cristian-ceremony.jpg"
                  alt="The JB Experience - Duo Performance at Wedding Ceremony"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized
                  priority
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
                  <div className="text-center text-white">
                    <div className="text-3xl mb-2">🎥</div>
                    <p className="text-sm font-medium">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎤</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solo Performance</h3>
              </div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">£{PRICING.soloPrice.toLocaleString()}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{PERFORMANCE_DESCRIPTIONS.solo}</p>
              
              <div className="relative w-full aspect-video">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/OVvikoc0chk"
                  title="Joe Bateman Solo Performance with Live Looping"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>



          {/* Key Info Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">💒</div>
              <p className="font-semibold text-gray-900 dark:text-white">London Weddings</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Venues across E10, Essex, Hertfordshire</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">🏢</div>
              <p className="font-semibold text-gray-900 dark:text-white">Corporate Events</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Hilton Hotels, Central London venues</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-2xl mb-2">📻</div>
              <p className="font-semibold text-gray-900 dark:text-white">Media Features</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">BBC Radio, Featured artist</p>
            </div>
          </div>

          {/* About the band - Enhanced Visual Design */}
          <div className="relative bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl border border-indigo-100 dark:border-gray-700 shadow-lg overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="music-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#music-pattern)"/>
                </svg>
              </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              {/* Hero Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full mb-6 mx-auto block w-fit">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Book Direct & Save 30%
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center leading-tight">
                London&apos;s <span className="text-indigo-600 dark:text-indigo-400">Premier Live Music</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">for Weddings & Corporate Events</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Location */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">East London Based</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Serving London, Essex & Hertfordshire</p>
                </div>

                {/* Experience */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">BBC Radio Featured</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Professional & experienced</p>
                </div>

                {/* Pricing */}
                <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">From £{PRICING.soloPrice}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Solo to full band options</p>
                </div>
              </div>

              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl mb-6">
                <p className="text-gray-700 dark:text-gray-300 text-center text-lg mb-4 leading-relaxed">
                  Led by <strong className="text-indigo-600 dark:text-indigo-400">Joe Bateman</strong>, we deliver high-energy performances across pop, rock, folk, and funk genres. Choose from intimate acoustic solo with live loop pedal <span className="font-semibold">(from £{PRICING.soloPrice})</span>, duo performance <span className="font-semibold">(from £{PRICING.duoPrice.toLocaleString()})</span>, or full three-piece band <span className="font-semibold">(from £{PRICING.trioPrice.toLocaleString()})</span>.
                </p>
                <div className="flex items-center justify-center text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  No agency fees • Direct communication • Professional service
                </div>
              </div>

              <div className="text-center">
                <CTAButton 
                  variant="primary" 
                  size="lg" 
                  text="Get Your Quote"
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>


          {/* Toggle button */}
          <div className="text-center">
            <button
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
              onClick={toggleVisibility}
            >
              <span className="flex items-center gap-2">
                {isVisible ? "Show Less" : "Learn More"}
                <span className="text-sm">{isVisible ? "↑" : "↓"}</span>
              </span>
            </button>
          </div>

          {isVisible && (
            <div className="space-y-8">
              {/* Why Choose Us - Tiles */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">Why Choose Us</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
                    <div className="text-xl mb-2">🎸</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Professional Musicians</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Experienced, reliable performers</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800 text-center">
                    <div className="text-xl mb-2">🎉</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Dance Floor Guaranteed</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">We know how to get people moving</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800 text-center">
                    <div className="text-xl mb-2">⚡</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Stress-Free Booking</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Professional setup & communication</p>
                  </div>
                </div>
              </div>

              {/* What's Included - Tiles */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">What&apos;s Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-xl mb-2">🎸</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Full Band Setup</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Professional sound & lighting</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-xl mb-2">🎤</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Live Looping</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Innovative stomp box tech</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
                    <div className="text-xl mb-2">💝</div>
                    <p className="font-semibold text-gray-900 dark:text-white">Special Requests</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">First dance & favorites</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
                <p className="text-lg mb-6 opacity-90">Limited availability - secure your date today!</p>
                <div className="space-y-4">
                  <p className="flex items-center justify-center gap-2">
                    <span>📍</span>
                    <span>London | UK & International Bookings</span>
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+447939000446" className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      📞 Call +44 7939 000446
                    </a>
                    <a href="#contact" className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                      📧 Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
