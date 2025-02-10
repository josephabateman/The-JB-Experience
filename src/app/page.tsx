import { Navbar } from "@/components/Navbar"; // Ensure this path is correct
import About from "../components/About"; // Correct import for default export
import { Faq } from "@/components/Faq"; // Ensure this path is correct
import { Contact } from "@/components/Contact"; // Ensure this path is correct
import Youtube from "../components/Youtube"; // Correct path
import Testimonials from "../components/Testimonials"; // Correct path

export default function Home() {
  return (
    <div>
      <Navbar />
      <Youtube />
      
      <section id="about">
        <About />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto px-4">
        <div id="faq" className="w-full lg:w-1/2">
          <Faq />
        </div>
        <div id="contact" className="w-full lg:w-1/2">
          <Contact />
        </div>
      </div>
    </div>
  );
}
