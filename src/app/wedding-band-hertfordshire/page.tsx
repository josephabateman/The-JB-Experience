import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wedding Band Hertfordshire | Live Music for Hertfordshire Weddings | The JB Experience",
  description: "Professional wedding band serving all of Hertfordshire. Live music for weddings in St Albans, Watford, Hertford, Stevenage & across Hertfordshire. Book direct from £599!",
  keywords: "wedding band Hertfordshire, wedding music Hertfordshire, live band hire Hertfordshire, Hertfordshire wedding entertainment, wedding musicians Hertfordshire, St Albans wedding band, Watford wedding band, Hertford wedding band, Stevenage wedding band",
  openGraph: {
    title: "Wedding Band Hertfordshire | Live Music for Hertfordshire Weddings",
    description: "Professional wedding band serving all of Hertfordshire. Live music for weddings in St Albans, Watford, Hertford & across Hertfordshire. Book direct - no agency fees!",
  },
};

const HertfordshirePage = () => {
  const hertfordshireVenues = [
    {
      name: "The Grove",
      location: "Watford, Hertfordshire",
      type: "Luxury Hotel & Spa",
      capacity: "300+ guests",
      specialty: "Award-winning venue with multiple event spaces"
    },
    {
      name: "Hanbury Manor",
      location: "Ware, Hertfordshire",
      type: "Country House Hotel",
      capacity: "200+ guests",
      specialty: "Jacobean mansion with golf course"
    },
    {
      name: "Ashridge House",
      location: "Berkhamsted, Hertfordshire",
      type: "Historic Country House",
      capacity: "150+ guests",
      specialty: "Gothic Revival architecture in stunning grounds"
    },
    {
      name: "The Hertfordshire Golf & Country Club",
      location: "Broxbourne, Hertfordshire",
      type: "Golf Club",
      capacity: "120+ guests",
      specialty: "Elegant clubhouse with panoramic views"
    },
    {
      name: "Sopwell House",
      location: "St Albans, Hertfordshire",
      type: "Country House Hotel",
      capacity: "180+ guests",
      specialty: "Georgian country house with spa facilities"
    },
    {
      name: "Tewin Bury Farm Hotel",
      location: "Welwyn, Hertfordshire",
      type: "Boutique Hotel",
      capacity: "100+ guests",
      specialty: "Contemporary style in rural setting"
    }
  ];

  const hertfordshireAreas = [
    "St Albans", "Watford", "Hertford", "Stevenage", "Hemel Hempstead",
    "Welwyn Garden City", "Cheshunt", "Letchworth", "Hitchin", "Borehamwood",
    "Rickmansworth", "Ware", "Bishops Stortford", "Harpenden", "Berkhamsted",
    "Tring", "Royston", "Potters Bar", "Bushey", "Chorleywood"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hertfordshire Wedding Band
            </h1>
            <p className="text-2xl md:text-3xl mb-4 opacity-90">
              Professional Live Music Across Hertfordshire
            </p>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-80">
              From St Albans to Stevenage, Watford to Welwyn - The JB Experience delivers exceptional live music for Hertfordshire weddings and events.
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
                📧 Get Hertfordshire Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hertfordshire Coverage */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hertfordshire Wedding Band Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Based just 30 minutes from Hertfordshire in East London (E10), we provide professional wedding entertainment across all Hertfordshire areas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
            {hertfordshireAreas.map((area) => (
              <div key={area} className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center shadow-sm">
                <span className="text-blue-600 dark:text-blue-400 text-2xl mb-2 block">📍</span>
                <p className="font-semibold text-gray-900 dark:text-white">{area}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              🚗 Hertfordshire Travel Information
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Distance from Base</p>
                <p className="text-gray-600 dark:text-gray-300">15-35 miles from E10</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Average Travel Time</p>
                <p className="text-gray-600 dark:text-gray-300">30-60 minutes</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">Travel Cost</p>
                <p className="text-gray-600 dark:text-gray-300">£15-£35 (£1/mile)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Hertfordshire Venues */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Top Hertfordshire Wedding Venues We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We've had the pleasure of performing at Hertfordshire's most prestigious wedding venues:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hertfordshireVenues.map((venue, index) => (
              <div key={venue.name} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🏛️</span>
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

      {/* Why Choose Us for Hertfordshire */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose The JB Experience for Your Hertfordshire Wedding?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Hertfordshire Specialists</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We know the best routes to avoid M25 traffic, venue acoustics, and setup requirements for Hertfordshire's top wedding locations.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💫</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Premium Entertainment</h3>
              <p className="text-gray-600 dark:text-gray-300">
                BBC Radio featured artists with experience at luxury venues like The Grove and Hanbury Manor.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Best Value Direct Booking</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Save 20-30% by booking directly with us. No agency commission fees - just professional wedding entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Hertfordshire Wedding Band Pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Transparent pricing for Hertfordshire weddings
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Solo Package */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-2xl border border-green-200 dark:border-green-800">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎤</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Solo Performance</h3>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">£599</div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">+ travel (typically £15-35)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Perfect for intimate Hertfordshire venues</p>
                <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                  <li>✅ Live looping technology</li>
                  <li>✅ Acoustic guitar & vocals</li>
                  <li>✅ Custom song requests</li>
                  <li>✅ 2-3 hour performance</li>
                </ul>
              </div>
            </div>

            {/* Full Band Package */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border border-purple-200 dark:border-purple-800">
              <div className="text-center">
                <span className="text-4xl mb-4 block">🎸</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full Band</h3>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">£1,499</div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">+ travel (typically £15-35)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Perfect for larger Hertfordshire celebrations</p>
                <ul className="space-y-3 text-left text-gray-700 dark:text-gray-300">
                  <li>✅ 3-piece band (guitar, bass, drums)</li>
                  <li>✅ Professional PA system</li>
                  <li>✅ Full lighting setup</li>
                  <li>✅ Optional saxophone (+£200)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Hertfordshire Travel Example:</h4>
              <p className="text-gray-600 dark:text-gray-300">
                St Albans: ~£20 | Watford: ~£25 | Stevenage: ~£30 | All prices include VAT
              </p>
            </div>
            <Link
              href="/#inquiry"
              className="inline-flex items-center bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get Your Hertfordshire Quote →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Hertfordshire Wedding Band?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Professional live music for your Hertfordshire wedding or event
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
              📧 Get Hertfordshire Quote
            </Link>
          </div>
          <p className="mt-6 opacity-75">
            Serving St Albans, Watford, Hertford, Stevenage and all Hertfordshire areas
          </p>
        </div>
      </section>
    </div>
  );
};

export default HertfordshirePage;