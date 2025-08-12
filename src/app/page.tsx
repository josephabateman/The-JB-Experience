import type { FC } from 'react';

// Core UI Components
import { Navbar } from '@/components/Navbar';
import { Faq } from '@/components/Faq';
import ThemeChanger from '@/components/ThemeChanger';
import StickyBanner from '@/components/StickyBanner';

// Content Components  
import HostedVideo from '@/components/HostedVideo';
import Setlist from '@/components/Setlist';
import PhotoGallery from '@/components/PhotoGallery';

// Page Section Components
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BookingFormSection } from '@/components/sections/BookingFormSection';

/**
 * Home Page Component
 * 
 * 🔧 Section Ordering:
 * To change the order of sections, simply cut and paste the section components
 * in the "MAIN SECTIONS" area below.
 * 
 * Current order: About → Contact → Testimonials → Booking Form
 */
const HomePage: FC = () => {
  return (
    <>
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <HostedVideo />
      
      {/* ========================================
          MAIN SECTIONS - Move these around to reorder!
          ======================================== */}
      
      {/* 1. About Section - Company info, videos, pricing */}
      <AboutSection />
      
      {/* 2. Contact Section - Phone/email CTA */}
      <ContactSection />
      
      {/* 3. Testimonials Section - Client reviews */}
      <TestimonialsSection />
      
      {/* 4. Booking Form Section - Quote calculator */}
      <BookingFormSection />
      
      {/* ========================================
          ADDITIONAL CONTENT SECTIONS
          ======================================== */}

      {/* Photo Gallery */}
      <section id="gallery" role="region" aria-label="Photo Gallery">
        <PhotoGallery />
      </section>

      {/* Setlist */}
      <section id="setlist" role="region" aria-label="Musical Setlist">
        <Setlist />
      </section>

      {/* FAQ */}  
      <section id="faq" role="region" aria-label="Frequently Asked Questions">
        <Faq />
      </section>

      {/* ========================================
          FIXED UI ELEMENTS
          ======================================== */}
      
      {/* Theme Toggle */}
      <ThemeChanger />
      
      {/* Sticky CTA Banner */}
      <StickyBanner />
    </>
  );
};

export default HomePage;
