"use client";

import dynamic from "next/dynamic";

// Import the existing Testimonials component
const Testimonials = dynamic(() => import("../Testimonials"), {
  ssr: false,
  loading: () => (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </div>
    </section>
  ),
});

export const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <Testimonials />
    </section>
  );
};