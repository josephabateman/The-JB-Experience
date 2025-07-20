"use client";

import { useEffect, useState } from 'react';

export default function FAQPage() {
  const [user, setUser] = useState<{username: string} | null>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/cms/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      window.location.href = '/admin/login';
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/cms/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return (
      <html lang="en">
        <head>
          <title>Loading...</title>
        </head>
        <body style={{fontFamily: 'system-ui', background: '#f3f4f6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>JB Experience CMS - FAQ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
            
            .navbar { background: white; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1rem 0; }
            .navbar-content { max-width: 80rem; margin: 0 auto; padding: 0 1rem; display: flex; justify-content: space-between; align-items: center; }
            .logo { font-size: 1.25rem; font-weight: 600; color: #111827; }
            .nav-right { display: flex; align-items: center; gap: 1rem; }
            .welcome { font-size: 0.875rem; color: #6b7280; }
            .logout-btn { background: #dc2626; color: white; padding: 0.5rem 1rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; }
            .logout-btn:hover { background: #b91c1c; }
            
            .container { max-width: 80rem; margin: 0 auto; padding: 2rem 1rem; }
            .title { font-size: 1.875rem; font-weight: 700; color: #111827; margin-bottom: 2rem; }
            
            .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
            .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
            .nav-link:hover { text-decoration: underline; }
            
            .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
          `
        }} />
      </head>
      <body>
        {/* Navigation */}
        <nav className="navbar">
          <div className="navbar-content">
            <h1 className="logo">JB Experience CMS</h1>
            <div className="nav-right">
              <span className="welcome">Welcome, {user.username}</span>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="container">
          {/* Navigation Links */}
          <div className="nav-links">
            <a href="/admin" className="nav-link">← Dashboard</a>
            <a href="/admin/testimonials" className="nav-link">Testimonials</a>
            <a href="/admin/pricing" className="nav-link">Pricing</a>
            <a href="/admin/settings" className="nav-link">Settings</a>
            <a href="/" className="nav-link">View Site</a>
          </div>

          <h1 className="title">FAQ Management</h1>

          <div className="card">
            <h3 style={{fontSize: '1.125rem', fontWeight: '600', color: '#111827', marginBottom: '1rem'}}>Coming Soon</h3>
            <p style={{color: '#6b7280', lineHeight: '1.5'}}>
              FAQ management functionality will be added in a future update. For now, you can manage testimonials and pricing through the CMS.
            </p>
            <div style={{marginTop: '1.5rem'}}>
              <a href="/admin/testimonials" style={{color: '#4f46e5', textDecoration: 'none', fontWeight: '500'}}>
                → Manage Testimonials
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}