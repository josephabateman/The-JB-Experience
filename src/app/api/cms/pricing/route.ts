import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { PricingSettings } from '@/lib/cms-types';

// GET /api/cms/pricing - Get pricing settings
export async function GET(request: NextRequest) {
  try {
    const pricing = await cmsStorage.findById<PricingSettings>('pricing', 'pricing-settings');
    
    // Return default pricing if none exist
    const defaultPricing: PricingSettings = {
      id: 'pricing-settings',
      soloPrice: 1200,
      trioPrice: 1800,
      saxPrice: 300,
      travelRate: 0.45,
      congestionCharge: 15,
      weekendSurcharge: 20,
      holidaySurcharge: 50,
      freeRadius: 25,
      maxDistance: 150,
      baseTravelCostPerMile: 0.45,
      additionalPersonTravelCostPerMile: 0.33,
      distanceSurcharge2Hours: 300,
      distanceSurcharge5Hours: 600,
      congestionChargePerPerson: 15,
      distanceThreshold2Hours: 2,
      distanceThreshold5Hours: 5,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: pricing || defaultPricing,
    });
  } catch (error) {
    console.error('Error fetching pricing:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pricing' },
      { status: 500 }
    );
  }
}

// POST /api/cms/pricing - Create/Update pricing settings
export async function POST(request: NextRequest) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      // Check if pricing exists
      const existing = await cmsStorage.findById<PricingSettings>('pricing', 'pricing-settings');
      
      const pricingData = {
        soloPrice: Number(data.soloPrice),
        trioPrice: Number(data.trioPrice),
        saxPrice: Number(data.saxPrice),
        travelRate: Number(data.travelRate),
        congestionCharge: Number(data.congestionCharge),
        weekendSurcharge: Number(data.weekendSurcharge),
        holidaySurcharge: Number(data.holidaySurcharge),
        freeRadius: Number(data.freeRadius),
        maxDistance: Number(data.maxDistance),
        // Keep existing fields for backward compatibility
        baseTravelCostPerMile: Number(data.travelRate || data.baseTravelCostPerMile || 0.45),
        additionalPersonTravelCostPerMile: Number(data.additionalPersonTravelCostPerMile || 0.33),
        distanceSurcharge2Hours: Number(data.distanceSurcharge2Hours || 300),
        distanceSurcharge5Hours: Number(data.distanceSurcharge5Hours || 600),
        congestionChargePerPerson: Number(data.congestionCharge || data.congestionChargePerPerson || 15),
        distanceThreshold2Hours: Number(data.distanceThreshold2Hours || 2),
        distanceThreshold5Hours: Number(data.distanceThreshold5Hours || 5),
      };

      let result: PricingSettings;

      if (existing) {
        // Update existing pricing
        const updated = await cmsStorage.update<PricingSettings>('pricing', 'pricing-settings', pricingData);
        result = updated!;
      } else {
        // Create new pricing
        const newPricing: Omit<PricingSettings, 'updatedAt'> = {
          id: 'pricing-settings',
          ...pricingData,
        };
        result = await cmsStorage.create<PricingSettings>('pricing', newPricing);
      }

      return NextResponse.json({
        success: true,
        data: result,
        message: 'Pricing updated successfully',
      });
    } catch (error) {
      console.error('Error updating pricing:', error);
      return NextResponse.json(
        { error: 'Failed to update pricing' },
        { status: 500 }
      );
    }
  })(request);
}

// PUT /api/cms/pricing - Update pricing settings (alias for POST)
export async function PUT(request: NextRequest) {
  return POST(request);
}