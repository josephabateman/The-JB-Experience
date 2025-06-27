"use client";

import CTAButton from "./CTAButton";

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Local Wedding Band Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Based in East London, we provide professional wedding entertainment across London, Essex, and Hertfordshire. 
            Our local knowledge means we understand venue requirements and can provide reliable, stress-free service for your special day.
          </p>
        </div>

        {/* Simple coverage statement */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Coverage Area
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We regularly perform at weddings and events throughout <strong>Greater London</strong>, <strong>Essex</strong>, and <strong>Hertfordshire</strong>. 
              Popular areas include Enfield, Hertford, Watford, St. Albans, Chelmsford, and surrounding areas within easy reach of our East London base.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Contact us to confirm availability for your venue location.
            </p>
          </div>
        </div>

        {/* Why choose local */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎵</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Local Expertise</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We know the venues, setup requirements, and local wedding scene.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Reliable Arrival</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Local knowledge means we know the routes and timing for punctual setup.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Service</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Direct booking means better communication and personalized attention.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Book Your Local Wedding Band?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Get in touch to discuss your wedding entertainment needs and check our availability for your date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg" 
                text="Get Your Quote"
              />
              <a
                href="tel:+447939000446"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors"
              >
                📞 Call 07939 000446
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}