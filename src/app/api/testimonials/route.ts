import { NextRequest, NextResponse } from 'next/server';
import { sanityFetch, queries } from '@/lib/sanity';

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
    // Check if Sanity is configured
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
    
    if (!projectId || projectId === 'your-project-id') {
      // Return fallback data if Sanity not configured yet
      return NextResponse.json({
        success: true,
        data: fallbackTestimonials,
        total: fallbackTestimonials.length,
        source: 'fallback',
      });
    }

    // Fetch from Sanity
    const testimonials = await sanityFetch<any[]>({
      query: queries.testimonials,
      tags: ['testimonial'],
    });

    return NextResponse.json({
      success: true,
      data: testimonials || fallbackTestimonials,
      total: testimonials?.length || fallbackTestimonials.length,
      source: 'sanity',
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