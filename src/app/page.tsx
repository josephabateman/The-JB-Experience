import type { FC } from 'react';

// Core UI Components
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
 * Section order: Hero → About → Gallery → Reviews → Contact CTA → Booking Form → Setlist → FAQ
 * The <Navbar> and <Footer> are rendered globally in layout.tsx.
 */
const HomePage: FC = () => {
  return (
    <>
      {/* Hero Section (video background + headline + CTA) */}
      <HostedVideo />

      {/* 1. About — company info, package videos, pricing */}
      <section id="about" role="region" aria-label="About The JB Experience">
        <AboutSection />
      </section>

      {/* 2. Photo Gallery */}
      <section id="gallery" role="region" aria-label="Photo Gallery">
        <PhotoGallery />
      </section>

      {/* 3. Testimonials — client reviews */}
      <section id="testimonials" role="region" aria-label="Client Testimonials">
        <TestimonialsSection />
      </section>

      {/* 4. Contact CTA — phone/email */}
      <section id="contact" role="region" aria-label="Contact Information">
        <ContactSection />
      </section>

      {/* 5. Booking Form — quote calculator */}
      <section id="booking-form" role="region" aria-label="Booking and Quote Form">
        <BookingFormSection />
      </section>

      {/* 6. Setlist */}
      <section id="setlist" role="region" aria-label="Musical Setlist">
        <Setlist />
      </section>

      {/* 7. FAQ */}
      <section id="faq" role="region" aria-label="Frequently Asked Questions">
        <Faq />
      </section>

      {/* Fixed UI elements */}
      <ThemeChanger />
      <StickyBanner />
    </>
  );
};

export default HomePage;
