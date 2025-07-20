import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { Testimonial } from '@/lib/cms-types';

interface RouteParams {
  params: { id: string };
}

// GET /api/cms/testimonials/[id] - Get single testimonial
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const testimonial = await cmsStorage.findById<Testimonial>('testimonials', params.id);
    
    if (!testimonial) {
      return NextResponse.json(
        { error: 'Testimonial not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonial' },
      { status: 500 }
    );
  }
}

// PUT /api/cms/testimonials/[id] - Update testimonial
export async function PUT(request: NextRequest, { params }: RouteParams) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      const updated = await cmsStorage.update<Testimonial>('testimonials', params.id, {
        name: data.name,
        event: data.event,
        text: data.text,
        rating: data.rating,
        featured: data.featured,
        displayOrder: data.displayOrder,
        active: data.active,
      });

      if (!updated) {
        return NextResponse.json(
          { error: 'Testimonial not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: updated,
        message: 'Testimonial updated successfully',
      });
    } catch (error) {
      console.error('Error updating testimonial:', error);
      return NextResponse.json(
        { error: 'Failed to update testimonial' },
        { status: 500 }
      );
    }
  })(request);
}

// DELETE /api/cms/testimonials/[id] - Delete testimonial
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const deleted = await cmsStorage.delete<Testimonial>('testimonials', params.id);

      if (!deleted) {
        return NextResponse.json(
          { error: 'Testimonial not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'Testimonial deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      return NextResponse.json(
        { error: 'Failed to delete testimonial' },
        { status: 500 }
      );
    }
  })(request);
}