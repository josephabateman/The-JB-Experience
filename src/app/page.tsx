import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import About from "../components/About";
import { Faq } from "@/components/Faq";
import BookingForm from "../components/BookingForm";
import HostedVideo from "../components/HostedVideo";
import Setlist from "../components/Setlist";
import PhotoGallery from "../components/PhotoGallery";
import ServiceAreas from "../components/ServiceAreas";


// Dynamically import the Testimonials component with better loading
const Testimonials = dynamic(() => import("../components/Testimonials"), {
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

import ThemeChanger from "@/components/ThemeChanger";
import StickyBanner from "@/components/StickyBanner";

export default function Home() {
  return (
    <div>
      <Navbar />
      {/* 1. Hero Video - Immediate Impact & Credibility */}
      <HostedVideo />
      
      {/* 2. Social Proof - Build Trust Early */}
      <section id="testimonials">
        <Testimonials />
      </section>
      
      {/* 3. Service Overview & Pricing - Clear Value Proposition */}
      <section id="about">
        <About />
      </section>

      {/* 4. Photo Gallery - Visual Proof of Performance Quality */}
      <section id="gallery">
        <PhotoGallery />
      </section>

      {/* 5. Detailed Information - For Interested Prospects */}
      <section id="setlist">
        <Setlist />
      </section>

      <section id="faq">
        <Faq />
      </section>

      {/* 6. Service Areas - Local SEO */}
      <ServiceAreas />

      {/* 7. Final Conversion - Booking Form */}
      <BookingForm />

      {/* Theme Changer button appears at the bottom-right */}
      <ThemeChanger />
      
      {/* Sticky CTA Banner */}
      <StickyBanner />
    </div>
  );
}
