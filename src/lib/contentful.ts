import { createClient } from 'contentful';

// Contentful configuration
const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '',
});

// Content types interface
export interface ContentfulTestimonial {
  fields: {
    name: string;
    event: string;
    text: string;
    rating: number;
    featured: boolean;
    active: boolean;
    displayOrder: number;
    image?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
  sys: {
    id: string;
  };
}

export interface ContentfulPricing {
  fields: {
    title: string;
    soloPrice: number; // £599
    trioPrice: number; // £1499
    saxPrice: number;
    travelRate: number;
    congestionCharge: number;
    weekendSurcharge: number;
    holidaySurcharge: number;
    freeRadius: number;
    maxDistance: number;
  };
}

export interface ContentfulSiteSettings {
  fields: {
    businessName: string;
    tagline: string;
    description: string;
    email: string;
    phone: string;
    baseLocation: string;
    logo?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    heroImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  };
}

// Fetch functions
export const contentfulFetch = {
  // Get all testimonials
  async getTestimonials(): Promise<ContentfulTestimonial[]> {
    try {
      const response = await client.getEntries({
        content_type: 'testimonial',
        'fields.active': true,
        order: 'fields.displayOrder,fields.name',
      });
      return response.items as ContentfulTestimonial[];
    } catch (error) {
      console.error('Error fetching testimonials from Contentful:', error);
      return [];
    }
  },

  // Get pricing settings
  async getPricingSettings(): Promise<ContentfulPricing | null> {
    try {
      const response = await client.getEntries({
        content_type: 'pricingSettings',
        limit: 1,
      });
      return response.items[0] as ContentfulPricing || null;
    } catch (error) {
      console.error('Error fetching pricing from Contentful:', error);
      return null;
    }
  },

  // Get site settings
  async getSiteSettings(): Promise<ContentfulSiteSettings | null> {
    try {
      const response = await client.getEntries({
        content_type: 'siteSettings',
        limit: 1,
      });
      return response.items[0] as ContentfulSiteSettings || null;
    } catch (error) {
      console.error('Error fetching site settings from Contentful:', error);
      return null;
    }
  },
};

// Helper function to get image URL
export function getImageUrl(image: any): string {
  return image?.fields?.file?.url ? `https:${image.fields.file.url}` : '';
}