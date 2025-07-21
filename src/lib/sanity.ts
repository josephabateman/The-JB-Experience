import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

// Create Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production', // Use CDN in production
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
});

// Image URL builder
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);

// GROQ queries for your content
export const queries = {
  // Get all active testimonials
  testimonials: `*[_type == "testimonial" && active == true] | order(displayOrder asc, name asc) {
    _id,
    name,
    event,
    text,
    rating,
    featured,
    displayOrder,
    image
  }`,
  
  // Get pricing settings
  pricing: `*[_type == "pricingSettings"][0] {
    _id,
    soloPrice,
    trioPrice,
    saxPrice,
    travelRate,
    congestionCharge,
    weekendSurcharge,
    holidaySurcharge,
    freeRadius,
    maxDistance
  }`,
  
  // Get site settings
  siteSettings: `*[_type == "siteSettings"][0] {
    _id,
    businessName,
    tagline,
    description,
    email,
    phone,
    baseLocation,
    logo,
    heroImage
  }`,
  
  // Get FAQ items
  faq: `*[_type == "faqItem" && active == true] | order(displayOrder asc) {
    _id,
    question,
    answer,
    category
  }`,
};

// Helper function to fetch data
export async function sanityFetch<T = any>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, params, {
    cache: process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
    next: { tags },
  });
}