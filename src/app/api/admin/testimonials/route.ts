import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
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
      <a href="/api/admin/dashboard" class="nav-link">← Dashboard</a>
      <a href="/api/admin/pricing" class="nav-link">Pricing</a>
      <a href="/api/admin/settings" class="nav-link">Settings</a>
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
          window.location.href = '/api/admin/login';
          return;
        }
        
        const authData = await authResponse.json();
        document.getElementById('username').textContent = authData.user.username;
        
        await loadTestimonials();
      } catch (error) {
        console.error('Init failed:', error);
        window.location.href = '/api/admin/login';
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