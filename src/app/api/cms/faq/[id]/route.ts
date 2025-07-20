import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { FAQItem } from '@/lib/cms-types';

interface RouteParams {
  params: { id: string };
}

// GET /api/cms/faq/[id] - Get single FAQ item
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const faqItem = await cmsStorage.findById<FAQItem>('faq', params.id);
    
    if (!faqItem) {
      return NextResponse.json(
        { error: 'FAQ item not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: faqItem,
    });
  } catch (error) {
    console.error('Error fetching FAQ item:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FAQ item' },
      { status: 500 }
    );
  }
}

// PUT /api/cms/faq/[id] - Update FAQ item
export async function PUT(request: NextRequest, { params }: RouteParams) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      const updated = await cmsStorage.update<FAQItem>('faq', params.id, {
        question: data.question,
        answer: data.answer,
        category: data.category,
        displayOrder: data.displayOrder,
        active: data.active,
      });

      if (!updated) {
        return NextResponse.json(
          { error: 'FAQ item not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        data: updated,
        message: 'FAQ item updated successfully',
      });
    } catch (error) {
      console.error('Error updating FAQ item:', error);
      return NextResponse.json(
        { error: 'Failed to update FAQ item' },
        { status: 500 }
      );
    }
  })(request);
}

// DELETE /api/cms/faq/[id] - Delete FAQ item
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const deleted = await cmsStorage.delete<FAQItem>('faq', params.id);

      if (!deleted) {
        return NextResponse.json(
          { error: 'FAQ item not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        success: true,
        message: 'FAQ item deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting FAQ item:', error);
      return NextResponse.json(
        { error: 'Failed to delete FAQ item' },
        { status: 500 }
      );
    }
  })(request);
}