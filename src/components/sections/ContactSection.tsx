"use client";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-8 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="bg-indigo-600 text-white p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Book?</h3>
          <p className="text-lg mb-6 opacity-90">Limited availability - secure your date today!</p>
          <div className="space-y-4">
            <p className="flex items-center justify-center gap-2">
              <span>📍</span>
              <span>London | UK & International Bookings</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+447939000446" 
                className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                📞 Call +44 7939 000446
              </a>
              <a 
                href="#booking-form" 
                className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                📧 Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};