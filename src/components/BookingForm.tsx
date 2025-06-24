"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

interface FormData {
  // Contact Info
  name: string;
  email: string;
  phone: string;
  
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
  
  // Budget & Extras
  budgetRange: string;
  specialRequests: string;
  firstDance: string;
  
  // Additional Info
  hearAboutUs: string;
  additionalInfo: string;
}

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventTime: "",
    duration: "",
    guestCount: "",
    performanceType: "",
    venue: "",
    venueAddress: "",
    budgetRange: "",
    specialRequests: "",
    firstDance: "",
    hearAboutUs: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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
        phone: "",
        eventType: "",
        eventDate: "",
        eventTime: "",
        duration: "",
        guestCount: "",
        performanceType: "",
        venue: "",
        venueAddress: "",
        budgetRange: "",
        specialRequests: "",
        firstDance: "",
        hearAboutUs: "",
        additionalInfo: ""
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

  const budgetRanges = [
    "Under £500",
    "£500 - £1,000",
    "£1,000 - £2,000",
    "£2,000 - £3,000",
    "£3,000 - £5,000",
    "Over £5,000",
    "Prefer to discuss"
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
              Fill out our booking inquiry form below and we&apos;ll get back to you with availability and a personalized quote within 24 hours. All pricing includes travel costs and any additional fees.
            </p>
          </div>

          {/* Pricing Information */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
            <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-200 mb-4">Travel & Pricing Information</h3>
            <div className="space-y-3 text-blue-800 dark:text-blue-300">
              <p><strong>Travel costs:</strong> £1 per mile for three band members</p>
              <p><strong>London Congestion Zone:</strong> Additional congestion charge (×3 for band members) applies for venues within the zone</p>
              <p><strong>Parking:</strong> Any venue parking costs must be covered by the client</p>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded p-3 mt-4">
                <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                  <strong>Extended Travel:</strong> For venues more than 2 hours drive from London, we usually don&apos;t travel this distance but may make an exception. Additional fees apply - please submit your inquiry for a custom quote.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="+44 7123 456789"
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
                    <option value="trio">Trio (Lead vocals/guitar, bass, drums)</option>
                    <option value="trio-plus-sax">Trio + Sax (4-piece with saxophone)</option>
                    <option value="solo">Solo with Loop Pedal</option>
                    <option value="not-sure">Not sure - please advise</option>
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
                    Venue Location *
                  </label>
                  <input
                    type="text"
                    id="venueAddress"
                    name="venueAddress"
                    required
                    value={formData.venueAddress}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="City, postcode, or full address"
                  />
                </div>
              </div>
            </div>

            {/* Budget & Special Requests */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Budget & Special Requests</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="firstDance" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Dance Song (Weddings)
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
              </div>
              <div className="mt-6">
                <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Special Song Requests or Requirements
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Any specific songs you'd like us to play, or special requirements for your event..."
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
              <div className="mt-6">
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us more about your event, any special requirements, or questions you have..."
                />
              </div>
            </div>

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
                ) : (
                  "Get My Quote"
                )}
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                We&apos;ll respond within 24 hours with availability and pricing
              </p>
            </div>

            {submitStatus === "error" && (
              <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <p className="text-red-700 dark:text-red-300 text-center">
                  Sorry, there was an error sending your inquiry. Please try again or contact us directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}