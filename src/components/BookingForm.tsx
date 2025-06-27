"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/Container";

interface FormData {
  // Contact Info
  name: string;
  email: string;
  
  // Event Details
  eventType: string;
  eventDate: string;
  eventTime: string;
  duration: string;
  guestCount: string;
  
  // Performance Details
  performanceType: string;
  venue: string;
  venueAddress: string;
  
  // Special Requests
  firstDance: string;
  additionalNotes: string;
  
  // Additional Info
  hearAboutUs: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    duration: "",
    guestCount: "",
    performanceType: "",
    venue: "",
    venueAddress: "",
    firstDance: "",
    additionalNotes: "",
    hearAboutUs: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Calculate distance between two points using Haversine formula
  const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 3959; // Earth's radius in miles
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  // State for distance calculation
  const [distanceData, setDistanceData] = useState<{
    miles: number;
    hours: number;
    isCalculating: boolean;
    error?: string;
  } | null>(null);

  // Postcode distance lookup for common areas (fallback)
  const getDistanceFromPostcode = (address: string): { miles: number; hours: number } | null => {
    const upperAddress = address.toUpperCase();
    
    // Common postcode prefixes and approximate distances from E10 5ZD
    const postcodeDistances: { [key: string]: { miles: number; hours: number } } = {
      'BD': { miles: 200, hours: 4.0 }, // Bradford
      'LS': { miles: 190, hours: 3.8 }, // Leeds  
      'YO': { miles: 220, hours: 4.2 }, // York
      'M': { miles: 200, hours: 4.0 },  // Manchester
      'B': { miles: 120, hours: 2.5 },  // Birmingham
      'CV': { miles: 100, hours: 2.0 }, // Coventry
      'OX': { miles: 60, hours: 1.5 },  // Oxford
      'RG': { miles: 40, hours: 1.0 },  // Reading
      'SL': { miles: 25, hours: 0.8 },  // Slough
      'AL': { miles: 25, hours: 0.8 },  // St Albans
      'WD': { miles: 20, hours: 0.7 },  // Watford
      'HP': { miles: 30, hours: 1.0 },  // Hemel Hempstead
      'SG': { miles: 25, hours: 0.8 },  // Stevenage
      'CM': { miles: 30, hours: 1.0 },  // Chelmsford
      'SS': { miles: 35, hours: 1.2 },  // Southend
      'CO': { miles: 50, hours: 1.5 },  // Colchester
      'IP': { miles: 70, hours: 1.8 },  // Ipswich
      'NR': { miles: 110, hours: 2.5 }, // Norwich
      'CB': { miles: 55, hours: 1.5 },  // Cambridge
      'PE': { miles: 90, hours: 2.0 },  // Peterborough
      'NN': { miles: 70, hours: 1.8 },  // Northampton
      'MK': { miles: 50, hours: 1.3 },  // Milton Keynes
      'LU': { miles: 30, hours: 1.0 },  // Luton
      'SN': { miles: 80, hours: 2.0 },  // Swindon
      'BA': { miles: 110, hours: 2.5 }, // Bath
      'BS': { miles: 120, hours: 2.5 }, // Bristol
      'GL': { miles: 100, hours: 2.3 }, // Gloucester
      'HR': { miles: 130, hours: 2.8 }, // Hereford
      'WR': { miles: 110, hours: 2.5 }, // Worcester
      'DY': { miles: 120, hours: 2.5 }, // Dudley
      'WV': { miles: 130, hours: 2.7 }, // Wolverhampton
      'ST': { miles: 150, hours: 3.0 }, // Stoke
      'DE': { miles: 130, hours: 2.7 }, // Derby
      'NG': { miles: 120, hours: 2.5 }, // Nottingham
      'LE': { miles: 100, hours: 2.2 }, // Leicester
      'LN': { miles: 130, hours: 2.8 }, // Lincoln
      'DN': { miles: 160, hours: 3.2 }, // Doncaster
      'S': { miles: 160, hours: 3.2 },  // Sheffield
      'HD': { miles: 180, hours: 3.6 }, // Huddersfield
      'HX': { miles: 190, hours: 3.8 }, // Halifax
      'OL': { miles: 200, hours: 4.0 }, // Oldham
      'SK': { miles: 180, hours: 3.6 }, // Stockport
      'WA': { miles: 190, hours: 3.8 }, // Warrington
      'CW': { miles: 170, hours: 3.4 }, // Crewe
      'TF': { miles: 140, hours: 2.8 }, // Telford
      'SY': { miles: 150, hours: 3.0 }, // Shrewsbury
      'LD': { miles: 180, hours: 3.8 }, // Llandrindod Wells
      'NP': { miles: 140, hours: 2.8 }, // Newport
      'CF': { miles: 150, hours: 3.0 }, // Cardiff
      'SA': { miles: 200, hours: 4.2 }, // Swansea
    };
    
    for (const [prefix, distance] of Object.entries(postcodeDistances)) {
      if (upperAddress.includes(prefix)) {
        return distance;
      }
    }
    
    return null;
  };

  // Calculate distance when venue address changes
  useEffect(() => {
    if (!formData.venueAddress || formData.venueAddress.length < 3) {
      setDistanceData(null);
      return;
    }

    const calculateDistanceFromVenue = async () => {
      setDistanceData(prev => ({ ...prev, isCalculating: true, error: undefined } as any));
      
      try {
        // E10 5ZD coordinates (our base)
        const baseLatLng = { lat: 51.5693, lng: -0.0146 };
        
        // Geocode the venue address using Nominatim (free service)
        const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(formData.venueAddress)}&countrycodes=gb&limit=1`;
        
        const response = await fetch(geocodeUrl, {
          headers: {
            'User-Agent': 'The-JB-Experience-Website/1.0'
          }
        });
        
        if (!response.ok) {
          throw new Error(`Geocoding failed: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Geocoding result for', formData.venueAddress, ':', data);
        
        if (data && data.length > 0) {
          const venueLat = parseFloat(data[0].lat);
          const venueLng = parseFloat(data[0].lon);
          
          const miles = calculateDistance(baseLatLng.lat, baseLatLng.lng, venueLat, venueLng);
          
          // Estimate driving time (accounting for different road types)
          let estimatedHours;
          if (miles <= 20) {
            estimatedHours = miles / 15; // City driving
          } else if (miles <= 50) {
            estimatedHours = (20 / 15) + ((miles - 20) / 35); // Mix of city and motorway
          } else {
            estimatedHours = (20 / 15) + (30 / 35) + ((miles - 50) / 50); // Mostly motorway
          }
          
          setDistanceData({
            miles: Math.round(miles),
            hours: Math.round(estimatedHours * 10) / 10,
            isCalculating: false
          });
        } else {
          // Try postcode lookup fallback
          const postcodeDistance = getDistanceFromPostcode(formData.venueAddress);
          if (postcodeDistance) {
            setDistanceData({
              miles: postcodeDistance.miles,
              hours: postcodeDistance.hours,
              isCalculating: false,
              error: 'Using postcode area estimate'
            });
          } else {
            setDistanceData({
              miles: 25, // Default fallback
              hours: 1.5,
              isCalculating: false,
              error: 'Could not calculate exact distance - using default estimate'
            });
          }
        }
      } catch (error) {
        console.error('Distance calculation error:', error);
        // Try postcode lookup fallback
        const postcodeDistance = getDistanceFromPostcode(formData.venueAddress);
        if (postcodeDistance) {
          setDistanceData({
            miles: postcodeDistance.miles,
            hours: postcodeDistance.hours,
            isCalculating: false,
            error: 'Using postcode area estimate (geocoding failed)'
          });
        } else {
          setDistanceData({
            miles: 25, // Default fallback
            hours: 1.5,
            isCalculating: false,
            error: 'Could not calculate exact distance - using default estimate'
          });
        }
      }
    };

    // Debounce the API call
    const timeoutId = setTimeout(calculateDistanceFromVenue, 1000);
    return () => clearTimeout(timeoutId);
  }, [formData.venueAddress]);

  // Calculate quote based on form data and real distance
  const calculateQuote = () => {
    if (!formData.performanceType || !distanceData) return null;

    // Base prices
    const basePrices = {
      'solo': 499,
      'trio': 1199,
      'trio-plus-sax': 1199 + 300, // Add £300 for sax player
      'not-sure': 1199
    };

    const basePrice = basePrices[formData.performanceType as keyof typeof basePrices] || 0;
    const { miles, hours } = distanceData;
    
    // Travel costs
    let travelCost = miles * 1; // £1 per mile for 3 band members
    if (formData.performanceType === 'trio-plus-sax') {
      travelCost += miles * 0.33; // Additional 33p per mile for 4th person
    }

    // Time-based surcharges
    let timeSurcharge = 0;
    let timeNote = '';
    if (hours > 5) {
      timeSurcharge = 600;
      timeNote = 'Accommodation may need to be provided for journeys over 5 hours.';
    } else if (hours > 2) {
      timeSurcharge = 300;
      timeNote = 'We usually don\'t travel over 2 hours from East London but may make exceptions - please inquire for details.';
    }

    // Congestion charge (approximate - based on London postal codes and areas)
    let congestionCharge = 0;
    const address = formData.venueAddress.toLowerCase();
    const londonCentralAreas = [
      'central london', 'city of london', 'westminster', 'ec1', 'ec2', 'ec3', 'ec4',
      'wc1', 'wc2', 'sw1', 'w1', 'covent garden', 'shoreditch', 'bank', 'liverpool street'
    ];
    
    if (londonCentralAreas.some(area => address.includes(area))) {
      const numPeople = formData.performanceType === 'trio-plus-sax' ? 4 : 3;
      congestionCharge = 15 * numPeople;
    }

    const totalCost = basePrice + travelCost + timeSurcharge + congestionCharge;

    return {
      basePrice,
      estimatedMiles: miles,
      estimatedHours: hours,
      travelCost: Math.round(travelCost),
      timeSurcharge,
      timeNote,
      congestionCharge,
      totalCost: Math.round(totalCost),
      hasSax: formData.performanceType === 'trio-plus-sax',
      distanceError: distanceData.error
    };
  };

  const quote = calculateQuote();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send to your backend or email service
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        eventType: "",
        eventDate: "",
        eventTime: "",
        duration: "",
        guestCount: "",
        performanceType: "",
        venue: "",
        venueAddress: "",
        firstDance: "",
        additionalNotes: "",
        hearAboutUs: ""
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const eventTypes = [
    "Wedding",
    "Corporate Event",
    "Private Party",
    "Birthday Party",
    "Anniversary",
    "Engagement Party",
    "Holiday Party",
    "Charity Event",
    "Other"
  ];


  const guestCounts = [
    "Under 25",
    "25-50",
    "50-100",
    "100-150",
    "150-250",
    "250+",
    "Not sure yet"
  ];

  const durations = [
    "3 x 40 minute sets",
    "2 x 1 hour sets"
  ];

  if (submitStatus === "success") {
    return (
      <section id="contact" className="py-16 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                Quote Request Received!
              </h3>
              <p className="text-green-700 dark:text-green-300 mb-6">
                We&apos;ve received your quote request and will get back to you within 24 hours with availability and detailed pricing including all travel costs.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Request Another Quote
              </button>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fill out our booking inquiry form below and get an instant estimate! We&apos;ll also get back to you with availability confirmation within 24 hours.
            </p>
          </div>

          {/* Instant Quote Calculator */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-4">✨ Get Your Instant Quote</h3>
            <p className="text-blue-800 dark:text-blue-300 mb-4">
              Fill out the form below and see your estimated total cost automatically calculated including all travel expenses and fees!
            </p>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <p>• Solo performance: £499 | Trio: £1,199 | Trio + Sax: £1,499</p>
                <p>• Travel costs: £1 per mile (+33p per mile if sax player)</p>
                <p>• London Congestion Zone: £15 per band member (if applicable)</p>
                <p>• Distance surcharge: £300 (2+ hours) | £600 (5+ hours)</p>
                <p>• Parking costs: As required by venue (client responsibility)</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
            </div>

            {/* Event Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="eventTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Start Time
                  </label>
                  <input
                    type="time"
                    id="eventTime"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Performance Duration
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select duration</option>
                    {durations.map(duration => (
                      <option key={duration} value={duration}>{duration}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expected Guest Count
                  </label>
                  <select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select guest count</option>
                    {guestCounts.map(count => (
                      <option key={count} value={count}>{count}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="performanceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Performance Type
                  </label>
                  <select
                    id="performanceType"
                    name="performanceType"
                    value={formData.performanceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select performance type</option>
                    <option value="trio">Trio - £1,199 (Lead vocals/guitar, bass, drums)</option>
                    <option value="trio-plus-sax">Trio + Sax - £1,499 (4-piece with saxophone)</option>
                    <option value="solo">Solo - £499 (Solo with Loop Pedal)</option>
                    <option value="not-sure">Not sure - please advise in your inquiry</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Venue Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Venue Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="venue" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Venue Name
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Hotel, restaurant, private home, etc."
                  />
                </div>
                <div>
                  <label htmlFor="venueAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Venue Location * <span className="text-xs text-gray-500">(for accurate distance calculation)</span>
                  </label>
                  <input
                    type="text"
                    id="venueAddress"
                    name="venueAddress"
                    required
                    value={formData.venueAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="e.g. 'Hertford, Hertfordshire' or 'SW1A 1AA' or 'The Savoy Hotel, London'"
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Include city/area for best results. More specific = more accurate quote.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Special Requests</h3>
              
              {/* First Dance - Only show for weddings */}
              {formData.eventType === "Wedding" && (
                <div className="mb-6">
                  <label htmlFor="firstDance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Dance Song
                  </label>
                  <input
                    type="text"
                    id="firstDance"
                    name="firstDance"
                    value={formData.firstDance}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Song title and artist"
                  />
                </div>
              )}

              {/* Additional Notes */}
              <div>
                <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Notes or Questions
                </label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  rows={4}
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Any special song requests, venue requirements, questions about the performance, or other details about your event..."
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Additional Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select source</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Friend/Family Referral</option>
                    <option value="venue">Venue Recommendation</option>
                    <option value="previous-event">Saw you at another event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Quote Display */}
            {formData.performanceType && formData.venueAddress && (
              <div className="mb-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4">📋 Your Estimated Quote</h4>
                
                {distanceData?.isCalculating ? (
                  <div className="flex items-center space-x-3 text-green-700 dark:text-green-300">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-700"></div>
                    <span>Calculating distance from E10 5ZD to your venue...</span>
                  </div>
                ) : quote ? (
                  <div className="space-y-2 text-green-700 dark:text-green-300">
                    <div className="flex justify-between">
                      <span>Performance Package ({formData.performanceType}{quote.hasSax ? ' + Sax' : ''}):</span>
                      <span className="font-medium">£{quote.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Travel costs ({quote.estimatedMiles} miles from E10):</span>
                      <span className="font-medium">£{quote.travelCost}</span>
                    </div>
                    {quote.hasSax && (
                      <div className="flex justify-between text-sm">
                        <span className="ml-4">• Includes extra travel for 4th band member (33p/mile)</span>
                        <span></span>
                      </div>
                    )}
                    {quote.congestionCharge > 0 && (
                      <div className="flex justify-between">
                        <span>London Congestion Zone:</span>
                        <span className="font-medium">£{quote.congestionCharge}</span>
                      </div>
                    )}
                    {quote.timeSurcharge > 0 && (
                      <div className="flex justify-between">
                        <span>Distance surcharge ({quote.estimatedHours}h journey):</span>
                        <span className="font-medium">£{quote.timeSurcharge}</span>
                      </div>
                    )}
                    <hr className="border-green-300 dark:border-green-700" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Estimated Total:</span>
                      <span>£{quote.totalCost}</span>
                    </div>
                    <div className="text-sm text-green-600 dark:text-green-400 mt-3 space-y-1">
                      <p>• Parking costs additional (client responsibility)</p>
                      <p>• Final quote subject to availability confirmation</p>
                      {quote.distanceError && (
                        <p className="text-orange-600 dark:text-orange-400 font-medium">
                          ⚠️ {quote.distanceError} - Please contact us for accurate pricing.
                        </p>
                      )}
                      {quote.timeNote && (
                        <p className="text-amber-600 dark:text-amber-400 font-medium">
                          ⚠️ {quote.timeNote}
                        </p>
                      )}
                    </div>
                    
                    {/* Quick Submit CTA */}
                    <div className="mt-6 pt-4 border-t border-green-300 dark:border-green-700">
                      <div className="text-center">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                          {isSubmitting ? 'Sending...' : 'Submit Inquiry for This Quote →'}
                        </button>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-2">
                          We&apos;ll confirm availability within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-green-700 dark:text-green-300">
                    <p>Enter a venue location to see your quote calculation...</p>
                  </div>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors min-w-[200px]"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : quote ? (
                  "Submit Complete Inquiry"
                ) : (
                  "Get My Quote"
                )}
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                We&apos;ll respond within 24 hours with availability confirmation
              </p>
            </div>

            {submitStatus === "error" && (
              <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-700 dark:text-red-300 text-center">
                  Sorry, there was an error sending your inquiry. Please try again or contact us directly for assistance.
                </p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}