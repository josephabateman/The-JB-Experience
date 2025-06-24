"use client";

import { useState } from "react";
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
                <p>• Performance fee: Based on your selected package</p>
                <p>• Travel costs: £1 per mile (calculated from venue postcode)</p>
                <p>• London Congestion Zone: £15 × 3 band members (if applicable)</p>
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
                    <option value="trio">Trio (Lead vocals/guitar, bass, drums)</option>
                    <option value="trio-plus-sax">Trio + Sax (4-piece with saxophone)</option>
                    <option value="solo">Solo with Loop Pedal</option>
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
                <div className="space-y-2 text-green-700 dark:text-green-300">
                  <div className="flex justify-between">
                    <span>Performance Package ({formData.performanceType}):</span>
                    <span className="font-medium">From £XXX</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Travel costs (calculated from {formData.venueAddress}):</span>
                    <span className="font-medium">£XXX</span>
                  </div>
                  {formData.venueAddress.toLowerCase().includes('london') && (
                    <div className="flex justify-between">
                      <span>Congestion Zone (if applicable):</span>
                      <span className="font-medium">£45</span>
                    </div>
                  )}
                  <hr className="border-green-300 dark:border-green-700" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Estimated Total:</span>
                    <span>£XXX+</span>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    *Parking costs additional. Final quote subject to availability confirmation.
                  </p>
                </div>
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