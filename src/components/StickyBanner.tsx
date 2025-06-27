"use client";

import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

export default function StickyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling 30% of viewport height
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      if (scrolled > viewportHeight * 0.3 && !isDismissed) {
        setIsVisible(true);
      } else if (scrolled <= viewportHeight * 0.3) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-slide-up">
      <div className="bg-white dark:bg-gray-800 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700 px-6 py-3 flex items-center space-x-4 max-w-sm mx-auto">
        <div className="flex-1 text-center">
          <p className="text-sm font-medium text-gray-900 dark:text-white">
            Book Direct - Better Service!
          </p>
        </div>
        <CTAButton 
          variant="primary" 
          size="sm" 
          text="Get Quote"
          className="flex-shrink-0"
        />
        <button
          onClick={() => setIsDismissed(true)}
          className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 flex items-center justify-center transition-colors"
          aria-label="Dismiss banner"
        >
          <span className="text-xs text-gray-600 dark:text-gray-300">✕</span>
        </button>
      </div>
    </div>
  );
}