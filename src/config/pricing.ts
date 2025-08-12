// Centralized pricing configuration for The JB Experience
// Update all prices here and they will reflect across the entire site

export const PRICING = {
  // Main Performance Packages
  soloPrice: 599,
  duoPrice: 1095,
  trioPrice: 1499, // Full Band
  saxPrice: 300, // Sax player add-on

  // Additional Performances
  ceremonySoloFrom: 199,
  cocktailHourDuoFrom: 299,
  mannedDjSet: 129,

  // Travel & Additional Costs
  baseTravelCostPerMile: 1.0,
  additionalPersonTravelCostPerMile: 0.33,
  congestionChargePerPerson: 15,
  
  // Distance Surcharges
  distanceSurcharge2Hours: 300,
  distanceSurcharge5Hours: 600,
  
  // Time Thresholds (hours)
  distanceThreshold2Hours: 2,
  distanceThreshold5Hours: 5,
  distanceThreshold3Point5Hours: 3.5,
  
  // Overnight Accommodation
  overnightStayPerPerson: 250,
  
  // Corporate Multiplier (not displayed in quotes)
  corporateMultiplier: 1.3,
} as const;

// Performance package descriptions
export const PERFORMANCE_DESCRIPTIONS = {
  solo: "2x1 hour OR 3x40 min sets with live loop pedal technology",
  duo: "2x1 hour OR 3x40 min sets - vocals/guitar with second instrument (guitar, cello, or cajon)",
  trio: "2x1 hour OR 3x40 min sets - lead vocals & guitar, bass, drums. Sax player available for additional fee",
} as const;

// Additional performance descriptions
export const ADDITIONAL_PERFORMANCE_DESCRIPTIONS = {
  ceremonySolo: "Custom quote required",
  cocktailHourDuo: "Custom quote required", 
  mannedDjSet: "1 hour Spotify playlist with requests after band performance",
} as const;

export default PRICING;