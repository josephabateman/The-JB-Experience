# Pricing Configuration Guide

## How to Update All Prices Across the Website

All pricing for The JB Experience website is now centralized in one file for easy management:

**File Location:** `src/config/pricing.ts`

### To Update Prices:

1. Open the file `src/config/pricing.ts`
2. Update the prices in the `PRICING` object
3. Save the file
4. Commit and push changes to deploy

### Price Categories:

#### Main Performance Packages
- `soloPrice`: Solo performance with live loop pedal
- `duoPrice`: Duo performance (vocals/guitar + second instrument)
- `trioPrice`: Full band (vocals/guitar, bass, drums)
- `saxPrice`: Saxophone player add-on

#### Additional Performances
- `ceremonySoloFrom`: Starting price for ceremony solo performance
- `cocktailHourDuoFrom`: Starting price for cocktail hour duo
- `mannedDjSet`: Fixed price for manned DJ set

#### Travel & Additional Costs
- `baseTravelCostPerMile`: Cost per mile for travel
- `additionalPersonTravelCostPerMile`: Extra cost per mile for additional band members
- `congestionChargePerPerson`: London congestion zone charge per person
- `distanceSurcharge2Hours`: Surcharge for 2+ hour journeys
- `distanceSurcharge5Hours`: Surcharge for 5+ hour journeys
- `overnightStayPerPerson`: Overnight accommodation cost per person

#### Corporate Settings
- `corporateMultiplier`: Multiplier for corporate events (not displayed in quotes)

### Components That Use This Pricing:

1. **About.tsx** - Main pricing display and additional performances
2. **BookingForm.tsx** - Quote calculations and dropdown options
3. **Faq.tsx** - FAQ pricing references

### Example Update:

To change the solo price from £599 to £650:

```typescript
export const PRICING = {
  soloPrice: 650, // Changed from 599
  // ... other prices remain the same
}
```

This change will automatically update:
- The About section pricing tiles
- The booking form dropdown options
- The booking form quote calculations
- The FAQ pricing references

### Performance Descriptions:

You can also update the performance descriptions in the same file:
- `PERFORMANCE_DESCRIPTIONS` - Main package descriptions
- `ADDITIONAL_PERFORMANCE_DESCRIPTIONS` - Additional service descriptions