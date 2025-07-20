"use client";

import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [user, setUser] = useState<{username: string} | null>(null);
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    checkAuth();
    loadStats();
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

  const loadStats = async () => {
    try {
      // Load basic stats
      const [testimonialsRes, pricingRes] = await Promise.all([
        fetch('/api/cms/testimonials').catch(() => null),
        fetch('/api/cms/pricing').catch(() => null)
      ]);

      let testimonialCount = 0;
      let hasPricing = false;

      if (testimonialsRes && testimonialsRes.ok) {
        const testimonialsData = await testimonialsRes.json();
        if (testimonialsData.success) {
          testimonialCount = testimonialsData.data?.length || 0;
        }
      }

      if (pricingRes && pricingRes.ok) {
        const pricingData = await pricingRes.json();
        hasPricing = pricingData.success;
      }

      setStats({ testimonialCount, hasPricing });
    } catch (error) {
      console.error('Failed to load stats:', error);
      setStats({ testimonialCount: 0, hasPricing: false });
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
        <title>JB Experience CMS - Dashboard</title>
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
            
            .grid { display: grid; gap: 1.5rem; margin-bottom: 2rem; }
            .grid-2 { grid-template-columns: repeat(2, 1fr); }
            .grid-3 { grid-template-columns: repeat(3, 1fr); }
            
            .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
            .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem; }
            .card-content { color: #6b7280; line-height: 1.5; }
            
            .stat-card { text-align: center; }
            .stat-number { font-size: 2rem; font-weight: 700; color: #4f46e5; margin-bottom: 0.5rem; }
            .stat-label { color: #6b7280; font-size: 0.875rem; }
            
            .action-card { }
            .action-link { display: block; background: #4f46e5; color: white; padding: 0.75rem 1rem; border-radius: 0.375rem; text-decoration: none; font-weight: 500; text-align: center; margin-bottom: 0.5rem; }
            .action-link:hover { background: #4338ca; }
            .action-link.secondary { background: #6b7280; }
            .action-link.secondary:hover { background: #4b5563; }
            
            .quick-actions { margin-top: 2rem; }
            
            @media (max-width: 768px) {
              .grid-2, .grid-3 { grid-template-columns: 1fr; }
            }
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
          <h1 className="title">Dashboard</h1>

          {/* Stats Cards */}
          <div className="grid grid-3">
            <div className="card stat-card">
              <div className="stat-number">{stats?.testimonialCount || 0}</div>
              <div className="stat-label">Testimonials</div>
            </div>
            <div className="card stat-card">
              <div className="stat-number">{stats?.hasPricing ? '✓' : '✗'}</div>
              <div className="stat-label">Pricing Setup</div>
            </div>
            <div className="card stat-card">
              <div className="stat-number">✓</div>
              <div className="stat-label">CMS Active</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '1rem'}}>Quick Actions</h2>
            
            <div className="grid grid-2">
              <div className="card action-card">
                <h3 className="card-title">Content Management</h3>
                <a href="/admin/testimonials" className="action-link">Manage Testimonials</a>
                <a href="/admin/pricing" className="action-link">Update Pricing</a>
                <a href="/admin/settings" className="action-link secondary">Site Settings</a>
              </div>
              
              <div className="card action-card">
                <h3 className="card-title">Site Actions</h3>
                <a href="/" className="action-link secondary">View Live Site</a>
                <a href="/" target="_blank" className="action-link secondary">Open in New Tab</a>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-2" style={{marginTop: '2rem'}}>
            <div className="card">
              <h3 className="card-title">Recent Updates</h3>
              <div className="card-content">
                <p>• CMS system activated</p>
                <p>• Pricing management available</p>
                <p>• Testimonial management ready</p>
                <p>• All admin features operational</p>
              </div>
            </div>
            
            <div className="card">
              <h3 className="card-title">System Status</h3>
              <div className="card-content">
                <p><strong>Authentication:</strong> Active</p>
                <p><strong>File Storage:</strong> Working</p>
                <p><strong>API Status:</strong> Operational</p>
                <p><strong>Last Login:</strong> Now</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}