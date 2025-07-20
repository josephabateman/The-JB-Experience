import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Dashboard</title>
  <style>
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
  </style>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="navbar-content">
      <h1 class="logo">JB Experience CMS</h1>
      <div class="nav-right">
        <span class="welcome">Welcome, <span id="username">admin</span></span>
        <button onclick="logout()" class="logout-btn">Logout</button>
      </div>
    </div>
  </nav>

  <div class="container">
    <h1 class="title">Dashboard</h1>

    <!-- Stats Cards -->
    <div class="grid grid-3">
      <div class="card stat-card">
        <div class="stat-number" id="testimonial-count">-</div>
        <div class="stat-label">Testimonials</div>
      </div>
      <div class="card stat-card">
        <div class="stat-number" id="pricing-status">-</div>
        <div class="stat-label">Pricing Setup</div>
      </div>
      <div class="card stat-card">
        <div class="stat-number">✓</div>
        <div class="stat-label">CMS Active</div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
      <h2 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Quick Actions</h2>
      
      <div class="grid grid-2">
        <div class="card action-card">
          <h3 class="card-title">Content Management</h3>
          <a href="/api/admin/testimonials" class="action-link">Manage Testimonials</a>
          <a href="/api/admin/pricing" class="action-link">Update Pricing</a>
          <a href="/api/admin/settings" class="action-link secondary">Site Settings</a>
        </div>
        
        <div class="card action-card">
          <h3 class="card-title">Site Actions</h3>
          <a href="/" class="action-link secondary">View Live Site</a>
          <a href="/" target="_blank" class="action-link secondary">Open in New Tab</a>
        </div>
      </div>
    </div>

    <!-- Quick Info -->
    <div class="grid grid-2" style="margin-top: 2rem;">
      <div class="card">
        <h3 class="card-title">Recent Updates</h3>
        <div class="card-content">
          <p>• CMS system activated</p>
          <p>• Pricing management available</p>
          <p>• Testimonial management ready</p>
          <p>• All admin features operational</p>
        </div>
      </div>
      
      <div class="card">
        <h3 class="card-title">System Status</h3>
        <div class="card-content">
          <p><strong>Authentication:</strong> Active</p>
          <p><strong>File Storage:</strong> Working</p>
          <p><strong>API Status:</strong> Operational</p>
          <p><strong>Last Login:</strong> <span id="current-time">Now</span></p>
        </div>
      </div>
    </div>
  </div>

  <script>
    async function init() {
      try {
        // Check authentication
        const authResponse = await fetch('/api/cms/auth/me');
        if (!authResponse.ok) {
          window.location.href = '/api/admin/login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        // Load stats
        await loadStats();
        
        // Update current time
        document.getElementById('current-time').textContent = new Date().toLocaleString();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/api/admin/login';
      }
    }

    async function loadStats() {
      try {
        // Load testimonials count
        const testimonialsResponse = await fetch('/api/cms/testimonials');
        if (testimonialsResponse.ok) {
          const testimonialsData = await testimonialsResponse.json();
          const count = testimonialsData.success ? (testimonialsData.data?.length || 0) : 0;
          document.getElementById('testimonial-count').textContent = count;
        }

        // Check pricing setup
        const pricingResponse = await fetch('/api/cms/pricing');
        if (pricingResponse.ok) {
          const pricingData = await pricingResponse.json();
          document.getElementById('pricing-status').textContent = pricingData.success ? '✓' : '✗';
        }
      } catch (error) {
        console.error('Failed to load stats:', error);
      }
    }

    async function logout() {
      try {
        await fetch('/api/cms/auth/logout', { method: 'POST' });
        window.location.href = '/api/admin/login';
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }

    // Initialize when page loads
    init();
  </script>
</body>
</html>
  `;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-store',
    },
  });
}