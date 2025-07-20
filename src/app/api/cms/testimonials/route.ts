import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { Testimonial } from '@/lib/cms-types';
import { v4 as uuidv4 } from 'uuid';

// GET /api/cms/testimonials - List all testimonials
export async function GET(request: NextRequest) {
  try {
    const testimonials = await cmsStorage.readCollection<Testimonial>('testimonials');
    
    // Sort by displayOrder and name
    testimonials.sort((a, b) => {
      if (a.displayOrder !== b.displayOrder) {
        return a.displayOrder - b.displayOrder;
      }
      return a.name.localeCompare(b.name);
    });

    return NextResponse.json({
      success: true,
      data: testimonials,
      total: testimonials.length,
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

// POST /api/cms/testimonials - Create new testimonial
export async function POST(request: NextRequest) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      const testimonial: Omit<Testimonial, 'updatedAt'> = {
        id: uuidv4(),
        name: data.name,
        event: data.event,
        text: data.text,
        rating: data.rating || 5,
        featured: data.featured || false,
        displayOrder: data.displayOrder || 999,
        active: data.active !== false,
      };

      const created = await cmsStorage.create<Testimonial>('testimonials', testimonial);

      return NextResponse.json({
        success: true,
        data: created,
        message: 'Testimonial created successfully',
      });
    } catch (error) {
      console.error('Error creating testimonial:', error);
      return NextResponse.json(
        { error: 'Failed to create testimonial' },
        { status: 500 }
      );
    }
  })(request);
}