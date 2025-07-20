import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest } from '@/lib/cms-auth';

export async function GET(request: NextRequest) {
  try {
    const session = getSessionFromRequest(request);
    
    if (!session) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      user: {
        id: session.userId,
        username: session.username,
        role: session.role,
      },
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}