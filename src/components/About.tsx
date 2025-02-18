"use client"; // Required for Next.js client components

import { useState } from "react";
import { attributes, react as AboutContent } from "../../content/about.md";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // For toggling extra details

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <section className="py-6 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              {/* Dynamic Title from Markdown */}
              <h2 className="dark:invert text-gray-900 text-2xl font-bold leading-normal lg:text-start text-center">
                {attributes.title}
              </h2>
              {isVisible && (
                <div className="dark:invert text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                  <AboutContent />
                </div>
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

          {/* YouTube Video */}
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/b7RNiZ3eUxc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
