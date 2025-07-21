import { NextRequest, NextResponse } from 'next/server';
import { contentfulFetch } from '@/lib/contentful';

// Fallback testimonials data if Sanity is not configured
const fallbackTestimonials = [
  {
    _id: '1',
    name: 'Sarah & James',
    event: 'Wedding - London',
    text: 'JB Experience made our wedding absolutely magical! Their music selection was perfect and they kept everyone dancing all night long.',
    rating: 5,
    featured: true,
  },
  {
    _id: '2', 
    name: 'Emma Thompson',
    event: 'Corporate Event - Birmingham',
    text: 'Professional, talented, and incredibly accommodating. They adapted perfectly to our corporate event needs.',
    rating: 5,
    featured: false,
  },
  {
    _id: '3',
    name: 'Michael & Lisa',
    event: 'Anniversary Party - Manchester', 
    text: 'The JB Experience trio was outstanding! Great mix of classic and modern songs that had all our guests entertained.',
    rating: 5,
    featured: true,
  },
];

// GET /api/testimonials - Public endpoint for fetching testimonials
export async function GET(request: NextRequest) {
  try {
    // Check if Contentful is configured
    const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    
    if (!spaceId) {
      // Return fallback data if Contentful not configured yet
      return NextResponse.json({
        success: true,
        data: fallbackTestimonials,
        total: fallbackTestimonials.length,
        source: 'fallback',
      });
    }

    // Fetch from Contentful
    const contentfulTestimonials = await contentfulFetch.getTestimonials();
    
    // Transform Contentful data to match expected format
    const testimonials = contentfulTestimonials.map(item => ({
      _id: item.sys.id,
      name: item.fields.name,
      event: item.fields.event,
      text: item.fields.text,
      rating: item.fields.rating,
      featured: item.fields.featured,
      displayOrder: item.fields.displayOrder,
      image: item.fields.image ? {
        url: `https:${item.fields.image.fields.file.url}`,
        alt: item.fields.image.fields.title,
      } : null,
    }));

    return NextResponse.json({
      success: true,
      data: testimonials.length > 0 ? testimonials : fallbackTestimonials,
      total: testimonials.length > 0 ? testimonials.length : fallbackTestimonials.length,
      source: testimonials.length > 0 ? 'contentful' : 'fallback',
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    
    // Return fallback data on error
    return NextResponse.json({
      success: true,
      data: fallbackTestimonials,
      total: fallbackTestimonials.length,
      source: 'fallback_error',
    });
  }
}