import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import About from "../components/About";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import HostedVideo from "../components/HostedVideo";


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
      <HostedVideo />
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="about">
        <About />
      </section>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4">
        <div id="faq" className="w-full lg:w-1/2">
          <Faq />
        </div>
        <div id="contact" className="w-full lg:w-1/2">
          <Contact />
        </div>
      </div>

      {/* Theme Changer button appears at the bottom-right */}
      <ThemeChanger />
    </div>
  );
}
