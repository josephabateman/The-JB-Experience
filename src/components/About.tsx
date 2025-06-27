"use client";

import { useState } from "react";
import CTAButton from "./CTAButton";

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
            <h1 className="dark:invert text-gray-900 text-3xl font-bold">
              The JB Experience
            </h1>
            <p className="dark:invert text-gray-600 text-lg">
              Professional Live Music • London & UK
            </p>
          </div>

          {/* Pricing Tiles with Videos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎸🥁🎤</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Full Band</h3>
              </div>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                £1,199 <span className="text-sm font-normal text-gray-500">+ travel expenses</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Three piece: lead vocals & guitar, bass, drums. Sax player available for additional fee.</p>
              
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
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎤</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Solo Performance</h3>
              </div>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                £499 <span className="text-sm font-normal text-gray-500">+ travel expenses</span>
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Solo performance using live loop pedal</p>
              
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

          {/* About the band - SEO optimized */}
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              London&apos;s Premier Wedding Band - Book Direct & Save
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
              Based in <strong>East London (E10)</strong>, <strong>The JB Experience</strong> is a professional wedding band serving London, Essex, and Hertfordshire within a 40-mile radius. We deliver high-energy live music performances across pop, rock, folk, and funk genres - perfect for weddings, corporate events, and private celebrations.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
              <strong>Why book direct with us instead of agencies?</strong> Save up to 30% by booking directly - no agency commission fees! You get the same professional wedding band entertainment at a better price, with direct communication for your special requests.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
              Led by <strong>Joe Bateman</strong>, a talented multi-instrumentalist and producer with extensive experience performing for high-profile clients including BBC Radio features and corporate events for major London venues. 
              Whether you need an intimate acoustic solo performance with live loop pedal (from £499) or a full three-piece band experience (from £1,199), we tailor every performance to your event.
            </p>
            <div className="text-center">
              <CTAButton 
                variant="primary" 
                size="lg" 
                text="Get Your Free Quote Now"
                className="animate-pulse"
              />
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
