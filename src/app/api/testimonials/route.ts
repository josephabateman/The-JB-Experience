import { NextRequest, NextResponse } from 'next/server';
import { cmsStorage } from '@/lib/cms-storage';
import { Testimonial } from '@/lib/cms-types';

// GET /api/testimonials - Public endpoint for fetching active testimonials
export async function GET(request: NextRequest) {
  try {
    const testimonials = await cmsStorage.readCollection<Testimonial>('testimonials');
    
    // Filter only active testimonials and sort by displayOrder
    const activeTestimonials = testimonials
      .filter(t => t.active)
      .sort((a, b) => {
        if (a.displayOrder !== b.displayOrder) {
          return a.displayOrder - b.displayOrder;
        }
        return a.name.localeCompare(b.name);
      });

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