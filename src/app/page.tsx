import { Navbar } from "@/components/Navbar";
import HostedVideo from "../components/HostedVideo";
import { Faq } from "@/components/Faq";
import Setlist from "../components/Setlist";
import PhotoGallery from "../components/PhotoGallery";
import ThemeChanger from "@/components/ThemeChanger";
import StickyBanner from "@/components/StickyBanner";

// Import individual section components
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BookingFormSection } from "@/components/sections/BookingFormSection";

// 🔧 To change section order, just move the components around below!
// Current order: About → Contact → Testimonials → Booking Form

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* Hero Video */}
      <HostedVideo />
      
      {/* ========================================
          MAIN SECTIONS - Move these around to reorder!
          ======================================== */}
      
      {/* 1. ABOUT SECTION - Company info, videos, pricing */}
      <AboutSection />
      
      {/* 2. CONTACT SECTION - Phone/email CTA */}
      <ContactSection />
      
      {/* 3. TESTIMONIALS SECTION - Client reviews */}
      <TestimonialsSection />
      
      {/* 4. BOOKING FORM SECTION - Quote calculator */}
      <BookingFormSection />
      
      {/* ========================================
          ADDITIONAL CONTENT SECTIONS
          ======================================== */}

      <section id="gallery">
        <PhotoGallery />
      </section>

      <section id="setlist">
        <Setlist />
      </section>

      <section id="faq">
        <Faq />
      </section>

      {/* Fixed UI Elements */}
      <ThemeChanger />
      <StickyBanner />
    </div>
  );
}
