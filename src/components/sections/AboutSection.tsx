"use client";

import { PRICING } from "@/config/pricing";

export const AboutSection = () => {
  return (
    <section id="about" className="py-8 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            About The JB Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-8 text-lg">
            London&apos;s premier wedding band and corporate entertainment. Based in East London, serving London, Essex & Hertfordshire. 
            Led by Joe Bateman - BBC Radio featured artist with professional experience at major venues.
          </p>
          
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
        </div>
      </div>
    </section>
  );
};