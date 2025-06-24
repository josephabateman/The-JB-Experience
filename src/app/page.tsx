import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import About from "../components/About";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import HostedVideo from "../components/HostedVideo";
import Setlist from "../components/Setlist";
import PhotoGallery from "../components/PhotoGallery";


// Dynamically import the Testimonials (or ReviewsSlider) component
const Testimonials = dynamic(() => import("../components/Testimonials"), {
  ssr: false,
  loading: () => <p>Loading testimonials...</p>,
});

import ThemeChanger from "@/components/ThemeChanger";

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

      {/* 5. Final Conversion - Contact Form */}
      <section id="contact" className="max-w-6xl mx-auto px-4">
        <Contact />
      </section>

      {/* Theme Changer button appears at the bottom-right */}
      <ThemeChanger />
    </div>
  );
}
