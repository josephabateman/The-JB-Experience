import { NextRequest, NextResponse } from 'next/server';

// Static testimonials data - replace with your CMS of choice
const testimonials = [
  {
    id: '1',
    name: 'Sarah & James',
    event: 'Wedding - London',
    text: 'JB Experience made our wedding absolutely magical! Their music selection was perfect and they kept everyone dancing all night long.',
    rating: 5,
    featured: true,
    active: true,
  },
  {
    id: '2', 
    name: 'Emma Thompson',
    event: 'Corporate Event - Birmingham',
    text: 'Professional, talented, and incredibly accommodating. They adapted perfectly to our corporate event needs.',
    rating: 5,
    featured: false,
    active: true,
  },
  {
    id: '3',
    name: 'Michael & Lisa',
    event: 'Anniversary Party - Manchester', 
    text: 'The JB Experience trio was outstanding! Great mix of classic and modern songs that had all our guests entertained.',
    rating: 5,
    featured: true,
    active: true,
  },
];

// GET /api/testimonials - Public endpoint for fetching testimonials
export async function GET(request: NextRequest) {
  try {
    const activeTestimonials = testimonials.filter(t => t.active);

    return NextResponse.json({
      success: true,
      data: activeTestimonials,
      total: activeTestimonials.length,
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}