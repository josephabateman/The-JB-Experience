import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { cmsStorage } from './cms-storage';
import { AdminUser, AuthSession } from './cms-types';

// Simple session management
const sessions = new Map<string, AuthSession>();

// Get admin credentials from environment variables
const getAdminCredentials = () => {
  const username = process.env.CMS_ADMIN_USERNAME || 'admin';
  const password = process.env.CMS_ADMIN_PASSWORD || 'JBExperience2024!';
  
  return {
    id: 'admin-1',
    username,
    email: 'joebatemanofficial@gmail.com',
    role: 'admin' as const,
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  };
};

function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password + 'cms-salt').digest('hex');
}

export function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function createSession(user: AdminUser): string {
  const token = generateSessionToken();
  const session: AuthSession = {
    userId: user.id,
    username: user.username,
    role: user.role,
    expiresAt: Date.now() + (24 * 60 * 60 * 1000), // 24 hours
  };
  
  sessions.set(token, session);
  return token;
}

export function getSession(token: string): AuthSession | null {
  const session = sessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) {
      sessions.delete(token);
    }
    return null;
  }
  return session;
}

export function destroySession(token: string): void {
  sessions.delete(token);
}

export async function authenticateUser(username: string, password: string): Promise<AdminUser | null> {
  const adminCredentials = getAdminCredentials();
  
  // Debug logging (remove in production)
  console.log('Auth attempt:', { 
    provided_username: username, 
    expected_username: adminCredentials.username,
    env_username: process.env.CMS_ADMIN_USERNAME,
    env_password_set: !!process.env.CMS_ADMIN_PASSWORD 
  });
  
  if (username === adminCredentials.username && hashPassword(password) === adminCredentials.passwordHash) {
    return {
      id: adminCredentials.id,
      username: adminCredentials.username,
      email: adminCredentials.email,
      role: adminCredentials.role,
      lastLogin: new Date().toISOString(),
      createdAt: adminCredentials.createdAt,
    };
  }
  return null;
}

export function getSessionFromRequest(request: NextRequest): AuthSession | null {
  try {
    const token = request.cookies.get('cms-session')?.value || 
                  request.headers.get('authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return null;
    }
    
    return getSession(token);
  } catch (error) {
    console.error('Error getting session from request:', error);
    return null;
  }
}

export function requireAuth(handler: (req: NextRequest, session: AuthSession) => Promise<Response>) {
  return async (req: NextRequest): Promise<Response> => {
    const session = getSessionFromRequest(req);
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return handler(req, session);
  };
}

export function requireAdminAuth(handler: (req: NextRequest, session: AuthSession) => Promise<Response>) {
  return requireAuth(async (req: NextRequest, session: AuthSession) => {
    if (session.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Admin access required' }), {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
    return handler(req, session);
  });
}