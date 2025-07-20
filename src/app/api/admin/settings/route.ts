import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Settings</title>
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
    
    .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
    .nav-link:hover { text-decoration: underline; }
    
    .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; margin-bottom: 1.5rem; }
    .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem; }
    .card-content { color: #6b7280; line-height: 1.5; }
    
    .action-link { background: #4f46e5; color: white; padding: 0.75rem 1rem; border-radius: 0.375rem; text-decoration: none; font-size: 0.875rem; font-weight: 500; margin-right: 1rem; margin-bottom: 0.5rem; display: inline-block; }
    .action-link:hover { background: #4338ca; }
    .action-link.secondary { background: #6b7280; }
    .action-link.secondary:hover { background: #4b5563; }
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
    <!-- Navigation Links -->
    <div class="nav-links">
      <a href="/api/admin/dashboard" class="nav-link">← Dashboard</a>
      <a href="/api/admin/testimonials" class="nav-link">Testimonials</a>
      <a href="/api/admin/pricing" class="nav-link">Pricing</a>
      <a href="/" class="nav-link">View Site</a>
    </div>

    <h1 class="title">Settings</h1>

    <div class="card">
      <h3 class="card-title">System Information</h3>
      <div class="card-content">
        <p><strong>CMS Version:</strong> 1.0.0</p>
        <p><strong>Current User:</strong> <span id="current-user">admin</span></p>
        <p><strong>Authentication:</strong> Active</p>
        <p><strong>Storage:</strong> JSON File System</p>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Login Credentials</h3>
      <div class="card-content">
        <p><strong>Username:</strong> admin</p>
        <p><strong>Password:</strong> JBExperience2024!</p>
        <p style="font-size: 0.875rem; margin-top: 0.5rem; color: #f59e0b;">
          ⚠️ These are default credentials. For security, these should be changed in production.
        </p>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Available Features</h3>
      <div class="card-content">
        <p>✅ Testimonials Management</p>
        <p>✅ Pricing Management</p>
        <p>✅ User Authentication</p>
        <p>✅ Responsive Design</p>
        <p>✅ Pure HTML Admin Pages</p>
        <p>🔄 FAQ Management (Coming Soon)</p>
        <p>🔄 Image Upload (Coming Soon)</p>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Quick Actions</h3>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <a href="/api/admin/testimonials" class="action-link">Manage Testimonials</a>
        <a href="/api/admin/pricing" class="action-link">Update Pricing</a>
        <a href="/" class="action-link secondary">View Live Site</a>
      </div>
    </div>

    <div class="card">
      <h3 class="card-title">Admin URLs</h3>
      <div class="card-content">
        <p><strong>Login:</strong> <a href="/api/admin/login" style="color: #4f46e5;">/api/admin/login</a></p>
        <p><strong>Dashboard:</strong> <a href="/api/admin/dashboard" style="color: #4f46e5;">/api/admin/dashboard</a></p>
        <p><strong>Testimonials:</strong> <a href="/api/admin/testimonials" style="color: #4f46e5;">/api/admin/testimonials</a></p>
        <p><strong>Pricing:</strong> <a href="/api/admin/pricing" style="color: #4f46e5;">/api/admin/pricing</a></p>
        <p><strong>Settings:</strong> <a href="/api/admin/settings" style="color: #4f46e5;">/api/admin/settings</a></p>
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
        document.getElementById('current-user').textContent = authData.user.username;
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/api/admin/login';
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