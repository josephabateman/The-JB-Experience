"use client"; // 👈 Required for Next.js client components

import { useState } from "react";

// Define an interface for your component, if necessary
interface AboutContent {
  title: string;
  body: string;
  imageUrl: string;
}

const aboutContent: AboutContent = {
  title: "The The JB Experience are a high-energy Pop, Rock & Folk Band with coutnless performances for for Weddings, Parties & Events in East London...",
  body: `Based in East London, The JB Experience is a high-energy band known for delivering an unforgettable mix of pop, rock, soul, and funk music. Led by Joe Bateman, a talented multi-instrumentalist, singer-songwriter, and producer, the band provides top-tier live performances that guarantee a packed dance floor at every event.

  Whether you're organizing a wedding, corporate event, birthday party, or private function, The JB Experience brings the perfect energy and atmosphere to your celebration. Their seamless blend of music and personalized performances makes them the ideal choice for events in East London and beyond.

  Joe Bateman’s extensive experience includes performances at the prestigious Isle of Wight Festival, features on BBC Radio London, and millions of Spotify streams. His passion for music and his ability to connect with audiences makes every show a one-of-a-kind experience.

  From laid-back acoustic sets to high-energy dance hits, The JB Experience customizes their setlist to suit your event. Their versatility, professionalism, and reputation for excellence make them the go-to choice for any celebration.

  If you're looking for exceptional live entertainment for your event, book The JB Experience today for a night of unforgettable music that your guests will talk about for years to come.`,
  imageUrl: "/img/band-profile.jpg",
};

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // State for visibility toggle

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <section className="py-6 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="dark:invert text-gray-900 text-2xl font-bold leading-normal lg:text-start text-center">
                {aboutContent.title}
              </h2>
              {isVisible && (
                <p className="dark:invert text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                  {aboutContent.body}
                </p>
              )}
            </div>
            <button 
              className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex"
              onClick={toggleVisibility}
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                {isVisible ? "Hide Details" : "Read More"}
              </span>
            </button>
          </div>
          <img 
  className="lg:mx-0 mx-auto h-auto max-h-96 rounded-3xl object-cover" 
  src={aboutContent.imageUrl} 
  alt="About Us" 
/>

        </div>
      </div>
    </section>
  );
};

export default About;
