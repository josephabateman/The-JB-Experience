"use client";

import { useState } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <section className="py-6 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        {/* Dynamic grid layout */}
        <div
          className={`w-full justify-start items-center gap-8 grid ${
            isVisible ? "grid-cols-1" : "lg:grid-cols-2 grid-cols-1"
          }`}
        >
          {/* Text content */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="dark:invert text-gray-900 text-2xl font-bold leading-normal lg:text-start text-center">
                The JB Experience - High-Energy Pop, Rock & Folk Band for Weddings & Events in London
              </h2>
              <h3 className="dark:invert text-gray-900 font-bold leading-normal lg:text-start text-center">
                Full band starting at £1199
              </h3>
              <h3 className="dark:invert text-gray-900 font-bold leading-normal lg:text-start text-center">
                Solo with stomp box and looper pedal: £425
              </h3>
              {isVisible && (
                <div className="dark:invert text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
                  <p>
                    Based in East London, The JB Experience is a high-energy band known for delivering an unforgettable mix of pop, rock, soul, and funk music.<br /><br />
                    Led by Joe Bateman, a talented multi-instrumentalist, singer-songwriter, and producer, the band provides top-tier live performances that guarantee a packed dance floor at every event.
                  </p>
                  <p>
                    Whether you&apos;re organising a wedding, corporate event, birthday party, or private function, The JB Experience brings the perfect energy and atmosphere to your celebration.<br /><br />
                    Their seamless blend of music and personalized performances makes them the ideal choice for events in East London and beyond.
                  </p>
                  <p>
                    Joe Bateman&apos;s extensive experience includes performances at the prestigious Isle of Wight Festival, features on BBC Radio London, and millions of Spotify streams.<br /><br />
                    His passion for music and his ability to connect with audiences makes every show a one-of-a-kind experience.
                  </p>
                  <p>
                    From laid-back acoustic sets to high-energy dance hits, The JB Experience customizes their setlist to suit your event.<br /><br />
                    Their versatility, professionalism, and reputation for excellence make them the go-to choice for any celebration.
                  </p>
                  <p>
                    If you&apos;re looking for exceptional live entertainment for your event, book The JB Experience today for a night of unforgettable music that your guests will talk about for years to come.
                  </p>
                </div>
              )}
            </div>
            {/* Toggle button */}
            <button
              className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-md justify-center items-center flex"
              onClick={toggleVisibility}
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                {isVisible ? "Hide Details" : "Read More"}
              </span>
            </button>
          </div>

          {/* Video 1 */}
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/b7RNiZ3eUxc"
              title="The JB Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/OVvikoc0chk"
              title="Joe Bateman at Ealing Broadway"
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
