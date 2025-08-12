import { Navbar } from "@/components/Navbar";
import HostedVideo from "../components/HostedVideo";
import { Faq } from "@/components/Faq";
import Setlist from "../components/Setlist";
import PhotoGallery from "../components/PhotoGallery";
import ThemeChanger from "@/components/ThemeChanger";
import StickyBanner from "@/components/StickyBanner";
import { SectionRenderer } from "@/components/SectionRenderer";

// To change section order, edit /src/config/sections.ts
// Current order: About → Contact → Testimonials → Booking Form

export default function Home() {
  return (
    <div>
      <Navbar />
      
      {/* 1. Hero Video */}
      <HostedVideo />
      
      {/* 2. Main Sections - Order controlled by /src/config/sections.ts */}
      <SectionRenderer />

      {/* 3. Additional Content Sections */}
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
