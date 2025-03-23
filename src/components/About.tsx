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
  <h1 className="dark:invert text-gray-900 text-2xl font-bold leading-normal lg:text-start text-center">
    The JB Experience &ndash; High-Energy Pop, Rock, Folk & Funk Band for Weddings, Parties & Events in London &amp; the UK
  </h1>
  <h2 className="dark:invert text-gray-900 font-bold leading-normal lg:text-start text-center">
    Full Band Starting at &pound;1199 &ndash; High-Energy Live Entertainment
  </h2>
  <h2 className="dark:invert text-gray-900 font-bold leading-normal lg:text-start text-center">
    Solo Performance with Stomp Box and Looper Pedal: &pound;425 &ndash; Perfect for Intimate Events
  </h2>
  <p>
        Based in East London, <strong>The JB Experience</strong> is a dynamic, high-energy band renowned for delivering an unforgettable mix of <strong>pop, rock, folk, and funk music</strong>. Whether you&apos;re planning a wedding, corporate event, birthday party, or private function, we bring the perfect blend of music and energy to create a lively and unforgettable atmosphere.
      </p>
      <p>
        Led by Joe Bateman, a talented multi-instrumentalist, singer-songwriter, and producer, The JB Experience guarantees top-tier live performances that will get your guests dancing all night long. Joe&apos;s extensive experience includes performances for high-profile weddings and companies such as Hilton Hotels and The Financial Times. He has performed at the prestigious Isle of Wight Festival, had features on BBC Radio London, and racked up millions of Spotify streams. His passion for music and ability to connect with audiences ensures every show is a one-of-a-kind experience.
      </p>
      <p>
        Whether you&apos;re hosting an intimate gathering or a large celebration, The JB Experience tailors each performance to suit your event. From <strong>laid-back acoustic sets</strong> for a relaxed vibe to <strong>high-energy dance hits</strong> for an epic party, our band is versatile and professional, making us the ideal choice for any celebration in London and beyond.
      </p>
  {isVisible && (
    <div className="dark:invert text-gray-700 text-base font-normal leading-relaxed lg:text-start text-center">
    <p>
      Our customisable setlists and professional approach make The JB Experience the go-to live band for your wedding, corporate event, birthday party, or any private function. With our ability to personalise performances and bring unique energy to your event, we are the band that will ensure your celebration is talked about for years to come.
    </p>
    <p>
      Looking for exceptional live entertainment for your event? <strong>Book The JB Experience</strong> today to enjoy high-energy, unforgettable music that will leave your guests raving. With a reputation for excellence, we are the trusted choice for weddings, parties, and events across London and the UK.
    </p>
  
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
      <div className="cta text-center why-choose">
        <h2 className="text-xl font-bold text-gray-900 text-center my-4">Why Choose The JB Experience?</h2>
        <ul className="pl-6 text-gray-700">
          <li><strong>✅ Versatile Band Options:</strong> From a dynamic full band (&pound;1199) to an intimate solo performance with looping (&pound;425).</li>
          <li><strong>✅ Experienced Musicians:</strong> We&apos;ve performed at hundreds of weddings, parties, and corporate events across the UK.</li>
          <li><strong>✅ Custom Setlists:</strong> Dance-floor anthems, acoustic ballads, and everything in between&mdash;tailored to your event.</li>
        </ul>
      </div>
  
      <div className="cta text-center what-we-offer">
        <h2 className="text-xl font-bold text-gray-900 text-center my-4">What We Offer:</h2>
        <ul className="pl-6 text-gray-700">
          <li><strong>🎸 Full Live Band:</strong> A high-energy experience with guitar, bass, drums, and vocals.</li>
          <li><strong>🎤 Solo Act with Live Looping:</strong> A unique performance featuring stompbox, loop pedal, and acoustic guitar.</li>
          <li><strong>🎶 First Dance & Special Requests:</strong> Tell us your favorite songs, and we&apos;ll make it magical.</li>
        </ul>
      </div>
    </div>
  
    <div className="cta text-center client-reviews mt-6">
      <h2 className="text-xl font-bold text-gray-900 text-center my-4">Client Reviews:</h2>
      <div className="reviews text-gray-700">
        <p><strong>⭐️⭐️⭐️⭐️⭐️</strong> &ldquo;The JB Experience made our wedding unforgettable! The energy, the setlist&mdash;everything was perfect!&rdquo; &ndash; Sarah &amp; James</p>
        <p><strong>⭐️⭐️⭐️⭐️⭐️</strong> &ldquo;Professional, talented, and an absolute joy to work with. Highly recommend for any event!&rdquo; &ndash; Emily R.</p>
      </div>
    </div>
  
    <div className="cta text-center my-6">
      <h2 className="text-xl font-bold text-gray-900">Book Now &ndash; Limited Availability!</h2>
      <p>We book up fast&mdash;secure your date today! Get in touch for a free quote and availability check.</p>
      <p><strong>📍 Based in London | Available for UK &amp; International Bookings</strong></p>
      <p>📞 Contact Us: <a href="tel:+447939000446" className="text-blue-500 hover:text-blue-700">+447939000446</a></p>
      <p>📧 Email: <a href="#contact" className="text-blue-500 hover:text-blue-700">Contact Us</a></p>
    </div>
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
