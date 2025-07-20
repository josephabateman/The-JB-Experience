import crypto from 'crypto';
import { NextRequest } from 'next/server';
import { cmsStorage } from './cms-storage';
import { AdminUser, AuthSession } from './cms-types';

// Simple session management
const sessions = new Map<string, AuthSession>();

// Default admin user (you should change these credentials!)
const DEFAULT_ADMIN = {
  id: 'admin-1',
  username: 'admin',
  email: 'joebatemanofficial@gmail.com',
  role: 'admin' as const,
  passwordHash: hashPassword('JBExperience2024!'), // Change this password!
  createdAt: new Date().toISOString(),
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
  // For now, we'll use the default admin user
  // In a real implementation, you'd query the database
  if (username === DEFAULT_ADMIN.username && hashPassword(password) === DEFAULT_ADMIN.passwordHash) {
    return {
      id: DEFAULT_ADMIN.id,
      username: DEFAULT_ADMIN.username,
      email: DEFAULT_ADMIN.email,
      role: DEFAULT_ADMIN.role,
      lastLogin: new Date().toISOString(),
      createdAt: DEFAULT_ADMIN.createdAt,
    };
  }
  return null;
}

export function getSessionFromRequest(request: NextRequest): AuthSession | null {
  const token = request.cookies.get('cms-session')?.value || 
                request.headers.get('authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return null;
  }
  
  return getSession(token);
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