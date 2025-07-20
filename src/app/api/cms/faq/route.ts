import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/cms-auth';
import { cmsStorage } from '@/lib/cms-storage';
import { FAQItem } from '@/lib/cms-types';
import { v4 as uuidv4 } from 'uuid';

// GET /api/cms/faq - List all FAQ items
export async function GET(request: NextRequest) {
  try {
    const faqItems = await cmsStorage.readCollection<FAQItem>('faq');
    
    // Sort by displayOrder and question
    faqItems.sort((a, b) => {
      if (a.displayOrder !== b.displayOrder) {
        return a.displayOrder - b.displayOrder;
      }
      return a.question.localeCompare(b.question);
    });

    return NextResponse.json({
      success: true,
      data: faqItems,
      total: faqItems.length,
    });
  } catch (error) {
    console.error('Error fetching FAQ items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch FAQ items' },
      { status: 500 }
    );
  }
}

// POST /api/cms/faq - Create new FAQ item
export async function POST(request: NextRequest) {
  return requireAuth(async (req: NextRequest) => {
    try {
      const data = await request.json();
      
      const faqItem: Omit<FAQItem, 'updatedAt'> = {
        id: uuidv4(),
        question: data.question,
        answer: data.answer,
        category: data.category || 'general',
        displayOrder: data.displayOrder || 999,
        active: data.active !== false,
      };

      const created = await cmsStorage.create<FAQItem>('faq', faqItem);

      return NextResponse.json({
        success: true,
        data: created,
        message: 'FAQ item created successfully',
      });
    } catch (error) {
      console.error('Error creating FAQ item:', error);
      return NextResponse.json(
        { error: 'Failed to create FAQ item' },
        { status: 500 }
      );
    }
  })(request);
}