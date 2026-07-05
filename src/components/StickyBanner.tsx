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
    <div className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 transform animate-slide-up">
      <div className="flex items-center gap-3 rounded-full border border-neutral-200 bg-white/95 px-5 py-3 shadow-2xl backdrop-blur dark:border-neutral-700 dark:bg-ink-800/95">
        <div className="flex-1">
          <p className="text-sm font-semibold text-ink-900 dark:text-white">
            Check your date &amp; price
          </p>
        </div>
        <CTAButton variant="primary" size="sm" text="Get a quote" className="flex-shrink-0" />
        <button
          onClick={() => setIsDismissed(true)}
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 transition-colors hover:bg-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-500"
          aria-label="Dismiss banner"
        >
          <span className="text-xs text-neutral-600 dark:text-neutral-300">✕</span>
        </button>
      </div>
    </div>
  );
}