"use client";

import CTAButton from "./CTAButton";
import HostedVideo from "./HostedVideo";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <HostedVideo />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          London&apos;s Premier Live Music for{" "}
          <span className="text-indigo-400">Weddings</span> &{" "}
          <span className="text-indigo-400">Corporate Events</span>
        </h1>
        
        {/* Book Direct Banner */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full px-8 py-3 mb-8 inline-block text-xl font-bold shadow-lg">
          📞 Book Direct &amp; Save 30%
        </div>
        
        {/* Supporting Text */}
        <p className="text-xl sm:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto font-light">
          Professional entertainment for weddings, corporate events, and private celebrations across London, Essex, and Hertfordshire
        </p>
        
        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">💒</div>
            <h3 className="font-semibold mb-1">Weddings</h3>
            <p className="text-sm opacity-90">From £599</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">🏢</div>
            <h3 className="font-semibold mb-1">Corporate Events</h3>
            <p className="text-sm opacity-90">Custom Quoted</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-semibold mb-1">Private Parties</h3>
            <p className="text-sm opacity-90">All Occasions</p>
          </div>
        </div>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton 
            variant="primary" 
            size="lg" 
            text="Check Availability & Pricing"
            className="text-lg px-8 py-4 shadow-2xl hover:scale-105 transition-all"
          />
          <a 
            href="tel:+447939000446" 
            className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all text-lg shadow-xl"
          >
            📞 Call 07939 000446
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-sm opacity-75 mb-4">
            ⭐ 5-Star Reviews • Based in East London (E10) • No Agency Fees
          </p>
          <div className="flex justify-center items-center gap-8 text-sm opacity-60">
            <span>🎸 Professional Musicians</span>
            <span>🎵 All Equipment Included</span>
            <span>💝 First Dance Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;