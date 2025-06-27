"use client";

import CTAButton from "./CTAButton";

const serviceAreas = [
  {
    region: "Central London",
    areas: ["Islington", "Camden", "Hackney", "Tower Hamlets", "City of London"],
    distance: "5-15 miles",
    icon: "🏙️"
  },
  {
    region: "North London",
    areas: ["Enfield", "Barnet", "Haringey", "Waltham Forest", "Redbridge"],
    distance: "10-25 miles", 
    icon: "🌳"
  },
  {
    region: "Essex",
    areas: ["Chelmsford", "Brentwood", "Epping", "Harlow", "Colchester"],
    distance: "15-40 miles",
    icon: "🌾"
  },
  {
    region: "Hertfordshire", 
    areas: ["Hertford", "Watford", "St. Albans", "Stevenage", "Hemel Hempstead"],
    distance: "20-40 miles",
    icon: "🏘️"
  },
  {
    region: "South Essex",
    areas: ["Basildon", "Southend", "Thurrock", "Castle Point", "Rochford"],
    distance: "25-45 miles",
    icon: "🌊"
  },
  {
    region: "Kent & Surrey",
    areas: ["Dartford", "Sevenoaks", "Bromley", "Croydon", "Kingston"],
    distance: "25-50 miles",
    icon: "🌺"
  }
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Areas We Cover from Our East London Base
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional wedding band services across London, Essex, and Hertfordshire. 
            Local knowledge, reliable service, and transparent pricing with no hidden agency fees!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <div 
              key={area.region}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{area.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {area.region}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {area.distance} from E10
                  </p>
                </div>
              </div>
              
              <div className="space-y-2">
                {area.areas.map((location) => (
                  <span 
                    key={location}
                    className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2"
                  >
                    {location}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Coverage: {area.distance} from base
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Location-specific CTA */}
        <div className="text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your Local Wedding Band
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Based in East London, we know the venues, the routes, and the local wedding scene. 
              Book direct for better service and personal attention compared to agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                variant="primary" 
                size="lg" 
                text="Get Local Quote"
              />
              <a
                href="tel:+447939000446"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 hover:bg-indigo-600 hover:text-white rounded-lg transition-colors"
              >
                📞 Call Local: 07939 000446
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}