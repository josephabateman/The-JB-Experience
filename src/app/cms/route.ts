import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.searchParams.get('page') || 'login';
  
  // Route to different CMS pages based on query parameter
  switch (path) {
    case 'login':
      return getLoginPage();
    case 'dashboard':
      return getDashboardPage();
    case 'testimonials':
      return getTestimonialsPage();
    case 'pricing':
      return getPricingPage();
    case 'settings':
      return getSettingsPage();
    default:
      return getLoginPage();
  }
}

function getLoginPage() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Login</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: #f3f4f6; min-height: 100vh; }
    .container { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 3rem 1rem; }
    .form-wrapper { width: 100%; max-width: 28rem; }
    .header { text-align: center; margin-bottom: 2rem; }
    .title { font-size: 1.875rem; font-weight: 800; color: #111827; margin-bottom: 0.5rem; }
    .subtitle { font-size: 0.875rem; color: #6b7280; }
    .form { margin-top: 2rem; }
    .input-group { position: relative; margin-bottom: 1rem; }
    .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
    .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    .error { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; padding: 0.75rem; border-radius: 0.375rem; font-size: 0.875rem; margin-bottom: 1rem; display: none; }
    .button { width: 100%; background: #4f46e5; color: white; padding: 0.75rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; margin-bottom: 1rem; }
    .button:hover { background: #4338ca; }
    .button:disabled { background: #9ca3af; cursor: not-allowed; }
    .info { background: #eff6ff; border: 1px solid #bfdbfe; color: #1e40af; padding: 1rem; border-radius: 0.375rem; font-size: 0.875rem; text-align: center; }
    .info strong { display: block; margin-bottom: 0.5rem; }
    .info small { font-size: 0.75rem; color: #1d4ed8; display: block; margin-top: 0.5rem; }
  </style>
</head>
<body>
  <div class="container">
    <div class="form-wrapper">
      <div class="header">
        <h2 class="title">JB Experience CMS</h2>
        <p class="subtitle">Sign in to manage your website content</p>
      </div>
      
      <form class="form" id="login-form">
        <div class="input-group">
          <input
            id="username"
            name="username"
            type="text"
            required
            class="input"
            placeholder="Username"
          />
        </div>
        
        <div class="input-group">
          <input
            id="password"
            name="password"
            type="password"
            required
            class="input"
            placeholder="Password"
          />
        </div>

        <div id="error" class="error"></div>

        <button type="submit" id="submit-btn" class="button">
          Sign in
        </button>

        <div class="info">
          <strong>CMS Login:</strong>
          Use your secure credentials<br />
          (Set via Vercel environment variables)
          <small>Contact admin if you don't have credentials</small>
        </div>
      </form>
    </div>
  </div>

  <script>
    document.getElementById('login-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      const errorDiv = document.getElementById('error');
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Signing in...';
      errorDiv.style.display = 'none';

      const formData = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
      };

      try {
        const response = await fetch('/api/cms/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          window.location.href = '/cms?page=dashboard';
        } else {
          errorDiv.textContent = data.error || 'Login failed';
          errorDiv.style.display = 'block';
        }
      } catch (error) {
        errorDiv.textContent = 'Network error. Please try again.';
        errorDiv.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign in';
      }
    });
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

function getDashboardPage() {
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
    
    .action-link { display: block; background: #4f46e5; color: white; padding: 0.75rem 1rem; border-radius: 0.375rem; text-decoration: none; font-weight: 500; text-align: center; margin-bottom: 0.5rem; }
    .action-link:hover { background: #4338ca; }
    .action-link.secondary { background: #6b7280; }
    .action-link.secondary:hover { background: #4b5563; }
    
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
    <div style="margin-top: 2rem;">
      <h2 style="font-size: 1.25rem; font-weight: 600; color: #111827; margin-bottom: 1rem;">Quick Actions</h2>
      
      <div class="grid grid-2">
        <div class="card">
          <h3 class="card-title">Content Management</h3>
          <a href="/cms?page=testimonials" class="action-link">Manage Testimonials</a>
          <a href="/cms?page=pricing" class="action-link">Update Pricing</a>
          <a href="/cms?page=settings" class="action-link secondary">Site Settings</a>
        </div>
        
        <div class="card">
          <h3 class="card-title">Site Actions</h3>
          <a href="/" class="action-link secondary">View Live Site</a>
          <a href="/" target="_blank" class="action-link secondary">Open in New Tab</a>
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
          window.location.href = '/cms?page=login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        // Load stats
        await loadStats();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/cms?page=login';
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
        window.location.href = '/cms?page=login';
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

function getTestimonialsPage() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Testimonials</title>
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
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .title { font-size: 1.875rem; font-weight: 700; color: #111827; }
    .button { background: #4f46e5; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; }
    .button:hover { background: #4338ca; }
    .button:disabled { background: #9ca3af; cursor: not-allowed; }
    .button-danger { background: #dc2626; }
    .button-danger:hover { background: #b91c1c; }
    
    .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
    .nav-link:hover { text-decoration: underline; }
    
    .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; margin-bottom: 1rem; }
    .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
    .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; }
    .card-meta { font-size: 0.875rem; color: #6b7280; margin-bottom: 0.5rem; }
    .card-text { color: #374151; line-height: 1.5; margin-bottom: 1rem; }
    .card-actions { display: flex; gap: 0.5rem; }
    
    .badge { font-size: 0.75rem; padding: 0.25rem 0.5rem; border-radius: 0.25rem; }
    .badge-blue { background: #eff6ff; color: #1d4ed8; }
    .badge-red { background: #fef2f2; color: #dc2626; }
    
    .modal { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: none; align-items: center; justify-content: center; padding: 1rem; z-index: 50; }
    .modal.show { display: flex; }
    .modal-content { background: white; border-radius: 0.5rem; box-shadow: 0 10px 25px rgba(0,0,0,0.25); width: 100%; max-width: 42rem; max-height: 90vh; overflow-y: auto; }
    .modal-header { padding: 1.5rem; border-bottom: 1px solid #e5e7eb; }
    .modal-title { font-size: 1.25rem; font-weight: 700; color: #111827; }
    .modal-body { padding: 1.5rem; }
    .modal-footer { padding: 1.5rem; border-top: 1px solid #e5e7eb; display: flex; justify-content: flex-end; gap: 1rem; }
    
    .form-group { margin-bottom: 1rem; }
    .label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
    .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
    .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    .textarea { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; min-height: 6rem; resize: vertical; }
    .textarea:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    .select { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; background: white; }
    .select:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    .checkbox { margin-right: 0.5rem; }
    
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    
    .loading { text-align: center; padding: 2rem; color: #6b7280; }
    
    @media (max-width: 768px) {
      .grid-2, .grid-3 { grid-template-columns: 1fr; }
      .header { flex-direction: column; gap: 1rem; align-items: stretch; }
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
    <!-- Navigation Links -->
    <div class="nav-links">
      <a href="/cms?page=dashboard" class="nav-link">← Dashboard</a>
      <a href="/cms?page=pricing" class="nav-link">Pricing</a>
      <a href="/cms?page=settings" class="nav-link">Settings</a>
      <a href="/" class="nav-link">View Site</a>
    </div>

    <div class="header">
      <h1 class="title">Manage Testimonials</h1>
      <button onclick="showAddForm()" class="button">Add Testimonial</button>
    </div>

    <!-- Loading State -->
    <div id="loading" class="loading">
      Loading testimonials...
    </div>

    <!-- Testimonials Container -->
    <div id="testimonials-container" style="display: none;"></div>

    <!-- Add/Edit Modal -->
    <div id="testimonial-modal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="modal-title">Add New Testimonial</h2>
        </div>
        
        <form id="testimonial-form">
          <div class="modal-body">
            <div class="grid-2">
              <div class="form-group">
                <label class="label">Name *</label>
                <input type="text" id="name" required class="input">
              </div>
              
              <div class="form-group">
                <label class="label">Event *</label>
                <input type="text" id="event" required placeholder="e.g., Wedding - London" class="input">
              </div>
            </div>

            <div class="form-group">
              <label class="label">Testimonial Text *</label>
              <textarea id="text" required class="textarea"></textarea>
            </div>

            <div class="grid-3">
              <div class="form-group">
                <label class="label">Rating</label>
                <select id="rating" class="select">
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>

              <div class="form-group">
                <label class="label">Display Order</label>
                <input type="number" id="displayOrder" value="999" class="input">
              </div>

              <div class="form-group">
                <label style="display: block; margin-bottom: 0.5rem;">
                  <input type="checkbox" id="featured" class="checkbox">
                  Featured
                </label>
                
                <label style="display: block;">
                  <input type="checkbox" id="active" checked class="checkbox">
                  Active
                </label>
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" onclick="hideModal()" style="background: #6b7280; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; cursor: pointer;">
              Cancel
            </button>
            <button type="submit" id="submit-btn" class="button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script>
    let testimonials = [];
    let editingId = null;

    // Authentication check and load data
    async function init() {
      try {
        const authResponse = await fetch('/api/cms/auth/me');
        if (!authResponse.ok) {
          window.location.href = '/cms?page=login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        await loadTestimonials();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/cms?page=login';
      }
    }

    async function loadTestimonials() {
      try {
        const response = await fetch('/api/cms/testimonials');
        const data = await response.json();
        
        if (data.success) {
          testimonials = data.data || [];
          renderTestimonials();
        } else {
          console.error('Failed to load testimonials:', data.error);
        }
      } catch (error) {
        console.error('Error loading testimonials:', error);
      } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('testimonials-container').style.display = 'block';
      }
    }

    function renderTestimonials() {
      const container = document.getElementById('testimonials-container');
      
      if (testimonials.length === 0) {
        container.innerHTML = \`
          <div class="card">
            <p style="text-align: center; color: #6b7280;">No testimonials yet.</p>
            <div style="text-align: center; margin-top: 1rem;">
              <button onclick="showAddForm()" class="button">Add your first testimonial</button>
            </div>
          </div>
        \`;
        return;
      }

      container.innerHTML = testimonials.map(testimonial => \`
        <div class="card">
          <div class="card-header">
            <div style="flex: 1;">
              <h3 class="card-title">\${testimonial.name}</h3>
              <p class="card-meta">\${testimonial.event}</p>
              <div style="display: flex; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="color: #f59e0b;">\${'★'.repeat(testimonial.rating)}</span>
                \${testimonial.featured ? '<span class="badge badge-blue">Featured</span>' : ''}
                \${!testimonial.active ? '<span class="badge badge-red">Inactive</span>' : ''}
              </div>
            </div>
            <div class="card-actions">
              <button onclick="editTestimonial('\${testimonial.id}')" class="button" style="padding: 0.5rem 1rem; font-size: 0.75rem;">
                Edit
              </button>
              <button onclick="deleteTestimonial('\${testimonial.id}')" class="button button-danger" style="padding: 0.5rem 1rem; font-size: 0.75rem;">
                Delete
              </button>
            </div>
          </div>
          <p class="card-text">"\${testimonial.text}"</p>
          <div style="font-size: 0.75rem; color: #9ca3af;">
            Order: \${testimonial.displayOrder} | Updated: \${new Date(testimonial.updatedAt).toLocaleDateString()}
          </div>
        </div>
      \`).join('');
    }

    function showAddForm() {
      editingId = null;
      document.getElementById('modal-title').textContent = 'Add New Testimonial';
      resetForm();
      showModal();
    }

    function editTestimonial(id) {
      const testimonial = testimonials.find(t => t.id === id);
      if (!testimonial) return;

      editingId = id;
      document.getElementById('modal-title').textContent = 'Edit Testimonial';
      
      document.getElementById('name').value = testimonial.name;
      document.getElementById('event').value = testimonial.event;
      document.getElementById('text').value = testimonial.text;
      document.getElementById('rating').value = testimonial.rating;
      document.getElementById('displayOrder').value = testimonial.displayOrder;
      document.getElementById('featured').checked = testimonial.featured;
      document.getElementById('active').checked = testimonial.active;
      
      showModal();
    }

    async function deleteTestimonial(id) {
      if (!confirm('Are you sure you want to delete this testimonial?')) return;

      try {
        const response = await fetch(\`/api/cms/testimonials/\${id}\`, {
          method: 'DELETE',
        });

        const data = await response.json();
        if (data.success) {
          await loadTestimonials();
        } else {
          alert(data.error || 'Failed to delete testimonial');
        }
      } catch (error) {
        console.error('Delete failed:', error);
        alert('Failed to delete testimonial');
      }
    }

    function showModal() {
      document.getElementById('testimonial-modal').classList.add('show');
    }

    function hideModal() {
      document.getElementById('testimonial-modal').classList.remove('show');
      resetForm();
    }

    function resetForm() {
      document.getElementById('testimonial-form').reset();
      document.getElementById('rating').value = '5';
      document.getElementById('displayOrder').value = '999';
      document.getElementById('active').checked = true;
    }

    document.getElementById('testimonial-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-btn');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Saving...';

      const formData = {
        name: document.getElementById('name').value,
        event: document.getElementById('event').value,
        text: document.getElementById('text').value,
        rating: parseInt(document.getElementById('rating').value),
        displayOrder: parseInt(document.getElementById('displayOrder').value),
        featured: document.getElementById('featured').checked,
        active: document.getElementById('active').checked,
      };

      try {
        const url = editingId ? \`/api/cms/testimonials/\${editingId}\` : '/api/cms/testimonials';
        const method = editingId ? 'PUT' : 'POST';

        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          hideModal();
          await loadTestimonials();
        } else {
          alert(data.error || 'Failed to save testimonial');
        }
      } catch (error) {
        console.error('Save failed:', error);
        alert('Failed to save testimonial');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Save';
      }
    });

    async function logout() {
      try {
        await fetch('/api/cms/auth/logout', { method: 'POST' });
        window.location.href = '/cms?page=login';
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

function getPricingPage() {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JB Experience CMS - Pricing</title>
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
    .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
    .nav-link:hover { text-decoration: underline; }
    
    .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
    .title { font-size: 1.875rem; font-weight: 700; color: #111827; }
    .button { background: #4f46e5; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 500; cursor: pointer; text-decoration: none; display: inline-block; }
    .button:hover { background: #4338ca; }
    .button:disabled { background: #9ca3af; cursor: not-allowed; }
    .button-success { background: #059669; }
    .button-success:hover { background: #047857; }
    
    .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; margin-bottom: 1.5rem; }
    .card-title { font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 1rem; }
    
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
    
    .form-group { margin-bottom: 1rem; }
    .label { display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.5rem; }
    .input { width: 100%; padding: 0.75rem; border: 1px solid #d1d5db; border-radius: 0.375rem; font-size: 0.875rem; }
    .input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1); }
    .input-group { display: flex; align-items: center; gap: 0.5rem; }
    .input-prefix { font-size: 0.875rem; color: #6b7280; font-weight: 500; }
    
    .pricing-preview { background: #f9fafb; border: 2px dashed #d1d5db; border-radius: 0.5rem; padding: 1.5rem; text-align: center; }
    .pricing-preview.active { background: #eff6ff; border-color: #3b82f6; }
    .preview-amount { font-size: 2rem; font-weight: 700; color: #111827; margin-bottom: 0.5rem; }
    .preview-breakdown { font-size: 0.875rem; color: #6b7280; line-height: 1.4; }
    
    .test-section { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 0.5rem; padding: 1rem; }
    .test-inputs { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem; }
    
    .status-indicator { display: inline-block; width: 8px; height: 8px; border-radius: 50%; margin-right: 0.5rem; }
    .status-saved { background: #10b981; }
    .status-unsaved { background: #f59e0b; }
    .status-error { background: #ef4444; }
    
    .loading { text-align: center; padding: 2rem; color: #6b7280; }
    .success-message { background: #d1fae5; border: 1px solid #a7f3d0; color: #065f46; padding: 1rem; border-radius: 0.375rem; margin-bottom: 1rem; display: none; }
    .error-message { background: #fee2e2; border: 1px solid #fecaca; color: #dc2626; padding: 1rem; border-radius: 0.375rem; margin-bottom: 1rem; display: none; }
    
    @media (max-width: 768px) {
      .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
      .header { flex-direction: column; gap: 1rem; align-items: stretch; }
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
    <!-- Navigation Links -->
    <div class="nav-links">
      <a href="/cms?page=dashboard" class="nav-link">← Dashboard</a>
      <a href="/cms?page=testimonials" class="nav-link">Testimonials</a>
      <a href="/cms?page=settings" class="nav-link">Settings</a>
      <a href="/" class="nav-link">View Site</a>
    </div>

    <div class="header">
      <h1 class="title">Pricing Management</h1>
      <div>
        <span class="status-indicator" id="save-status"></span>
        <span id="save-text">Loaded</span>
      </div>
    </div>

    <!-- Messages -->
    <div id="success-message" class="success-message"></div>
    <div id="error-message" class="error-message"></div>

    <!-- Loading State -->
    <div id="loading" class="loading">
      Loading pricing settings...
    </div>

    <!-- Pricing Form -->
    <div id="pricing-container" style="display: none;">
      <form id="pricing-form">
        <!-- Base Pricing -->
        <div class="card">
          <h2 class="card-title">Base Pricing</h2>
          <div class="grid-3">
            <div class="form-group">
              <label class="label">Solo Performance</label>
              <div class="input-group">
                <span class="input-prefix">£</span>
                <input type="number" id="soloPrice" min="0" step="50" class="input" required>
              </div>
            </div>
            
            <div class="form-group">
              <label class="label">Trio Performance</label>
              <div class="input-group">
                <span class="input-prefix">£</span>
                <input type="number" id="trioPrice" min="0" step="50" class="input" required>
              </div>
            </div>
            
            <div class="form-group">
              <label class="label">Saxophone Addition</label>
              <div class="input-group">
                <span class="input-prefix">£</span>
                <input type="number" id="saxPrice" min="0" step="25" class="input" required>
              </div>
            </div>
          </div>
        </div>

        <!-- Travel & Additional Costs -->
        <div class="card">
          <h2 class="card-title">Travel & Additional Costs</h2>
          <div class="grid-4">
            <div class="form-group">
              <label class="label">Travel Rate (per mile)</label>
              <div class="input-group">
                <span class="input-prefix">£</span>
                <input type="number" id="travelRate" min="0" step="0.10" class="input" required>
              </div>
            </div>
            
            <div class="form-group">
              <label class="label">London Congestion Charge</label>
              <div class="input-group">
                <span class="input-prefix">£</span>
                <input type="number" id="congestionCharge" min="0" step="1" class="input" required>
              </div>
            </div>
            
            <div class="form-group">
              <label class="label">Weekend Surcharge (%)</label>
              <div class="input-group">
                <input type="number" id="weekendSurcharge" min="0" step="5" class="input" required>
                <span class="input-prefix">%</span>
              </div>
            </div>
            
            <div class="form-group">
              <label class="label">Holiday Surcharge (%)</label>
              <div class="input-group">
                <input type="number" id="holidaySurcharge" min="0" step="5" class="input" required>
                <span class="input-prefix">%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Distance Thresholds -->
        <div class="card">
          <h2 class="card-title">Distance Thresholds</h2>
          <div class="grid-2">
            <div class="form-group">
              <label class="label">Free Travel Radius (miles)</label>
              <input type="number" id="freeRadius" min="0" step="5" class="input" required>
            </div>
            
            <div class="form-group">
              <label class="label">Maximum Travel Distance (miles)</label>
              <input type="number" id="maxDistance" min="0" step="10" class="input" required>
            </div>
          </div>
        </div>

        <!-- Save Button -->
        <div style="text-align: center; margin: 2rem 0;">
          <button type="submit" id="save-btn" class="button button-success">
            Save Pricing Settings
          </button>
        </div>
      </form>

      <!-- Live Preview Section -->
      <div class="card">
        <h2 class="card-title">Live Price Preview</h2>
        <p style="color: #6b7280; margin-bottom: 1rem;">Test your pricing with different configurations:</p>
        
        <div class="test-section">
          <div class="test-inputs">
            <div class="form-group">
              <label class="label">Performance Type</label>
              <select id="test-type" class="input">
                <option value="solo">Solo</option>
                <option value="trio">Trio</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="label">Add Saxophone</label>
              <select id="test-sax" class="input">
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
            
            <div class="form-group">
              <label class="label">Test Postcode</label>
              <input type="text" id="test-postcode" placeholder="e.g., SW1A 1AA" class="input">
            </div>
            
            <div class="form-group">
              <label class="label">Event Date</label>
              <input type="date" id="test-date" class="input">
            </div>
          </div>
          
          <div style="text-align: center; margin-bottom: 1rem;">
            <button type="button" onclick="calculateTestPrice()" class="button">
              Calculate Price
            </button>
          </div>
          
          <div id="price-preview" class="pricing-preview">
            <div class="preview-amount">£0</div>
            <div class="preview-breakdown">Enter details above and click "Calculate Price"</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    let currentPricing = null;
    let hasUnsavedChanges = false;

    // Authentication check and load data
    async function init() {
      try {
        const authResponse = await fetch('/api/cms/auth/me');
        if (!authResponse.ok) {
          window.location.href = '/cms?page=login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        await loadPricing();
        setupFormListeners();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/cms?page=login';
      }
    }

    async function loadPricing() {
      try {
        const response = await fetch('/api/cms/pricing');
        const data = await response.json();
        
        if (data.success && data.data) {
          currentPricing = data.data;
          populateForm();
          updateStatus('saved', 'Settings loaded');
        } else {
          // Set default values if no pricing exists
          setDefaultValues();
          updateStatus('unsaved', 'Using default values');
        }
      } catch (error) {
        console.error('Error loading pricing:', error);
        setDefaultValues();
        updateStatus('error', 'Failed to load');
      } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('pricing-container').style.display = 'block';
      }
    }

    function populateForm() {
      if (!currentPricing) return;
      
      document.getElementById('soloPrice').value = currentPricing.soloPrice || 1200;
      document.getElementById('trioPrice').value = currentPricing.trioPrice || 1800;
      document.getElementById('saxPrice').value = currentPricing.saxPrice || 300;
      document.getElementById('travelRate').value = currentPricing.travelRate || 0.45;
      document.getElementById('congestionCharge').value = currentPricing.congestionCharge || 15;
      document.getElementById('weekendSurcharge').value = currentPricing.weekendSurcharge || 20;
      document.getElementById('holidaySurcharge').value = currentPricing.holidaySurcharge || 50;
      document.getElementById('freeRadius').value = currentPricing.freeRadius || 25;
      document.getElementById('maxDistance').value = currentPricing.maxDistance || 150;
    }

    function setDefaultValues() {
      document.getElementById('soloPrice').value = 1200;
      document.getElementById('trioPrice').value = 1800;
      document.getElementById('saxPrice').value = 300;
      document.getElementById('travelRate').value = 0.45;
      document.getElementById('congestionCharge').value = 15;
      document.getElementById('weekendSurcharge').value = 20;
      document.getElementById('holidaySurcharge').value = 50;
      document.getElementById('freeRadius').value = 25;
      document.getElementById('maxDistance').value = 150;
    }

    function setupFormListeners() {
      const inputs = document.querySelectorAll('#pricing-form input, #pricing-form select');
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          hasUnsavedChanges = true;
          updateStatus('unsaved', 'Unsaved changes');
        });
      });
    }

    function updateStatus(status, text) {
      const indicator = document.getElementById('save-status');
      const textEl = document.getElementById('save-text');
      
      indicator.className = 'status-indicator status-' + status;
      textEl.textContent = text;
    }

    function showMessage(type, message) {
      const successEl = document.getElementById('success-message');
      const errorEl = document.getElementById('error-message');
      
      successEl.style.display = 'none';
      errorEl.style.display = 'none';
      
      if (type === 'success') {
        successEl.textContent = message;
        successEl.style.display = 'block';
      } else {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
      }
      
      setTimeout(() => {
        successEl.style.display = 'none';
        errorEl.style.display = 'none';
      }, 5000);
    }

    document.getElementById('pricing-form').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const saveBtn = document.getElementById('save-btn');
      saveBtn.disabled = true;
      saveBtn.textContent = 'Saving...';
      updateStatus('unsaved', 'Saving...');

      const formData = {
        soloPrice: parseFloat(document.getElementById('soloPrice').value),
        trioPrice: parseFloat(document.getElementById('trioPrice').value),
        saxPrice: parseFloat(document.getElementById('saxPrice').value),
        travelRate: parseFloat(document.getElementById('travelRate').value),
        congestionCharge: parseFloat(document.getElementById('congestionCharge').value),
        weekendSurcharge: parseFloat(document.getElementById('weekendSurcharge').value),
        holidaySurcharge: parseFloat(document.getElementById('holidaySurcharge').value),
        freeRadius: parseFloat(document.getElementById('freeRadius').value),
        maxDistance: parseFloat(document.getElementById('maxDistance').value),
      };

      try {
        const response = await fetch('/api/cms/pricing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          currentPricing = data.data;
          hasUnsavedChanges = false;
          updateStatus('saved', 'Settings saved');
          showMessage('success', 'Pricing settings saved successfully!');
        } else {
          updateStatus('error', 'Save failed');
          showMessage('error', data.error || 'Failed to save pricing settings');
        }
      } catch (error) {
        console.error('Save failed:', error);
        updateStatus('error', 'Save failed');
        showMessage('error', 'Failed to save pricing settings');
      } finally {
        saveBtn.disabled = false;
        saveBtn.textContent = 'Save Pricing Settings';
      }
    });

    async function calculateTestPrice() {
      const type = document.getElementById('test-type').value;
      const includeSax = document.getElementById('test-sax').value === 'true';
      const postcode = document.getElementById('test-postcode').value.trim();
      const date = document.getElementById('test-date').value;
      
      const preview = document.getElementById('price-preview');
      preview.innerHTML = '<div class="preview-amount">Calculating...</div>';
      preview.classList.add('active');
      
      try {
        // Get current form values for calculation
        const pricing = {
          soloPrice: parseFloat(document.getElementById('soloPrice').value),
          trioPrice: parseFloat(document.getElementById('trioPrice').value),
          saxPrice: parseFloat(document.getElementById('saxPrice').value),
          travelRate: parseFloat(document.getElementById('travelRate').value),
          congestionCharge: parseFloat(document.getElementById('congestionCharge').value),
          weekendSurcharge: parseFloat(document.getElementById('weekendSurcharge').value),
          holidaySurcharge: parseFloat(document.getElementById('holidaySurcharge').value),
          freeRadius: parseFloat(document.getElementById('freeRadius').value),
          maxDistance: parseFloat(document.getElementById('maxDistance').value),
        };
        
        const params = new URLSearchParams({
          type,
          includeSax: includeSax.toString(),
          postcode: postcode || 'SW1A 1AA',
          date: date || new Date().toISOString().split('T')[0]
        });
        
        // Add pricing parameters
        Object.keys(pricing).forEach(key => {
          params.append(key, pricing[key].toString());
        });
        
        const response = await fetch(\`/api/quote/calculate?\${params}\`);
        const data = await response.json();
        
        if (data.success) {
          const quote = data.quote;
          preview.innerHTML = \`
            <div class="preview-amount">£\${quote.totalPrice}</div>
            <div class="preview-breakdown">
              Base: £\${quote.basePrice}<br>
              \${quote.saxophonePrice > 0 ? \`Sax: £\${quote.saxophonePrice}<br>\` : ''}
              \${quote.travelPrice > 0 ? \`Travel: £\${quote.travelPrice} (\${quote.distance}mi)<br>\` : ''}
              \${quote.congestionCharge > 0 ? \`Congestion: £\${quote.congestionCharge}<br>\` : ''}
              \${quote.surchargeAmount > 0 ? \`\${quote.surchargeType}: £\${quote.surchargeAmount}<br>\` : ''}
              Location: \${quote.location}
            </div>
          \`;
        } else {
          preview.innerHTML = \`
            <div class="preview-amount">Error</div>
            <div class="preview-breakdown">\${data.error || 'Failed to calculate price'}</div>
          \`;
        }
      } catch (error) {
        console.error('Price calculation failed:', error);
        preview.innerHTML = \`
          <div class="preview-amount">Error</div>
          <div class="preview-breakdown">Failed to calculate price</div>
        \`;
      }
    }

    async function logout() {
      try {
        await fetch('/api/cms/auth/logout', { method: 'POST' });
        window.location.href = '/cms?page=login';
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

function getSettingsPage() {
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
    .container { max-width: 80rem; margin: 0 auto; padding: 2rem 1rem; }
    .nav-links { display: flex; gap: 1rem; margin-bottom: 1rem; }
    .nav-link { color: #4f46e5; text-decoration: none; font-weight: 500; }
    .title { font-size: 1.875rem; font-weight: 700; color: #111827; margin-bottom: 2rem; }
    .card { background: white; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 1.5rem; }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="navbar-content">
      <h1 class="logo">JB Experience CMS</h1>
    </div>
  </nav>

  <div class="container">
    <div class="nav-links">
      <a href="/cms?page=dashboard" class="nav-link">← Dashboard</a>
      <a href="/cms?page=testimonials" class="nav-link">Testimonials</a>
      <a href="/cms?page=pricing" class="nav-link">Pricing</a>
    </div>

    <h1 class="title">Settings</h1>

    <div class="card">
      <p style="text-align: center; color: #6b7280;">Settings interface loaded successfully!</p>
      <p style="text-align: center; color: #059669; margin-top: 1rem;">✅ CMS is working properly</p>
    </div>
  </div>
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