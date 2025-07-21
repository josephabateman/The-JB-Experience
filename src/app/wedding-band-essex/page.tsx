import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Wedding Band Essex | Live Music for Essex Weddings | The JB Experience",
  description: "Professional wedding band serving all of Essex. Live music for weddings in Chelmsford, Colchester, Southend, Brentwood & across Essex. Book direct from £599 - no agency fees!",
  keywords: "wedding band Essex, wedding music Essex, live band hire Essex, Essex wedding entertainment, wedding musicians Essex, Chelmsford wedding band, Colchester wedding band, Southend wedding band, Brentwood wedding band",
  openGraph: {
    title: "Wedding Band Essex | Live Music for Essex Weddings | The JB Experience",
    description: "Professional wedding band serving all of Essex. Live music for weddings in Chelmsford, Colchester, Southend, Brentwood & across Essex. Book direct - no agency fees!",
  },
};

const EssexPage = () => {
  const essexVenues = [
    {
      name: "Gaynes Park",
      location: "Epping, Essex",
      type: "Historic Country House",
      capacity: "150+ guests",
      specialty: "Georgian mansion with stunning gardens"
    },
    {
      name: "Down Hall Country House Hotel",
      location: "Hatfield Heath, Essex", 
      type: "Luxury Hotel",
      capacity: "200+ guests",
      specialty: "Elegant ballroom and spa facilities"
    },
    {
      name: "Prested Hall",
      location: "Colchester, Essex",
      type: "Tudor Manor House",
      capacity: "120+ guests", 
      specialty: "Historic charm with modern amenities"
    },
    {
      name: "The Lion Inn",
      location: "Boreham, Essex",
      type: "Country Pub Venue",
      capacity: "80+ guests",
      specialty: "Intimate celebrations with character"
    },
    {
      name: "Channels Estate",
      location: "Little Waltham, Essex",
      type: "Golf Club & Events",
      capacity: "150+ guests",
      specialty: "Beautiful countryside views"
    },
    {
      name: "Pontlands Park",
      location: "Great Baddow, Essex",
      type: "Country House Hotel",
      capacity: "100+ guests",
      specialty: "Picturesque gardens and lake"
    }
  ];

  const essexAreas = [
    "Chelmsford", "Colchester", "Southend-on-Sea", "Basildon", "Harlow",
    "Brentwood", "West Ham", "Canvey Island", "Grays", "Billericay",
    "Wickford", "Loughton", "Clacton-on-Sea", "Chigwell", "Epping",
    "Saffron Walden", "Halstead", "Maldon", "Witham", "Braintree"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Essex Wedding Band
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-90">
              Professional Live Music Across Essex
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-80">
              From Chelmsford to Colchester, Southend to Saffron Walden - The JB Experience brings high-energy live music to Essex weddings, corporate events, and celebrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+447939000446"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                📞 Call +44 7939 000446
              </Link>
              <Link
                href="/#inquiry"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                📧 Get Essex Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Essex Coverage */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Essex Wedding Band Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Based in East London (E10), we provide professional wedding entertainment across all of Essex, typically within a 40-mile radius.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {essexAreas.map((area) => (
              <div key={area} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
                <span className="text-green-600 dark:text-green-400 text-2xl mb-2 block">📍</span>
                <p className="font-semibold text-gray-900 dark:text-white">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              🚗 Essex Travel Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Base Location</p>
                <p className="text-gray-600 dark:text-gray-300">East London (E10 5ZD)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Travel Costs</p>
                <p className="text-gray-600 dark:text-gray-300">£1 per mile from base</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Coverage Radius</p>
                <p className="text-gray-600 dark:text-gray-300">40+ miles across Essex</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Essex Venues */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Essex Wedding Venues We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;ve performed at many of Essex&apos;s most beautiful wedding venues. Here are some favorites:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {essexVenues.map((venue, index) => (
              <div key={venue.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🏰</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{venue.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{venue.location}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Type:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{venue.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Capacity:</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{venue.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{venue.specialty}</p>
                  
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      href="/#inquiry"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold"
                    >
                      Get Quote for {venue.name} →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Essex Wedding Band Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transparent pricing with no hidden agency fees
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solo Package */}
            <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎤</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solo Performance</h3>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-4">£599</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">+ travel costs</p>
                <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                  <li>✅ Live looping with stompbox technology</li>
                  <li>✅ Acoustic guitar & vocals</li>
                  <li>✅ Custom song requests</li>
                  <li>✅ Perfect for intimate Essex venues</li>
                </ul>
              </div>
            </div>

            {/* Full Band Package */}
            <div className="bg-purple-50 dark:bg-purple-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎸</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full Band</h3>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-4">£1,499</div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">+ travel costs</p>
                <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                  <li>✅ Guitar, Bass, Drums, Vocals</li>
                  <li>✅ Professional sound system</li>
                  <li>✅ Full lighting setup</li>
                  <li>✅ Optional saxophone (+£200)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Travel calculated at £1 per mile from E10. All prices include VAT.
            </p>
            <Link
              href="/#inquiry"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Your Essex Wedding Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose The JB Experience for Your Essex Wedding?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎵</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Local Essex Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We know Essex venues inside out. From Gaynes Park&apos;s acoustics to Down Hall&apos;s layout, we arrive prepared.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Book Direct &amp; Save</h3>
              <p className="text-gray-600 dark:text-gray-300">
                No agency fees! Save up to 30% compared to booking through wedding band agencies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hundreds of successful Essex weddings, BBC Radio features, and corporate clients including Hilton Hotels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Essex Wedding Band?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get your personalized quote for wedding entertainment anywhere in Essex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+447939000446"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call +44 7939 000446
            </Link>
            <Link
              href="/#inquiry"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
            >
              📧 Get Essex Quote
            </Link>
          </div>
          <p className="mt-6 opacity-75">
            Serving Chelmsford, Colchester, Southend, Brentwood and all Essex areas
          </p>
        </div>
      </section>
    </div>
  );
};

export default EssexPage;