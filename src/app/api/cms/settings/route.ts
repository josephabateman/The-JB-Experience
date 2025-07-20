import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { SiteSettings } from '@/lib/cms-types';

// GET /api/cms/settings - Get site settings
export async function GET(request: NextRequest) {
  try {
    const settings = await cmsStorage.findById<SiteSettings>('settings', 'site-settings');
    
    // Return default settings if none exist
    const defaultSettings: SiteSettings = {
      id: 'site-settings',
      businessName: 'The JB Experience',
      tagline: 'London Wedding & Event Band',
      description: 'Professional live music for weddings, corporate events & parties across London',
      email: 'joebatemanofficial@gmail.com',
      phone: '07939 000446',
      baseLocation: 'E10 5ZD',
      baseLat: 51.5693,
      baseLng: -0.0146,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: settings || defaultSettings,
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch settings' },
      { status: 500 }
    );
  }
}

// PUT /api/cms/settings - Update site settings
export async function PUT(request: NextRequest) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      // Check if settings exist
      const existing = await cmsStorage.findById<SiteSettings>('settings', 'site-settings');
      
      const settingsData = {
        businessName: data.businessName,
        tagline: data.tagline,
        description: data.description,
        email: data.email,
        phone: data.phone,
        baseLocation: data.baseLocation,
        baseLat: data.baseLat,
        baseLng: data.baseLng,
      };

      let result: SiteSettings;

      if (existing) {
        // Update existing settings
        const updated = await cmsStorage.update<SiteSettings>('settings', 'site-settings', settingsData);
        result = updated!;
      } else {
        // Create new settings
        const newSettings: Omit<SiteSettings, 'updatedAt'> = {
          id: 'site-settings',
          ...settingsData,
        };
        result = await cmsStorage.create<SiteSettings>('settings', newSettings);
      }

      return NextResponse.json({
        success: true,
        data: result,
        message: 'Settings updated successfully',
      });
    } catch (error) {
      console.error('Error updating settings:', error);
      return NextResponse.json(
        { error: 'Failed to update settings' },
        { status: 500 }
      );
    }
  })(request);
}