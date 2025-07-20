import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest, destroySession } from '@/lib/cms-auth';

export async function POST(request: NextRequest) {
  try {
    const session = getSessionFromRequest(request);
    
    if (session) {
      const token = request.cookies.get('cms-session')?.value || 
                    request.headers.get('authorization')?.replace('Bearer ', '');
      
      if (token) {
        destroySession(token);
      }
    }

    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully',
    });

    // Clear session cookie
    response.cookies.set('cms-session', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}