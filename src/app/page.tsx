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
          
          All sections are consistently wrapped here with semantic
          <section> tags and proper IDs for navigation.
          ======================================== */}
      
      {/* 1. About Section - Company info, videos, pricing */}
      <section id="about" role="region" aria-label="About The JB Experience">
        <AboutSection />
      </section>

            {/* Photo Gallery */}
      <section id="gallery" role="region" aria-label="Photo Gallery">
        <PhotoGallery />
      </section>
      
      {/* 2. Contact Section - Phone/email CTA */}
      <section id="contact" role="region" aria-label="Contact Information">
        <ContactSection />
      </section>
      
      {/* 3. Testimonials Section - Client reviews */}
      <section id="testimonials" role="region" aria-label="Client Testimonials">
        <TestimonialsSection />
      </section>
      
      {/* 4. Booking Form Section - Quote calculator */}
      <section id="booking-form" role="region" aria-label="Booking and Quote Form">
        <BookingFormSection />
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
