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



          {/* About Section - Key Info Tiles */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              About The JB Experience
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-8 text-lg">
              London&apos;s premier wedding band and corporate entertainment. Based in East London, serving London, Essex & Hertfordshire. 
              Led by Joe Bateman - BBC Radio featured artist with professional experience at major venues.
            </p>
          </div>
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



          {/* Contact Section - CTA */}
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

          {/* Testimonials Section - Toggle button */}
          <div className="text-center">
            <button
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300"
              onClick={toggleVisibility}
            >
              <span className="flex items-center gap-2">
                {isVisible ? "Hide Testimonials" : "Show Testimonials & More Info"}
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

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
