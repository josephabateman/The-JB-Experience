import { Navbar } from "@/components/Navbar";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import Youtube from "../components/Youtube";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
<div>
   <Navbar />
   <Youtube />
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
